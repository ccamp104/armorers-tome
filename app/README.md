# Armorer's Tome for Android

The Android app is built by GitHub from the same website files. Nothing in this folder changes the website:
GitHub Pages never loads these files, and the build works on a copy of the site.

## What's in the repo for the app

| File | What it does |
| --- | --- |
| `.github/workflows/android-signing-key.yml` | One-off: creates the app's signing key. |
| `.github/workflows/android.yml` | Builds the signed `.apk` whenever you start it. |
| `package.json`, `package-lock.json` | The build tools (Capacitor 8) and their exact versions. |
| `capacitor.config.json` | App name, app ID (`com.armorerstome.app`) and colours. |
| `app/build-www.mjs` | Makes the app's copy of the website and switches it to the offline fonts and the add-on. |
| `app/patch-android.mjs` | Sets the version, colours, edge-to-edge display, app icon and splash. |
| `app/app-bridge.js` | The add-on only the app loads: back button, Export via the share sheet, Import picker, equipment lists. |
| `app/fonts/` | Offline copies of Caveat, Cinzel and Cormorant Garamond (SIL Open Font License). |
| `assets/icon-*.png` | The app icon. (`splash.png` and `splash-dark.png` are no longer used.) |

## One-time setup: the signing key

Android only installs an update if it is signed with the same key as the app already on the phone.
Make the key once, keep it safe, and never make another.

1. **Choose a password.** Use a password manager to make a random one of at least 20 characters.
   Save it in the password manager and somewhere offline.
2. **Add it to GitHub.** In the repo: **Settings → Secrets and variables → Actions → New repository secret**.
   Name: `ANDROID_KEYSTORE_PASSWORD`. Secret: the password.
3. **Make the key.** **Actions → "Android: create signing key (one-off)" → Run workflow.**
   When it finishes (about a minute), open the run and download **android-signing-key** under *Artifacts*.
4. **Keep the backup.** Unzip it. Keep `armorers-tome-release.keystore` and the password together offline
   (for example a USB stick plus the password manager). If both are lost, future updates can't install
   over the app, and people would have to uninstall it, which deletes their outfits.
5. **Give GitHub the key.** Open `keystore-base64.txt`, copy everything in it, and add another repository
   secret named `ANDROID_KEYSTORE_BASE64` with that text.
6. **Delete the artifact.** On the workflow run page, delete **android-signing-key**. (It expires by itself
   after a day, but anyone signed in to GitHub could download it until then. It's locked with your
   password, so the long password matters.)

The key workflow refuses to run again once `ANDROID_KEYSTORE_BASE64` exists, so it can't replace your key by accident.

## Building the app

1. **Actions → "Android: build app" → Run workflow.** Leave *Publish a GitHub Release* ticked to make a
   Release, or untick it for a private test build.
2. Wait about 10 minutes. The finished app is named like `armorers-tome-1.0-build3.apk`:
   - under **Artifacts** on the run page (kept 30 days; only people signed in to GitHub can download), and
   - under **Releases** on the repo's main page, if you left the box ticked (anyone with the link can download).

**Version numbers.** The name (1.0, 1.1…) comes from the VERSION lines in `index.html`, so bump those as
usual before a release. The build number is the workflow's run number, so each build installs over the last.

## Installing on a phone

Open the `.apk` on the phone (download it from the Release page, or send it to yourself). Android asks to
allow installs from that app (Chrome, Files, Drive…); allow it and install. Updates install the same way,
over the top, and keep everything saved in the app.

The app keeps its own outfits, separate from the website in the phone's browser. To move them across,
use **Export all** on one and **Import** on the other.

## If you change the website later

The build checks these and stops or warns with a message if they change:

- **Fonts.** If you change the Google Fonts line in `index.html`, the build stops: the offline copies in
  `app/fonts/` need updating to match.
- **The script tag for `js/app.js`** must stay in `index.html` (adding `?v=` versions is fine).
- **Things the add-on relies on** (it warns, but still builds): Export and Download using an
  `<a download>` link; the Escape key closing popups, the enlarged page and open books; popups having the
  class `overlay` with `data-close` / `data-zoomclose` buttons; and the ids `tnav`, `closeBook`, `moreMenu`,
  `moreBtn`, `filters`, `filterBtn`, `fileInput` and `exportAll`.

Don't change `appId` in `capacitor.config.json`: it's permanent, and a new one is a different app.

## Updating the build tools later

Capacitor's versions are pinned in `package.json`. When a new major version comes out, the Android parts
it needs (Android SDK, Java) often change too, so update deliberately rather than automatically.
