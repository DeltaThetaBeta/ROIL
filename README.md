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

## Sync with Google Drive
**Lists → Sync → Google Drive → Connect Google Drive** on each device, signed in with the same Google account.

**How it works:**
- Every device keeps a full copy and works offline.
- Sync runs when ROIL opens, a few seconds after each change, when you're back online, and with **Sync now**.
- Merging uses the same rules as backups: the newest edit wins, and deletions and list changes carry across.
- Appearance settings stay per device.

**Where the data goes:** a **ROIL** folder in your Google Drive, containing `roil-data.json` plus one file per photo. ROIL can only see files it created there. Other devices download small photo previews right away, and full photos when you open an issue.

**Signing in:** Google sign-ins last about an hour. When the chip at the top says **Reconnect Drive**, tap it.

**Google Cloud setup** (already done for this app):
- OAuth client ID: Web application.
- Authorized JavaScript origin: `https://deltathetabeta.github.io`
- Authorized redirect URI: `https://deltathetabeta.github.io/ROIL/`
- The client ID is set in `index.html` (`GOOGLE_CLIENT_ID`).

A **ROIL server** destination will be added once self-hosting is running.

## Backups (do one weekly)
- **Download backup** / **Share backup** saves one file with every issue, photo, list and deletion.
- The chip at the top shows how long ago you last backed up. It turns orange after 7 days.
- Clearing the browser's site data, uninstalling the browser, or replacing a device without a backup would lose that device's log.

## Lists
Each issue records:
- **Department** and **planogram**.
- **Issue:** what's wrong, grouped into **categories** (Placement, Pricing & labels, Demo units, Condition, Safety & security).
- **Source:** who or what likely caused it, such as Truck / freight or Customer. One source can be the default for new issues; it starts as Truck / freight.
- **Cause:** why it happened.

Issue types in the **Demo units** category get a **RITE ticket submitted** checkbox and an optional ticket number. Until it's ticked, the issue shows *RITE not submitted*.

All of these are edited in **Lists**. Issues link to these entries, so:
- **Renaming** an entry updates every issue that uses it, including History, Stats, exports and share text.
- **Deleting an unused entry** removes it.
- **Deleting an entry that issues use** asks you to choose:
  - **Archive:** hidden from new issues, but past issues keep it and Stats still count it. Restore it any time from *Archived*.
  - **Merge into another entry:** moves those issues to it. Merging a department moves its planograms too.
- **Merging backups** between devices keeps entries added on either side, takes renames from the newer lists, and doesn't bring back anything deleted or merged away.

## Appearance
**Lists → Appearance** has these settings, saved per device and carried in backups:
- **Color theme:**
  - **ROIL**, which follows your device's light or dark setting.
  - Editor-style themes: GitHub Light and Dark, Solarized Light and Dark, Catppuccin Latte and Mocha, One Dark, Dracula, Nord, Monokai, Gruvbox Dark and Tokyo Night.
  - **Custom:** pick every color yourself (background, cards, text, secondary text, lines, accent and the status colors). **Customize these colors** starts from whatever theme is showing, and ROIL warns you if text would be hard to read.
- **Import VS Code theme:** load a VS Code color theme `.json` file to use its colors as your Custom theme.
- **Theme:** Auto, Light or Dark, for the ROIL theme.
- **Accent color:** 8 presets or any custom color. ROIL adjusts it automatically if needed so text stays readable.
- **Contrast:** Normal or High, for bright store lighting.
- **Status colors:** the theme's own colors, or Color-blind friendly.
- **Shape:** Rounded, Soft or Square.
- **Size:** Compact, Normal or Large.

## On a computer
To add a photo, click the photo box, drag a picture onto it, or paste a screenshot with **Ctrl+V**.

## Updating the app
1. Commit and push the changed files, and bump `VERSION` in `sw.js` with each release.
2. GitHub Pages republishes within a minute or two.
3. Each device switches to the new version the second time it opens ROIL with a connection.

Your data isn't touched by updates.
