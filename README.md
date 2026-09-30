# Armorer's Tome

An outfit logbook for games, where each game gets its own leather-bound book. Designed for games that do not have outfit loadouts and/or transmog options, for example Crimson Desert or Enshrouded.

## Features

- **Tome Mode.** Every game is a book in a swipeable carousel. Tap a cover to open it and tap a page to turn it. Each page holds one outfit, so you see two per spread, or one at a time on phones.
- **Grid Gallery.** Every outfit appears as a parchment card, and a colour strip shows which book it belongs to.
- **Forge Outfit.** Saving an outfit adds a new page to the right book, then opens that book and turns to the new page. Choosing "New game…" creates a new book with its own cover colour.
- **Outfit images.** Each outfit can have an optional image, cropped to a 3:4 portrait when it's added. It appears in a small frame beside the outfit name; tap the frame to enlarge it.
- **Page actions.** Each page has download (JSON), duplicate, edit and delete buttons.
- **Characters and tags.** Each outfit can have several tags, such as the characters who wear it. Type a name and press Enter to add it.
- **Filters.** You can search, filter by game, and filter by character or tag.
- **Reset.** The **?** button's popup has a *Reset logbook…* link. After a warning, it deletes every outfit, image and added book in this browser and starts again with the example outfits. It offers to export a backup first.
- **Backup.** Export all and Import work with JSON files, including images, and imports can either be added to your books or replace them.

## Where outfits are saved

Outfits are kept in the browser's `localStorage`, so they belong to one browser on one device. To move them to another device or keep a backup, use **Export all**, then **Import** the file wherever you need it.

The storage key is `armorer_outfits_v2`. If you replace that page on the same site, your existing outfits appear automatically.

Images are kept in the same browser's IndexedDB storage, in a database named `armorer_images_v1`. Each image is resized and cropped in the browser when it's added, then saved twice as WebP (or JPEG where WebP isn't available): a 450 × 600 px copy for the enlarged view and a 180 × 240 px thumbnail for the page, usually around 30–70 KB together. Thumbnails load only when their page or card comes into view, and the larger copy only when you enlarge it.

Export all writes each image into the JSON file as a data URL, so a backup is complete on its own. Its file name includes the date and time of the export, for example `armory-logbook-2026-09-30_14-05.json`.

## Files

```
index.html       page structure
css/styles.css   all styling
js/app.js        books, animation, storage, forms, import and export
```
