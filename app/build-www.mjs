// Makes the Android app's copy of the website in www/ and applies the app-only changes to that copy.
// The website files in the repo are only read, never changed, so GitHub Pages is unaffected.
//
// Run with: node app/build-www.mjs   (the Android workflow does this for you)
// It prints the app version it found, and writes it to GITHUB_OUTPUT when run by GitHub Actions.

import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync, appendFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const www = join(root, 'www');
const fail = msg => { console.error(`\n✖ ${msg}\n`); process.exit(1); };
const warn = msg => console.log(process.env.GITHUB_ACTIONS ? `::warning::${msg}` : `⚠ ${msg}`);

// ---- 1. Copy the website files the app needs (not the build tools, the repo's .github folder,
//         or the large source images in assets/ that are only used to make the app icon)
const COPY = [
  'index.html',
  'css',
  'js',
  'data',
  'assets/img',
  'app/fonts',
  'app/app-bridge.js',
];
rmSync(www, { recursive: true, force: true });
mkdirSync(www, { recursive: true });
for (const item of COPY) {
  const from = join(root, item);
  if (!existsSync(from)) {
    if (item === 'assets/img') { warn('assets/img is missing, so the app copy has no tab icon (this does not affect the app icon).'); continue; }
    fail(`${item} is missing from the repo.`);
  }
  cpSync(from, join(www, item), { recursive: true, filter: src => !/(^|[\\/])\.(DS_Store|gitkeep)$/.test(src) });
}

// ---- 2. Read the version from the VERSION lines in index.html
const indexPath = join(www, 'index.html');
let html = readFileSync(indexPath, 'utf8');
const ver = (html.match(/<meta\s+name="app-version"\s+content="([^"]+)"/) || [])[1];
if (!ver) fail('Could not find <meta name="app-version" content="..."> in index.html.');
if (!/^\d+(\.\d+){0,3}$/.test(ver)) fail(`The app-version in index.html ("${ver}") should look like 1.0 or 1.2.3.`);

// ---- 3. Fonts: use the copies in app/fonts instead of Google Fonts, so the app works offline
const EXPECTED_FONTS = 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap';
const fontLink = html.match(/<link[^>]+href="(https:\/\/fonts\.googleapis\.com\/css2\?[^"]+)"[^>]*>\s*\n?/);
if (!fontLink) fail('Could not find the Google Fonts <link> in index.html.');
if (fontLink[1].replace(/&amp;/g, '&') !== EXPECTED_FONTS) {
  fail('The fonts loaded in index.html have changed, so the app\'s offline copies in app/fonts no longer match. Update app/fonts (and EXPECTED_FONTS in app/build-www.mjs) before building.');
}
html = html.replace(fontLink[0], '<link rel="stylesheet" href="app/fonts/fonts.css">\n');
html = html.replace(/<link\s+rel="preconnect"\s+href="https:\/\/fonts\.(googleapis|gstatic)\.com"[^>]*>\s*\n?/g, '');

// ---- 4. Load the app add-on before app.js (app.js is deferred, so the add-on runs first)
const appScript = html.match(/<script[^>]+src="js\/app\.js[^"]*"[^>]*><\/script>/);
if (!appScript) fail('Could not find the <script src="js/app.js"> tag in index.html.');
html = html.replace(appScript[0], `<script src="app/app-bridge.js"></script>\n${appScript[0]}`);

writeFileSync(indexPath, html);

// ---- 5. Friendly checks: things the add-on relies on. These only warn; the app still builds.
const appJs = readFileSync(join(www, 'js/app.js'), 'utf8');
for (const id of ['tnav', 'closeBook', 'moreMenu', 'moreBtn', 'filterBtn', 'filters', 'fileInput', 'exportAll'])
  if (!html.includes(`id="${id}"`)) warn(`index.html no longer has id="${id}"; check the back button and import/export in the app.`);
if (!/a\.download\s*=/.test(appJs)) warn('app.js no longer saves files with a.download; check that Export all still opens the share sheet in the app.');
if (!/key\s*===?\s*'Escape'/.test(appJs)) warn('app.js no longer seems to close things with the Escape key; check the back button in the app.');

const count = dir => readdirSync(dir, { withFileTypes: true }).reduce((n, e) => n + (e.isDirectory() ? count(join(dir, e.name)) : 1), 0);
console.log(`✔ www/ ready: ${count(www)} files, app version ${ver}`);
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `version=${ver}\n`);
