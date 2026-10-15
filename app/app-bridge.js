/* Armorer's Tome: app add-on
   Only the Android app loads this file (app/build-www.mjs adds it to the app's copy of index.html).
   The website never loads it. It does nothing unless it is running inside the Capacitor app.

   It relies on these parts of the website (if you change them, check the app still behaves):
   - Export all and Download start a download with an <a download> link to a blob: address.
   - The Escape key closes the topmost popup (every overlay() popup) and the zoomed page.
   - Popups have the class "overlay"; their close buttons have data-close or data-zoomclose.
   - The ids moreMenu, moreBtn, filters, filterBtn, tnav (class "open" while a book is open),
     closeBook and fileInput, and the
     Tome / Gallery / Codex buttons marked data-view="tome" etc.
*/
(function () {
  'use strict';
  var Cap = window.Capacitor;
  if (!Cap || typeof Cap.isNativePlatform !== 'function' || !Cap.isNativePlatform()) return;
  var Plugins = Cap.Plugins || {};
  document.documentElement.classList.add('in-app');

  /* ---------- 1. Loading the equipment lists from inside the app ----------
     The site checks for a list with a "HEAD" request (headers only). The app's built-in file server
     is only guaranteed to answer normal "GET" requests, so turn HEAD into GET (the files are on the
     phone, so this costs nothing). If a missing file comes back as a web page instead of a 404,
     report it as missing, so a game without a list isn't mistaken for one that has one. */
  var nativeFetch = window.fetch.bind(window);
  window.fetch = function (input, init) {
    var url = typeof input === 'string' ? input : (input && input.url) || '';
    var isList = /(^|\/)data\/[^?#]+\.(json|csv)([?#]|$)/i.test(url);
    if (init && String(init.method || '').toUpperCase() === 'HEAD') init = Object.assign({}, init, { method: 'GET' });
    var p = nativeFetch(input, init);
    if (!isList) return p;
    return p.then(function (r) {
      var type = (r.headers.get('content-type') || '').toLowerCase();
      if (r.ok && type.indexOf('text/html') !== -1) return new Response('', { status: 404, statusText: 'Not Found' });
      return r;
    });
  };

  /* ---------- 2. Export all / Download: open Android's share sheet ----------
     Android's web view ignores <a download>. Catch it, save the file in the app's cache folder,
     and offer it to the share sheet (Drive, email, Quick Share, Files and so on). */
  var nativeClick = HTMLAnchorElement.prototype.click;
  HTMLAnchorElement.prototype.click = function () {
    var href = this.href || '';
    if (this.hasAttribute('download') && href.indexOf('blob:') === 0) {
      shareFile(href, this.getAttribute('download') || 'armorers-tome.json');
      return;
    }
    return nativeClick.apply(this, arguments);
  };
  function shareFile(blobUrl, name) {
    var Filesystem = Plugins.Filesystem, Share = Plugins.Share;
    var safeName = String(name).replace(/[\\/:*?"<>|]+/g, '-');
    nativeFetch(blobUrl)   // read it straight away: the site frees the blob after 2 seconds
      .then(function (r) { return r.text(); })
      .then(function (text) {
        return Filesystem.writeFile({ path: safeName, data: text, directory: 'CACHE', encoding: 'utf8' });
      })
      .then(function (res) {
        return Share.share({ title: safeName, dialogTitle: 'Save or send ' + safeName, files: [res.uri] });
      })
      .catch(function (err) {
        var msg = String((err && (err.message || err.errorMessage)) || err || '');
        if (/cancel/i.test(msg)) return;   // the share sheet was closed without choosing anything
        alert('Sorry, the file could not be shared.\n\n' + msg);
      });
  }

  /* ---------- 3. Import: let the file picker show backup files ----------
     Android's picker often greys out .json files when the page asks for "JSON only", because phones
     label downloaded backups inconsistently. Show all files instead; the site still checks what it reads. */
  function relaxImportPicker() {
    var fi = document.getElementById('fileInput');
    if (fi && /json/i.test(fi.getAttribute('accept') || '')) fi.removeAttribute('accept');
  }

  /* ---------- 4. The Android back button ----------
     Close the topmost popup, then the menu or search panel, then switch back to the books from the
     Gallery or Codex, then close an open book. Only on the closed-book carousel does it leave the app. */
  function shown(el) { return !!el && !el.hidden && el.getClientRects().length > 0; }
  function pressEscape(target) {
    target.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', keyCode: 27, which: 27, bubbles: true, cancelable: true }));
  }
  function onBack() {
    // a popup (forms, settings, confirmations, the enlarged page, the picture viewer)
    var ovs = document.querySelectorAll('.overlay');
    if (ovs.length) {
      var top = ovs[ovs.length - 1];
      var active = document.activeElement;
      var listOpen = !!(active && active.getAttribute && active.getAttribute('aria-expanded') === 'true');
      pressEscape(active && top.contains(active) ? active : top);
      setTimeout(function () {   // if Escape didn't close it, press its close button instead
        if (!document.body.contains(top)) return;
        var stillTop = document.querySelectorAll('.overlay');
        if (stillTop[stillTop.length - 1] !== top) return;
        if (listOpen) return;   // Escape closed a field's suggestion list, not the popup
        var x = top.querySelector('[data-zoomclose], [data-close]');
        if (x) x.click();
      }, 250);
      return;
    }
    // the ⋮ menu (phones)
    var menu = document.getElementById('moreMenu');
    if (shown(menu)) { document.getElementById('moreBtn').click(); return; }
    // the search and filters panel (phones)
    var filters = document.getElementById('filters'), filterBtn = document.getElementById('filterBtn');
    if (filters && filters.classList.contains('open') && shown(filterBtn)) { filterBtn.click(); return; }
    // the Grid Gallery or Item Codex: back to the books
    var tomeBtn = document.querySelector('.seg [data-view="tome"]');
    if (tomeBtn && tomeBtn.getAttribute('aria-pressed') === 'false') { tomeBtn.click(); return; }
    // an open book: close it (the bar under the books gets the class "open" while a book is open)
    var tnav = document.getElementById('tnav'), closeBook = document.getElementById('closeBook');
    if (tnav && tnav.classList.contains('open') && closeBook) { closeBook.click(); return; }
    // the carousel of closed books: leave the app (it stays in the recent apps list, like other apps)
    var App = Plugins.App;
    Promise.resolve()
      .then(function () { return App.minimizeApp(); })
      .catch(function () { return App.exitApp(); });
  }

  function start() {
    relaxImportPicker();
    if (Plugins.App && Plugins.App.addListener) Plugins.App.addListener('backButton', onBack);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
