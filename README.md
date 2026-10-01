# Armorer's Tome

An outfit logbook for games, where each game gets its own leather-bound book. Designed for games that do not have outfit loadouts and/or transmog options, for example Crimson Desert or Enshrouded.

## Features

- **Tome Mode.** Every game is a book in a swipeable carousel. Tap a cover to open it and tap a page to turn it. Each page holds one outfit, so you see two per spread, or one at a time on phones.
- **Grid Gallery.** Every outfit appears as a parchment card, and a colour strip shows which book it belongs to.
- **Forge Outfit.** Saving an outfit adds a new page to the right book, then opens that book and turns to the new page. Choosing "New game…" creates a new book with its own cover colour.
- **Outfit images.** Each outfit can have an optional image, cropped to a 3:4 portrait when it's added. It appears in a small frame beside the outfit name; tap the frame to enlarge it.
- **Notes.** Notes can run to several paragraphs, and the line breaks you type are kept. When a note is longer than the space on its page, a *See more…* link opens the whole note.
- **Equipment suggestions (optional).** Turn on *Equipment suggestions* in the Forge or Edit form, and for games with an equipment list in the `data` folder (currently Crimson Desert) the gear fields suggest matching items as you type. Pick one with a tap or the arrow keys and Enter, or keep typing anything you like. Picking a Plate, Leather, Chain or Cloth armour piece also adds a tag such as *Plate Armor*. The switch is off by default, is remembered in each browser, and is switched off again by Reset logbook.
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

## Equipment lists

The `data` folder holds optional equipment lists, one per game, named after the game in lowercase with hyphens: `data/crimson-desert.json` for Crimson Desert. A list only downloads once someone has turned on equipment suggestions and opens the Forge or Edit form for that game, and games without one work exactly as before. Suggestions need the site to be served from a web address, such as GitHub Pages or a local server, not opened straight from a file.

A list can be a JSON file or a CSV spreadsheet (`data/<game>.csv`). In a spreadsheet, use three columns with the headings `slot`, `name` and `type`, one item per row. The slot is one of `headgear`, `chest`, `cloak`, `gloves`, `legs`, `boots` or `weapons`; the weapons list feeds the main hand, off hand and accessory fields. `type` is optional and shows as a small label, such as Plate or Bow. If both files exist, the JSON one is used.

`crimson-desert.csv` is a spreadsheet copy of the same list, for viewing or editing. If you edit the CSV, delete or rename `crimson-desert.json` so the page reads your spreadsheet instead.

The Crimson Desert list was compiled from the fan-made [Crimson Desert Database](https://crimsondesert.gaming.tools/) for game version 2.0.0, updated 25 August 2026. It has 1,059 items: 136 headgear, 135 chest, 98 cloaks, 81 gloves, 88 boots and 521 weapons and shields. Crimson Desert has no separate leg armour, so the Legs field has no suggestions. Item names belong to Pearl Abyss.

## Files

```
index.html       page structure
css/styles.css   all styling
js/app.js        books, animation, storage, forms, import and export
data/            optional equipment lists, one per game
```
