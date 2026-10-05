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

## Logging an issue
- **Before and After photos.** Take the Before photo when you find it. The After box turns on when the status is **Fixed**, and adding an After photo sets the status to Fixed for you.
- **New issues start as Open.** Pick **Fixed** if you fixed it on the spot.
- **Saving as Fixed without an after photo** asks if you want to take one. You can turn this off.
- **Source and Cause** fold into one **Why** row, already set to the default source. Tap it to change them.
- **Issue types** are grouped in tabs by category (Placement, Pricing & labels, Demo units, and so on).
- **An after photo means Fixed.** While there's an after photo, **Open** and **Follow-up** are locked. Remove the after photo to change the status.
- **Changing photos later:** open the issue. Each photo has **Replace** and **Remove** (tap Remove twice to confirm), and an empty slot has **+ Add before photo** or **+ Add after photo**. Photo changes save right away, and other devices pick them up on the next sync. **Mark fixed** on the Open tab also offers an after photo.

Three layouts, set in **Lists → Appearance → Log screen layout**:
| Layout | What it looks like |
|---|---|
| **Steps** | One card at a time (Photos, Where, What's wrong, Why, Finish), with Back, Skip, Next and Save at the bottom of the screen. Picking an issue moves you to the next step. |
| **Sections** | Everything on one screen, in cards. |
| **Summary** | Photos, then one row per field. Tap a row to fill it in. |

**Auto** (the default) uses Steps on phones and Sections on computers. The Save button stays at the bottom of the screen, within thumb reach.

## SKUs, items and lock-ups
These are on the **Where** step or card:
- **Location SKU:** the 7-digit SKU from the shelf tag (ESL). On Android, tap **Scan** and point the camera at the tag's QR code. You can also type it, or use a Bluetooth scanner. Once ROIL has seen a SKU, it fills in the department and planogram you used last time. You can add a product name, and **View on bestbuy.com** opens the product.
- **Lock-up:** turn this on when customers can't reach the spot. If you pick Customer as the source for a lock-up issue, ROIL warns you. Stats shows lock-up issues separately, as employee-caused.
- **Items found:** scan (**Scan items** keeps the camera open) or type the UPC of each product that's actually there. Scanning the same product again adds one to its quantity. Each item is marked:
  - **Correct:** it belongs to this location's SKU.
  - **Wrong item:** it belongs somewhere else.
  - **Not known yet:** tap **Belongs here** or **Different product**, and ROIL remembers your answer.

  UPCs are checked as you add them, so a misread barcode is caught.
- **Already logged?** When you save, ROIL checks for an open issue with the same location SKU, an item in common, or the same planogram and issue. If there's one, you can open it instead of saving a duplicate. You can turn this off in Lists → Appearance → Log screen.

**Lists → Products** holds what ROIL has learned. Each SKU shows its UPCs, a product name and a bestbuy.com link. There's also a list of UPCs that aren't paired yet, which you can pair with a SKU. Products sync between your devices and are included in backups.

**Pair mode** (in Lists → Products) teaches ROIL quickly. Scan a shelf tag, then every product that belongs on it, then the next tag, and so on.

**Bluetooth or USB barcode scanners:** use one set to keyboard (HID) mode with Enter (or Tab) after each scan. It works anywhere in ROIL:
- In Pair mode, scans go to Pair mode.
- With an issue open, scans go to that issue.
- Otherwise, scans go to the Log screen.

A shelf-tag QR sets the location SKU, and a product barcode adds an item. For shelf-tag QR codes, the scanner needs to be a **2D** model.

On computers, Chrome can't use the camera to scan, so type codes or use a scanner there.

## More than one device
The easy way is **Sync with Google Drive** (below), which keeps every device in step automatically. Without sync, each device keeps its own log, and you can combine them with a backup file:
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
- **Log screen:** the layout (Auto, Sections, Summary or Steps), **Always show Source and Cause**, and **Ask for an after photo when saving as Fixed**. **Reset to default** leaves these alone.

## On a computer
To add a photo, click a photo box or drag a picture onto it. To paste a screenshot, press **Ctrl+V**. The first paste goes to Before and the next to After.

## Updating the app
1. Commit and push the changed files, and bump `VERSION` in `sw.js` with each release.
2. GitHub Pages republishes within a minute or two.
3. Each device switches to the new version the second time it opens ROIL with a connection.

Your data isn't touched by updates.
