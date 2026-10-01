(() => {
'use strict';
/* =====================================================================
   Icons, slots and sample data
   ===================================================================== */
const ICONS = {"axe": "<path d=\"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9\" /> <path d=\"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z\" />", "book-open": "<path d=\"M12 7v14\" /> <path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\" />", "copy": "<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\" /> <path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\" />", "crown": "<path d=\"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z\" /> <path d=\"M5 21h14\" />", "download": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" /> <polyline points=\"7 10 12 15 17 10\" /> <line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\" />", "feather": "<path d=\"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z\" /> <path d=\"M16 8 2 22\" /> <path d=\"M17.5 15H9\" />", "footprints": "<path d=\"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z\" /> <path d=\"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z\" /> <path d=\"M16 17h4\" /> <path d=\"M4 13h4\" />", "hammer": "<path d=\"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9\" /> <path d=\"m18 15 4-4\" /> <path d=\"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5\" />", "hand": "<path d=\"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2\" /> <path d=\"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2\" /> <path d=\"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8\" /> <path d=\"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15\" />", "layout-grid": "<rect width=\"7\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\" /> <rect width=\"7\" height=\"7\" x=\"14\" y=\"3\" rx=\"1\" /> <rect width=\"7\" height=\"7\" x=\"14\" y=\"14\" rx=\"1\" /> <rect width=\"7\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\" />", "pencil": "<path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\" /> <path d=\"m15 5 4 4\" />", "plus": "<path d=\"M5 12h14\" /> <path d=\"M12 5v14\" />", "scroll": "<path d=\"M19 17V5a2 2 0 0 0-2-2H4\" /> <path d=\"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3\" />", "search": "<circle cx=\"11\" cy=\"11\" r=\"8\" /> <path d=\"m21 21-4.3-4.3\" />", "shield-half": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /> <path d=\"M12 22V2\" />", "shield": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" />", "shirt": "<path d=\"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z\" />", "sword": "<polyline points=\"14.5 17.5 3 6 3 3 6 3 17.5 14.5\" /> <line x1=\"13\" x2=\"19\" y1=\"19\" y2=\"13\" /> <line x1=\"16\" x2=\"20\" y1=\"16\" y2=\"20\" /> <line x1=\"19\" x2=\"21\" y1=\"21\" y2=\"19\" />", "trash-2": "<path d=\"M3 6h18\" /> <path d=\"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6\" /> <path d=\"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2\" /> <line x1=\"10\" x2=\"10\" y1=\"11\" y2=\"17\" /> <line x1=\"14\" x2=\"14\" y1=\"11\" y2=\"17\" />", "upload": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" /> <polyline points=\"17 8 12 3 7 8\" /> <line x1=\"12\" x2=\"12\" y1=\"3\" y2=\"15\" />", "x": "<path d=\"M18 6 6 18\" /> <path d=\"m6 6 12 12\" />", "image-plus": "<path d=\"M16 5h6\" /> <path d=\"M19 2v6\" /> <path d=\"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5\" /> <path d=\"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\" /> <circle cx=\"9\" cy=\"9\" r=\"2\" />", "zoom-in": "<circle cx=\"11\" cy=\"11\" r=\"8\" /> <line x1=\"21\" x2=\"16.65\" y1=\"21\" y2=\"16.65\" /> <line x1=\"11\" x2=\"11\" y1=\"8\" y2=\"14\" /> <line x1=\"8\" x2=\"14\" y1=\"11\" y2=\"11\" />", "zoom-out": "<circle cx=\"11\" cy=\"11\" r=\"8\" /> <line x1=\"21\" x2=\"16.65\" y1=\"21\" y2=\"16.65\" /> <line x1=\"8\" x2=\"14\" y1=\"11\" y2=\"11\" />", "image": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\" /> <circle cx=\"9\" cy=\"9\" r=\"2\" /> <path d=\"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\" />", "circle-help": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\" /> <path d=\"M12 17h.01\" />", "more-vertical": "<circle cx=\"12\" cy=\"12\" r=\"1\" /> <circle cx=\"12\" cy=\"5\" r=\"1\" /> <circle cx=\"12\" cy=\"19\" r=\"1\" />", "chevron-down": "<path d=\"m6 9 6 6 6-6\" />", "tags": "<path d=\"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19\" /> <path d=\"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z\" /> <circle cx=\"6.5\" cy=\"9.5\" r=\".5\" fill=\"currentColor\" />", "settings": "<path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\" /> <circle cx=\"12\" cy=\"12\" r=\"3\" />", "compass": "<path d=\"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z\" /> <circle cx=\"12\" cy=\"12\" r=\"10\" />", "sparkles": "<path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\" /> <path d=\"M20 3v4\" /> <path d=\"M22 5h-4\" /> <path d=\"M4 17v2\" /> <path d=\"M5 18H3\" />", "save": "<path d=\"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z\" /> <path d=\"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7\" /> <path d=\"M7 3v4a1 1 0 0 0 1 1h7\" />"};
const icon = n => `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ''}</svg>`;
document.querySelectorAll('[data-icon]').forEach(el => el.insertAdjacentHTML('afterbegin', icon(el.dataset.icon)));

const SLOTS = [
  { key: 'headgear',      icon: 'crown',       label: 'Head',       group: 'armour',  hint: 'Helm, cap, hood…' },
  { key: 'chest',         icon: 'shirt',       label: 'Chest',      group: 'armour',  hint: 'Chestplate, tunic…' },
  { key: 'cloak',         icon: 'feather',     label: 'Cloak',      group: 'armour',  hint: 'Cape, fur mantle, scarf…' },
  { key: 'gloves',        icon: 'hand',        label: 'Gloves',     group: 'armour',  hint: 'Gauntlets, wraps, bracers…' },
  { key: 'legs',          icon: 'shield',      label: 'Legs',       group: 'armour',  hint: 'Greaves, leggings, trousers…' },
  { key: 'boots',         icon: 'footprints',  label: 'Boots',      group: 'armour',  hint: 'Boots, sabatons, shoes…' },
  { key: 'weapon1',       icon: 'sword',       label: 'Main hand',  group: 'weapons', hint: 'Sword, spear, bow…' },
  { key: 'weapon2',       icon: 'axe',         label: 'Off hand',   group: 'weapons', hint: 'Dagger, shield, tome…' },
  { key: 'shieldWeapon3', icon: 'shield-half', label: 'Accessory',  group: 'weapons', hint: 'Amulet, quiver, relic…' },
];

// shown the first time the logbook opens in a browser with no saved outfits
const SAMPLE_OUTFITS = [
  { id: 'outfit-1', name: 'Default Outfit 1', game: 'Crimson Desert', tags: ['Kliff'],
    notes: 'Select edit outfit, then add armor pieces as needed. Every equipment slot is a text box for you to edit. Feel free to leave slots empty.',
    slots: { headgear: 'Default Helmet', chest: 'Default Armor', cloak: 'Default Cloak', gloves: 'Default Gloves', legs: 'Default Pants', boots: 'Default Boots', weapon1: 'Default Primary Weapon', weapon2: 'Default Secondary Weapon', shieldWeapon3: 'Default Shield' },
    createdAt: 1 },
  { id: 'outfit-2', name: 'Default Outfit 2', game: 'Crimson Desert', tags: ['Kliff', 'Plate Armor'],
    notes: 'Tags, such as the character who wears an outfit, let you filter your pages. Add several by pressing Enter after each one.',
    slots: { headgear: 'Default Helmet', chest: 'Default Armor', cloak: 'Default Cloak', gloves: 'Default Gloves', legs: 'Default Pants', boots: 'Default Boots', weapon1: 'Default Primary Weapon', weapon2: 'Default Secondary Weapon', shieldWeapon3: '' },
    createdAt: 2 },
  { id: 'outfit-3', name: 'Default Outfit 3', game: 'Crimson Desert', tags: ['Ranger', 'Light Armor'],
    notes: 'Add an image in edit outfit, then crop it to fit the frame beside the name. Empty slots, like this outfit\'s pants and shield, are left off the page.',
    slots: { headgear: 'Default Helmet', chest: 'Default Armor', cloak: 'Default Cloak', gloves: 'Default Gloves', legs: '', boots: 'Default Boots', weapon1: 'Default Primary Weapon', weapon2: 'Default Secondary Weapon', shieldWeapon3: '' },
    createdAt: 3 },
];

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const norm = s => String(s || '').trim().toLowerCase();
const rng = seed => { seed = (Math.abs(seed) % 2147483646) + 1; return () => (seed = (seed * 16807) % 2147483647) / 2147483647; };
const hash = s => { let h = 7; for (const c of String(s)) h = (h * 31 + c.charCodeAt(0)) | 0; return Math.abs(h); };
const newId = () => 'o_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

// tidy a list of tags: trimmed, no blanks, no repeats (ignoring case), at most 12
function normTags(list) {
  const out = [];
  (list || []).forEach(t => {
    t = String(t || '').trim().slice(0, 40);
    if (t && !out.some(x => x.toLowerCase() === t.toLowerCase()) && out.length < 12) out.push(t);
  });
  return out;
}
function normalizeOutfit(o) {
  const s = (o && o.slots) || {};
  const slots = {};
  SLOTS.forEach(({ key }) => { slots[key] = typeof s[key] === 'string' ? s[key] : ''; });
  return {
    id: /^[A-Za-z0-9_.~:@+-]{1,120}$/.test(String(o.id || '')) && o.id !== 'meta' ? String(o.id) : newId(),
    name: String(o.name || 'Untitled outfit').slice(0, 140),
    game: String(o.game || 'Crimson Desert').trim().slice(0, 80) || 'Crimson Desert',
    // older saves and exports have a single "tag"; they become a one-item list
    tags: normTags(Array.isArray(o.tags) ? o.tags : typeof o.tag === 'string' ? o.tag.split(',') : []),
    notes: String(o.notes || '').replace(/\r\n?/g, '\n').slice(0, 4000),
    slots,
    createdAt: Number(o.createdAt) || Date.now(),
    // the picture itself lives in IndexedDB; the outfit only remembers which version to show
    image: o.image && Number(o.image.v) ? { v: Number(o.image.v) } : null,
  };
}

/* =====================================================================
   Outfit images
   Each image is cropped to 3:4 when it is added and saved twice in the
   browser's IndexedDB: a 450 x 600 copy for the enlarged view and a
   180 x 240 thumbnail for the page. Nothing loads until it is on screen.
   ===================================================================== */
const IMG_FULL_W = 450, IMG_THUMB_W = 180;
const IMG_MAX_UPLOAD = 5 * 1024 * 1024;   // largest photo you can pick (5 MB); it's shrunk well below this when saved
const images = {
  dbp: null,
  open() {
    if (!this.dbp) this.dbp = new Promise((resolve, reject) => {
      if (!window.indexedDB) return reject(new Error('IndexedDB unavailable'));
      const req = indexedDB.open('armorer_images_v1', 1);
      req.onupgradeneeded = () => req.result.createObjectStore('images');
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    return this.dbp;
  },
  async run(mode, fn) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('images', mode);
      const req = fn(tx.objectStore('images'));
      tx.oncomplete = () => resolve(req ? req.result : undefined);
      tx.onerror = tx.onabort = () => reject(tx.error);
    });
  },
  // Pictures are stored as raw bytes rather than Blobs: Safari refuses to store Blobs in some modes, such as private browsing.
  async get(id) {
    const r = await this.run('readonly', st => st.get(id));
    if (!r) return r;
    const blob = v => v instanceof Blob ? v : v && v.data ? new Blob([v.data], { type: v.type }) : null;
    return { full: blob(r.full), thumb: blob(r.thumb) };
  },
  async put(id, rec) {
    const raw = async b => ({ type: b.type, data: await b.arrayBuffer() });
    const stored = { full: await raw(rec.full), thumb: await raw(rec.thumb) };
    return this.run('readwrite', st => st.put(stored, id));
  },
  del(id) { return this.run('readwrite', st => st.delete(id)); },
  clear() { return this.run('readwrite', st => st.clear()); },
};
let imagesAvailable = true;
images.open().catch(() => { imagesAvailable = false; });
let persistAsked = false;
function keepStorage() {   // ask the browser not to clear stored images when space runs low
  if (persistAsked) return;
  persistAsked = true;
  try { navigator.storage && navigator.storage.persist && navigator.storage.persist().catch(() => {}); } catch (e) {}
}

const thumbURLs = new Map();   // "id:version" -> Promise of an object URL
function thumbURL(id, v) {
  const k = id + ':' + v;
  if (!thumbURLs.has(k)) thumbURLs.set(k, images.get(id).then(r => r && r.thumb ? URL.createObjectURL(r.thumb) : null, () => null));
  return thumbURLs.get(k);
}
function forgetImage(id) {
  for (const [k, p] of thumbURLs) if (k.startsWith(id + ':')) { p.then(u => u && URL.revokeObjectURL(u)); thumbURLs.delete(k); }
}
// fill in any portraits inside root that have not been loaded yet
function hydratePortraits(root) {
  if (!root) return;
  root.querySelectorAll('img[data-pid]:not([data-loading])').forEach(img => {
    img.dataset.loading = '1';
    thumbURL(img.dataset.pid, img.dataset.v).then(u => {
      if (!u) { const f = img.closest('.portrait'); if (f) f.classList.add('missing'); return; }
      img.onload = () => img.classList.add('ready');
      img.src = u;
    });
  });
}
// Titles that don't fit (a word too long for the space beside the portrait, or more than three lines)
// step down in size; if even the smallest size doesn't fit, long words are hyphenated onto the next line.
const TITLE_STEPS = [1, 0.92, 0.85, 0.78, 0.72];
function fitTitles(root) {
  if (!root) return;
  const titles = [...root.querySelectorAll('.pg-title')];
  titles.forEach(t => {
    t.style.fontSize = ''; t.classList.remove('hyphenate');
    if (t.dataset.full) { t.textContent = t.dataset.full; delete t.dataset.full; }
  });
  const fits = t => t.scrollWidth <= t.clientWidth + 1 && t.scrollHeight <= t.clientHeight + 1;
  const tooBig = titles.filter(t => t.clientWidth && !fits(t));   // one layout pass for all titles
  tooBig.forEach(t => {
    for (const k of TITLE_STEPS.slice(1)) {
      t.style.fontSize = (1.62 * k).toFixed(3) + 'em';
      if (fits(t)) return;
    }
    // Allow a break (shown with a hyphen) anywhere inside very long words. Browsers that know
    // English hyphenation still prefer natural break points; the rest can at least split cleanly.
    t.dataset.full = t.textContent;
    t.textContent = t.textContent.replace(/\S{10,}/g, w => w.slice(0, 2) + w.slice(2, -2).split('').join('\u00AD') + '\u00AD' + w.slice(-2));
    t.classList.add('hyphenate');
  });
}
function markLongNotes(root) {
  if (!root) return;
  const notes = [...root.querySelectorAll('.card .notes')];
  const cut = notes.map(n => n.scrollHeight > n.clientHeight + 1);
  notes.forEach((n, i) => { const m = n.nextElementSibling; if (m && m.classList.contains('see-more')) m.hidden = !cut[i]; });
}
const portraitHTML = o => !o.image ? '' :
  `<button type="button" class="portrait" data-act="view" data-id="${esc(o.id)}" title="Enlarge image" aria-label="Enlarge the image of ${esc(o.name)}"><img alt="" data-pid="${esc(o.id)}" data-v="${o.image.v}" decoding="async"></button>`;

function loadImage(blob) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => resolve({ img, url });
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('unreadable image')); };
    img.src = url;
  });
}
const canvasBlob = c => new Promise(resolve => c.toBlob(b => {
  if (b && b.type === 'image/webp') resolve(b);
  else c.toBlob(j => resolve(j), 'image/jpeg', 0.84);   // browsers that cannot write WebP fall back to JPEG
}, 'image/webp', 0.8));
// scale a region of src down to w x h, halving in steps so large photos stay crisp
function drawRegion(src, sx, sy, sw, sh, w, h) {
  let cur = src, cx = sx, cy = sy, cw = sw, ch = sh;
  while (cw / w > 2.2) {
    const t = document.createElement('canvas');
    t.width = Math.round(cw / 2); t.height = Math.round(ch / 2);
    const g = t.getContext('2d'); g.imageSmoothingQuality = 'high';
    g.drawImage(cur, cx, cy, cw, ch, 0, 0, t.width, t.height);
    cur = t; cx = 0; cy = 0; cw = t.width; ch = t.height;
  }
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d'); g.imageSmoothingQuality = 'high';
  g.drawImage(cur, cx, cy, cw, ch, 0, 0, w, h);
  return c;
}
async function makeImageRecord(src, r) {
  const fw = Math.max(30, Math.min(IMG_FULL_W, Math.round(r.sw))), tw = Math.min(IMG_THUMB_W, fw);
  const [full, thumb] = await Promise.all([
    canvasBlob(drawRegion(src, r.sx, r.sy, r.sw, r.sh, fw, Math.round(fw * 4 / 3))),
    canvasBlob(drawRegion(src, r.sx, r.sy, r.sw, r.sh, tw, Math.round(tw * 4 / 3))),
  ]);
  if (!full || !thumb) throw new Error('encode failed');
  return { full, thumb };
}
// the largest centred 3:4 area of a w x h picture
function centreCrop(w, h) {
  const sw = Math.min(w, h * 0.75), sh = sw * 4 / 3;
  return { sx: (w - sw) / 2, sy: (h - sh) / 2, sw, sh };
}
const blobToDataURL = blob => new Promise((resolve, reject) => {
  const fr = new FileReader();
  fr.onload = () => resolve(fr.result);
  fr.onerror = () => reject(fr.error);
  fr.readAsDataURL(blob);
});
async function recordFromDataURL(dataURL) {
  const blob = await (await fetch(dataURL)).blob();
  const { img, url } = await loadImage(blob);
  try {
    const w = img.naturalWidth, h = img.naturalHeight;
    const r = centreCrop(w, h);
    const rec = await makeImageRecord(img, r);
    // an image this app exported is already the right size, so keep it as it is
    if (w <= IMG_FULL_W && h <= IMG_FULL_W * 4 / 3 + 1 && Math.abs(w / h - 0.75) < 0.01) rec.full = blob;
    return rec;
  } finally { URL.revokeObjectURL(url); }
}
// an outfit as it goes into a JSON file, with its image written out as a data URL
async function outfitForExport(o) {
  const out = { ...o, slots: { ...o.slots } };
  delete out.image;
  if (o.image) {
    try { const rec = await images.get(o.id); if (rec && rec.full) out.image = await blobToDataURL(rec.full); } catch (e) {}
  }
  return out;
}

/* =====================================================================
   Book themes: two hand-made covers, plus a palette for custom games
   ===================================================================== */
const hx = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
const toHex = a => '#' + a.map(v => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');
const mix = (a, b, t) => { const A = hx(a), B = hx(b); return toHex(A.map((v, i) => v + (B[i] - v) * t)); };
const star = (cx, cy, r) => { const i = r * 0.28; return `M${cx} ${cy - r}L${cx + i} ${cy - i}L${cx + r} ${cy}L${cx + i} ${cy + i}L${cx} ${cy + r}L${cx - i} ${cy + i}L${cx - r} ${cy}L${cx - i} ${cy - i}Z`; };
// Cover titles use an embedded copy of Cormorant Garamond Bold (latin subset, SIL Open Font License),
// because a cover is painted as an image and images cannot reach the page's web fonts.
const COVER_FONT = "CoverSerif, 'Cormorant Garamond', Georgia, serif";
const COVER_FONT_FACE = `<style>@font-face{font-family:CoverSerif;font-weight:700;src:url(data:font/woff2;base64,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) format('woff2')}</style>`;
const titleText = (y, size, text) => `<text x="376" y="${y}" text-anchor="middle" font-family="${COVER_FONT}" font-weight="700" font-size="${size}" letter-spacing="2">${esc(text)}</text>`;

// fit any game title into at most three gilt lines on the cover
function autoTitle(name) {
  const words = name.trim().split(/\s+/);
  let lines = [name.trim()];
  if (name.length > 11 && words.length > 1) {
    let best = null;
    for (let i = 1; i < words.length; i++) {
      const a = words.slice(0, i).join(' '), b = words.slice(i).join(' ');
      const score = Math.max(a.length, b.length);
      if (!best || score < best.score) best = { score, lines: [a, b] };
    }
    lines = best.lines;
    if (best.score > 16 && words.length > 2) {
      const n = words.length, t1 = Math.round(n / 3), t2 = Math.round(2 * n / 3);
      lines = [words.slice(0, t1).join(' '), words.slice(t1, t2).join(' '), words.slice(t2).join(' ')].filter(Boolean);
    }
  }
  const longest = Math.max(...lines.map(l => l.length));
  const n = lines.length;
  let size = Math.max(40, Math.min(112, 500 / (longest * 0.5)));
  if (n === 1) return titleText(Math.round(300 + size * 0.3), Math.round(size), lines[0]);
  size = Math.min(size, 228 / (1 + (n - 1) * 0.98));   // keep the last line clear of the divider at y=410
  const lh = size * 0.98, top = 150 + size;
  return lines.map((l, i) => titleText(Math.round(top + i * lh), Math.round(size), l)).join('');
}

// Custom default book emblems 
const CRIMSON_EMBLEM = `<g transform="translate(244.7 530.9) scale(0.865)"><g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"><path d="M1387.19,5797.1c-175.22-16.48-315.64-56.17-429.81-121.49c-50.06-28.69-116-75.71-111.73-79.98 c1.22-1.22,18.93,4.27,39.68,12.82c86.69,35.41,174,8.55,217.96-66.55c19.54-32.97,45.18-123.33,49.45-175.22 c3.66-34.19,6.11-42.13,14.65-42.13c15.87,0,23.81,12.21,91.58,134.32c34.8,62.27,73.26,128.21,85.47,146.53 c40.91,60.44,111.73,116.61,207.58,164.84c33.58,17.09,37.85,20.76,27.47,25.03C1567.91,5799.54,1431.15,5800.76,1387.19,5797.1z" /><path d="M1729.09,5786.11c0-1.83,16.48-18.93,37.24-38.46c37.24-35.41,61.66-73.87,68.99-108.67 c9.77-46.4-28.08-147.75-65.33-172.17c-27.47-18.93-73.26-26.86-108.67-19.54c-53.12,11.6-101.96,69.6-95.24,113.56 c5.49,30.53,32.36,73.87,54.34,84.86c22.59,11.6,64.72,13.43,88.53,3.05c37.24-15.26,51.89-70.82,23.2-89.75 c-21.98-14.04-35.41-7.33-30.53,15.26c5.49,24.42-4.88,41.52-28.08,46.4c-39.07,8.55-72.65-22.59-72.65-67.16 c0-29.31,15.26-54.34,40.91-66.55c26.25-12.21,82.42-12.82,105.62-0.61c32.97,17.09,65.33,105.62,55.56,150.19 c-7.33,32.36-33.58,75.71-57.39,93.41c-25.03,19.54-89.75,36.63-116,31.14c-32.36-6.72-115.39-48.84-151.41-77.54 c-67.77-52.5-169.12-184.99-208.19-270.46c-19.54-43.96-19.54-117.83,0-155.07c15.87-29.31,10.38-28.69,89.75-10.38 c23.81,5.49,85.47,11.6,137.37,13.43c138.59,5.49,197.2-5.49,266.19-51.89c27.47-18.93,33.58-18.32,17.71,3.05 c-11.6,15.26-11.6,20.76,0,20.76c12.21,0,11.6,9.77-1.83,23.2c-20.76,20.76-169.73,59.83-309.54,80.59 c-55.56,8.55-77.54,20.76-94.63,54.95c-15.87,31.14-15.26,44.57,1.83,64.72c18.93,21.98,37.85,17.09,28.69-6.72 c-7.33-18.32,0-36.02,18.32-45.79c27.47-14.65,117.83-31.14,173.39-31.14c68.99,0,88.53,4.88,163.62,40.29l57.39,26.86l20.76,42.74 c36.02,75.71,53.73,60.44,27.47-23.81c-9.16-29.92-17.71-70.82-19.54-91.58l-3.66-36.63l28.08-29.92 c32.36-34.19,40.29-62.27,29.92-102.57c-4.27-14.65-7.33-29.31-7.33-32.36c0-5.49,35.41-30.53,43.35-30.53 c1.83,0,3.05,12.82,3.05,29.31c-0.61,38.46,21.37,86.69,39.07,86.69c16.48,0,65.94-49.45,88.53-87.92 c18.93-32.36,34.19-88.53,29.31-107.45c-3.66-13.43-25.03-16.48-45.18-6.1c-19.54,10.99-12.82-1.83,14.65-29.31l26.86-26.25 l18.93,21.98c28.69,32.36,26.86,60.44-8.55,130.65c-26.86,53.73-63.49,98.29-128.82,155.07c-34.8,30.53-42.13,85.47-11.6,93.41 c17.09,4.27,40.29-6.72,40.29-18.32c0-4.88-5.49-9.77-12.21-11.6c-25.03-6.72-14.04-29.31,39.07-79.98 c56.17-54.34,81.2-88.53,106.84-145.92c29.31-65.33,28.69-96.46-2.44-138.59c-21.98-29.92-19.54-40.91,11.6-56.17 c22.59-10.99,28.69-11.6,36.63-5.49c15.26,12.82,23.81,54.95,19.54,98.29c-4.27,45.79,7.94,101.35,36.02,163.62l17.09,38.46 l-17.09,74.48c-9.16,40.91-24.42,88.53-33.58,105.01c-12.21,22.59-15.87,36.63-13.43,52.51c1.22,12.21-1.83,43.35-7.33,69.6 c-5.49,25.64-9.77,56.17-9.77,67.77s-2.44,20.76-5.49,20.76c-7.33,0-56.78-68.38-68.38-94.02c-7.33-15.26-6.72-18.32,3.66-25.64 c18.93-14.04,31.14-10.38,37.24,10.38c8.55,28.69,17.71,24.42,19.54-9.16c3.05-43.35-18.93-51.89-70.21-28.08 c-30.53,13.43-33.58,26.86-14.65,76.32c7.33,20.15,9.77,34.8,6.72,43.96c-9.77,24.42-113.56,101.35-188.65,138.59 C1838.37,5770.85,1729.09,5799.54,1729.09,5786.11z M2161.34,5416.13c28.08-17.09,37.85-44.57,37.24-101.96 c-1.22-76.32-6.72-114.17-18.93-116.61c-11.6-2.44-71.43,72.04-94.63,117.83c-22.59,44.57-21.98,73.26,3.05,95.24 C2111.27,5431.39,2133.25,5433.23,2161.34,5416.13z M2165.61,4976.55c0-7.94-3.66-15.26-7.33-16.48 c-9.77-3.66-16.48,12.82-11.6,26.25C2152.18,5000.36,2165.61,4993.04,2165.61,4976.55z"/><path d="M2102.73,5385.6c-17.09-15.87-17.09-33.58-0.61-60.44c15.87-25.64,55.56-73.87,61.05-73.87c4.88,0,17.71,68.38,17.71,93.41 c0,8.55-7.33,23.81-15.87,34.19C2146.07,5401.48,2122.26,5403.92,2102.73,5385.6z M2155.23,5366.07 c11.6-11.6,9.16-40.29-4.88-47.62c-24.42-12.82-54.34,24.42-36.63,45.79C2122.87,5375.23,2144.85,5376.45,2155.23,5366.07z"/><path d="M2125.93,5345.92c0-4.88,4.27-9.16,9.16-9.16s9.16,4.27,9.16,9.16c0,4.88-4.27,9.16-9.16,9.16 S2125.93,5350.8,2125.93,5345.92z"/><path d="M912.81,5587.08c-26.86-6.1-68.99-28.69-89.14-47.62c-33.58-32.36-48.23-140.42-25.03-188.65 c14.65-29.31,56.78-53.12,84.86-47.01c58.61,12.21,100.13,63.49,92.19,114.17c-4.88,31.14-18.93,47.01-40.29,47.01 c-27.47,0-39.68-14.04-39.68-46.4c0-32.97-8.55-39.68-26.86-21.37c-15.26,15.26-17.09,53.12-3.05,72.65 c13.43,18.93,40.29,31.75,68.99,31.75c33.58,0,63.49-29.31,73.87-72.04c14.04-59.83-13.43-107.45-80.59-141.64 c-41.52-20.76-67.77-22.59-100.74-9.16c-30.53,12.82-43.35,25.03-61.66,61.05c-20.15,39.68-21.37,98.29-1.83,155.07 c7.33,21.37,12.21,40.29,10.38,42.13c-4.88,4.88-80.59-59.83-136.15-116c-87.31-88.53-208.19-236.27-249.09-304.65 c-87.31-145.92-146.53-282.06-141.64-326.63c6.11-59.22,48.84-102.57,86.08-87.92c14.04,4.88,15.87,8.55,11.6,20.15 c-2.44,7.33-4.88,27.47-4.88,44.57c0,40.91,21.37,72.04,82.42,120.27c62.27,50.06,86.69,64.1,143.47,86.69 c78.15,31.14,81.2,33.58,94.63,97.07c4.27,20.76,4.88,35.41,0,48.84c-7.33,23.2-45.18,61.66-68.38,70.21 c-18.32,6.72-22.59,23.2-7.94,28.69c4.88,1.83,18.93-2.44,31.14-9.16c12.21-7.33,23.81-11.6,25.64-9.77 c4.88,4.88-23.2,62.27-36.63,74.48c-14.04,12.82-14.04,26.25,0,26.25s32.97-20.15,48.84-51.9 c16.48-32.97,41.52-115.39,47.01-152.63c12.82-91.58,42.74-167.28,75.71-192.93c17.09-13.43,34.8-12.21,79.98,7.94 c35.41,15.26,55.56,34.19,91.58,87.3c36.63,54.34,74.48,89.14,123.33,112.95c71.43,35.41,89.75,45.79,90.36,51.28 c0,2.44-7.94,3.66-18.32,2.44c-20.15-3.05-22.59,0.61-10.38,12.82c9.77,10.99-2.44,7.33-64.72-18.32 c-39.68-15.87-53.12-25.64-76.32-53.12c-18.93-21.37-48.23-44.57-85.47-66.55c-48.84-29.31-59.22-33.58-78.76-30.53 c-33.58,5.49-68.99,45.18-68.99,77.54c0,18.32,9.16,15.26,28.08-9.16c25.64-34.19,61.05-26.86,150.8,31.14 c58.61,37.24,73.87,52.51,108.67,105.01c49.45,75.09,70.21,146.53,59.83,208.19c-6.72,40.9-40.29,113.56-63.49,136.76 C1014.16,5585.86,958.6,5598.07,912.81,5587.08z"/><path d="M2327.4,5498.55c0-18.93,20.76-49.45,64.72-96.46c122.1-130.04,208.19-313.81,242.99-520.17 c20.76-121.49,29.92-396.23,15.87-491.47c-17.09-122.72-71.43-221.62-153.85-282.06c-74.48-54.95-94.02-84.86-100.13-153.24 c-6.72-69.6,31.14-177.66,72.04-206.36c68.38-48.84,205.75,45.18,273.52,186.82c87.31,182.55,126.38,401.73,111.12,628.84 c-16.48,247.87-60.44,392.57-169.12,555.58c-35.41,53.73-47.01,61.05-24.42,15.26c10.99-21.37,61.66-189.26,75.71-250.32 c17.09-72.65,25.03-167.89,25.03-292.44c0-225.89-28.69-402.34-89.75-556.19c-37.24-94.63-66.55-135.54-112.95-159.35 c-40.91-20.76-82.42-11.6-76.93,17.09c1.22,7.94,9.77,11.6,30.53,14.04c36.02,4.27,67.77,28.69,95.24,73.87 c86.08,142.25,135.54,434.08,117.83,696c-7.94,120.88-18.32,184.99-50.06,310.76c-20.15,80.59-30.53,108.06-69.6,186.21 c-66.55,133.71-114.78,200.86-194.15,272.9C2346.94,5505.88,2327.4,5518.09,2327.4,5498.55z"/><path d="M2343.27,5355.69c-4.88-7.33,7.33-77.54,20.76-116c23.2-70.21,36.02-90.36,91.58-150.8 c61.05-65.33,83.64-95.85,114.17-152.02c23.2-42.74,25.03-33.58,7.94,35.41c-29.31,117.22-67.16,202.08-133.71,300.99 C2401.27,5337.37,2354.87,5375.23,2343.27,5355.69z"/><path d="M1505.02,5082.17c-4.27-1.22-7.94-12.82-7.94-25.64c0-14.65-6.11-32.97-17.71-50.67c-15.87-24.42-22.59-29.31-53.73-38.46 c-28.08-7.94-70.82-33.58-105.62-62.27c-1.22-1.22,1.22-4.88,6.11-7.94c12.82-8.55,57.39-7.33,76.32,1.22 c48.23,21.98,12.82-68.38-40.29-101.96c-10.38-6.72-23.81-23.81-30.53-37.85c-15.26-36.02-24.42-33.58-22.59,6.1l1.83,31.75 l-20.15-1.22c-10.99,0-21.37-1.83-23.2-3.66c-1.22-1.22-7.94-22.59-14.65-46.4c-7.33-24.42-20.15-59.83-29.92-78.76 c-12.21-24.42-15.87-38.46-12.21-47.01c6.72-17.09,6.72-27.47,0-27.47c-7.94,0-73.87,95.24-73.87,106.84 c0,7.33,7.94,9.16,39.07,9.16c29.92,0,39.68,2.44,42.74,9.77c6.72,17.71,3.66,40.91-6.72,48.23 c-14.04,10.38-6.11,25.03,21.98,39.68c18.93,9.16,36.02,12.21,73.26,12.21c47.01,0,48.84,0.61,64.72,19.54l17.09,20.15l-17.71,7.33 c-9.77,4.27-40.91,7.33-69.6,7.33c-63.49,0.61-100.74-14.65-143.47-57.39c-15.87-15.26-35.41-30.53-43.35-34.19 c-23.2-8.55-62.27-6.72-78.76,4.27c-10.99,7.33-17.09,7.94-26.86,2.44c-19.54-10.38-16.48-33.58,4.88-42.74 c13.43-5.5,21.37-15.87,31.75-40.29c12.21-31.14,12.82-37.24,6.11-75.71c-9.77-60.44-7.33-116.61,4.88-116 c9.16,0.61,43.35,54.95,43.35,69.6c0,20.76,15.26,26.86,31.14,12.21c19.54-17.71,34.8-51.89,41.52-94.63 c3.66-20.76,9.16-40.91,12.82-44.57c8.55-8.55,7.94-21.98-1.22-21.98c-3.66,0-13.43,6.11-21.37,12.82 c-15.87,15.26-28.69,9.77-34.8-16.48c-3.66-13.43,1.83-22.59,37.85-59.83c23.2-24.42,47.62-53.73,53.73-64.1 c7.33-12.21,18.32-21.37,28.69-23.2c17.09-3.66,26.86-12.21,20.76-18.32c-4.27-3.66-68.99-10.38-105.01-10.99 c-31.14,0-34.8,13.43-12.21,43.35c11.6,15.26,15.26,25.64,12.82,36.02c-4.88,20.15-24.42,29.92-40.29,21.37 c-18.32-9.77-24.42-2.44-24.42,29.92c0,33.58,12.21,72.65,30.53,98.29c14.65,20.15,15.87,42.13,3.05,58.61 c-9.16,10.99-9.77,10.99-29.31-10.99c-29.31-32.36-52.51-78.15-57.39-111.73c-1.83-15.87,0-51.28,4.27-78.76 c7.33-47.01,6.72-51.89-4.88-78.15c-7.94-18.93-18.93-31.75-31.75-38.46c-13.43-7.33-18.32-13.43-17.09-22.59 c2.44-18.93,20.15-28.08,35.41-18.32c29.92,18.32,83.64,4.88,127.6-32.36c36.63-31.14,73.26-51.89,92.19-51.89 c14.65,0,14.65-1.22,2.44,28.08c-5.49,12.82-20.15,32.36-32.36,43.35c-18.32,15.87-20.76,20.76-14.04,27.47 c12.21,12.21,79.37,8.55,114.17-6.72c15.87-6.72,39.68-12.82,52.51-12.82c29.31,0,30.53-9.16,2.44-20.76 c-25.64-10.99-26.25-15.26-6.11-36.63c10.99-11.6,18.93-15.87,26.25-12.82c28.69,11.6,103.79,27.47,128.82,27.47 c22.59,0,29.92,3.05,40.29,16.48c7.33,9.16,16.48,14.04,20.15,11.6c4.88-3.05-0.61-20.15-17.71-54.34 c-34.19-70.21-32.97-68.38-46.4-70.21c-9.77-1.22-14.65,4.88-25.03,29.31c-14.04,34.19-23.2,40.29-48.23,32.36 c-12.21-4.27-17.71-10.38-18.93-21.98c-1.22-9.77-6.11-16.48-10.99-16.48c-25.03,0-71.43,40.29-90.36,77.54 c-10.38,20.76-26.86,34.19-51.89,41.52c-14.04,4.27-14.04,3.66-9.77-18.93c6.72-36.63,39.07-92.8,66.55-115.39 c31.14-25.03,52.51-36.02,95.85-48.23c40.29-11.6,72.65-45.79,72.65-76.32c0-26.86,6.11-37.24,21.98-37.24 c15.87,0,28.69,18.32,23.2,32.97c-4.27,10.99,14.65,43.35,35.41,62.27c7.94,6.72,31.75,18.93,53.73,26.86 c39.68,14.04,91.58,45.18,91.58,54.34c0,13.43-53.12,16.48-83.64,5.49c-14.65-5.49-21.98-5.49-26.86-0.61 c-10.38,10.38,20.76,64.11,60.44,103.79c20.15,19.54,37.85,41.52,40.29,49.45c7.94,23.81,17.09,7.94,12.82-20.76l-3.66-26.86h20.15 c27.47,0,32.36,4.88,40.91,39.68c4.27,17.09,17.09,53.12,28.69,80.59c17.09,39.68,20.15,52.51,15.26,62.27 c-9.16,16.48-8.55,25.03,1.22,25.03c12.21,0,79.37-102.57,74.48-114.17c-2.44-7.94-10.38-9.16-39.68-6.1 c-40.29,3.66-46.4,0-52.51-31.75c-3.05-15.26-1.22-21.37,7.33-28.08c28.08-20.76-28.08-51.28-95.85-51.28 c-37.24-0.61-40.91-1.83-59.83-21.37l-20.15-20.76l23.2-6.72c34.19-9.77,100.74-7.94,131.26,2.44 c22.59,7.94,50.67,26.86,105.62,72.04c18.93,15.26,89.75,21.37,100.74,7.94c10.99-12.82,20.76-12.21,33.58,1.83 c12.82,14.04,7.33,28.69-14.04,40.29c-8.55,4.27-22.59,20.76-30.53,36.63c-14.04,26.86-14.65,30.53-7.94,63.49 c10.99,52.5,8.55,129.43-4.27,128.82c-9.77-0.61-37.85-47.62-41.52-68.38c-3.05-20.15-5.49-23.81-16.48-21.98 c-18.32,2.44-45.18,56.17-51.28,101.96c-3.66,25.03-9.77,42.13-18.93,51.9c-20.15,21.37-4.88,25.64,20.76,6.1 c12.21-9.16,22.59-15.26,23.81-14.04c7.33,8.55,15.87,31.14,15.87,41.52c0,6.11-10.38,20.15-22.59,29.92 c-12.82,9.77-34.19,34.19-47.62,53.12c-34.8,50.06-43.35,58-63.49,58c-16.48,0-29.92,9.16-23.2,15.87 c1.22,1.83,34.8,3.66,73.87,5.49c83.64,2.44,88.53-0.61,59.22-40.91c-10.38-14.04-18.93-28.08-18.93-31.75 c0-3.05,7.33-13.43,15.87-23.2c13.43-13.43,18.32-15.26,28.69-10.38c17.09,9.77,25.64-2.44,25.03-36.63 c0-21.98-5.49-37.85-22.59-65.94c-12.21-20.15-22.59-41.52-22.59-46.4c0-12.21,12.82-40.91,18.32-40.91 c9.77,0,43.35,42.74,57.39,72.65c20.76,45.18,25.03,87.92,15.26,147.14c-7.33,46.4-7.33,50.67,5.49,76.32 c7.33,15.26,20.15,29.92,29.92,34.8c12.82,6.11,17.09,12.21,17.09,26.25c0,14.65-3.05,18.93-14.65,20.15 c-7.94,1.22-20.76-1.22-28.69-4.88c-7.94-4.88-27.47-6.72-47.62-4.88c-29.92,2.44-37.24,6.1-64.72,31.75 c-39.68,37.24-103.79,66.55-103.79,47.01c0-17.09,16.48-48.84,32.97-62.88c23.2-20.15,17.09-29.31-23.2-33.58 c-20.15-2.44-40.29,0.61-68.38,9.77c-24.42,8.55-50.06,12.82-66.55,11.6c-35.41-2.44-37.24,7.33-4.27,18.32 c32.97,10.99,37.85,21.98,18.32,41.52l-14.65,15.26l-45.79-12.21c-24.42-7.33-61.05-12.82-80.59-12.82 c-32.36,0-37.85-1.83-53.73-18.93c-23.2-25.03-34.8-17.71-16.48,11.6c7.94,12.21,22.59,39.07,32.36,59.22 c10.38,20.15,22.59,36.63,27.47,36.63c4.88,0,16.48-13.43,25.03-30.53c9.16-18.93,20.15-31.14,27.47-32.36 c17.09-1.83,42.13,12.82,40.29,24.42c-0.61,4.88,2.44,12.21,7.33,16.48c14.65,12.21,64.72-26.86,84.25-66.55 c9.16-18.32,21.37-36.63,26.86-40.91c10.99-7.94,40.29-10.99,47.01-4.27c6.11,6.1-23.2,78.76-39.07,98.29 c-25.03,31.14-64.72,57.39-103.18,69.6c-50.67,15.87-58.61,20.76-79.37,49.45c-11.6,15.87-17.71,31.14-17.09,43.96 C1542.26,5083.39,1530.66,5092.55,1505.02,5082.17z M1623.46,4761.65c60.44-22.59,134.32-87.92,160.57-142.25 c30.53-63.49,39.07-173.39,18.32-233.22c-24.42-69.6-85.47-141.03-144.08-170.34c-17.09-8.55-53.73-19.54-80.59-25.64 c-47.01-9.16-53.12-9.16-99.52,0c-152.63,31.75-241.16,131.26-253.37,284.5c-4.27,59.22,8.55,103.79,49.45,169.12 c41.52,67.16,119.05,119.05,195.37,131.26C1512.96,4781.79,1586.22,4775.69,1623.46,4761.65z"/><path d="M2400.05,5061.42c-4.27-9.16-6.11-40.29-4.27-93.41c1.83-73.87,3.66-83.03,20.76-119.66 c10.38-21.98,38.46-69.6,62.88-106.84c53.73-82.42,103.79-183.16,126.38-256.42l17.71-54.95l4.88,39.68 c4.88,41.52-3.66,195.37-14.65,259.47c-9.16,54.34-21.98,91.58-53.12,152.63c-42.74,82.42-126.99,192.32-148.97,192.32 C2409.21,5074.24,2404.33,5068.13,2400.05,5061.42z"/><path d="M483,4874.59c-43.35-35.41-52.51-56.78-23.81-56.78c14.04,0,61.05,52.51,61.05,67.77 C520.24,4902.07,514.75,4900.24,483,4874.59z"/><path d="M377.38,4801.94c-6.11-16.48-4.27-19.54,21.37-34.19c25.64-14.04,42.13-37.24,42.13-59.22c0-21.37,13.43-21.98,31.75-1.22 c20.76,23.2,21.98,42.13,3.66,64.72C451.87,4803.16,385.93,4823.31,377.38,4801.94z"/><path d="M2400.66,4773.86c0-7.94,23.81-87.92,52.51-178.88c59.22-188.04,79.98-266.8,85.47-330.9c2.44-24.42,6.11-46.4,9.16-48.23 c9.16-5.49,54.34,97.07,54.34,123.33c0,84.86-73.87,271.68-155.68,396.84C2411.65,4788.51,2400.66,4797.67,2400.66,4773.86z"/><path d="M224.75,4722.57c-9.77-25.03-3.66-44.57,19.54-63.49c41.52-34.19,89.14-36.02,139.2-5.49 c29.31,17.71,42.74,56.78,23.81,72.65c-7.33,6.11-10.38,3.66-18.93-14.65c-25.03-51.28-94.02-52.5-132.48-1.22 C236.96,4734.78,230.24,4737.23,224.75,4722.57z"/><path d="M733.93,4695.71c-41.52-14.04-62.27-37.85-75.71-84.86c-23.81-84.25-17.71-162.4,15.26-197.81l17.71-19.54l10.99,12.82 c5.49,6.72,18.32,17.71,27.47,23.81c21.98,14.04,12.21,20.76-23.2,16.48c-26.25-2.44-26.25-2.44-32.97,20.76 c-17.71,62.88,9.16,151.41,50.67,166.67c29.92,11.6,37.85-12.21,12.21-36.63c-21.98-20.15-51.28-72.65-51.28-90.97 c0-8.55,2.44-19.54,6.11-24.42c7.33-11.6,22.59,2.44,58,51.9c46.4,65.33,67.16,120.27,59.83,156.9 c-3.05,14.65-6.11,17.09-22.59,16.48C776.05,4707.31,752.24,4701.82,733.93,4695.71z"/><path d="M2395.17,4633.44c-7.94-21.98-18.93-82.42-18.93-107.45v-20.76l29.31,4.27c15.87,2.44,29.31,4.88,30.53,6.1 c2.44,2.44-28.08,126.38-32.36,130.04C2402.49,4647.48,2398.22,4641.37,2395.17,4633.44z"/><path d="M206.43,4630.99c-5.49-14.65-4.27-68.38,1.83-72.04c6.72-4.27,61.66,37.24,61.66,47.01c0,7.33-42.74,34.8-53.73,34.8 C212.54,4640.76,208.27,4636.49,206.43,4630.99z"/><path d="M547.72,4582.76c-70.82-15.26-155.07-52.5-178.27-77.54c-13.43-14.04-78.15-155.68-100.13-218.57 c-16.48-45.79-30.53-109.9-26.25-116.61c15.87-25.64,109.89,39.07,133.71,92.19c18.93,42.74-2.44,59.22-28.08,21.37 c-16.48-23.81-24.42-28.69-36.02-21.37c-6.72,4.27-6.11,10.99,3.66,37.24c14.65,40.91,24.42,47.01,58.61,37.24 c14.65-4.27,38.46-11.6,53.73-15.87c32.97-9.16,35.41-20.76,6.72-30.53c-17.09-5.5-25.03-14.04-40.91-45.79 c-33.58-65.94-87.31-109.89-133.71-110.51c-58.61,0-56.17,59.83,10.99,225.89c26.25,65.94,43.35,116,43.35,131.26 c0.61,22.59-0.61,24.42-16.48,26.25c-32.36,3.66-42.13-17.09-27.47-58c6.72-18.32,4.88-25.64-19.54-86.08 c-56.78-139.81-147.75-312.59-164.84-312.59c-2.44,0-13.43-7.94-23.81-17.71c-14.04-13.43-18.93-23.2-18.93-39.07 c0-25.64,12.21-30.53,45.18-19.54c29.92,10.38,43.96,23.81,65.94,61.66c22.59,40.91,43.96,63.49,59.22,63.49s18.32-6.1,45.18-86.08 c36.02-107.45,100.74-224.06,187.43-338.23c39.07-51.89,61.05-96.46,61.05-125.77c0-25.03,16.48-50.06,42.74-63.49 c25.64-13.43,37.85,0,32.36,36.63c-3.05,24.42-2.44,27.47,8.55,27.47c6.72,0,35.41-17.09,63.49-37.85 c59.22-44.57,97.68-94.63,97.68-127.6c0.61-31.75,10.99-52.51,30.53-60.44c14.65-6.11,20.15-6.11,32.97,2.44 c21.37,14.04,19.54,36.63-7.94,96.46c-33.58,72.04-28.69,78.76,32.36,47.01c76.93-40.29,163.01-114.78,171.56-148.97 c1.83-8.55,2.44-26.86,0-39.68c-3.05-20.76-1.83-25.64,10.99-33.58c8.55-5.49,23.81-9.16,35.41-7.94 c20.15,1.83,20.15,2.44,21.98,35.41c1.22,20.15-1.83,43.35-7.94,59.22c-5.49,14.65-8.55,30.53-6.72,35.41 c12.21,32.97,111.12-34.19,135.54-92.19c4.88-10.99,8.55-33.58,8.55-49.45c0-37.24,4.88-43.96,31.75-48.84 c18.93-2.44,23.2-1.22,32.36,12.82c9.77,14.65,9.77,17.71,0,47.62c-29.31,90.36-107.45,150.19-305.26,233.83 c-87.92,37.24-272.29,129.43-335.18,167.28c-26.86,17.09-60.44,40.91-74.48,53.73c-44.57,41.52-138.59,175.22-190.48,270.46 c-31.14,58.61-54.95,131.87-45.79,141.03c10.99,10.99,17.71,2.44,34.8-42.13c32.97-86.08,126.99-235.05,195.98-311.37 c59.22-64.72,98.29-89.75,260.08-166.67c183.77-86.69,344.34-169.73,390.13-202.08c62.88-42.74,114.17-128.82,108.06-179.49 c-2.44-25.03-1.22-28.08,14.65-36.63c9.77-4.88,41.52-13.43,70.21-18.93c41.52-7.33,53.73-7.94,59.22-1.83 c5.49,5.49,5.49,8.55,0,10.38c-3.66,1.22-21.37,12.82-39.07,25.03c-61.05,42.74-139.2,169.73-219.18,355.94 c-59.22,136.15-59.83,137.98-92.8,142.86c-42.74,5.49-133.71,6.72-164.84,1.22c-25.03-4.27-29.31-3.66-29.31,4.88 c0,17.09,40.29,28.08,109.28,31.14c35.41,1.22,76.93,3.66,92.19,5.49c107.45,14.04,153.85,56.17,72.65,65.94 c-17.09,2.44-34.19,6.11-38.46,9.16c-3.66,3.05-42.74,34.8-87.31,71.43c-63.49,51.89-82.42,70.21-87.92,87.92 c-3.66,12.21-22.59,38.46-41.52,58.61c-44.57,46.4-67.77,81.2-98.29,144.08c-28.69,59.22-32.36,97.68-12.21,123.33 c12.21,15.87,15.26,52.51,6.72,83.03c-3.66,14.04-4.27,14.04-20.15-9.16c-19.54-28.69-54.34-108.06-58-134.32 c-2.44-13.43,1.83-26.86,15.26-48.84c18.93-29.92,34.19-73.26,53.12-150.19c18.93-73.87,73.87-150.19,138.59-191.71 c43.35-28.08,62.27-49.45,58.61-67.77c-3.66-19.54-26.25-16.48-45.79,6.72c-21.98,26.86-105.01,77.54-150.8,91.58 c-60.44,18.93-126.99,3.66-151.41-35.41c-17.09-28.08-13.43-88.53,7.33-111.12c23.81-25.03,56.78-39.07,92.19-39.07 c27.47,0,33.58,2.44,51.89,20.76c33.58,33.58,26.25,77.54-15.26,95.24c-24.42,9.77-45.79,4.27-54.34-15.26 c-8.55-18.32-17.09-19.54-22.59-3.05c-12.82,40.29,48.84,63.49,99.52,37.24c58-29.92,56.78-112.95-1.83-152.63 c-56.17-37.85-174,14.04-198.42,87.92c-30.53,92.8,73.87,174.61,182.55,143.47c11.6-3.05,22.59-4.27,24.42-3.05 c1.22,1.83-3.05,13.43-10.99,26.25c-7.33,12.21-25.64,48.23-40.29,79.37l-26.86,56.17h-29.31c-39.07,0.61-72.65,16.48-104.4,51.28 c-39.68,42.74-50.67,73.87-51.28,136.76c-0.61,65.94,6.72,92.8,37.85,139.2l24.42,36.63l-4.88,81.81l-4.27,82.42l-18.32,1.22 C592.9,4590.7,567.87,4587.65,547.72,4582.76z M493.99,4486.3c18.93-17.09,24.42-49.45,12.21-75.09 c-16.48-33.58-63.49-51.28-98.29-36.63c-17.09,7.33-22.59,14.04-28.08,33.58C361.51,4475.92,443.93,4532.09,493.99,4486.3z"/><path d="M414.01,4463.1c-28.69-34.19-14.65-72.65,26.86-72.65c18.32,0,26.25,3.66,39.07,18.93c29.92,34.8,15.26,72.65-28.08,72.65 C434.77,4482.03,426.22,4477.75,414.01,4463.1z M475.07,4454.55c6.72-9.77,6.72-15.26,0.61-27.47 c-14.04-27.47-59.22-21.37-59.22,7.94C416.46,4466.76,457.97,4480.19,475.07,4454.55z"/><path d="M432.33,4453.94c-2.44-6.1-1.22-13.43,1.83-16.48c9.16-9.16,28.08-1.83,28.08,10.99 C462.24,4464.32,437.82,4468.6,432.33,4453.94z"/><path d="M2385.4,4469.21c-30.53-16.48-73.87-51.28-85.47-68.99c-4.88-7.33-13.43-37.85-18.32-67.16 c-18.32-105.01-70.21-214.91-142.25-301.6c-50.06-60.44-59.22-67.16-75.09-52.51c-6.11,5.49-12.82,9.16-14.04,7.94 c-1.22-1.22-7.94-20.76-15.26-42.74l-13.43-40.29l-50.06-28.69c-48.23-27.47-57.39-29.31-86.08-18.32 c-15.26,6.11-11.6-7.33,7.94-29.31l17.71-19.54l65.94,31.14c57.39,26.86,68.38,34.8,80.59,55.56c7.33,14.04,34.8,40.91,62.88,62.27 c67.77,52.51,129.43,116.61,166.06,172.78c46.4,70.82,56.78,62.88,43.35-34.19c-4.27-31.75-14.65-75.09-23.2-95.24l-15.26-37.24 h17.09c36.02,0,54.95,11.6,62.27,38.46c11.6,43.35,23.81,60.44,82.42,117.22l57.39,54.95v49.45c0,73.87-29.31,213.68-50.06,242.38 C2447.67,4482.64,2413.48,4483.86,2385.4,4469.21z"/><path d="M677.76,4233.54c-21.37-23.2-35.41-52.51-35.41-73.87c0-33.58,65.94-79.98,90.97-64.1c13.43,8.55,15.26,34.19,3.66,56.78 l-9.77,18.93l-10.38-13.43c-9.16-10.99-12.21-11.6-18.32-3.66c-5.49,6.11-5.49,17.09-1.22,40.91 C708.29,4254.3,704.62,4262.24,677.76,4233.54z"/><path d="M2260.85,4048.55l-31.75-36.63h17.09c9.77,0,21.98,3.66,27.47,7.94c9.16,6.72,26.86,57.39,21.98,62.88 C2294.43,4083.96,2278.56,4068.7,2260.85,4048.55z"/><path d="M2315.19,3934.39c-28.69-3.66-32.36-8.55-25.03-36.02c7.94-31.75,22.59-147.14,34.19-271.07 c9.77-109.28,17.09-129.43,47.62-133.09c45.79-5.49,174,101.35,235.66,196.59c17.09,26.25,29.92,49.45,28.08,51.28 s-20.76-6.11-42.74-17.09c-51.28-25.64-95.24-30.53-123.33-12.82c-28.08,17.71-73.26,77.54-87.92,116.61 c-6.72,18.32-14.65,50.06-16.48,70.21C2360.37,3938.66,2359.76,3939.88,2315.19,3934.39z"/><path d="M2205.29,3908.74c-61.66-20.15-130.04-62.27-228.95-142.86c-32.97-26.25-39.07-29.31-59.83-26.86 c-20.15,3.05-22.59,1.83-18.32-6.72c2.44-6.11,4.27-25.64,3.05-43.96c-1.22-37.24,3.05-42.74,37.24-42.74 c29.92,0,63.49,17.71,105.01,54.95c18.93,17.09,36.63,30.53,40.29,30.53c11.6,0,36.63-31.14,53.12-65.94 c14.65-31.14,16.48-41.52,16.48-105.01c0-60.44-1.83-73.87-13.43-94.63c-24.42-45.79-71.43-81.2-139.2-103.79l-12.21-4.27 l12.21-5.49c27.47-11.6,241.16-49.45,286.95-50.06c47.62-1.22,48.84-1.22,50.67,14.04c1.83,20.15-17.09,55.56-32.97,61.66 c-20.76,7.33-54.34-12.21-54.34-31.14c0-10.38-3.66-15.87-12.21-17.09c-17.71-2.44-120.88,25.64-123.33,33.58 c-1.83,4.27,10.38,8.55,32.97,10.38c89.14,9.77,138.59,29.31,153.85,61.66c7.33,15.87,6.72,36.63-4.88,167.89 c-20.76,225.28-37.24,318.69-54.95,316.86C2240.71,3919.73,2223.61,3914.85,2205.29,3908.74z"/><path d="M1293.78,3739.02c-18.32-17.71,17.71-75.71,128.21-209.41c44.57-53.73,49.45-57.39,116-79.98 c61.05-20.76,83.64-35.41,99.52-66.55c31.14-61.05-6.11-122.11-75.09-122.11c-40.91,0-83.64,42.74-75.09,75.71 c6.11,25.64,24.42,18.93,26.86-10.38c3.05-32.36,23.2-45.18,56.78-35.41c32.97,9.77,48.23,26.25,48.23,51.89 c0,56.78-95.85,103.18-151.41,74.48c-54.95-28.69-84.86-106.84-59.22-156.29c13.43-25.64,64.72-64.1,101.96-76.93 c39.07-12.82,103.79-13.43,133.71-0.61c29.92,12.21,64.11,48.84,76.32,81.2c18.32,48.23,0,127.6-39.07,169.73 c-9.16,9.77-33.58,25.64-54.95,34.8c-91.58,42.74-122.72,73.87-123.33,125.16c0,17.71-3.66,20.76-50.67,43.96 c-51.28,25.03-62.27,33.58-74.48,58.61c-3.66,6.72-20.15,20.15-36.63,29.31C1309.65,3743.9,1300.5,3746.34,1293.78,3739.02z"/><path d="M1764.5,3703.61c-41.52-28.08-39.07-48.84,15.26-112.95c68.99-82.42,186.82-164.84,249.7-175.22 c20.76-3.05,25.03-1.22,44.57,19.54c33.58,37.24,47.62,72.65,50.67,127.6c3.05,51.89-4.88,87.31-24.42,115.39l-12.21,16.48 l-28.08-25.03c-42.74-37.85-75.71-51.28-126.38-50.67c-71.43,0.61-128.21,32.36-134.93,76.93c-2.44,12.82-5.49,23.2-7.94,23.2 C1788.92,3718.87,1776.71,3712.15,1764.5,3703.61z M2000.77,3580.89c14.04-5.49,27.47-34.8,27.47-59.83 c0-27.47-25.03-58.61-47.62-58.61c-18.32,0-45.18,15.87-59.22,34.19c-20.15,26.86-8.55,72.65,21.37,83.64 C1955.59,3585.16,1988.56,3585.16,2000.77,3580.89z"/><path d="M1940.94,3555.25c-21.37-23.81-6.72-64.11,27.47-76.32c17.71-6.11,43.35,20.76,43.35,44.57 C2011.76,3559.52,1964.14,3580.89,1940.94,3555.25z M1992.83,3543.65c13.43-12.21,14.04-25.03,0.61-39.68 c-18.93-20.76-50.67-7.33-50.67,21.98C1942.77,3552.81,1971.46,3563.19,1992.83,3543.65z"/><path d="M1959.86,3528.39c-4.88-12.82,1.22-23.2,13.43-23.2c11.6,0,18.32,10.38,14.04,23.2c-1.83,3.66-7.94,7.33-14.04,7.33 C1967.19,3535.71,1961.08,3532.05,1959.86,3528.39z"/><path d="M1240.66,3525.33c0-10.38,65.33-137.37,102.57-199.64c18.32-30.53,22.59-34.19,26.25-24.42 c2.44,6.11,4.88,22.59,4.88,36.02c1.22,32.36,21.98,68.38,53.73,91.58c14.04,9.77,25.64,20.15,25.64,21.98 c0.61,1.83-6.72,6.72-15.87,10.99c-21.37,9.77-189.87,73.87-194.15,73.87C1241.89,3535.71,1240.66,3531.44,1240.66,3525.33z"/><path d="M1817.61,3500.91c21.98-34.19,55.56-71.43,84.25-94.63c30.53-23.81,56.78-29.31,86.69-17.71 c10.38,4.27,8.55,6.72-15.26,18.93c-39.68,20.15-122.72,75.71-139.81,94.02C1813.95,3522.28,1804.18,3521.67,1817.61,3500.91z"/><path d="M1758.39,3329.97c2.44-43.35,0.61-53.12-12.82-81.81c-7.94-18.32-24.42-42.13-35.41-53.73l-20.76-20.76l24.42,3.66 c13.43,1.83,57.39,6.72,97.68,10.38c89.14,7.94,100.74,10.38,100.74,19.54c0,4.27-24.42,31.14-53.73,59.83 c-29.31,28.69-64.72,65.33-78.76,82.42l-24.42,30.53L1758.39,3329.97z"/></g></g>`;
const ENSHROUDED_EMBLEM = `<g transform="translate(244.7 530.7) scale(0.865)"><path d="M242.59,156.63l53.13,42.05-66.45-13.37c-8.12,11.76-18.84,21.58-31.32,28.64l-32.96,89.64v-102.35c7.94-1.51,15.41-4.34,22.17-8.27,20.99-12.2,35.1-34.93,35.1-60.96,0-27.94-16.27-52.1-39.85-63.49-2.55-1.23-5.19-2.31-7.9-3.24l-.04-.02,12.35-20.56L213.67,0l-7.98,54.94c11.51,8.07,21.14,18.66,28.08,30.96l65.92-8.04-55.35,37.24c1,5.49,1.53,11.13,1.53,16.9,0,8.51-1.14,16.77-3.27,24.62Z"/><path d="M61,156.63L7.87,198.68l66.45-13.37c8.12,11.76,18.84,21.58,31.32,28.64l32.96,89.64v-102.35c-7.94-1.51-15.41-4.34-22.17-8.27-20.99-12.2-35.1-34.93-35.1-60.96,0-27.94,16.27-52.1,39.85-63.49,2.55-1.23,5.19-2.31,7.9-3.24l.04-.02-12.35-20.56L89.92,0l7.98,54.94c-11.51,8.07-21.14,18.66-28.08,30.96L3.9,77.86l55.35,37.24c-1,5.49-1.53,11.13-1.53,16.9,0,8.51,1.14,16.77,3.27,24.62Z"/></g>`;
   
const pines = [[258, 34], [282, 52], [306, 40], [330, 26], [448, 46], [474, 60], [500, 36]].map(([x, hgt]) => {
  const t = hgt / 3, wd = hgt * 0.34;
  return `<path d="M${x} ${690 - hgt}L${x + wd * .6} ${690 - 2 * t}H${x + wd * .3}L${x + wd * .85} ${690 - t}H${x + wd * .5}L${x + wd} 690H${x - wd}L${x - wd * .5} ${690 - t}H${x - wd * .85}L${x - wd * .3} ${690 - 2 * t}H${x - wd * .6}Z"/>`;
}).join('');

const BUILTIN = [
  {
    name: 'Crimson Desert', key: 'cd',
    leather: ['#7c2c30', '#5a1c22', '#3d1218'], board: '#3b1117', button: '#3a111b',
    fade: '#d99a7a', rub: ['#c49473', '#9b6450'], scratch: '#f0c9b0', edge: '#b07e62',
    mottle: [.78, .5, .42], stain: '#1c0608', endpaper: '#3b4a40', accent: '#7c2c30',
    title: titleText(258, 116, 'Crimson') + titleText(370, 116, 'Desert'),
    emblemDefs: '',
    emblemStroke: '',
    emblemFill: CRIMSON_EMBLEM,
  },
  {
    name: 'Enshrouded', key: 'en',
    leather: ['#35597f', '#223d60', '#142540'], board: '#15253f', button: '#15253f',
    fade: '#a9c3de', rub: ['#9fb6c9', '#627d96'], scratch: '#d3e2f0', edge: '#7f97ad',
    mottle: [.62, .72, .84], stain: '#050d18', endpaper: '#4b3a33', accent: '#2d4f7a',
    title: titleText(322, 100, 'Enshrouded'),
    emblemDefs: '',
    emblemStroke: '',
    emblemFill: ENSHROUDED_EMBLEM,
  },
];

const PALETTE = ['#2f5e45', '#5b2d55', '#7a5820', '#3d4c5c', '#1e5b5d', '#6a3b24', '#4b5a26', '#4a2f6b'];
// a heraldic shield over crossed swords, for any game without a hand-made cover
const GENERIC_STROKE = `
  <path d="M376 540L452 566V648Q452 716 376 756Q300 716 300 648V566Z" stroke-width="2.4"/>
  <path d="M376 558L436 578V646Q436 700 376 734Q316 700 316 646V578Z" stroke-width="1.1"/>
  <path d="M316 690L376 664L436 690" stroke-width="1.6"/>`;
const GENERIC_FILL = `<path d="${star(376, 622, 26)}"/><path d="${star(262, 648, 8)}"/><path d="${star(490, 648, 8)}"/>`;

function makeTheme(name, colorIndex) {
  const base = PALETTE[colorIndex % PALETTE.length];
  const m = hx(mix(base, '#ffffff', .5)).map(v => +(v / 255).toFixed(2));
  return {
    name, key: 'g' + colorIndex + '-' + hash(name).toString(36),
    leather: [mix(base, '#ffffff', .12), base, mix(base, '#000000', .34)],
    board: mix(base, '#000000', .45), button: mix(base, '#000000', .42),
    fade: mix(base, '#ffffff', .55), rub: [mix(base, '#d9c3a5', .62), mix(base, '#d9c3a5', .35)],
    scratch: mix(base, '#ffffff', .75), edge: mix(base, '#c9b397', .5),
    mottle: m, stain: mix(base, '#000000', .85), endpaper: '#4a3c2e', accent: mix(base, '#000000', .1),
    title: autoTitle(name), emblemDefs: '', emblemStroke: GENERIC_STROKE, emblemFill: GENERIC_FILL,
  };
}

/* ---------------- cover artwork (shared with the sample books) ---------------- */
const corners = [[124, 98, 1, 1], [628, 98, -1, 1], [124, 902, 1, -1], [628, 902, -1, -1]]
  .map(([x, y, sx, sy]) => `<g transform="translate(${x} ${y}) scale(${sx} ${sy})"><path d="M0 64Q0 0 64 0" stroke-width="1.6"/><path d="M0 36Q9 9 36 0" stroke-width="1"/><circle cx="15" cy="15" r="4" fill="url(#gold)" stroke="none"/></g>`).join('');
const scratches = color => {
  const r = rng(42); let s = '';
  for (let i = 0; i < 70; i++) {
    const x = 60 + r() * 650, y = r() * 1000, len = 8 + r() * 60, a = r() * Math.PI;
    s += `<path d="M${x.toFixed(1)} ${y.toFixed(1)}q${(Math.cos(a) * len / 2).toFixed(1)} ${(r() * 6 - 3).toFixed(1)} ${(Math.cos(a) * len).toFixed(1)} ${(Math.sin(a) * len).toFixed(1)}" stroke-width="${(0.6 + r() * 1.2).toFixed(2)}" stroke-opacity="${(0.06 + r() * 0.14).toFixed(2)}"/>`;
  }
  return `<g fill="none" stroke="${color}" stroke-linecap="round">${s}</g>`;
};

const coverFront = b => `
<svg viewBox="0 0 720 1000" preserveAspectRatio="none" aria-hidden="true">
  <defs>
    ${COVER_FONT_FACE}
    <linearGradient id="lea" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${b.leather[0]}"/><stop offset=".5" stop-color="${b.leather[1]}"/><stop offset="1" stop-color="${b.leather[2]}"/></linearGradient>
    <radialGradient id="sunfade" cx=".78" cy=".22" r=".6"><stop offset="0" stop-color="${b.fade}" stop-opacity=".16"/><stop offset="1" stop-color="${b.fade}" stop-opacity="0"/></radialGradient>
    <radialGradient id="rub"><stop offset="0" stop-color="${b.rub[0]}" stop-opacity=".85"/><stop offset=".55" stop-color="${b.rub[1]}" stop-opacity=".35"/><stop offset="1" stop-color="${b.rub[1]}" stop-opacity="0"/></radialGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ecd48f"/><stop offset=".5" stop-color="#a8802f"/><stop offset="1" stop-color="#d9ba6a"/></linearGradient>
    <filter id="grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .6 0"/></filter>
    <filter id="mottle" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".012 .02" numOctaves="3" seed="3"/><feColorMatrix values="0 0 0 0 ${b.mottle[0]}  0 0 0 0 ${b.mottle[1]}  0 0 0 0 ${b.mottle[2]}  2.4 0 0 0 -1.15"/></filter>
    <filter id="rough" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".06" numOctaves="3" seed="8" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="22" xChannelSelector="R" yChannelSelector="G" result="d"/><feGaussianBlur in="d" stdDeviation="1.2"/></filter>
    <filter id="soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="14"/></filter>
    <filter id="emboss" x="-5%" y="-5%" width="110%" height="110%"><feDropShadow dx="0" dy="1.6" stdDeviation="1" flood-color="#000" flood-opacity=".55"/></filter>
    <filter id="wearNoise" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency=".03" numOctaves="3" seed="4" result="a"/><feColorMatrix in="a" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  5 0 0 0 -1.55" result="ma"/>
      <feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="1" seed="9" result="b"/><feColorMatrix in="b" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  4.5 0 0 0 -1" result="mb"/>
      <feComposite in="ma" in2="mb" operator="in"/>
    </filter>
    <mask id="wear" maskUnits="userSpaceOnUse" x="0" y="0" width="720" height="1000"><rect width="720" height="1000" filter="url(#wearNoise)"/></mask>
    ${b.emblemDefs}
  </defs>
  <rect width="720" height="1000" fill="url(#lea)"/>
  <rect width="720" height="1000" filter="url(#mottle)" opacity=".26"/>
  <rect width="720" height="1000" fill="url(#sunfade)"/>
  <rect width="720" height="1000" filter="url(#grain)" opacity=".55"/>
  <g filter="url(#soft)" fill="${b.stain}"><ellipse cx="210" cy="820" rx="120" ry="80" opacity=".35"/><ellipse cx="610" cy="180" rx="70" ry="110" opacity=".22"/></g>
  <ellipse cx="548" cy="826" rx="64" ry="52" fill="none" stroke="${b.stain}" stroke-width="5" opacity=".38" filter="url(#rough)"/>
  <ellipse cx="548" cy="826" rx="56" ry="45" fill="${b.stain}" opacity=".08" filter="url(#rough)"/>
  ${scratches(b.scratch)}
  <rect width="46" height="1000" fill="#000" opacity=".32"/>
  <line x1="52" y1="0" x2="52" y2="1000" stroke="#000" stroke-opacity=".5" stroke-width="3"/>
  <line x1="56" y1="0" x2="56" y2="1000" stroke="${b.scratch}" stroke-opacity=".1" stroke-width="2"/>
  <g fill="none" stroke="${b.rub[0]}" stroke-opacity=".35" stroke-width="1.2"><path d="M50 120l6 14-4 10 5 12"/><path d="M51 430l-4 16 6 9"/><path d="M50 760l5 12-3 15 4 8"/></g>
  <path d="M40 6H712V994H40" fill="none" stroke="${b.edge}" stroke-width="16" opacity=".5" filter="url(#rough)"/>
  <g filter="url(#rough)"><circle cx="716" cy="4" r="84" fill="url(#rub)"/><circle cx="716" cy="996" r="104" fill="url(#rub)"/><circle cx="30" cy="998" r="60" fill="url(#rub)" opacity=".7"/><circle cx="30" cy="2" r="50" fill="url(#rub)" opacity=".6"/></g>
  <path d="M560 1000Q640 930 720 900" fill="none" stroke="#000" stroke-opacity=".28" stroke-width="3"/>
  <path d="M562 996Q641 928 720 896" fill="none" stroke="${b.scratch}" stroke-opacity=".12" stroke-width="1.5"/>
  <g mask="url(#wear)" opacity=".92">
    <g filter="url(#emboss)" fill="none" stroke="url(#gold)">
      <rect x="96" y="70" width="560" height="860" rx="6" stroke-width="3"/><rect x="110" y="84" width="532" height="832" rx="3" stroke-width="1.2"/>
      ${corners}
      <path d="M246 410H346M406 410H506" stroke-width="1.2"/>
      <circle cx="376" cy="662" r="150" stroke-width="2"/><circle cx="376" cy="662" r="138" stroke-width="1.1" stroke-dasharray="1.5 7" stroke-linecap="round"/>
      ${b.emblemStroke}
      <path d="M296 862H346M406 862H456" stroke-width="1.2"/>
    </g>
    <g filter="url(#emboss)" fill="url(#gold)">
      ${b.emblemFill}
      <path d="${star(376, 410, 10)}"/><path d="${star(376, 862, 9)}"/>
      ${b.title}
    </g>
  </g>
</svg>`;

const coverBack = b => `
<svg viewBox="0 0 720 1000" preserveAspectRatio="none" aria-hidden="true">
  <defs>
    <pattern id="ep" width="44" height="44" patternUnits="userSpaceOnUse"><rect width="44" height="44" fill="${b.endpaper}"/><path d="M22 5L39 22L22 39L5 22Z" fill="none" stroke="#c9a85a" stroke-opacity=".28"/><circle cx="22" cy="22" r="3" fill="#c9a85a" fill-opacity=".38"/></pattern>
    <linearGradient id="epShade" x1="1" x2="0"><stop offset="0" stop-color="#000" stop-opacity=".5"/><stop offset=".14" stop-color="#000" stop-opacity="0"/></linearGradient>
    <filter id="epAge" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".015" numOctaves="3" seed="12"/><feColorMatrix values="0 0 0 0 .55  0 0 0 0 .45  0 0 0 0 .3  2 0 0 0 -.9"/></filter>
  </defs>
  <rect width="720" height="1000" fill="${b.board}"/>
  <rect x="18" y="16" width="702" height="968" fill="url(#ep)"/>
  <rect x="18" y="16" width="702" height="968" filter="url(#epAge)" opacity=".4"/>
  <rect x="18" y="16" width="702" height="968" fill="url(#epShade)"/>
</svg>`;

/* Covers are painted once into a canvas. Their SVG filters (grain, wear, embossing) are far too
   costly to repaint on every frame of a page turn, especially on phones. */
function coverToCanvas(svg, w, h) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const paint = () => {
        const c = document.createElement('canvas');
        c.width = w; c.height = h;
        try { c.getContext('2d').drawImage(img, 0, 0, w, h); resolve(c); } catch (e) { reject(e); }
      };
      img.decode ? img.decode().then(paint, paint) : paint();
    };
    img.onerror = reject;
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
      svg.trim().replace('<svg ', `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" `));
  });
}
const coverJobs = [];
let coverPumping = false;
function queueCover(job, urgent) {
  urgent ? coverJobs.unshift(job) : coverJobs.push(job);
  if (coverPumping) return;
  coverPumping = true;
  (async () => {
    while (coverJobs.length) {
      try { await coverJobs.shift()(); } catch (e) {}
      await new Promise(r => setTimeout(r, 30));   // let the page breathe between covers
    }
    coverPumping = false;
  })();
}

/* =====================================================================
   Page content (book pages and gallery cards share this markup)
   ===================================================================== */
const RULE = `<svg class="rule" viewBox="0 0 200 12" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><path d="M0 6H84M116 6H200" stroke="currentColor" stroke-width="1"/><path d="${star(100, 6, 5.5)}" fill="currentColor"/></svg>`;

function foxStyle(seed) {
  const r = rng(seed); const spots = [];
  for (let i = 0; i < 5; i++) {
    const x = (r() * 100).toFixed(0), y = (r() * 100).toFixed(0), s = (0.4 + r() * 1.3).toFixed(2);
    spots.push(`radial-gradient(circle at ${x}% ${y}%, rgba(154,106,58,.13) 0, rgba(154,106,58,0) ${s}em)`);
  }
  return `background:${spots.join(',')}`;
}

function actionsHTML(id, name) {
  const n = esc(name);
  return `<div class="acts">
    <button type="button" class="act" data-act="download" data-id="${esc(id)}" title="Download as JSON" aria-label="Download ${n}">${icon('download')}</button>
    <button type="button" class="act" data-act="duplicate" data-id="${esc(id)}" title="Duplicate" aria-label="Duplicate ${n}">${icon('copy')}</button>
    <button type="button" class="act" data-act="edit" data-id="${esc(id)}" title="Edit" aria-label="Edit ${n}">${icon('pencil')}</button>
    <button type="button" class="act del" data-act="delete" data-id="${esc(id)}" title="Delete" aria-label="Delete ${n}">${icon('trash-2')}</button>
  </div>`;
}

function outfitBody(o, num, { showGame = false, theme } = {}) {
  const filled = SLOTS.filter(s => o.slots[s.key] && o.slots[s.key].trim());
  const list = g => filled.filter(s => s.group === g).map(s =>
    `<li>${icon(s.icon)}<span class="lbl">${s.label}</span><span class="val">${esc(o.slots[s.key])}</span></li>`).join('');
  const armour = list('armour'), weapons = list('weapons');
  const shown = o.tags.slice(0, 3), rest = o.tags.slice(3);
  const chips = shown.map(t => `<span class="chip">${esc(t)}</span>`).join('') +
    (rest.length ? `<span class="chip more" title="${esc(rest.join(', '))}">+${rest.length}</span>` : '');
  const meta = `${showGame ? `<span class="card-game">${esc(theme ? theme.name : o.game)}</span>` : ''}${chips}`;
  return `
    <div class="fox" style="${foxStyle(hash(o.id))}"></div>
    <div class="pg-top"><div class="card-meta">${meta}</div>${actionsHTML(o.id, o.name)}</div>
    <div class="pg-head${o.image ? ' has-portrait' : ''}"><h3 class="pg-title">${esc(o.name)}</h3>${portraitHTML(o)}</div>
    ${RULE}
    ${armour ? `<div class="grp">Armour and apparel</div><ul class="slots">${armour}</ul>` : ''}
    ${weapons ? `<div class="grp">Weapons and auxiliaries</div><ul class="slots">${weapons}</ul>` : ''}
    ${filled.length ? '' : '<p class="none">No gear recorded on this page yet.</p>'}
    ${o.notes ? `<p class="notes">${esc(o.notes)}</p><button type="button" class="see-more" data-act="notes" data-id="${esc(o.id)}" hidden>See more…</button>` : ''}
    <div class="pg-num">${showGame ? `${filled.length} of ${SLOTS.length} slots filled` : num}</div>`;
}
const titleBody = (theme, total, shown) => `
  <div class="fox" style="${foxStyle(hash(theme.name) + 5)}"></div>
  <div class="tp">
    ${RULE}
    <div class="tp-kicker">The outfit logbook of</div>
    <div class="tp-title">${esc(theme.name)}</div>
    ${RULE}
    <div class="tp-count">${total === 0 ? 'No outfits recorded yet' : `${total} ${total === 1 ? 'outfit' : 'outfits'} recorded`}${shown !== total ? `, ${shown} matching your filters` : ''}</div>
  </div>`;
const addBody = theme => `
  <div class="fox" style="${foxStyle(hash(theme.name) + 9)}"></div>
  <button type="button" class="addpage" data-act="add" data-game="${esc(theme.name)}">
    ${icon('plus')}<span class="a1">Forge a new outfit</span><span class="a2">It becomes the next page of this book.</span>
  </button>`;
const blankBody = seed => `<div class="fox" style="${foxStyle(seed)}"></div><svg class="blank" viewBox="0 0 200 12" aria-hidden="true"><path d="${star(100, 6, 5.5)}" fill="#3b2a1e"/></svg>`;

/* =====================================================================
   Storage: this browser's local storage
   (same key as the original logbook page, so existing outfits carry over
   when both are served from the same site)
   ===================================================================== */
const LS_OUTFITS = 'armorer_outfits_v2', LS_META = 'armorer_meta_v1';
const store = {
  outfits: [], meta: { games: [] }, onData: null,
  async init(onData) { this.onData = onData; this.load(); },
  load() {
    let list = null, meta = null;
    try { list = JSON.parse(localStorage.getItem(LS_OUTFITS) || 'null'); } catch (e) {}
    try { meta = JSON.parse(localStorage.getItem(LS_META) || 'null'); } catch (e) {}
    this.outfits = Array.isArray(list) ? list.map(normalizeOutfit) : SAMPLE_OUTFITS.map(normalizeOutfit);
    this.meta = meta && Array.isArray(meta.games) ? meta : { games: [] };
    this.persistLocal();
    this.onData();
  },
  persistLocal() {
    try { localStorage.setItem(LS_OUTFITS, JSON.stringify(this.outfits)); localStorage.setItem(LS_META, JSON.stringify(this.meta)); } catch (e) {}
  },
  async put(o) {
    o = normalizeOutfit(o);
    const i = this.outfits.findIndex(x => x.id === o.id);
    if (i >= 0) this.outfits[i] = o; else this.outfits.push(o);
    this.persistLocal(); this.onData();
  },
  async remove(id) {
    this.outfits = this.outfits.filter(o => o.id !== id);
    this.persistLocal(); this.onData();
  },
  async putMeta(meta) {
    this.meta = meta;
    this.persistLocal(); this.onData();
  },
};

/* =====================================================================
   Book: a cover plus one leaf per two pages; page p[i] sits on
   leaf ceil(i/2); spread s shows p[2s-1] on the left and p[2s] on the right
   ===================================================================== */
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const TURN = reduced ? 380 : 1400;
const STAGGER = reduced ? 90 : 380;
const clamp = v => Math.min(1, Math.max(0, v));
const ease = x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
const dims = { w: 0, h: 0, cy: 0, closedScale: 1, openScale: 1, narrow: false };
// write a style only when it actually changes, so idle frames cost nothing
const setStyle = (el, prop, v) => { const k = '_' + prop; if (el[k] !== v) { el[k] = v; el.style[prop] = v; } };

function createBook(theme, onChange) {
  const scope = html => html.replace(/id="([^"]+)"/g, `id="${theme.key}-$1"`).replace(/url\(#([^)]+)\)/g, `url(#${theme.key}-$1)`);
  const slide = document.createElement('div');
  slide.className = 'slide';
  slide.setAttribute('role', 'group');
  slide.setAttribute('aria-roledescription', 'slide');
  slide.setAttribute('aria-label', theme.name);
  slide.innerHTML = `<div class="book" style="--accent:${theme.accent}"><div class="board" style="background:${theme.board}"></div><div class="base"></div></div>`;
  const bookEl = slide.querySelector('.book');
  const base = slide.querySelector('.base');

  const face = (cls, inner, style = '') => `<div class="face ${cls}"${style ? ` style="${style}"` : ''}>${inner}<div class="cast"></div><div class="shade"></div></div>`;
  const wrap = (side, inner) => `<div class="pg ${side}">${inner}</div>`;
  const mkSheet = (el, k) => ({
    el, k, t: 0, target: 0, delay: 0, drawn: NaN, vis: true,
    faces: [el.querySelector('.front'), el.querySelector('.back')],
    shade: [el.querySelector('.front .shade'), el.querySelector('.back .shade')],
    cast: [el.querySelector('.front .cast'), el.querySelector('.back .cast')],
  });

  // the cover shows plain leather until its painted canvas is ready
  const coverEl = document.createElement('div');
  coverEl.className = 'cover';
  coverEl.innerHTML =
    face('front', '', `background:linear-gradient(135deg,${theme.leather[0]},${theme.leather[1]} 55%,${theme.leather[2]})`) +
    face('back', '', `background:${theme.board}`);
  bookEl.appendChild(coverEl);
  let sheets = [mkSheet(coverEl, 0)];
  let baseCast = null, signature = '', coverKey = '';

  let running = false, last = 0, waiters = [];
  let focus = 0, focusTarget = 0, bookKey = '', focusAfter = null;
  const api = { theme, slide, spread: 0, leaves: 0, pages: [], get busy() { return running; } };

  function paintCover(urgent) {
    const scale = Math.max(dims.closedScale, dims.openScale) * Math.min(2, window.devicePixelRatio || 1);
    const w = Math.round(dims.w * scale), h = Math.round(dims.h * scale);
    const key = w + 'x' + h;
    if (!w || key === coverKey) return;
    coverKey = key;
    queueCover(async () => {
      if (coverKey !== key) return;
      let art;
      try { art = await Promise.all([coverToCanvas(coverFront(theme), w, h), coverToCanvas(coverBack(theme), w, h)]); }
      catch (e) { art = null; }
      if (coverKey !== key) return;
      sheets[0].faces.forEach((f, i) => {
        const old = f.querySelector(':scope > canvas, :scope > svg');
        if (art) f.insertBefore(art[i], f.firstChild);
        else if (!old) f.insertAdjacentHTML('afterbegin', scope(i ? coverBack(theme) : coverFront(theme)));   // fallback: live SVG
        if (old && art) old.remove();
      });
    }, urgent);
  }

  // pages: [{html, id?}] with an odd count; the last one lives on the base board
  api.setPages = (pages, keepSpread = api.spread) => {
    const sig = pages.map(p => p.html).join('\u0001');
    api.pages = pages;
    if (sig === signature) return;
    signature = sig;
    sheets.slice(1).forEach(sh => sh.el.remove());
    sheets = [sheets[0]];
    const L = (pages.length - 1) / 2;
    const frag = document.createDocumentFragment();
    for (let j = 1; j <= L; j++) {
      const el = document.createElement('div');
      el.className = 'leaf';
      el.innerHTML = face('front', wrap('right', pages[2 * j - 2].html)) + face('back', wrap('left', pages[2 * j - 1].html));
      frag.appendChild(el);
      sheets.push(mkSheet(el, j));
    }
    bookEl.appendChild(frag);
    base.innerHTML = wrap('right', pages[pages.length - 1].html) + '<div class="cast"></div>';
    baseCast = base.querySelector('.cast');
    const layers = Math.min(9, 2 + Math.ceil(L / 3));   // thicker page block for fuller books
    const tones = ['#ddcfae', '#cfbf9b', '#c0ae88'];
    base.style.boxShadow = Array.from({ length: layers }, (_, i) => `${(i + 1) * 1.6}px ${i * .5}px 0 ${tones[i % 3]}`).join(',');
    api.leaves = L;
    const s = Math.max(0, Math.min(keepSpread, L));
    api.spread = s;
    sheets.forEach(sh => { sh.t = sh.target = (s > 0 && sh.k <= s) ? 1 : 0; sh.delay = 0; });
    sheets[0].drawn = NaN;
    render(true); inertPages();
    sheets.forEach(sh => { if (sh.k > 0 && sh.vis) hydratePortraits(sh.el); });
    hydratePortraits(base);
    fitNotes();
  };

  // Notes sit just under the gear list. Show as many whole lines as fit above the page number,
  // ending with an ellipsis if the note is longer.
  function fitNotes() {
    if (!dims.w || !bookEl.offsetWidth) return;   // hidden (e.g. Grid Gallery showing): fit later
    fitTitles(bookEl);                              // titles first, since their height moves the notes
    const notes = [...bookEl.querySelectorAll('.pg .notes')];
    if (!notes.length) return;
    const fits = notes.map(n => {
      const pg = n.parentElement, cs = getComputedStyle(n), ps = getComputedStyle(pg);
      const room = pg.clientHeight - parseFloat(ps.paddingBottom) - n.offsetTop - parseFloat(cs.paddingTop);
      return Math.max(1, Math.floor(room / parseFloat(cs.lineHeight)));
    });
    notes.forEach((n, i) => { n.style.webkitLineClamp = fits[i]; n.style.lineClamp = fits[i]; });
    // a note that still doesn't fit gives up its last line to a "See more…" link
    const cut = notes.map(n => n.scrollHeight > n.clientHeight + 1);
    notes.forEach((n, i) => {
      const more = n.nextElementSibling;
      if (cut[i] && fits[i] > 1) { n.style.webkitLineClamp = fits[i] - 1; n.style.lineClamp = fits[i] - 1; }
      if (more && more.classList.contains('see-more')) more.hidden = !cut[i];
    });
  }
  api.fitNotes = fitNotes;

  api.layout = urgent => {
    Object.assign(bookEl.style, {
      width: dims.w + 'px', height: dims.h + 'px',
      top: dims.cy + 'px', marginTop: -dims.h / 2 + 'px',
      perspective: dims.w * 3.4 + 'px', perspectiveOrigin: '0px 50%',
      fontSize: (dims.w * 0.0345).toFixed(2) + 'px',
    });
    if (!dims.narrow) focusTarget = focus = 0;
    render(true);
    fitNotes();
    paintCover(urgent);
  };

  const moving = sh => sh.delay > 0 || sh.t !== sh.target;

  function render(force) {
    const { w, h } = dims;
    const bp = ease(sheets[0].t);
    const bk = bp + '|' + focus + '|' + w;
    if (force || bk !== bookKey) {
      bookKey = bk;
      const s = dims.closedScale + (dims.openScale - dims.closedScale) * bp;
      const f = (1 - bp) + bp * focus;           // 1 = right half centred, 0 = spine centred, -1 = left half centred
      bookEl.style.transform = `translate(${-s * w / 2 * f}px, 0) scale(${s})`;
    }
    const ps = sheets.map(sh => ease(sh.t));
    const move = sheets.map(moving);
    const sp = api.spread;
    let anyTurning = false;
    sheets.forEach((sh, k) => {
      // leaves buried under the stacks are hidden; only the open spread and pages next to a turning leaf are drawn
      if (k > 0) {
        const vis = move[k] || move[k - 1] || !!move[k + 1] || (sp > 0 && (k === sp || k === sp + 1));
        if (vis !== sh.vis) { sh.vis = vis; sh.el.style.visibility = vis ? '' : 'hidden'; if (vis) hydratePortraits(sh.el); }
      }
      const p = ps[k];
      if (p > 0 && p < 1) anyTurning = true;
      if (!force && sh.drawn === p) return;
      sh.drawn = p;
      const angle = -180 * p, arc = Math.sin(p * Math.PI);
      sh.el.style.transform = `translateY(${(-arc * h * 0.03).toFixed(2)}px) translateZ(${(arc * w * 0.06).toFixed(2)}px) rotateY(${angle.toFixed(3)}deg)`;
      setStyle(sh.el, 'zIndex', String(angle > -90 ? 1000 - k : 10 + k));
      setStyle(sh.shade[0], 'opacity', (Math.min(1, p * 2) * 0.6).toFixed(3));
      setStyle(sh.shade[1], 'opacity', (clamp((1 - p) * 1.2) * 0.6).toFixed(3));
    });
    if (!anyTurning && !force && !api._castsOn) return;
    const casts = new Map();
    const addCast = (el, v) => el && casts.set(el, Math.max(casts.get(el) || 0, v));
    sheets.forEach((sh, k) => {
      const p = ps[k];
      if (!(p > 0 && p < 1)) return;
      const strength = Math.sin(p * Math.PI) * 0.85;
      if (p < 0.5) {
        const j = ps.findIndex((q, i) => i > k && q < 0.5);
        addCast(j > 0 ? sheets[j].cast[0] : baseCast, strength);
      } else {
        let j = -1; for (let i = k - 1; i >= 0; i--) if (ps[i] >= 0.5) { j = i; break; }
        if (j >= 0) addCast(sheets[j].cast[1], strength);
      }
    });
    api._castsOn = casts.size > 0;
    [baseCast, ...sheets.flatMap(sh => sh.cast)].forEach(el => { if (el) setStyle(el, 'opacity', (casts.get(el) || 0).toFixed(3)); });
  }

  // only the two visible pages take pointer and keyboard focus
  function inertPages() {
    const s = api.spread;
    sheets.forEach((sh, k) => {
      sh.faces[0].inert = !(k > 0 && s === k - 1 && s > 0);
      sh.faces[1].inert = !(k > 0 && s === k);
    });
    sheets[0].faces[0].inert = sheets[0].faces[1].inert = true;
    base.inert = !(s > 0 && s === api.leaves);
  }

  function frame(now) {
    const dt = Math.min(64, now - last); last = now;
    let busy = false;
    for (const sh of sheets) {
      if (sh.delay > 0) { sh.delay -= dt; busy = true; continue; }
      if (sh.t !== sh.target) {
        sh.t = sh.target > sh.t ? Math.min(sh.target, sh.t + dt / TURN) : Math.max(sh.target, sh.t - dt / TURN);
        busy = true;
      }
    }
    // on phones the book pans to the new page only once the turning leaf has nearly landed
    if (focusAfter !== null && sheets.every(sh => sh.delay <= 0 && Math.abs(sh.t - sh.target) < 0.1)) {
      focusTarget = focusAfter; focusAfter = null; busy = true;
    }
    if (Math.abs(focusTarget - focus) > 0.001) {
      focus += (focusTarget - focus) * Math.min(1, dt / (reduced ? 40 : 140));
      busy = true;
    } else focus = focusTarget;
    render();
    if (busy) requestAnimationFrame(frame);
    else { running = false; render(); inertPages(); onChange(); waiters.splice(0).forEach(fn => fn()); }
  }
  function run() {
    inertPages();
    if (!running) { running = true; last = performance.now(); requestAnimationFrame(frame); }
    onChange();
    return new Promise(res => waiters.push(res));
  }

  // thenFocus: which page (-1 left, 1 right) to pan to after the turn, on narrow screens
  api.goTo = (target, thenFocus) => {
    target = Math.max(0, Math.min(api.leaves, target));
    const from = api.spread;
    if (thenFocus !== undefined && dims.narrow) focusAfter = thenFocus;
    if (target === from) return run();
    const list = [];
    if (target > from) for (let k = from === 0 ? 0 : from + 1; k <= target; k++) list.push([k, 1]);
    else for (let k = from; k >= (target === 0 ? 0 : target + 1); k--) list.push([k, 0]);
    const gap = Math.min(STAGGER, 1500 / Math.max(1, list.length));
    list.forEach(([k, t], i) => { sheets[k].target = t; sheets[k].delay = i * gap; });
    api.spread = target;
    return run();
  };
  api.setFocus = f => { focusTarget = dims.narrow ? f : 0; return run(); };
  api.focusSide = () => focusTarget;
  api.canNext = () => api.spread > 0 && api.spread < api.leaves;
  api.canPrev = () => api.spread > 1;
  api.hit = (x, y) => {
    const r = bookEl.getBoundingClientRect();
    const left = api.spread > 0 ? r.left - r.width : r.left;
    return y >= r.top && y <= r.bottom && x >= left && x <= r.right;
  };
  // wide screens: which page was tapped; narrow screens (one page on view): which half of the screen
  api.sideAt = (x, y) => {
    if (!api.hit(x, y)) return 0;
    const mid = dims.narrow ? slide.getBoundingClientRect().left + slide.getBoundingClientRect().width / 2 : bookEl.getBoundingClientRect().left;
    return x < mid ? -1 : 1;
  };
  api.visiblePages = () => {
    const s = api.spread;
    if (s === 0) return [];
    if (dims.narrow) return [focusTarget < 0 ? 2 * s - 1 : 2 * s];
    return [2 * s - 1, 2 * s];
  };
  return api;
}

/* =====================================================================
   App state
   ===================================================================== */
const state = { view: 'tome', search: '', game: 'all', tag: 'all', ready: false };
const $ = id => document.getElementById(id);

function gameList() {
  const names = [];
  const seen = new Set();
  const add = n => { const k = norm(n); if (n && !seen.has(k)) { seen.add(k); names.push(n); } };
  BUILTIN.forEach(b => add(b.name));
  store.meta.games.forEach(g => add(g.name));
  store.outfits.slice().sort((a, b) => a.createdAt - b.createdAt).forEach(o => add(o.game));
  return names;
}
const themeCache = new Map();
function themeFor(name) {
  const k = norm(name);
  const b = BUILTIN.find(x => norm(x.name) === k);
  if (b) return b;
  const g = store.meta.games.find(x => norm(x.name) === k);
  const idx = g ? g.color : nextColor();
  const ck = k + '|' + idx;
  if (!themeCache.has(ck)) themeCache.set(ck, makeTheme(name, idx));
  return themeCache.get(ck);
}
function nextColor() {
  const used = store.meta.games.map(g => g.color);
  for (let i = 0; i < PALETTE.length; i++) if (!used.includes(i)) return i;
  return used.length;
}
// give every custom game a lasting palette colour the first time it appears
async function ensureGameColors() {
  const missing = gameList().filter(n => !BUILTIN.some(b => norm(b.name) === norm(n)) && !store.meta.games.some(g => norm(g.name) === norm(n)));
  if (!missing.length) return false;
  const games = store.meta.games.slice();
  missing.forEach(name => {
    const used = games.map(g => g.color);
    let c = 0; while (used.includes(c) && c < PALETTE.length) c++;
    if (c >= PALETTE.length) c = games.length;
    games.push({ name, color: c });
  });
  try { await store.putMeta({ games }); } catch (e) { store.meta = { games }; }
  return true;
}

const tagMatch = o => state.tag === 'all' || o.tags.some(t => norm(t) === norm(state.tag));
function searchMatch(o) {
  const q = norm(state.search);
  if (!q) return true;
  return [o.name, o.game, ...o.tags, o.notes, ...Object.values(o.slots)].some(v => norm(v).includes(q));
}
const byGame = name => store.outfits.filter(o => norm(o.game) === norm(name)).sort((a, b) => a.createdAt - b.createdAt);
const narrowing = () => !!norm(state.search) || state.tag !== 'all';

/* =====================================================================
   Filters
   ===================================================================== */
function renderFilters() {
  const games = gameList();
  const sel = $('gameFilter');
  if (state.game !== 'all' && !games.some(g => norm(g) === norm(state.game))) state.game = 'all';
  sel.innerHTML = `<option value="all">All games</option>` + games.map(g => `<option value="${esc(g)}"${norm(g) === norm(state.game) ? ' selected' : ''}>${esc(g)}</option>`).join('');
  const pool = state.game === 'all' ? store.outfits : byGame(state.game);
  const tags = [];
  pool.forEach(o => o.tags.forEach(tg => { if (!tags.some(t => norm(t) === norm(tg))) tags.push(tg); }));
  tags.sort((a, b) => a.localeCompare(b));
  if (state.tag !== 'all' && !tags.some(t => norm(t) === norm(state.tag))) state.tag = 'all';
  $('tags').innerHTML = tags.length ? `<span class="tags-label">Character</span>` +
    [['all', 'All'], ...tags.map(t => [t, t])].map(([v, l]) =>
      `<button type="button" class="chip-btn" data-tag="${esc(v)}" aria-pressed="${norm(v) === norm(state.tag)}">${esc(l)}</button>`).join('') : '';
  $('clearSearch').hidden = !state.search;
  $('filterBtn').querySelector('.badge').hidden = !(norm(state.search) || state.tag !== 'all' || state.game !== 'all');
}
/* phones: the search and filter panel opens from the header and floats over the books */
new ResizeObserver(() => document.documentElement.style.setProperty('--bar-h', document.querySelector('.bar').offsetHeight + 'px')).observe(document.querySelector('.bar'));
const filterBtn = $('filterBtn'), filtersEl = $('filters');
function setFiltersOpen(open) {
  filtersEl.classList.toggle('open', open);
  filterBtn.setAttribute('aria-expanded', String(open));
  if (open) setTimeout(() => $('search').focus(), 50);
}
filterBtn.addEventListener('click', () => setFiltersOpen(!filtersEl.classList.contains('open')));
document.addEventListener('pointerdown', e => {
  if (filtersEl.classList.contains('open') && !filtersEl.contains(e.target) && !filterBtn.contains(e.target)) setFiltersOpen(false);
  if (!$('moreMenu').hidden && !e.target.closest('.more')) setMenuOpen(false);
});
function setMenuOpen(open) { $('moreMenu').hidden = !open; $('moreBtn').setAttribute('aria-expanded', String(open)); }
$('moreBtn').addEventListener('click', () => setMenuOpen($('moreMenu').hidden));
$('moreMenu').addEventListener('click', e => {
  const b = e.target.closest('[data-proxy]');
  if (!b) return;
  setMenuOpen(false);
  $(b.dataset.proxy).click();
});
addEventListener('keydown', e => {
  if (e.key !== 'Escape' || document.querySelector('.overlay')) return;
  if (!$('moreMenu').hidden) { setMenuOpen(false); $('moreBtn').focus(); }
  else if (filtersEl.classList.contains('open') && window.matchMedia('(max-width: 640px)').matches) { setFiltersOpen(false); filterBtn.focus(); }
});
let searchTimer;
$('search').addEventListener('input', e => {
  state.search = e.target.value;
  $('clearSearch').hidden = !state.search;
  clearTimeout(searchTimer);
  searchTimer = setTimeout(refresh, 160);   // rebuild pages once typing pauses, not on every key
});
$('clearSearch').addEventListener('click', () => { clearTimeout(searchTimer); state.search = ''; $('search').value = ''; refresh(); $('search').focus(); });
$('gameFilter').addEventListener('change', e => {
  state.game = e.target.value;
  refresh();
  if (state.view === 'tome' && state.game !== 'all') showBook(state.game);
});
$('tags').addEventListener('click', e => {
  const b = e.target.closest('[data-tag]');
  if (!b) return;
  state.tag = b.dataset.tag;
  refresh();
});

/* =====================================================================
   Tome mode: a carousel of books
   ===================================================================== */
const stage = $('stage'), tnav = $('tnav'), dotsEl = $('dots');
let books = [], index = 0, dragDx = 0, gap = 1;
const bookMap = new Map();
const active = () => books[index];
const browsing = () => !!active() && active().spread === 0 && !active().busy;

function pagesForBook(theme) {
  const all = byGame(theme.name);
  const list = all.filter(o => tagMatch(o) && searchMatch(o));
  const pages = [{ html: titleBody(theme, all.length, list.length) }];
  list.forEach((o, i) => pages.push({ html: outfitBody(o, i + 1, { theme }), id: o.id, n: i + 1 }));
  pages.push({ html: addBody(theme), add: true });
  if (pages.length % 2 === 0) pages.push({ html: blankBody(hash(theme.name) + pages.length) });
  return { pages, count: list.length };
}

function syncBooks() {
  const prevGame = active() ? norm(active().theme.name) : null;
  const wanted = gameList().map(themeFor).map(theme => ({ theme, ...pagesForBook(theme) }))
    .filter(x => !narrowing() || x.count > 0);
  const next = [];
  wanted.forEach(({ theme, pages }) => {
    const k = norm(theme.name);
    let book = bookMap.get(k);
    if (book && book.theme !== theme) { book.slide.remove(); bookMap.delete(k); book = null; }
    if (!book) {
      book = createBook(theme, updateTome);
      bookMap.set(k, book);
      if (dims.w) book.layout(false);
    }
    book.setPages(pages);
    next.push(book);
  });
  // Books hidden by a search or filter are only taken off the table, not thrown away, so they
  // reappear instantly without repainting their covers. Books for games that no longer exist are dropped.
  const games = new Set(gameList().map(norm));
  bookMap.forEach((book, k) => {
    if (next.includes(book)) return;
    book.slide.remove();
    if (!games.has(k)) bookMap.delete(k);
  });
  books = next;
  books.forEach(b => { if (b.slide.parentNode !== stage) stage.appendChild(b.slide); });
  const keep = books.findIndex(b => norm(b.theme.name) === prevGame);
  index = keep >= 0 ? keep : Math.min(index, Math.max(0, books.length - 1));
  dotsEl.innerHTML = books.map((b, i) => `<button type="button" data-i="${i}" style="--dot:${b.theme.leather[0]}" aria-label="Show ${esc(b.theme.name)}"></button>`).join('');
  updateTome();
  return books.length;
}
dotsEl.addEventListener('click', e => { const b = e.target.closest('[data-i]'); if (b) goToBook(+b.dataset.i); });

// The carousel loops: each book sits at its shortest distance around the ring from the one on show.
// With exactly two books the other one sits on whichever side you are swiping towards.
let lastDir = 0;
function ringOffset(d, n, tie) {
  d = ((d % n) + n) % n;
  if (d * 2 > n) d -= n;
  else if (d * 2 === n) d *= tie;
  return d;
}
function place() {
  const lock = !browsing();
  const n = books.length;
  const tie = start && start.drag ? (dragDx < 0 ? 1 : -1) : (lastDir > 0 ? -1 : 1);
  books.forEach((book, i) => {
    const slot = n > 1 ? ringOffset(i - index, n, tie) : 0;
    // a book wrapping round the ring jumps to its new side unseen, then fades in
    if (book._slot !== undefined && Math.abs(slot - book._slot) > 1.5) {
      book.slide.style.transition = 'none';
      setStyle(book.slide, 'opacity', '0');
      setStyle(book.slide, 'transform', `translateX(${(slot * gap).toFixed(1)}px) scale(0.86)`);
      void book.slide.offsetWidth;
      book.slide.style.transition = '';
    }
    book._slot = slot;
    const rel = slot + dragDx / gap;
    const dist = Math.min(1, Math.abs(rel));
    const op = i === index ? 1 : lock ? 0 : 1 - 0.45 * dist;
    setStyle(book.slide, 'transform', `translateX(${(rel * gap).toFixed(1)}px) scale(${(1 - 0.14 * dist).toFixed(4)})`);
    setStyle(book.slide, 'opacity', String(+op.toFixed(3)));
    // faded-out and far-away books are not drawn at all
    setStyle(book.slide, 'visibility', op === 0 || Math.abs(rel) > 1.7 ? 'hidden' : 'visible');
    if (book._active !== (i === index)) {
      book._active = i === index;
      book.slide.classList.toggle('active', book._active);
      book.slide.inert = !book._active;
    }
  });
  [...dotsEl.children].forEach((d, i) => d.setAttribute('aria-current', String(i === index)));
}

function updateTome() {
  const book = active();
  const open = !!book && book.spread > 0;
  tnav.classList.toggle('open', open);
  if (book) {
    $('closeBook').style.background = `linear-gradient(${mix(book.theme.button, '#ffffff', .12)}, ${book.theme.button})`;
    const nums = book.visiblePages().map(i => book.pages[i]).filter(p => p && p.n).map(p => p.n);
    const total = book.pages.filter(p => p.n).length;
    $('where').textContent = !open ? '' : nums.length
      ? `${nums.length > 1 ? 'Outfits' : 'Outfit'} ${nums.join(' and ')} of ${total}`
      : total ? `End of the book, ${total} ${total === 1 ? 'outfit' : 'outfits'}` : 'This book is still empty';
    stage.setAttribute('aria-label', open
      ? `${book.theme.name}. ${$('where').textContent}. Use the arrow keys to turn pages.`
      : `${book.theme.name}. Press Enter to open, or the arrow keys for another book.`);
  }
  place();
}

function goToBook(i, dir) {
  if (!browsing() || !books.length) return false;
  const n = books.length, to = ((i % n) + n) % n;
  if (to !== index) lastDir = dir || (ringOffset(to - index, n, 1) > 0 ? 1 : -1);
  index = to;
  dragDx = 0;
  updateTome();
  return true;
}
const wait = ms => new Promise(r => setTimeout(r, ms));
async function showBook(game) {
  const i = books.findIndex(b => norm(b.theme.name) === norm(game));
  if (i < 0) return null;
  if (i !== index) {
    if (active() && active().spread > 0) await active().goTo(0);
    lastDir = ringOffset(i - index, books.length, 1) > 0 ? 1 : -1;
    index = i; dragDx = 0; updateTome();
    await wait(reduced ? 0 : 420);
  }
  return books[i];
}
async function showOutfit(game, id) {
  const book = await showBook(game);
  if (!book) return;
  const p = book.pages.findIndex(pg => pg.id === id);
  if (p < 0) return;
  const side = p % 2 ? -1 : 1;
  if (book.spread === 0) { book.setFocus(side); await book.goTo(Math.ceil(p / 2)); }
  else await book.goTo(Math.ceil(p / 2), side);
}

let sized = null;
function sizeTome(force) {
  const W = $('tome').clientWidth, full = $('tome').clientHeight;
  if (!W || full <= 64) return;
  // Mobile browsers grow the viewport when the address bar slides away, and shrink it back when it returns.
  // Keep the books exactly as they are for those changes; only a new width or a real height change resizes them.
  if (force !== true && sized && W === sized.W && full >= sized.H && full - sized.H < 220) return;
  sized = { W, H: full };
  const narrowish = W < 700 && W < (full - 64) * 1.15;
  const reserve = narrowish ? 48 : 64;   // room for the controls under the book
  const H = full - reserve;
  dims.narrow = narrowish;
  if (dims.narrow) {
    dims.h = Math.min(H * 0.96, (W * 0.9) / 0.72);
    dims.w = dims.h * 0.72;
    dims.closedScale = 1;
    dims.openScale = Math.min((W * 0.96) / dims.w, (H * 0.98) / dims.h);
  } else {
    dims.h = Math.min(H * 0.95, (W * 0.95) / 2 / 0.72);
    dims.w = dims.h * 0.72;
    dims.closedScale = 1;
    dims.openScale = 1;
  }
  dims.cy = dims.narrow ? H / 2 + 2 : full / 2 - 26;
  gap = dims.w * 1.3;
  if (active()) active().layout(true);          // the book on show gets its cover painted first
  books.forEach(b => b !== active() && b.layout(false));
  place();
}
new ResizeObserver(sizeTome).observe($('tome'));
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { books.forEach(b => b.fitNotes()); fitTitles($('gal')); markLongNotes($('gal')); });

// narrow screens read one page at a time: the first tap pans across the spread, the next turns the leaf
function forward(book) {
  if (dims.narrow && book.spread > 0 && book.focusSide() < 0) return book.setFocus(1);
  if (!book.canNext()) return;
  book.goTo(book.spread + 1, -1);   // turn the leaf, then pan to the new left-hand page
}
function backward(book) {
  if (dims.narrow && book.spread > 0 && book.focusSide() > 0) return book.setFocus(-1);
  if (book.spread === 1) return book.goTo(0);   // going back from the first page closes the book
  if (!book.canPrev()) return;
  book.goTo(book.spread - 1, 1);    // turn back, then pan to the right-hand page
}
function openBook(book) {
  if (!book || book.spread > 0 || book.busy) return;
  book.setFocus(-1);
  book.goTo(1);
}
$('closeBook').addEventListener('click', () => active() && active().goTo(0));

/* pointer: swipe between closed covers, tap a cover to open, tap a page to turn */
let start = null;
const onControl = t => t.closest('button, a, input, select, textarea, label');
stage.addEventListener('pointerdown', e => {
  if (e.button !== 0 || onControl(e.target)) return;
  start = { x: e.clientX, y: e.clientY, t: performance.now(), drag: false };
  stage.setPointerCapture(e.pointerId);
});
let hoverEvt = null;
function setCursor(c) { if (stage._cursor !== c) { stage._cursor = c; stage.style.cursor = c; } }
function updateHover() {
  const e = hoverEvt; hoverEvt = null;
  const book = active();
  if (!e || !book || start) return;
  if (onControl(e.target)) return setCursor('');
  const hot = book.spread === 0
    ? book.hit(e.clientX, e.clientY) || (browsing() && books.some(o => o !== book && o.hit(e.clientX, e.clientY)))
    : (() => { const s = book.sideAt(e.clientX, e.clientY); return s === 1 ? book.canNext() || (dims.narrow && book.focusSide() < 0) : s === -1 ? book.spread > 0 : false; })();
  setCursor(hot ? 'pointer' : 'default');
}
stage.addEventListener('pointermove', e => {
  if (!start) {
    // hover feedback is for mice only, checked at most once per frame
    if (e.pointerType === 'mouse') { if (!hoverEvt) requestAnimationFrame(updateHover); hoverEvt = e; }
    return;
  }
  const dx = e.clientX - start.x;
  if (!start.drag && Math.abs(dx) > 8 && browsing() && books.length > 1) { start.drag = true; stage.classList.add('dragging'); setCursor('grabbing'); }
  if (start.drag) {
    dragDx = dx;
    place();
  }
});
function endPointer(e, cancelled) {
  if (!start) return;
  const s = start; start = null;
  stage.classList.remove('dragging');
  setCursor('default');
  if (s.drag) {
    const dx = e.clientX - s.x;
    const fast = Math.abs(dx) / (performance.now() - s.t) > 0.5;
    const dir = (dx < -gap * 0.18 || (fast && dx < -30)) ? 1 : (dx > gap * 0.18 || (fast && dx > 30)) ? -1 : 0;
    dragDx = 0;
    if (dir) goToBook(index + dir, dir); else place();
    return;
  }
  if (cancelled) return;
  const book = active(), x = e.clientX, y = e.clientY;
  if (!book) return;
  if (book.spread === 0) {
    if (book.hit(x, y)) return openBook(book);
    const other = books.findIndex(o => o !== book && o.hit(x, y));
    if (other >= 0) goToBook(other, books[other]._slot > 0 ? 1 : -1);
    return;
  }
  const side = book.sideAt(x, y);
  if (side === 1) forward(book);
  if (side === -1) backward(book);
}
stage.addEventListener('pointerup', e => endPointer(e, false));
stage.addEventListener('pointercancel', e => endPointer(e, true));

addEventListener('keydown', e => {
  if (state.view !== 'tome' || document.querySelector('.overlay')) return;
  if (e.target.closest && e.target.closest('input, select, textarea')) return;
  const book = active();
  if (!book) return;
  if (e.key === 'ArrowRight') { e.preventDefault(); book.spread ? forward(book) : goToBook(index + 1, 1); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); book.spread ? backward(book) : goToBook(index - 1, -1); }
  else if (e.key === 'Escape') book.goTo(0);
  else if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === stage) {
    e.preventDefault();
    book.spread ? forward(book) : openBook(book);
  }
});

/* =====================================================================
   Grid gallery
   ===================================================================== */
function renderGallery() {
  const games = gameList();
  const list = store.outfits
    .filter(o => (state.game === 'all' || norm(o.game) === norm(state.game)) && tagMatch(o) && searchMatch(o))
    .sort((a, b) => games.findIndex(g => norm(g) === norm(a.game)) - games.findIndex(g => norm(g) === norm(b.game)) || a.createdAt - b.createdAt);
  $('gal').innerHTML = list.map(o => {
    const theme = themeFor(o.game);
    return `<article class="card" data-card="${esc(o.id)}" style="--accent:${theme.accent}"><div class="pg right">${outfitBody(o, 0, { showGame: true, theme })}</div></article>`;
  }).join('');
  watchGallery();
  return list.length;
}
let galleryWatch = null;
function watchGallery() {
  if (galleryWatch) galleryWatch.disconnect();
  if (!('IntersectionObserver' in window)) { hydratePortraits($('gal')); fitTitles($('gal')); return markLongNotes($('gal')); }
  galleryWatch = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { hydratePortraits(en.target); fitTitles(en.target); markLongNotes(en.target); galleryWatch.unobserve(en.target); }
  }), { root: $('gallery'), rootMargin: '400px 0px' });
  $('gal').querySelectorAll('.card').forEach(c => galleryWatch.observe(c));
}

/* =====================================================================
   Rendering
   ===================================================================== */
let pendingShow = null;
function refresh() {
  if (!state.ready) return;
  renderFilters();
  let shown;
  if (state.view === 'tome') shown = syncBooks();
  else shown = renderGallery();
  $('tome').hidden = state.view !== 'tome';
  $('gallery').hidden = state.view !== 'grid' || shown === 0;
  showEmpty(shown === 0);
  if (state.view === 'tome' && shown) requestAnimationFrame(() => { if (!sized) sizeTome(); books.forEach(b => b.fitNotes()); });
  if (pendingShow) {
    const p = pendingShow; pendingShow = null;
    const o = store.outfits.find(x => x.id === p.id);
    if (o && !(tagMatch(o) && searchMatch(o) && (state.view === 'tome' || state.game === 'all' || norm(state.game) === norm(o.game)))) {
      state.search = ''; $('search').value = ''; state.tag = 'all';
      if (state.view === 'grid') state.game = 'all';
      pendingShow = p; return refresh();
    }
    if (state.view === 'tome') showOutfit(p.game, p.id);
    else requestAnimationFrame(() => {
      const card = document.querySelector(`[data-card="${CSS.escape(p.id)}"]`);
      if (card) { card.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' }); card.classList.remove('flash'); void card.offsetWidth; card.classList.add('flash'); }
    });
  }
}
function showEmpty(on) {
  $('empty').hidden = !on;
  if (!on) return;
  const filtered = narrowing() || (state.view === 'grid' && state.game !== 'all');
  $('emptyTitle').textContent = filtered ? 'Nothing matches' : 'The logbook is empty';
  $('emptyText').textContent = filtered
    ? 'No outfits match your search or filters. Clear them to see every page again.'
    : 'Forge your first outfit, or import a JSON file from an earlier logbook.';
  $('emptyActions').innerHTML = (filtered ? `<button type="button" class="btn ink" data-empty="clear">${icon('x')}Clear filters</button>` : '')
    + `<button type="button" class="btn solid" data-empty="forge">${icon('hammer')}Forge outfit</button>`
    + `<button type="button" class="btn ink" data-empty="import">${icon('upload')}Import JSON</button>`;
}
$('emptyActions').addEventListener('click', e => {
  const b = e.target.closest('[data-empty]');
  if (!b) return;
  if (b.dataset.empty === 'clear') { state.search = ''; $('search').value = ''; state.tag = 'all'; state.game = 'all'; refresh(); }
  if (b.dataset.empty === 'forge') openForm();
  if (b.dataset.empty === 'import') $('fileInput').click();
});

document.querySelectorAll('.seg [data-view]').forEach(b => b.addEventListener('click', () => {
  state.view = b.dataset.view;
  document.querySelectorAll('.seg [data-view]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
  refresh();
}));

/* =====================================================================
   Page actions: download, duplicate, edit, delete, add
   ===================================================================== */
document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]');
  if (!b) return;
  e.stopPropagation();
  const id = b.dataset.id, o = store.outfits.find(x => x.id === id);
  switch (b.dataset.act) {
    case 'download': if (o) outfitForExport(o).then(data => saveJSON(`outfit-${slug(o.name)}.json`, data, `Downloaded "${o.name}"`)); break;
    case 'view': if (o) viewImage(o); break;
    case 'notes': if (o) readNotes(o); break;
    case 'duplicate': if (o) duplicate(o); break;
    case 'edit': if (o) openForm(o); break;
    case 'delete': if (o) confirmDelete(o); break;
    case 'add': openForm(null, b.dataset.game); break;
  }
});
const slug = s => norm(s).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'outfit';

async function duplicate(o) {
  const copy = { ...o, slots: { ...o.slots }, id: newId(), name: `${o.name} (copy)`, createdAt: Date.now(), image: null };
  if (o.image) {   // the copy gets its own copy of the image
    try { const rec = await images.get(o.id); if (rec) { await images.put(copy.id, rec); copy.image = { v: Date.now() }; } } catch (e) {}
  }
  pendingShow = { game: copy.game, id: copy.id };
  try { await store.put(copy); toast(`Duplicated "${o.name}" onto a new page`); }
  catch (err) { pendingShow = null; toast('Could not save the copy. Try again in a moment.', true); }
}
async function confirmDelete(o) {
  const ok = await dialog({
    title: 'Tear out this page?',
    body: `<p>"${esc(o.name)}" will be removed from the ${esc(o.game)} book. This can't be undone.</p>`,
    actions: [{ label: 'Keep it', value: false }, { label: 'Delete outfit', value: true, cls: 'warn' }],
  });
  if (!ok) return;
  try {
    await store.remove(o.id);
    if (o.image) { forgetImage(o.id); images.del(o.id).catch(() => {}); }
    toast(`Deleted "${o.name}"`);
  }
  catch (err) { toast('Could not delete that outfit. Try again in a moment.', true); }
}

/* =====================================================================
   Toast and dialogs
   ===================================================================== */
let toastTimer;
function toast(msg, err = false) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.toggle('err', err);
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
}

function overlay(html, onKey) {
  const ov = document.createElement('div');
  ov.className = 'overlay';
  ov.innerHTML = html;
  document.body.appendChild(ov);
  const prev = document.activeElement;
  const close = () => { ov.remove(); document.removeEventListener('keydown', key, true); if (prev && prev.focus) prev.focus(); };
  const key = e => {
    const all = document.querySelectorAll('.overlay');
    if (all[all.length - 1] !== ov) return;   // a dialog opened on top of this one handles the key
    if (e.key === 'Escape' && e.target && e.target.getAttribute && e.target.getAttribute('aria-expanded') === 'true') return;   // a field's suggestion list closes first
    if (e.key === 'Escape') { e.stopPropagation(); onKey && onKey('escape'); }
    if (e.key === 'Tab') {   // keep focus inside the dialog
      const f = [...ov.querySelectorAll('button, input, select, textarea')].filter(el => !el.disabled && el.offsetParent);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  };
  document.addEventListener('keydown', key, true);
  ov.addEventListener('pointerdown', e => { if (e.target === ov) onKey && onKey('backdrop'); });
  return { ov, close };
}

function dialog({ title, body, actions, choices, cls = '' }) {
  return new Promise(resolve => {
    let o;
    const done = v => { o.close(); resolve(v); };
    o = overlay(`
      <div class="sheet dlg ${cls}" role="dialog" aria-modal="true" aria-labelledby="dlgTitle">
        <div class="sheet-head"><h2 id="dlgTitle">${esc(title)}</h2><button type="button" class="icon-btn" data-v="__x" aria-label="Close">${icon('x')}</button></div>
        <div class="sheet-body">${body || ''}${choices ? `<div class="choice">${choices.map((c, i) => `<button type="button" data-c="${i}"><b>${esc(c.label)}</b><i>${esc(c.detail)}</i></button>`).join('')}</div>` : ''}</div>
        <div class="sheet-foot">${actions.map((a, i) => `<button type="button" class="btn ${a.cls || 'ink'}" data-a="${i}">${esc(a.label)}</button>`).join('')}</div>
      </div>`, () => done(null));
    o.ov.addEventListener('click', e => {
      const a = e.target.closest('[data-a]'), c = e.target.closest('[data-c]');
      if (e.target.closest('[data-v="__x"]')) done(null);
      else if (a) done(actions[+a.dataset.a].value);
      else if (c) done(choices[+c.dataset.c].value);
    });
    const first = o.ov.querySelector('[data-c], .sheet-foot .btn:last-child');
    if (first) first.focus();
  });
}

/* =====================================================================
   Full notes, opened from "See more…"
   ===================================================================== */
// On larger screens the reader can be resized by dragging its corner; the size is remembered.
const NOTES_SIZE_KEY = 'armorer_notes_size';
function readNotes(o) {
  const shown = dialog({
    title: o.name,
    body: `<p class="notes-full">${esc(o.notes)}</p>`,
    actions: [{ label: 'Edit outfit', value: 'edit' }, { label: 'Close', value: true, cls: 'solid' }],
    cls: 'reader',
  });
  const sheet = [...document.querySelectorAll('.overlay .dlg.reader')].pop();
  if (sheet && matchMedia('(pointer: fine) and (min-width: 700px)').matches) {
    try {
      const saved = JSON.parse(localStorage.getItem(NOTES_SIZE_KEY) || 'null');
      if (saved && saved.w) { sheet.style.width = saved.w + 'px'; if (saved.h) sheet.style.height = saved.h + 'px'; }
    } catch (e) {}
    let first = true, t;
    const ro = new ResizeObserver(() => {
      if (first) { first = false; return; }   // ignore the initial measurement
      clearTimeout(t);
      t = setTimeout(() => {
        // only a size the reader has been dragged to is remembered
        if (!sheet.style.width && !sheet.style.height) return;
        try { localStorage.setItem(NOTES_SIZE_KEY, JSON.stringify({ w: Math.round(sheet.offsetWidth), h: sheet.style.height ? Math.round(sheet.offsetHeight) : 0 })); } catch (e) {}
      }, 250);
    });
    ro.observe(sheet);
    shown.then(() => ro.disconnect());
  }
  shown.then(v => { if (v === 'edit') openForm(o); });
}

/* =====================================================================
   Enlarged image viewer
   ===================================================================== */
async function viewImage(o) {
  let rec = null;
  try { rec = await images.get(o.id); } catch (e) {}
  if (!rec || !rec.full) return toast('This image is not saved in this browser.', true);
  const url = URL.createObjectURL(rec.full);
  let v, closed = false;
  const close = () => { if (closed) return; closed = true; v.close(); URL.revokeObjectURL(url); };
  v = overlay(`
    <figure class="viewer" role="dialog" aria-modal="true" aria-label="${esc(o.name)}">
      <img src="${url}" alt="${esc(o.name)}">
      <figcaption><span>${esc(o.name)}</span><button type="button" class="icon-btn" data-close aria-label="Close">${icon('x')}</button></figcaption>
    </figure>`, close);
  v.ov.addEventListener('click', e => { if (e.target === v.ov || e.target.closest('[data-close]') || e.target.tagName === 'IMG') close(); });
  v.ov.querySelector('[data-close]').focus();
}

/* =====================================================================
   Image field in the forge / edit form: pick, drag to crop, zoom
   ===================================================================== */
function tooLarge(file) {
  const mb = (file.size / 1024 / 1024).toFixed(1);
  return dialog({
    title: 'That image is too large',
    body: `<div class="warnbox"><p><i>${esc(file.name)}</i> is ${mb} MB. Images can be up to 5 MB.</p></div>
      <p class="formnote" style="margin-top:12px">To make it smaller, take a screenshot of the picture instead, or save it as a JPEG. Any image under 5 MB is resized and compressed when it's added, so the size saved in your logbook is always small.</p>`,
    actions: [{ label: 'Cancel', value: false }, { label: 'Choose another image', value: true, cls: 'solid' }],
  });
}
function imageEditor(root, existing) {
  const wrap = root.querySelector('.imgwrap'), input = root.querySelector('input[type="file"]');
  let src = null, srcURL = null, dirty = false, removed = false;
  let cx = 0.5, cy = 0.5, z = 1;            // frame centre (0–1 of the picture) and zoom
  let box = null, drag = null, ro = null;

  function clear() { if (srcURL) URL.revokeObjectURL(srcURL); src = srcURL = null; if (ro) { ro.disconnect(); ro = null; } }
  function showEmpty() {
    clear();
    wrap.innerHTML = imagesAvailable
      ? `<button type="button" class="dropzone" data-pick>${icon('image-plus')}<b>Add an image</b><span>Drop a screenshot here or choose a file, up to 5 MB. You'll crop it to fit the page.</span></button>`
      : `<p class="formnote">Images can't be saved in this browser, so this outfit will be text only.</p>`;
  }
  function showEditor() {
    wrap.innerHTML = `
      <div class="crop">
        <div class="cropper"><img src="${srcURL}" alt="" draggable="false"><div class="crop-frame" tabindex="0" role="group" aria-label="Crop frame. Drag it, or use the arrow keys to move it and plus or minus to zoom."></div></div>
        <div class="crop-side">
          <div class="portrait preview" style="--accent:#7c2c30"><canvas width="${IMG_THUMB_W}" height="${IMG_THUMB_W * 4 / 3}"></canvas></div>
          <div class="crop-btns">
            <button type="button" class="btn ink small" data-pick>${icon('upload')}Replace</button>
            <button type="button" class="btn ink small" data-remove>${icon('trash-2')}Remove</button>
          </div>
        </div>
      </div>
      <label class="crop-zoom">${icon('zoom-out')}<input type="range" min="100" max="400" step="1" value="${Math.round(z * 100)}" aria-label="Zoom">${icon('zoom-in')}</label>`;
    const cropper = wrap.querySelector('.cropper'), frame = wrap.querySelector('.crop-frame');
    const preview = wrap.querySelector('canvas'), range = wrap.querySelector('input[type="range"]');
    const nw = src.naturalWidth, nh = src.naturalHeight;

    function layout() {
      const avail = wrap.clientWidth < 520 ? wrap.clientWidth : wrap.clientWidth - 140;
      const maxH = Math.min(320, Math.max(180, window.innerHeight * 0.38));
      const k = Math.min(avail / nw, maxH / nh);
      const w = Math.round(nw * k), h = Math.round(nh * k);
      cropper.style.width = w + 'px'; cropper.style.height = h + 'px';
      const fh = Math.min(h, w * 4 / 3) / z, fw = fh * 0.75;
      const x = Math.max(0, Math.min(w - fw, cx * w - fw / 2)), y = Math.max(0, Math.min(h - fh, cy * h - fh / 2));
      cx = (x + fw / 2) / w; cy = (y + fh / 2) / h;
      Object.assign(frame.style, { left: x + 'px', top: y + 'px', width: fw + 'px', height: fh + 'px' });
      box = { w, h, sx: x / w * nw, sy: y / h * nh, sw: fw / w * nw, sh: fh / h * nh };
      const g = preview.getContext('2d');
      g.imageSmoothingQuality = 'high';
      g.clearRect(0, 0, preview.width, preview.height);
      g.drawImage(src, box.sx, box.sy, box.sw, box.sh, 0, 0, preview.width, preview.height);
    }
    const moveTo = (px, py) => { cx = px / box.w; cy = py / box.h; dirty = true; layout(); };
    cropper.addEventListener('pointerdown', e => {
      const r = cropper.getBoundingClientRect();
      const px = e.clientX - r.left, py = e.clientY - r.top;
      const fr = frame.getBoundingClientRect();
      const inside = e.clientX >= fr.left && e.clientX <= fr.right && e.clientY >= fr.top && e.clientY <= fr.bottom;
      if (!inside) moveTo(px, py);           // tap outside the frame to jump it there
      drag = { x: e.clientX, y: e.clientY, cx, cy };
      cropper.setPointerCapture(e.pointerId);
      frame.classList.add('dragging');
      e.preventDefault();
    });
    cropper.addEventListener('pointermove', e => {
      if (!drag) return;
      cx = drag.cx + (e.clientX - drag.x) / box.w; cy = drag.cy + (e.clientY - drag.y) / box.h;
      dirty = true; layout();
    });
    const end = () => { drag = null; frame.classList.remove('dragging'); };
    cropper.addEventListener('pointerup', end);
    cropper.addEventListener('pointercancel', end);
    frame.addEventListener('keydown', e => {
      const d = 0.02;
      if (e.key === 'ArrowLeft') cx -= d; else if (e.key === 'ArrowRight') cx += d;
      else if (e.key === 'ArrowUp') cy -= d; else if (e.key === 'ArrowDown') cy += d;
      else if (e.key === '+' || e.key === '=') { z = Math.min(4, z + 0.1); range.value = Math.round(z * 100); }
      else if (e.key === '-' || e.key === '_') { z = Math.max(1, z - 0.1); range.value = Math.round(z * 100); }
      else return;
      e.preventDefault(); dirty = true; layout();
    });
    range.addEventListener('input', () => { z = range.value / 100; dirty = true; layout(); });
    ro = new ResizeObserver(layout);
    ro.observe(wrap);
    layout();
  }
  async function useBlob(blob, isNew) {
    try {
      const { img, url } = await loadImage(blob);
      clear();
      src = img; srcURL = url;
      cx = cy = 0.5; z = 1;
      dirty = isNew; removed = false;
      showEditor();
    } catch (e) { toast('That file could not be read as an image.', true); }
  }
  function pickFile(file) {
    if (!file) return;
    if (!/^image\//.test(file.type) && !/\.(jpe?g|png|webp|gif|bmp|avif|heic|heif)$/i.test(file.name)) return toast('Choose an image file, like a JPEG, PNG or WebP.', true);
    if (file.size > IMG_MAX_UPLOAD) return tooLarge(file).then(again => { if (again) input.click(); });
    useBlob(file, true);
  }

  root.addEventListener('click', e => {
    if (e.target.closest('[data-pick]')) input.click();
    if (e.target.closest('[data-remove]')) { removed = !!(existing && existing.image); dirty = false; showEmpty(); }
  });
  input.addEventListener('change', () => { pickFile(input.files[0]); input.value = ''; });
  root.addEventListener('dragover', e => { if (!imagesAvailable) return; e.preventDefault(); root.classList.add('over'); });
  root.addEventListener('dragleave', e => { if (!root.contains(e.relatedTarget)) root.classList.remove('over'); });
  root.addEventListener('drop', e => {
    if (!imagesAvailable) return;
    e.preventDefault(); root.classList.remove('over');
    pickFile(e.dataTransfer && e.dataTransfer.files[0]);
  });

  showEmpty();
  if (existing && existing.image && imagesAvailable) {
    images.get(existing.id).then(rec => { if (rec && rec.full && !src && !removed) useBlob(rec.full, false); }).catch(() => {});
  }

  return {
    // what the form should do with the image when it is saved
    async result() {
      if (removed) return { removed: true };
      if (!src || !dirty) return { keep: true };
      return { rec: await makeImageRecord(src, box) };
    },
    dispose: clear,
  };
}

/* =====================================================================
   Equipment lists: an optional file per game in the data folder, named
   after the game (data/crimson-desert.json, or .csv). When one exists,
   the gear fields suggest matching items as you type.
   ===================================================================== */
const LIST_FOR_SLOT = { headgear: 'headgear', chest: 'chest', cloak: 'cloak', gloves: 'gloves', legs: 'legs', boots: 'boots',
  weapon1: 'weapons', weapon2: 'weapons', shieldWeapon3: 'weapons' };
const LIST_ALIASES = { head: 'headgear', helm: 'headgear', helmet: 'headgear', armor: 'chest', armour: 'chest', body: 'chest', cape: 'cloak',
  footwear: 'boots', shoes: 'boots', pants: 'legs', weapon: 'weapons' };
// Suggestions are off until someone turns them on in the form; the choice is saved in this browser.
// On by default for every game that has an equipment list; switching one off in the settings is
// saved per game, e.g. { "crimson-desert": false }.
const SUGGEST_KEY = 'armorer_suggestions_v1', SUGGEST_GAMES_KEY = 'armorer_suggestions_v2';
function suggestMap() { try { return JSON.parse(localStorage.getItem(SUGGEST_GAMES_KEY) || '{}') || {}; } catch (e) { return {}; } }
function suggestionsOn(game) {
  const m = suggestMap(), k = gameSlug(game || '');
  return !(k && k in m) || !!m[k];
}
function setSuggestions(game, on) {
  const k = gameSlug(game || '');
  if (!k) return;
  const m = suggestMap(); m[k] = !!on;
  try { localStorage.setItem(SUGGEST_GAMES_KEY, JSON.stringify(m)); } catch (e) {}
}
// The old opt-in setting is no longer needed now that suggestions are on by default.
function migrateSuggestSetting() { try { localStorage.removeItem(SUGGEST_KEY); } catch (e) {} }
// Which games have an equipment list, checked with a header-only request so nothing is downloaded
const listChecks = new Map();
function hasEquipmentList(game) {
  const k = gameSlug(game);
  if (!k || location.protocol === 'file:') return Promise.resolve(false);
  if (!listChecks.has(k)) listChecks.set(k, (async () => {
    for (const ext of ['json', 'csv']) {
      try { const r = await fetch(`data/${k}.${ext}`, { method: 'HEAD', cache: 'no-cache' }); if (r.ok) return true; } catch (e) {}
    }
    return false;
  })());
  return listChecks.get(k);
}
// armour types that become a tag when a piece of that type is picked, e.g. Plate -> "Plate Armor"
const TYPE_TAGS = { Plate: 'Plate Armor', Leather: 'Leather Armor', Chain: 'Chain Armor', Cloth: 'Cloth Armor', Fur: 'Fur Armor', Silk: 'Silk Armor', Kuku: 'Kuku Gear' };
// tags an armour piece brings with it: its type, plus "Kuku Gear" for anything with Kuku in the name
function gearTags(name, type) {
  const out = [];
  if (TYPE_TAGS[type]) out.push(TYPE_TAGS[type]);
  if (/\bkuku\b/i.test(name || '') && !out.includes('Kuku Gear')) out.push('Kuku Gear');
  return out;
}
const equipmentLists = new Map();   // game -> Promise of { game, slots: { list: [{ name, type, lc }] } } or null
const gameSlug = name => norm(name).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
function addEquipment(slots, list, name, type, icon) {
  list = norm(list); list = LIST_ALIASES[list] || list;
  name = String(name || '').trim();
  if (!list || !name) return;
  const arr = slots[list] || (slots[list] = []);
  if (!arr.some(x => x.lc === name.toLowerCase())) arr.push({ name, type: String(type || '').trim(), icon: String(icon || '').trim(), lc: name.toLowerCase() });
}
// Icons are optional. They load from data/<folder>/<icon> only when the list turns them on
// ("icons": { "enabled": true } in JSON, or an icon column in a CSV); otherwise each slot's own symbol is shown.
function parseEquipmentJSON(text, slug) {
  const d = JSON.parse(text), slots = {};
  Object.entries(d.slots || {}).forEach(([list, rows]) => (rows || []).forEach(r =>
    Array.isArray(r) ? addEquipment(slots, list, r[0], r[1], r[2]) : r && addEquipment(slots, list, r.name, r.type, r.icon)));
  const ic = d.icons || {};
  return { game: d.game || '', slots, icons: { enabled: ic.enabled === true, folder: iconFolder(ic.folder, slug) } };
}
const iconFolder = (f, slug) => { f = String(f || `icons/${slug}/`).replace(/^\/+/, ''); return f.endsWith('/') ? f : f + '/'; };
// a simple CSV reader: a header row with slot, name and (optionally) type, then one item per row
function parseEquipmentCSV(text, slug) {
  const rows = []; let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') { if (c === '\r' && text[i + 1] === '\n') i++; row.push(cell); rows.push(row); row = []; cell = ''; }
    else cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const head = (rows.shift() || []).map(h => norm(h));
  const at = k => head.indexOf(k);
  const iS = at('slot'), iN = at('name'), iT = at('type'), iI = at('icon');
  const slots = {};
  const icons = { enabled: false, folder: iconFolder('', slug) };
  if (iS < 0 || iN < 0) return { game: '', slots, icons };
  rows.forEach(r => addEquipment(slots, r[iS], r[iN], iT >= 0 ? r[iT] : '', iI >= 0 ? r[iI] : ''));
  icons.enabled = iI >= 0 && rows.some(r => (r[iI] || '').trim());
  return { game: '', slots, icons };
}
function loadEquipment(game) {
  const k = gameSlug(game);
  if (!k || location.protocol === 'file:') return Promise.resolve(null);
  if (!equipmentLists.has(k)) equipmentLists.set(k, (async () => {
    for (const ext of ['json', 'csv']) {
      try {
        // no-cache: the browser checks for a newer list each visit (a quick "not modified" when unchanged)
        const r = await fetch(`data/${k}.${ext}`, { cache: 'no-cache' });
        if (!r.ok) continue;
        const db = ext === 'json' ? parseEquipmentJSON(await r.text(), k) : parseEquipmentCSV(await r.text(), k);
        if (Object.keys(db.slots).length) { db.game = db.game || game; return db; }
      } catch (e) {}
    }
    return null;
  })());
  return equipmentLists.get(k);
}

// suggestions under a gear field, filtered as you type
function rankMatches(list, text, limit = 8) {
  const q = norm(text);
  if (!q) return [];
  const words = q.split(/\s+/).filter(Boolean);
  const scored = [];
  for (const it of list) {
    if (it.lc === q) continue;   // already chosen
    let score;
    if (it.lc.startsWith(q)) score = 0;
    else if ((' ' + it.lc).includes(' ' + q)) score = 1;
    else if (it.lc.includes(q)) score = 2;
    else if (words.length > 1 && words.every(w => it.lc.includes(w))) score = 3;
    else continue;
    scored.push([score, it]);
  }
  scored.sort((a, b) => a[0] - b[0] || a[1].lc.localeCompare(b[1].lc));
  return scored.slice(0, limit).map(x => x[1]);
}
function markMatch(name, text) {
  const q = norm(text), i = name.toLowerCase().indexOf(q);
  if (!q || i < 0) return esc(name);
  return esc(name.slice(0, i)) + '<b>' + esc(name.slice(i, i + q.length)) + '</b>' + esc(name.slice(i + q.length));
}
let suggestSeq = 0;
const missingIcons = new Set();   // icon files that failed to load, so they aren't asked for again
function gearSuggestions(form, onPick) {
  let db = null;
  const note = form.querySelector('[data-eqnote]');
  const fields = SLOTS.map(s => ({ s, input: form.elements['slot_' + s.key] })).filter(f => f.input);
  fields.forEach(f => {
    const { s, input } = f;
    const id = 'sg' + (++suggestSeq);
    const box = document.createElement('div');
    box.className = 'sg-list'; box.id = id; box.hidden = true;
    box.setAttribute('role', 'listbox');
    box.setAttribute('aria-label', s.label + ' suggestions');
    input.insertAdjacentElement('afterend', box);
    input.setAttribute('autocomplete', 'off');
    let matches = [], active = -1, hover = -1, lastMove = null;
    // One row is shown large with a big icon: the one under the mouse (desktop), else the one picked
    // with the arrow keys, else the top match.
    const featured = () => hover >= 0 ? hover : active >= 0 ? active : 0;
    const setFeatured = () => { const f = featured(); [...box.children].forEach((c, k) => c.classList.toggle('big', k === f)); };
    const listFor = () => db && (db.slots[s.key] || db.slots[LIST_FOR_SLOT[s.key]]);
    // the item's icon when the list has icons, drawn over the slot's own symbol (which shows if the icon is missing)
    const thumbHTML = it => {
      const src = db && db.icons && db.icons.enabled && it.icon ? 'data/' + db.icons.folder + encodeURIComponent(it.icon) : '';
      return `<span class="sg-ic" aria-hidden="true">${icon(s.icon)}${src && !missingIcons.has(src) ? `<img src="${esc(src)}" alt="" loading="lazy" decoding="async">` : ''}</span>`;
    };
    function close() {
      box.hidden = true; matches = []; active = -1;
      input.removeAttribute('aria-activedescendant');
      if (input.getAttribute('role')) input.setAttribute('aria-expanded', 'false');
    }
    function open() {
      const list = listFor();
      matches = list ? rankMatches(list, input.value) : [];
      if (!matches.length) return close();
      active = Math.min(active, matches.length - 1);
      box.innerHTML = matches.map((it, i) =>
        `<div class="sg-opt" role="option" id="${id}-${i}" aria-selected="${i === active}" data-i="${i}">${thumbHTML(it)}<span class="sg-name">${markMatch(it.name, input.value)}</span>${it.type ? `<span class="sg-type">${esc(it.type)}</span>` : ''}</div>`).join('');
      // open upwards when there isn't room below inside the form
      const body = form.querySelector('.sheet-body').getBoundingClientRect(), r = input.getBoundingClientRect();
      const up = body.bottom - r.bottom < 240 && r.top - body.top > body.bottom - r.bottom;
      const field = input.closest('.field').getBoundingClientRect();
      box.style.top = up ? 'auto' : '';
      // a little wider than narrow fields, kept inside the form
      const wide = Math.min(Math.max(field.width, 320), body.width - 24);
      box.style.width = wide + 'px';
      const flip = field.left + wide > body.right - 12;
      box.style.left = flip ? 'auto' : '0';
      box.style.right = flip ? '0' : 'auto';
      box.style.bottom = up ? (field.bottom - r.top + 4) + 'px' : '';
      box.hidden = false;
      input.setAttribute('aria-expanded', 'true');
      setFeatured();
      if (active >= 0) { input.setAttribute('aria-activedescendant', `${id}-${active}`); box.children[active].scrollIntoView({ block: 'nearest' }); }
      else input.removeAttribute('aria-activedescendant');
    }
    function choose(i) {
      const it = matches[i];
      if (!it) return;
      input.value = it.name;
      close();
      if (onPick) onPick(s, it);
    }
    input.addEventListener('input', () => { active = -1; hover = -1; open(); });
    input.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') hover = -1;   // the keyboard takes over from the mouse
      if (!listFor()) return;
      const shown = !box.hidden;
      if (e.key === 'ArrowDown') { e.preventDefault(); if (!shown) { active = 0; open(); } else { active = (active + 1) % matches.length; open(); } }
      else if (e.key === 'ArrowUp' && shown) { e.preventDefault(); active = active <= 0 ? matches.length - 1 : active - 1; open(); }
      else if (e.key === 'Enter' && shown) { e.preventDefault(); if (active >= 0) choose(active); else close(); }   // never saves the form while the list is open
      else if (e.key === 'Escape' && shown) { e.preventDefault(); close(); }
      else if (e.key === 'Tab') close();
    });
    input.addEventListener('blur', () => setTimeout(close, 120));
    box.addEventListener('pointerdown', e => e.preventDefault());   // keep focus in the field while tapping a suggestion
    // Hovering enlarges a row on devices with a mouse. Only real mouse movement counts, so rows
    // shifting as one grows and another shrinks don't keep swapping the enlarged row on their own.
    box.addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse') return;
      if (lastMove && Math.abs(e.clientX - lastMove[0]) + Math.abs(e.clientY - lastMove[1]) < 4) return;
      lastMove = [e.clientX, e.clientY];
      const o = e.target.closest('.sg-opt');
      if (o && +o.dataset.i !== hover) { hover = +o.dataset.i; setFeatured(); }
    });
    box.addEventListener('pointerleave', () => { hover = -1; lastMove = null; setFeatured(); });
    box.addEventListener('error', e => { if (e.target.tagName === 'IMG') { missingIcons.add(e.target.getAttribute('src')); e.target.remove(); } }, true);
    box.addEventListener('click', e => { const o = e.target.closest('.sg-opt'); if (o) choose(+o.dataset.i); });
    f.close = close;
    f.sync = () => {
      if (listFor()) { input.setAttribute('role', 'combobox'); input.setAttribute('aria-controls', id); input.setAttribute('aria-autocomplete', 'list'); input.setAttribute('aria-expanded', 'false'); }
      else { ['role', 'aria-controls', 'aria-autocomplete', 'aria-expanded', 'aria-activedescendant'].forEach(a => input.removeAttribute(a)); }
    };
  });
  let want = '';
  return {
    // switch to the equipment list for this game (or none)
    use(game) {
      want = suggestionsOn(game) ? gameSlug(game) : '';   // nothing downloads while suggestions are off for this game
      db = null;
      fields.forEach(f => { f.close(); f.sync(); });
      if (note) note.hidden = true;
      if (!want) return;
      const asked = want;
      loadEquipment(game).then(d => {
        if (asked !== want) return;
        db = d;
        fields.forEach(f => f.sync());
        if (!note || !d) return;   // games without a list stay plain text boxes, with no note
        // only mention the automatic tags for lists that have tagged armour types (Crimson Desert does; Enshrouded doesn't)
        const tags = ['headgear', 'chest', 'cloak', 'gloves', 'legs', 'boots'].some(k => (d.slots[k] || []).some(it => gearTags(it.name, it.type).length));
        note.textContent = `Suggestions from the ${d.game} equipment list appear as you type${tags ? ', and Plate, Leather, Chain, Cloth or Kuku armour adds a matching tag' : ''}. You can switch them off in the ? settings.`;
        note.hidden = false;
      });
    },
  };
}

/* =====================================================================
   Tag box: type a name and press Enter (or a comma) to add it
   ===================================================================== */
function allTags() {
  const out = [];
  store.outfits.forEach(o => o.tags.forEach(t => { if (!out.some(x => norm(x) === norm(t))) out.push(t); }));
  return out.sort((a, b) => a.localeCompare(b));
}
function tagInput(root, initial) {
  const box = root.querySelector('.tagbox'), input = box.querySelector('input');
  let tags = normTags(initial);
  const removed = new Set();
  function draw() {
    box.querySelectorAll('.tagchip').forEach(c => c.remove());
    tags.forEach((t, i) => input.insertAdjacentHTML('beforebegin',
      `<span class="tagchip">${esc(t)}<button type="button" data-untag="${i}" aria-label="Remove ${esc(t)}">${icon('x')}</button></span>`));
    input.placeholder = tags.length ? 'Add another' : 'Type a name, press Enter';
  }
  function add(text) {
    const before = tags.length;
    tags = normTags([...tags, ...String(text).split(',')]);
    input.value = '';
    if (tags.length !== before) draw();
  }
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();          // Enter adds a tag rather than saving the form
      if (input.value.trim()) add(input.value);
    } else if (e.key === 'Backspace' && !input.value && tags.length) {
      removed.add(norm(tags.pop())); draw();
    }
  });
  input.addEventListener('input', () => { if (input.value.includes(',')) add(input.value); });
  input.addEventListener('change', () => { if (input.value.trim()) add(input.value); });   // picked from the suggestions
  input.addEventListener('blur', () => { if (input.value.trim()) add(input.value); });
  box.addEventListener('click', e => {
    const x = e.target.closest('[data-untag]');
    if (x) { removed.add(norm(tags.splice(+x.dataset.untag, 1)[0])); draw(); input.focus(); }
    else if (e.target === box) input.focus();
  });
  draw();
  return {
    value: () => normTags([...tags, input.value]),
    // add a tag suggested by the form, unless it was already removed by hand in this form
    suggest(t) { if (!removed.has(norm(t)) && !tags.some(x => norm(x) === norm(t))) { tags = normTags([...tags, t]); draw(); return true; } return false; },
  };
}

/* =====================================================================
   Forge / edit form
   ===================================================================== */
function openForm(existing = null, presetGame = null) {
  const games = gameList();
  const current = existing ? existing.game : presetGame || (state.view === 'tome' && active() ? active().theme.name : state.game !== 'all' ? state.game : games[0]);
  const slotField = s => `
    <label class="field"><span>${icon(s.icon)}${s.label}</span>
      <input name="slot_${s.key}" value="${esc(existing ? existing.slots[s.key] : '')}" placeholder="${esc(s.hint)}" maxlength="120"></label>`;
  let o, editor;
  const close = () => { o.close(); if (editor) editor.dispose(); };
  o = overlay(`
    <form class="sheet" role="dialog" aria-modal="true" aria-labelledby="formTitle" novalidate>
      <div class="sheet-head">
        <h2 id="formTitle">${icon('hammer')}${existing ? 'Edit outfit record' : 'Forge outfit record'}</h2>
        <button type="button" class="icon-btn" data-close aria-label="Close">${icon('x')}</button>
      </div>
      <div class="sheet-body">
        <div class="imgfield">
          <div class="flabel">${icon('image')}Outfit image <i>(optional)</i></div>
          <div class="imgwrap"></div>
          <input type="file" accept="image/*" hidden>
        </div>
        <div class="fields">
          <label class="field"><span>Book</span>
            <select name="game">
              ${games.map(g => `<option value="${esc(g)}"${norm(g) === norm(current) ? ' selected' : ''}>${esc(g)}</option>`).join('')}
              <option value="__new">New game…</option>
            </select></label>
          <label class="field" data-newgame hidden><span>New game title</span><input name="newgame" placeholder="e.g. Elden Ring" maxlength="60"></label>
          <label class="field" data-name><span>Outfit name</span><input name="name" required maxlength="140" value="${esc(existing ? existing.name : '')}" placeholder="e.g. Pywel Warrior Gear"></label>
          <div class="field" data-tags><span>Characters or tags</span>
            <div class="tagbox"><input maxlength="40" list="tagSuggest" autocomplete="off" aria-label="Add a character or tag" placeholder="Type a name, press Enter"></div>
            <datalist id="tagSuggest">${allTags().map(t => `<option value="${esc(t)}">`).join('')}</datalist>
          </div>
        </div>
        <p class="formnote">Fill in whichever slots this outfit uses; empty slots are left off the page.</p>
        <p class="formnote eqnote" data-eqnote hidden></p>
        <div class="formgrp">Armour and apparel</div>
        <div class="fields">${SLOTS.filter(s => s.group === 'armour').map(slotField).join('')}</div>
        <div class="formgrp">Weapons and auxiliaries</div>
        <div class="fields">${SLOTS.filter(s => s.group === 'weapons').map(slotField).join('')}</div>
        <div class="fields" style="margin-top:16px">
          <label class="field wide"><span>Notes and special perks</span><textarea name="notes" rows="3" maxlength="4000" placeholder="e.g. Built for mobility and heavy combat">${esc(existing ? existing.notes : '')}</textarea>
            <small class="fieldhint">Press Enter or Shift + Enter for a new line. Long notes get a "See more…" link on the page.</small></label>
        </div>
      </div>
      <div class="sheet-foot">
        <button type="button" class="btn ink" data-close>Cancel</button>
        <button type="submit" class="btn solid">${existing ? 'Save changes' : 'Add page to book'}</button>
      </div>
    </form>`, close);
  const form = o.ov.querySelector('form');
  editor = imageEditor(form.querySelector('.imgfield'), existing);
  const tagger = tagInput(form.querySelector('[data-tags]'), existing ? existing.tags : []);
  const gameSel = form.elements.game, newWrap = form.querySelector('[data-newgame]');
  const gear = gearSuggestions(form, (slot, item) => {
    if (slot.group !== 'armour') return;   // weapons don't add tags
    const added = gearTags(item.name, item.type).filter(t => tagger.suggest(t));
    if (added.length) toast(`Added the ${added.length === 1 ? 'tag' : 'tags'} ${added.map(t => `"${t}"`).join(' and ')}`);
  });

  const pickedGame = () => gameSel.value === '__new' ? form.elements.newgame.value : gameSel.value;
  const toggleNew = () => { newWrap.hidden = gameSel.value !== '__new'; if (!newWrap.hidden) form.elements.newgame.focus(); gear.use(pickedGame()); };
  gameSel.addEventListener('change', toggleNew);
  let newGameTimer;
  form.elements.newgame.addEventListener('input', () => { clearTimeout(newGameTimer); newGameTimer = setTimeout(() => gear.use(pickedGame()), 400); });
  gear.use(pickedGame());
  form.addEventListener('click', e => { if (e.target.closest('[data-close]')) close(); });
  (existing ? form.elements.name : form.elements.name).focus();

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const f = form.elements;
    let game = f.game.value === '__new' ? f.newgame.value.trim() : f.game.value;
    const name = f.name.value.trim();
    form.querySelectorAll('.field').forEach(x => x.classList.remove('bad'));
    if (!name) { form.querySelector('[data-name]').classList.add('bad'); f.name.focus(); toast('Give the outfit a name first.', true); return; }
    if (!game) { newWrap.classList.add('bad'); f.newgame.focus(); toast('Name the new game first.', true); return; }
    const match = gameList().find(g => norm(g) === norm(game));
    if (match) game = match;
    const slots = {};
    SLOTS.forEach(s => { slots[s.key] = f['slot_' + s.key].value.trim(); });
    const outfit = normalizeOutfit({
      id: existing ? existing.id : newId(), name, game, tags: tagger.value(), notes: f.notes.value.trim(), slots,
      createdAt: existing && norm(existing.game) === norm(game) ? existing.createdAt : Date.now(),
    });
    const submit = form.querySelector('[type="submit"]');
    submit.disabled = true;
    let pic;
    try { pic = await editor.result(); }
    catch (err) { submit.disabled = false; return toast('Could not prepare that image. Try another one.', true); }
    try {
      if (pic.rec) {
        await images.put(outfit.id, pic.rec);
        forgetImage(outfit.id);
        outfit.image = { v: Date.now() };
        keepStorage();
      } else outfit.image = pic.removed ? null : existing ? existing.image : null;
    } catch (err) {
      submit.disabled = false;
      return toast('Could not save the image. The browser may be out of storage space.', true);
    }
    try {
      if (!match) await ensureNewGame(game);
      if (!existing || norm(existing.game) !== norm(game)) pendingShow = { game, id: outfit.id };
      await store.put(outfit);
      if (pic.removed) { forgetImage(outfit.id); images.del(outfit.id).catch(() => {}); }
      close();
      toast(existing ? `Saved changes to "${name}"` : `Added "${name}" to the ${game} book`);
    } catch (err) {
      pendingShow = null; submit.disabled = false;
      toast('Could not save this outfit. Try again in a moment.', true);
    }
  });
}
async function ensureNewGame(name) {
  if (BUILTIN.some(b => norm(b.name) === norm(name)) || store.meta.games.some(g => norm(g.name) === norm(name))) return;
  await store.putMeta({ games: [...store.meta.games, { name, color: nextColor() }] });
}
$('forgeBtn').addEventListener('click', () => openForm());

/* =====================================================================
   Import and export
   ===================================================================== */
function saveJSON(filename, data, done) {
  const text = JSON.stringify(data, null, 2);
  const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  toast(done);
}
$('exportAll').addEventListener('click', () => exportAllOutfits());
async function exportAllOutfits() {
  if (!store.outfits.length) return toast('There are no outfits to export yet.', true);
  const n = store.outfits.length;
  if (store.outfits.some(o => o.image)) toast('Preparing your export…');
  const outfits = [];
  for (const o of store.outfits) outfits.push(await outfitForExport(o));
  const now = new Date(), pad = x => String(x).padStart(2, '0');
  const stamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}`;
  saveJSON(`armory-logbook-${stamp}.json`, {
    app: 'ArmorersTome', version: '3.2',
    exportedAt: now.toISOString(),                                   // exact moment, in UTC
    exportedAtLocal: now.toLocaleString(undefined, { dateStyle: 'full', timeStyle: 'short' }),   // your local date and time
    outfitsCount: n, games: store.meta.games, outfits,
  }, `Exported ${n} ${n === 1 ? 'outfit' : 'outfits'}`);
}
$('importAll').addEventListener('click', () => $('fileInput').click());
$('fileInput').addEventListener('change', e => {
  const file = e.target.files[0];
  e.target.value = '';
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async () => {
    let list = [];
    try {
      const parsed = JSON.parse(reader.result);
      list = Array.isArray(parsed) ? parsed : parsed && Array.isArray(parsed.outfits) ? parsed.outfits : parsed && parsed.name && parsed.slots ? [parsed] : null;
      if (!list) throw new Error('format');
    } catch (err) { return toast('That file is not an Armorer\u2019s Tome JSON export.', true); }
    const rows = list.filter(x => x && typeof x.name === 'string' && x.name.trim()).map(x => ({
      o: normalizeOutfit({ ...x, image: null }),
      pic: typeof x.image === 'string' && x.image.startsWith('data:image/') ? x.image : null,
    }));
    const valid = rows.map(r => r.o);
    if (!valid.length) return toast('No outfits were found in that file.', true);
    const mode = await dialog({
      title: 'Import outfits',
      body: `<p>Found ${valid.length} ${valid.length === 1 ? 'outfit' : 'outfits'} in <i>${esc(file.name)}</i>. How should they join your logbook?</p>`,
      choices: [
        { label: 'Add to my books', detail: 'Keeps every current page and adds the imported ones after them.', value: 'merge' },
        { label: 'Replace everything', detail: 'Removes every current outfit, then adds the imported ones.', value: 'replace' },
      ],
      actions: [{ label: 'Cancel', value: null }],
    });
    if (!mode) return;
    try {
      if (mode === 'replace') for (const o of store.outfits.slice()) {
        await store.remove(o.id);
        if (o.image) { forgetImage(o.id); await images.del(o.id).catch(() => {}); }
      }
      const ids = new Set(mode === 'replace' ? [] : store.outfits.map(o => o.id));
      const now = Date.now();
      let lostPics = 0;
      for (const [i, { o, pic }] of rows.entries()) {
        if (ids.has(o.id)) o.id = newId();
        ids.add(o.id);
        if (mode === 'merge') o.createdAt = now + i;   // imported pages go after existing ones
        if (pic && imagesAvailable) {
          try { await images.put(o.id, await recordFromDataURL(pic)); forgetImage(o.id); o.image = { v: now + i }; keepStorage(); }
          catch (e) { lostPics++; }
        } else if (pic) lostPics++;
        await store.put(o);
      }
      if (lostPics) setTimeout(() => toast(`${lostPics} ${lostPics === 1 ? 'image' : 'images'} could not be imported.`, true), 3400);
      await ensureGameColors();
      toast(mode === 'replace' ? `Replaced the logbook with ${valid.length} imported ${valid.length === 1 ? 'outfit' : 'outfits'}` : `Added ${valid.length} imported ${valid.length === 1 ? 'outfit' : 'outfits'}`);
    } catch (err) { toast('The import stopped partway. Some outfits may not have been added.', true); }
  };
  reader.readAsText(file);
});
/* =====================================================================
   Welcome popup: shown on a visitor's first visit, and from the ? button
   ===================================================================== */
const WELCOME_KEY = 'armorer_welcome_seen_v1';
// The ? popup: a guide in folding sections and, when opened from the ? button, the settings.
function showWelcome(fromHelp) {
  const help = fromHelp === true;
  const tip = (ic, html) => `<li>${icon(ic)}<span>${html}</span></li>`;
  const sec = (ic, title, tips, open) =>
    `<details class="help-sec"${open ? ' open' : ''}><summary>${icon(ic)}<span>${title}</span>${icon('chevron-down')}</summary><ul class="welcome">${tips.join('')}</ul></details>`;
  const guide = [
    sec('book-open', 'Browsing the books', [
      tip('book-open', '<b>One book per game.</b> Swipe, or use the arrow keys, to move between books. The row of books loops round.'),
      tip('scroll', '<b>Turn the pages.</b> Tap a cover to open it, the right page to go forward and the left page to go back. Going back from the first page closes the book, and so does Back to cover.'),
      tip('compass', '<b>On phones</b> you read one page at a time: tap the right side of the screen to move on and the left side to go back.'),
    ], !help),
    sec('hammer', 'Forging outfits', [
      tip('hammer', '<b>Forge Outfit</b> adds a new page to the game\'s book and turns to it. Pick "New game…" to start a new book with its own cover colour.'),
      tip('image', '<b>Add an image</b> of up to 5 MB, then drag the frame to crop it. Tap the portrait on the page to see it larger.'),
      tip('tags', '<b>Add several tags</b>, such as the characters who wear an outfit, by pressing Enter after each one.'),
      tip('pencil', '<b>Notes</b> keep the line breaks you type. Long notes get a See more… link on the page.'),
    ]),
    sec('sparkles', 'Equipment suggestions', [
      tip('search', '<b>Pick gear from a list.</b> When suggestions are on for a game, the gear fields suggest items from its equipment list as you type, with icons. The top match is shown larger.'),
      tip('tags', '<b>Automatic tags.</b> Picking a Plate, Leather, Chain or Cloth piece adds a matching tag, and Kuku armour adds Kuku Gear.'),
      tip('settings', '<b>On for every game with a list</b>, which so far is Crimson Desert and Enshrouded. You can switch them off for a game in the settings' + (help ? ' below' : ', in the ? menu') + '.'),
    ]),
    sec('layout-grid', 'Pages, gallery and filters', [
      tip('pencil', '<b>Each page\'s buttons</b>, in its top corner: download, duplicate, edit and delete.'),
      tip('layout-grid', '<b>Grid Gallery</b> shows every outfit at once.'),
      tip('search', '<b>Search, game and tag filters</b> work in both views. On phones they open from the magnifying glass, which shows a dot while a filter is on.'),
    ]),
    sec('save', 'Saving and backups', [
      tip('save', '<b>Saved in this browser.</b> Each browser and device keeps its own logbook. The three Crimson Desert outfits are examples, so edit, duplicate or delete them as you like.'),
      tip('download', '<b>Export all</b> saves your outfits and their images in a JSON file named with the date and time. <b>Import</b> adds a file\'s outfits to your books, or replaces everything.'),
    ]),
  ].join('');
  const settings = !help ? '' : `
    <section class="settings" aria-labelledby="setTitle">
      <h3 id="setTitle">${icon('settings')}Settings</h3>
      <div class="set-group">
        <div class="set-head"><b>Equipment suggestions</b><i>Suggest gear from a game's equipment list as you type in the outfit form. On by default; your choice is saved in this browser.</i></div>
        <div class="set-games" data-setgames><p class="formnote">Checking which games have an equipment list…</p></div>
      </div>
      <div class="set-group">
        <div class="set-head"><b>Armour tags</b><i>Tag outfits saved before you used suggestions, using the equipment lists.</i></div>
        <button type="button" class="btn ink small" data-settool="tags">${icon('tags')}Add armour tags…</button>
      </div>
      <div class="set-group warn-group">
        <div class="set-head"><b>Reset logbook</b><i>Delete every outfit, image and added book in this browser, and return settings to their defaults.</i></div>
        <button type="button" class="btn small reset-btn" data-settool="reset">${icon('trash-2')}Reset logbook…</button>
      </div>
    </section>`;
  return new Promise(resolve => {
    let o;
    const done = v => { o.close(); resolve(v); };
    o = overlay(`
      <div class="sheet dlg helpdlg" role="dialog" aria-modal="true" aria-labelledby="helpTitle">
        <div class="sheet-head"><h2 id="helpTitle">${help ? 'How Armorer\'s Tome works' : 'Welcome to Armorer\'s Tome'}</h2><button type="button" class="icon-btn" data-done aria-label="Close">${icon('x')}</button></div>
        <div class="sheet-body">
          <p class="help-intro">A logbook for your game outfits, with one book per game. Open a section to read more.</p>
          ${guide}
          ${settings}
          <p class="formnote fan-line">This is a fan-made site, not affiliated with any game developer. All intellectual property and assets related to the games belong to their respective owners.</p>
        </div>
        <div class="sheet-foot"><button type="button" class="btn solid" data-done>${help ? 'Done' : 'Start browsing'}</button></div>
      </div>`, () => done(null));
    o.ov.addEventListener('click', e => {
      if (e.target.closest('[data-done]')) return done(true);
      const t = e.target.closest('[data-settool]');
      if (t) { done(null); t.dataset.settool === 'tags' ? tagExistingOutfits() : confirmReset(); }
    });
    o.ov.querySelector('.sheet-foot [data-done]').focus();
    if (!help) return;
    // one switch per game that has an equipment list
    const box = o.ov.querySelector('[data-setgames]');
    const games = gameList();
    Promise.all(games.map(g => hasEquipmentList(g))).then(has => {
      const listed = games.filter((g, i) => has[i]);
      if (!listed.length) {
        box.innerHTML = `<p class="formnote">${location.protocol === 'file:' ? 'Equipment lists need the site to be opened from a web address, such as GitHub Pages.' : 'None of your games has an equipment list yet.'}</p>`;
        return;
      }
      const others = games.length - listed.length;
      box.innerHTML = listed.map(g => `
        <label class="switch compact"><input type="checkbox" data-sgame="${esc(g)}"${suggestionsOn(g) ? ' checked' : ''}><span class="track" aria-hidden="true"></span>
          <span class="switch-text"><b>${esc(g)}</b></span></label>`).join('')
        + (others ? `<p class="formnote">${others === 1 ? 'Your other game doesn\'t' : `Your other ${others} games don't`} have an equipment list yet.</p>` : '');
      box.addEventListener('change', e => {
        const c = e.target.closest('[data-sgame]');
        if (!c) return;
        setSuggestions(c.dataset.sgame, c.checked);
        toast(`Equipment suggestions ${c.checked ? 'on' : 'off'} for ${c.dataset.sgame}`);
      });
    });
  });
}
$('helpBtn').addEventListener('click', () => showWelcome(true));

/* =====================================================================
   Add armour-type tags to outfits saved before the equipment lists existed:
   any armour piece whose name exactly matches a Plate, Leather, Chain or
   Cloth item in its game's list gives the outfit that tag
   ===================================================================== */
async function findArmourTags() {
  const changes = [];
  const games = [...new Set(store.outfits.map(o => o.game))];
  for (const g of games) {
    const db = await loadEquipment(g);   // games without a list can still pick up "Kuku Gear" from the name
    const types = new Map();
    if (db) ['headgear', 'chest', 'cloak', 'gloves', 'legs', 'boots'].forEach(k => (db.slots[k] || []).forEach(it => { if (!types.has(it.lc)) types.set(it.lc, it.type); }));
    store.outfits.filter(o => norm(o.game) === norm(g)).forEach(o => {
      const add = [];
      SLOTS.filter(sl => sl.group === 'armour').forEach(sl => {
        const name = o.slots[sl.key];
        gearTags(name, types.get(norm(name))).forEach(tag => {
          if (!o.tags.some(t => norm(t) === norm(tag)) && !add.includes(tag)) add.push(tag);
        });
      });
      if (add.length) changes.push({ o, add });
    });
  }
  return changes;
}
async function tagExistingOutfits() {
  toast('Checking your outfits against the equipment lists…');
  let changes;
  try { changes = await findArmourTags(); } catch (e) { return toast('Could not read the equipment lists. Try again in a moment.', true); }
  if (!changes.length) {
    return dialog({
      title: 'No tags to add',
      body: `<p>None of your outfits need new armour tags. Either they already have them, or their gear names don't exactly match an item in the game's equipment list. Any armour with "Kuku" in its name gets the Kuku Gear tag.</p>`,
      actions: [{ label: 'OK', value: true, cls: 'solid' }],
    });
  }
  const counts = {};
  changes.forEach(c => c.add.forEach(t => { counts[t] = (counts[t] || 0) + 1; }));
  const n = changes.length;
  const ok = await dialog({
    title: 'Add armour tags?',
    body: `<p>${n} ${n === 1 ? 'outfit has' : 'outfits have'} armour that matches the equipment list. This adds:</p>
      <ul class="tagplan">${Object.entries(counts).map(([t, c]) => `<li><span class="tagchip">${esc(t)}</span> to ${c} ${c === 1 ? 'outfit' : 'outfits'}</li>`).join('')}</ul>
      <p class="formnote">Existing tags are kept. Armour type tags need gear names that exactly match the list; Kuku Gear goes to any armour with "Kuku" in its name. You can remove any tag later in Edit.</p>`,
    actions: [{ label: 'Cancel', value: false }, { label: `Add tags to ${n} ${n === 1 ? 'outfit' : 'outfits'}`, value: true, cls: 'solid' }],
  });
  if (!ok) return;
  try {
    for (const { o, add } of changes) await store.put({ ...o, tags: [...o.tags, ...add] });
    toast(`Added armour tags to ${n} ${n === 1 ? 'outfit' : 'outfits'}`);
  } catch (e) { toast('Some tags could not be saved. Try again in a moment.', true); }
}

/* =====================================================================
   Reset: wipes every outfit, image and custom book in this browser,
   then starts again with the example outfits
   ===================================================================== */
const RESET_NOTE_KEY = 'armorer_reset_note';
function confirmReset() {
  const n = store.outfits.length, pics = store.outfits.filter(o => o.image).length;
  let o;
  const close = () => o.close();
  o = overlay(`
    <div class="sheet dlg danger" role="alertdialog" aria-modal="true" aria-labelledby="resetTitle" aria-describedby="resetWarn">
      <div class="sheet-head"><h2 id="resetTitle">${icon('trash-2')}Reset the logbook?</h2><button type="button" class="icon-btn" data-close aria-label="Close">${icon('x')}</button></div>
      <div class="sheet-body">
        <div class="warnbox" id="resetWarn">
          <p><b>This permanently deletes every outfit saved in this browser</b>: ${n} ${n === 1 ? 'outfit' : 'outfits'}${pics ? `, ${pics} ${pics === 1 ? 'image' : 'images'}` : ''}, and any books you've added.</p>
          <p>Settings such as equipment suggestions go back to their defaults. It can't be undone. The logbook then starts again with the three example outfits.</p>
        </div>
        <p class="formnote">If you might want these outfits later, export a backup first. You can bring it back with Import.</p>
        <button type="button" class="btn ink" data-backup>${icon('download')}Export a backup first</button>
        <button type="button" class="btn big-danger" data-reset>${icon('trash-2')}Delete everything and reset</button>
      </div>
      <div class="sheet-foot"><button type="button" class="btn ink" data-close>Cancel</button></div>
    </div>`, close);
  o.ov.addEventListener('click', async e => {
    if (e.target.closest('[data-close]')) return close();
    if (e.target.closest('[data-backup]')) return exportAllOutfits();
    const btn = e.target.closest('[data-reset]');
    if (!btn) return;
    btn.disabled = true;
    btn.lastChild.textContent = 'Resetting…';
    try { [LS_OUTFITS, LS_META, SUGGEST_KEY, SUGGEST_GAMES_KEY, NOTES_SIZE_KEY].forEach(k => localStorage.removeItem(k)); } catch (err) {}
    try { await images.clear(); } catch (err) {}
    try { sessionStorage.setItem(RESET_NOTE_KEY, '1'); } catch (err) {}
    location.reload();   // start fresh, exactly like a first visit (minus the welcome popup)
  });
  o.ov.querySelector('.sheet-foot [data-close]').focus();   // the safe choice has focus
}
try {
  if (sessionStorage.getItem(RESET_NOTE_KEY)) {
    sessionStorage.removeItem(RESET_NOTE_KEY);
    setTimeout(() => toast('The logbook has been reset.'), 600);
  }
} catch (e) {}
(() => {
  let seen = false;
  try { seen = localStorage.getItem(WELCOME_KEY) === '1'; } catch (e) {}
  if (seen) return;
  try { localStorage.setItem(WELCOME_KEY, '1'); } catch (e) {}
  setTimeout(showWelcome, 500);
})();
/* =====================================================================
   Start
   ===================================================================== */
showEmpty(true);
$('emptyTitle').textContent = 'Opening the tome…';
$('emptyText').textContent = '';
$('emptyActions').innerHTML = '';
store.init(async () => {
  if (!state.ready) setTimeout(migrateSuggestSetting, 1500);
  state.ready = true;
  await ensureGameColors();
  refresh();
});
})();
