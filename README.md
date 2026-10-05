# ROIL: Retail Operations Issue Log

Log floor issues with a photo, follow up on open ones, share them to Teams, and see what goes wrong most and where. Works on Android, iPhone, tablets and computers, in Chrome, Edge or Safari.

**Everything you log stays on the device you log it on**, in that browser. GitHub only hosts the app's files; it never sees your issues or photos.

Live at: https://deltathetabeta.github.io/ROIL/ (the capital `ROIL` matters)

## Install it on each device
| Device | How |
|---|---|
| Android | Open the address in Chrome, then Chrome menu → **Add to home screen** (or **Install app**) |
| iPhone / iPad | Open it in Safari, then **Share → Add to Home Screen**. **Required on iPhone:** otherwise Safari erases the data after 7 days without a visit. |
| Windows / Mac | Open it in Chrome or Edge, then the **install icon** in the address bar (or browser menu → Install ROIL) |

Installing keeps your data from being cleared and opens ROIL like an app. Check **Lists → Backup & storage** says **kept permanently**.

## More than one device
Each device keeps its own log. There's no automatic sync. To combine them, use a backup file:
1. On device A: **Lists → Share backup** (to yourself in Teams or Google Drive), or **Download backup**.
2. On device B: **Lists → Restore or merge a backup**, then pick the file.

Merging is safe to repeat in either direction:
- It adds new issues and keeps whichever version of an issue was edited most recently.
- Deletions carry over, unless the issue was edited after it was deleted.
- An older backup never brings back something you deleted.

## Backups (do one weekly)
- **Download backup** / **Share backup** saves one file with every issue, photo, list and deletion.
- The chip at the top shows how long ago you last backed up. It turns orange after 7 days.
- Clearing the browser's site data, uninstalling the browser, or replacing a device without a backup would lose that device's log.

## Appearance
**Lists → Appearance** has these settings, saved per device and carried in backups:
- **Theme:** Auto, Light or Dark.
- **Accent color:** 8 presets or any custom color. ROIL adjusts it automatically if needed so text stays readable.
- **Contrast:** Normal or High, for bright store lighting.
- **Status colors:** Default or Color-blind friendly.
- **Shape:** Rounded, Soft or Square.
- **Size:** Compact, Normal or Large.

## On a computer
To add a photo, click the photo box, drag a picture onto it, or paste a screenshot with **Ctrl+V**.

## Updating the app
1. Commit and push the changed files, and bump `VERSION` in `sw.js` with each release.
2. GitHub Pages republishes within a minute or two.
3. Each device switches to the new version the second time it opens ROIL with a connection.

Your data isn't touched by updates.
