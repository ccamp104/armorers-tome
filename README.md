# Armorer's Tome

An outfit logbook for games, where each game gets its own leather-bound book. Designed for games that do not have outfit loadouts and/or transmog options, for example Crimson Desert or Enshrouded.

This is a fan-made site, not affiliated with any game developer. All intellectual property and assets related to the games belong to their respective owners. 


## Features

- **Tome Mode.** Every game is a book in a swipeable carousel. Tap a cover to open it and tap a page to turn it. Each page holds one outfit, so you see two per spread, or one at a time on phones.
- **Grid Gallery.** Every outfit appears as a parchment card, and a colour strip shows which book it belongs to.
- **Forge Outfit.** Saving an outfit adds a new page to the right book, then opens that book and turns to the new page. Choosing "New game…" creates a new book with its own cover colour.
- **Outfit images.** Each outfit can have an optional image, cropped to a 3:4 portrait when it's added. It appears in a small frame beside the outfit name; tap the frame to enlarge it.
- **Extra slots.** Under the weapons in the Forge and Edit form, *Add a slot* adds up to three more slots per outfit, each set to Weapon or Accessory. They show on the page under Weapons and auxiliaries, use the game's weapons list for suggestions, and are kept in exports. An extra Accessory is labelled Accessory 2, and an extra Weapon becomes Weapon, then Weapon 2.
- **Notes.** Notes can run to several paragraphs, and the line breaks you type are kept. When a note is longer than the space on its page, a *See more…* link opens the whole note.
- **Equipment suggestions.** For games with an equipment list in the `data` folder (currently Crimson Desert and Enshrouded), the gear fields in the Forge and Edit form suggest matching items as you type. Pick one with a tap or the arrow keys and Enter, or keep typing anything you like. The top match is shown larger, with a big icon. Moving through the list with the arrow keys, or hovering with a mouse, enlarges that row instead. Picking a Plate, Leather, Chain or Cloth armour piece also adds a tag such as *Plate Armor*, and any armour with Kuku in its name adds *Kuku Gear*. Weapons don't add tags. Suggestions are on by default for every game that has a list. You can switch them off for any game in the **?** popup's settings; the choice is remembered in each browser, and Reset logbook switches them back on. To tag outfits saved before you turned it on, choose *Add armour tags…* in the settings. It checks every outfit's armour against the list and, after showing what it will add, tags the matches.
- **Item icons on pages.** Gear that matches a game's equipment list shows the item's icon beside it on book pages and gallery cards. Fuller pages use medium or compact icons so every slot fits. Icons load only for pages on screen, and the setting is in the **?** popup (on by default).
- **Page actions.** Each page has enlarge, download (JSON), duplicate, edit and delete buttons. Enlarge opens the page on its own over a blurred background, with bigger item icons, the full title and the whole note; tap outside it, the × or press Escape to close it.
- **Journal.** Every book has a journal spread at the back, opened with the *Journal* bookmark that lies across the bottom edge of the book (open or closed). The left page has an editable title and a scrolling text area with bold, italic, underline and bullet lists, in a choice of three fonts (Book, Sans or the handwritten Caveat). The right page holds up to three pictures, cropped to 3:4 like outfit images and laid out like a scrapbook; to change one, remove it and add it again. Ordinary page turns stop before the journal, and the bookmark (which then reads *Outfits*) turns back to the last outfit. It saves as you type.
- **Item Codex.** The third mode lists every item in a game's equipment list as a grid of icons and names, sorted by slot (Headgear, Chest, Cloak, Gloves, Legs, Boots), with weapons and accessories split into a section for each type. It uses the same search box and Game menu as the other modes; the Game menu lists only games with an equipment list, and slot chips replace the character tags. Search matches item names, types (such as Plate, Leather or Greatsword) and slot names. Items used in your outfits show an *In N outfits* badge. Tapping an item does nothing; it's a reference list.
- **Characters and tags.** Each outfit can have several tags, such as the characters who wear it. Type a name and press Enter to add it.
- **Filters.** You can search, filter by game, and filter by character or tag. On phones, search and filters open from the magnifying-glass button in the header, which shows a dot while a filter is on, and How it works, Export all and Import are in the ⋮ menu.
- **Help and settings.** The **?** button (in the ⋮ menu on phones) opens a guide in folding sections, followed by the settings: equipment suggestions for each game that has a list, *Add armour tags…*, *Delete a game…* (removes one book, its outfits and its journal) and *Reset logbook…*. Reset asks first and offers a backup; it then deletes every outfit, journal, image and added book in this browser, returns settings to their defaults, and starts again with the example outfits.
- **Backup.** Export all and Import work with JSON files, including images, and imports can either be added to your books or replace them.

## Where outfits are saved

Outfits are kept in the browser's `localStorage`, so they belong to one browser on one device. To move them to another device or keep a backup, use **Export all**, then **Import** the file wherever you need it.

The storage key is `armorer_outfits_v2`. Journals are saved under `armorer_journals_v1`, and their pictures in the image database described below. If you replace that page on the same site, your existing outfits appear automatically.

Images are kept in the same browser's IndexedDB storage, in a database named `armorer_images_v1`. Each image is resized and cropped in the browser when it's added, then saved twice as WebP (or JPEG where WebP isn't available): a 450 × 600 px copy for the enlarged view and a 180 × 240 px thumbnail for the page, usually around 30–70 KB together. Thumbnails load only when their page or card comes into view, and the larger copy only when you enlarge it.

Export all includes the journals, and writes each image into the JSON file as a data URL, so a backup is complete on its own. Its file name includes the date and time of the export, for example `armory-logbook-2026-09-30_14-05.json`.

## Equipment lists

The `data` folder holds optional equipment lists, one per game, named after the game in lowercase with hyphens: `data/crimson-desert.json` for Crimson Desert. A list only downloads when someone opens the Forge or Edit form for that game, unless suggestions are switched off for it, and games without one work exactly as before. Suggestions need the site to be served from a web address, such as GitHub Pages or a local server, not opened straight from a file.

A list can be a JSON file or a CSV spreadsheet (`data/<game>.csv`). In a spreadsheet, use three columns with the headings `slot`, `name` and `type`, one item per row. The slot is one of `headgear`, `chest`, `cloak`, `gloves`, `legs`, `boots` or `weapons`; the weapons list feeds the main hand, off hand and accessory fields. `type` is optional and shows as a small label, such as Plate or Bow. If both files exist, the JSON one is used.

### Item icons

Every suggestion has a small square on the left showing the item's icon. The Crimson Desert icons are in `data/icons/crimson-desert/`: 1,042 images at 64 × 64 px, about 2 KB each and 2.1 MB in total. They come from the same fan database as the item names and are used under Pearl Abyss's Fan Content Guidelines. If an icon is missing, the square shows the slot's own symbol instead, such as a crown for head or a sword for weapons. To add icons for another game, or replace these:

1. Put the icon images in `data/icons/crimson-desert/`. Small square images work best, ideally 64 × 64 px WebP files of a few KB each.
2. Name each file as listed in the third column of `crimson-desert.json`, for example `itemicon_prefab_cd_phm_00_hel_0028_index02.webp` for Alpha Wolf Helm. These are the items' in-game icon file names, so icons taken from the game files already have the right names.
3. In `crimson-desert.json`, change `"icons": { "enabled": false` to `"icons": { "enabled": true`.

Icons load only as their rows appear in the dropdown, at most eight at a time, so the full set never downloads at once. Any item whose icon file is missing keeps showing the slot symbol. For a CSV list, add an `icon` column with the file names; icons then load from `data/icons/<game>/`. The item icons belong to Pearl Abyss.

The Enshrouded list (`data/enshrouded.json`, with a spreadsheet copy in `enshrouded.csv`) was compiled from the fan-made [Enshrouded Vault](https://enshrouded.gamevault.in/) database in October 2026. It has 764 items: 90 head, 83 chest, 77 hand, 82 leg and 83 foot pieces, and 349 weapons, shields and rings. Cosmetic pieces are included, since they change an outfit's look. Enshrouded has no cloak slot, so the Cloak field has no suggestions. It has no icons yet, so its suggestions show slot symbols. Item names belong to Keen Games.

`crimson-desert.csv` is a spreadsheet copy of the same list, for viewing or editing. If you edit the CSV, delete or rename `crimson-desert.json` so the page reads your spreadsheet instead.

The Crimson Desert list was compiled from the fan-made [Crimson Desert Database](https://crimsondesert.gaming.tools/) for game version 2.0.0, updated 25 August 2026. It has 1,054 items: 134 headgear, 133 chest, 98 cloaks, 81 gloves, 88 boots and 520 weapons and shields. Items that can't actually be equipped, such as the Axiom Bracelets, Invisible Longsword and Broken Visione, are left out. Crimson Desert has no separate leg armour, so the Legs field has no suggestions. Item names belong to Pearl Abyss.
This page is non-commercial and is shared with friends under Pearl Abyss's [Fan Content Guidelines](https://crimsondesert.pearlabyss.com/en-US/Policy?_policyNo=130).

## Files

```
index.html       page structure
css/styles.css   all styling
js/app.js        books, animation, storage, forms, import and export
data/            optional equipment lists, one per game
```
