// Adjusts the Android project that "npx cap add android" generates on each build:
//   - version name (from index.html) and version code (from the workflow run number)
//   - edge-to-edge display, so the page's safe-area padding works under the status bar
//   - dark brown window and splash background instead of white; the splash shows the app icon
//     (Android's own splash style, the same on old and new phones)
//   - the app icon, made from assets/icon-foreground.png, icon-background.png and icon-only.png
//
// Run after "npx cap add android":
//   VERSION_NAME=1.0 VERSION_CODE=7 node app/patch-android.mjs
// The workflow does this for you. Stops with a clear message if the generated project has changed shape.

import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const android = join(root, 'android');
const res = join(android, 'app/src/main/res');
const BG = '#1E140F';   // the site's darkest wood colour (--table-2)
const fail = msg => { console.error(`\n✖ ${msg}\n`); process.exit(1); };
const done = msg => console.log(`✔ ${msg}`);
const read = p => { if (!existsSync(p)) fail(`Expected ${p.replace(root + '/', '')} in the generated Android project.`); return readFileSync(p, 'utf8'); };

const config = JSON.parse(read(join(root, 'capacitor.config.json')));
const versionName = process.env.VERSION_NAME || (read(join(root, 'index.html')).match(/name="app-version"\s+content="([^"]+)"/) || [])[1];
const versionCode = parseInt(process.env.VERSION_CODE || '1', 10);
if (!versionName) fail('No version name: set VERSION_NAME or the app-version meta tag in index.html.');
if (!(versionCode >= 1 && versionCode <= 2100000000)) fail(`Bad version code "${process.env.VERSION_CODE}".`);

// ---- 1. app/build.gradle: version numbers, and the library that provides edge-to-edge
const gradlePath = join(android, 'app/build.gradle');
let gradle = read(gradlePath);
const vc = /versionCode\s*=?\s*\d+/, vn = /versionName\s*=?\s*"[^"]*"/;
if (!vc.test(gradle) || !vn.test(gradle)) fail('Could not find versionCode / versionName in android/app/build.gradle.');
gradle = gradle.replace(vc, `versionCode ${versionCode}`).replace(vn, `versionName "${versionName}"`);
if (!gradle.includes('androidx.activity:activity:')) {
  const appcompat = /(\n(\s*)implementation\s+"androidx\.appcompat:appcompat:[^"]+"\n)/;
  if (!appcompat.test(gradle)) fail('Could not find the appcompat dependency in android/app/build.gradle.');
  gradle = gradle.replace(appcompat, (m, line, indent) => `${line}${indent}implementation "androidx.activity:activity:$androidxActivityVersion"\n`);
}
writeFileSync(gradlePath, gradle);
done(`version ${versionName} (code ${versionCode})`);

// ---- 2. MainActivity: switch on edge-to-edge (recommended by Capacitor's System Bars docs)
const pkg = config.appId;
const activityPath = join(android, 'app/src/main/java', ...pkg.split('.'), 'MainActivity.java');
const activity = read(activityPath);
if (!activity.includes('EdgeToEdge.enable')) {
  if (!/class MainActivity extends BridgeActivity\s*\{\s*\}/.test(activity)) fail('MainActivity.java is not the plain Capacitor template any more; edge-to-edge was not added.');
  writeFileSync(activityPath, `package ${pkg};

import android.os.Bundle;
import androidx.activity.EdgeToEdge;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        EdgeToEdge.enable(this);
        super.onCreate(savedInstanceState);
    }
}
`);
}
done('edge-to-edge display');

// ---- 3. Colours: dark window background and splash background
writeFileSync(join(res, 'values/armorer_colors.xml'), `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="armorer_bg">${BG}</color>
</resources>
`);
const stylesPath = join(res, 'values/styles.xml');
let styles = read(stylesPath);
const launch = /(<style name="AppTheme\.NoActionBarLaunch" parent="Theme\.SplashScreen">\s*\n)/;
const main = /(<style name="AppTheme\.NoActionBar" parent="[^"]+">\s*\n)/;
if (!launch.test(styles) || !main.test(styles)) fail('android/app/src/main/res/values/styles.xml is not the expected Capacitor template.');
if (!styles.includes('armorer_bg')) {
  styles = styles
    .replace(launch, `$1        <item name="windowSplashScreenBackground">@color/armorer_bg</item>\n        <item name="windowSplashScreenAnimatedIcon">@mipmap/ic_launcher_foreground</item>\n`)
    .replace(main, `$1        <item name="android:windowBackground">@color/armorer_bg</item>\n`)
    .replace('<item name="android:background">@drawable/splash</item>', '<item name="android:background">@color/armorer_bg</item>');
}
writeFileSync(stylesPath, styles);
done('dark window and splash background');

// ---- 4. App icon and splash images
const sharp = require('sharp');
const asset = name => { const p = join(root, 'assets', name); if (!existsSync(p)) fail(`assets/${name} is needed for the app icon.`); return p; };
const fg = asset('icon-foreground.png'), bg = asset('icon-background.png'), only = asset('icon-only.png');
// Capacitor's placeholder splash pictures are no longer used: replace them with one small plain image
for (const d of readdirSync(res)) if (d.startsWith('drawable') && existsSync(join(res, d, 'splash.png'))) rmSync(join(res, d, 'splash.png'));
mkdirSync(join(res, 'drawable'), { recursive: true });
await sharp({ create: { width: 48, height: 48, channels: 3, background: BG } }).png().toFile(join(res, 'drawable/splash.png'));
// Android 8 and later: two full-size 108dp layers that the phone crops into its own shape
const LAYER = { mdpi: 108, hdpi: 162, xhdpi: 216, xxhdpi: 324, xxxhdpi: 432 };
// Android 7: a ready-made 48dp square icon and a round one
const LEGACY = { mdpi: 48, hdpi: 72, xhdpi: 96, xxhdpi: 144, xxxhdpi: 192 };
for (const d of Object.keys(LAYER)) {
  const dir = join(res, `mipmap-${d}`);
  mkdirSync(dir, { recursive: true });
  for (const f of readdirSync(dir)) if (f.startsWith('ic_launcher')) rmSync(join(dir, f));
  await sharp(fg).resize(LAYER[d], LAYER[d]).png().toFile(join(dir, 'ic_launcher_foreground.png'));
  await sharp(bg).resize(LAYER[d], LAYER[d]).png().toFile(join(dir, 'ic_launcher_background.png'));
  const n = LEGACY[d];
  await sharp(only).resize(n, n).png().toFile(join(dir, 'ic_launcher.png'));
  const circle = Buffer.from(`<svg width="${n}" height="${n}"><circle cx="${n / 2}" cy="${n / 2}" r="${n / 2}"/></svg>`);
  await sharp(only).resize(n, n).composite([{ input: circle, blend: 'dest-in' }]).png().toFile(join(dir, 'ic_launcher_round.png'));
}
const adaptive = `<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@mipmap/ic_launcher_background" />
    <foreground android:drawable="@mipmap/ic_launcher_foreground" />
</adaptive-icon>
`;
mkdirSync(join(res, 'mipmap-anydpi-v26'), { recursive: true });
writeFileSync(join(res, 'mipmap-anydpi-v26/ic_launcher.xml'), adaptive);
writeFileSync(join(res, 'mipmap-anydpi-v26/ic_launcher_round.xml'), adaptive);
done('app icon and splash');
