# Armorer's Tome

An outfit logbook for games, where each game gets its own leather-bound book. Designed for games that do not have outfit loadouts and/or transmog options, for example Crimson Desert or Enshrouded.

## Features

- **Tome Mode.** Every game is a book in a swipeable carousel. Tap a cover to open it and tap a page to turn it. Each page holds one outfit, so you see two per spread, or one at a time on phones.
- **Grid Gallery.** Every outfit appears as a parchment card, and a colour strip shows which book it belongs to.
- **Forge Outfit.** Saving an outfit adds a new page to the right book, then opens that book and turns to the new page. Choosing "New game…" creates a new book with its own cover colour.
- **Page actions.** Each page has download (JSON), duplicate, edit and delete buttons.
- **Filters.** You can search, filter by game, and filter by character or tag.
- **Backup.** Export all and Import work with JSON files, and imports can either be added to your books or replace them.

## Where outfits are saved

Outfits are kept in the browser's `localStorage`, so they belong to one browser on one device. To move them to another device or keep a backup, use **Export all**, then **Import** the file wherever you need it.

The storage key is `armorer_outfits_v2`. If you replace that page on the same site, your existing outfits appear automatically.

## Files

```
index.html       page structure
css/styles.css   all styling
js/app.js        books, animation, storage, forms, import and export
```
