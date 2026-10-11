# Armorer's Tome

An outfit logbook for games, where each game gets its own leather-bound book. Designed for games that do not have outfit loadouts and/or transmog options, for example Crimson Desert or Enshrouded.

This is a fan-made site, not affiliated with any game developer. All intellectual property and assets related to the games belong to their respective owners. 

## Features

Armorer's Tome has three ways to browse, switched with the buttons at the top of the page.

- **Tome Mode.** Each game is a leather-bound book in a swipeable carousel. Tap a cover to open it and tap a page to turn it; each page is one outfit. A *Journal* bookmark on every book opens a two-page journal at the back, with space for your own notes and up to three pictures.
- **Grid Gallery.** Every outfit at once, as parchment cards. Tap a card to see it enlarged.
- **Item Codex.** A searchable list of every item in a game's equipment list, with icons, sorted by slot. Tick items you own, show only owned or missing items, and tap an item marked *In N outfits* to see the outfits that use it.

In every mode you can search, and filter by game. In the books and the gallery you can also filter by character or tag.

### Creating an outfit

Press **Forge Outfit**, choose the game's book, give the outfit a name, and fill in the gear slots you want. For games with an equipment list, the gear fields suggest matching items as you type. You can also add tags (such as the character who wears it), notes and a picture. Saving adds a new page to that game's book and turns to it.

### Adding a new game

In the Forge Outfit form, choose **New game…** in the book menu and type the game's name. Saving the outfit creates a new book for that game, with its own cover colour.

### Settings and reset

The **?** button (in the ⋮ menu on phones) opens a short guide followed by the settings. There you can switch equipment suggestions and item icons on or off, add armour tags to older outfits, and delete a single game's book. **Reset logbook…** deletes everything saved in this browser (outfits, journals, pictures and added books), returns the settings to their defaults, and starts again with three example outfits. It asks first and offers a backup.

## Storage

Outfits are kept in the browser's `localStorage`, so they belong to one browser on one device. To move them to another device or keep a backup, use **Export all**, then **Import** the file wherever you need it. Imports can be added to your books or replace them.

Outfits are stored under `armorer_outfits_v2`, journals under `armorer_journals_v1`, and the items you've ticked as owned under `armorer_owned_v1`.

Pictures are kept in the same browser's IndexedDB storage, in a database named `armorer_images_v1`.

Export all includes your journals, ticked items and pictures, so a backup is complete on its own. Its file name includes the date and time of the export, for example `armory-logbook-2026-09-30_14-05.json`.

## Equipment lists

The `data` folder holds an equipment list for each supported game, named after the game in lowercase with hyphens, for example `data/crimson-desert.json`. A list can also be a CSV spreadsheet (`data/<game>.csv`) with the columns `slot`, `name` and `type`; if both exist, the JSON file is used. The lists power the gear suggestions and the Item Codex, and they need the site to be opened from a web address (such as GitHub Pages), not straight from a file. Item icons, where a game has them, are in `data/icons/<game>/`.

The lists were first compiled from two fan-made databases: [Crimson Desert Database](https://crimsondesert.gaming.tools/) for Crimson Desert, and [Enshrouded Vault](https://enshrouded.gamevault.in/) for Enshrouded. That was only the initial compile; the lists have been edited since.

## Files

```
index.html       page structure
css/styles.css   all styling
js/app.js        books, animation, storage, forms, import and export
data/            equipment lists and item icons, one set per game
```

## Version

Current version: **v1.0**

The version is set at the top of `index.html`, and the same number is added to the stylesheet and script links as `?v=1.0`. Changing it makes browsers download the new files straight away instead of using old saved copies.
