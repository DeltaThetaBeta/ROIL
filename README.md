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
**Scan button:** on phones, the bottom bar has a **Scan** button on every step. It keeps the camera open:
- A shelf tag's QR sets the location SKU (and fills in the department and planogram if ROIL knows the SKU).
- Each product barcode adds an item found.

So after taking the photo, you can scan the tag and the items in one go, then pick what's wrong.

- **Location SKU** (top of the **Where** step): the 7-digit SKU from the shelf tag (ESL). On Android, tap **Scan** and point the camera at the tag's QR code. You can also type it, or use a Bluetooth scanner. Once ROIL has seen a SKU, it fills in the department and planogram where you've logged it most. If the product is in more than one planogram, the other places show under the SKU as **Logged at** buttons; tap one to switch. You can add a product name, and **View on bestbuy.com** opens the product.
- **Lock-up** (under the SKU): turn this on when customers can't reach the spot. If you pick Customer as the source for a lock-up issue, ROIL warns you. Stats shows lock-up issues separately, as employee-caused.
- **The shelf tag's product counts as the first item found.** Most of the time the product at fault is the one the tag is for, so setting the location SKU adds it to Items found, marked "from the shelf tag". Scanning that product's own barcode confirms it, a different product is added alongside it, and you can remove it if it isn't there.
- **Items found** (on the **What's wrong** step): it opens automatically for Placement and Pricing & labels issues, or once you've scanned an item. For other issues, tap **+ Items found**. Scan (the camera stays open) or type the UPC of each product that's actually there. Scanning the same product again adds one to its quantity. Each item is marked:
  - **Correct:** it belongs to this location's SKU.
  - **Wrong item:** it belongs somewhere else.
  - **Not known yet:** tap **Belongs here** or **Different product**, and ROIL remembers your answer.

  UPCs are checked as you add them, so a misread barcode is caught.
- **Editing an item:** tap an item's code to open it. You can:
  - Fix the code.
  - Type a quantity.
  - Switch it between **Correct**, **Wrong item** and **Not sure**. ROIL remembers this for future scans.
  - Set which product SKU a UPC is, and the product's name.
  - Remove it.

  Tap **Done** to save, or tap the code again to close it. The − and + buttons still work without opening it.
- **Already logged?** When you save, ROIL checks for an open issue with the same location SKU, an item in common, or the same planogram and issue. If there's one, you can open it instead of saving a duplicate. You can turn this off in Lists → Appearance → Log screen.

**Lists → Products** holds what ROIL has learned. Each SKU shows its UPCs, a product name, a bestbuy.com link and the places it's been logged (you can forget a wrong one). There's also a list of UPCs that aren't paired yet, which you can pair with a SKU. Products sync between your devices and are included in backups.

**Pair mode** (in Lists → Products) teaches ROIL quickly. Scan a shelf tag, then every product that belongs on it, then the next tag, and so on.

**Bluetooth or USB barcode scanners:** use one set to keyboard (HID) mode with Enter (or Tab) after each scan. It works anywhere in ROIL:
- In Pair mode, scans go to Pair mode.
- With an issue open, scans go to that issue.
- Otherwise, scans go to the Log screen.

A shelf-tag QR sets the location SKU, and a product barcode adds an item. For shelf-tag QR codes, the scanner needs to be a **2D** model.

On computers, Chrome can't use the camera to scan, so type codes or use a scanner there.

## Downstock
Switch between **Issues** and **Downstock** at the top of the screen. Downstock has its own tabs, **Today** and **Days**, and shares Lists, Products, scanning and sync with Issues.

- **Today** is a board of every area. An area is a planogram, or a whole department if it has no planograms.
  - **Statuses:**
    - **Not done**
    - **Partial**
    - **Done** (the empties are filled)
    - **Follow-up**, with a reason
  - **Extras** you can add to any area: **Filled** (restocked beyond the empties) and **LaserLine** (fronted).
  - A coverage bar shows how much of the store is done today, and each area shows when it was last done.
  - The board starts fresh each day, and every day is kept.
- **Runs:** tap **Start a run** and pick the planograms you're about to walk. You can pick them from the list or a saved group, or by scanning shelf tags. Tap **Finish run** when you're done:
  - Everything is marked **Done** unless you change it.
  - You can add Filled or LaserLine, or mark an area Partial or Follow-up.
  - **Save as a group** remembers planograms you always walk together.
- **Follow-up reasons** (pick as many as apply to one planogram):
  - **Couldn't find in overstock** asks whether a **Delta Buster** was submitted (with an optional number). Until it is, a **"Delta Buster not submitted"** pill shows.
  - **Needs equipment or help** asks what's needed (pick any): a lift (needs a spotter), a ladder, a second person, or a heavy or bulky item.
  - **Waiting on PRS supplies** asks what's short (pick any): spider wraps, clamshells, limit-one tags or other.
  - **Overstock in the wrong spot or mixed**, **Overstock blocked** and **Other** are the defaults too.
- **Partial** asks why: ran out of time, pulled to another task, store opened (the lift needs a spotter) or other. The note is for things like "stopped at bay 4".

  You can rename, add or hide reasons in Lists → Downstock.
- **Carried over:** follow-ups and partial areas from earlier days stay at the top until they're done.
- **Do these first: top stock.** Mark top-stock sections in Lists → Downstock, and they're listed first each morning, together with lift follow-ups from earlier days.
- **Not downstocked:** in Lists → Downstock, leave out departments or planograms that never get downstocked, so they don't count against coverage.
- **Someone else's work:** mark an area **Done by someone else**, then spot-check it later as **Looks good** or **Missed empties** (stock was available but the spot was left empty).
- **Log issue here** on any area opens the issue form with the department and planogram filled in. The issue is tagged **Found while downstocking**.
- **Shelf tags:** on the board, scanning a shelf tag with a Bluetooth scanner opens that planogram.
- **Trucks:** the board tracks each truck until it's worked.
  - **Schedule** (Lists → Downstock → Truck schedule): RDC (brown goods) is Monday and DDC (white goods) is Tuesday. The holiday schedule adds Wednesday and Thursday.
  - **Arrivals:** on a scheduled day the board asks **Has it arrived?** For an odd day, use **Arrived today**. To log a truck after the fact, use **Add past**. Tap **Edit** on a truck card, a truck row in the Calendar, or a truck under Days → Recent trucks to fix any date or detail, or to delete it.
  - **Each truck's card has:**
    - **Before it arrives:** the truck email usually comes the evening before or that morning. Tap **Add load from email** on the "due today" prompt, or use **Add past** with **Not arrived yet** turned on (up to 3 days ahead). The truck waits on the board as **expected**. When it shows up, tap **Arrived**. The next morning, the card offers **Arrived Mon** (the day it was due) or **Arrived today** (for a truck that came a day late). Expected trucks don't count in stats until then.
    - **Load**: pieces and CUBE (cu ft) from the email, plus an optional note. For RDC, ROIL estimates the pallet count from the CUBE: 48×40 in pallets loaded 100 in high, about 111 cu ft each (change the height in Lists → Downstock → Truck schedule). Enter the real count after the unload. Once two trucks have real counts, ROIL estimates from your store's own average. DDC isn't palletized.
    - **Live unload** or **Dropped trailer**: DDC starts as dropped and RDC as live, and you can switch either one. For dropped trailers, the trailer's stage is **Emptied → Pickup requested → Picked up**.
    - **Unbroken truck pallets** (− / +).
    - **Store pallets waiting** (none / some / a lot).
    - **Freight left on the sales floor** by department. Each department can log a **Freight left on sales floor** issue with Source: Truck / freight and the truck already filled in.
    - **Truck finished.**
  - **Partial** has a **Working truck leftovers** reason.
- **The week runs Saturday to Friday** and is named by its Monday, so weekend work counts toward the next week.
  - Each Monday, older follow-ups fold into **From last week**. Unsubmitted Delta Busters and lift jobs stay on the board.
  - "Not done lately" counts weekdays only.
- **Days** shows **This week**: coverage, Delta Busters, truck leftover days, freight left on the floor and each truck's timeline. **Copy week summary** gives you text for the Monday huddle. Days also shows coverage per day, Delta Busters this month, areas not done lately, and follow-up reasons. **Copy summary** gives you text for Teams.

**PRS not followed** is an issue type under Safety & security. Pick what was missed: spider wrap, clamshell, limit one or other.

**Freight left on sales floor** is an issue type in the **Truck / freight** category, with **Which truck: RDC / DDC / Not sure**.

## Calendar
**Downstock → Calendar** (also **Issues → Stats → Week calendar**) shows one week, Saturday to Friday, as a chart:
- **Events:** your own, spanning days. The kinds are reset / planogram change, holiday schedule, inventory count, staffing (someone out) and other. Tap **+ Event**, or tap a bar to edit it. A **Holiday schedule** event also turns on the holiday truck days while it lasts.
- **Trucks:** one row per truck, and one per dropped trailer, colored by stage:
  - **Work:** unloading, then leftovers (darker = more left), then finished ✓.
  - **Trailer:** in the bay, then empty and waiting for pickup (☎ = pickup requested), then picked up ✓.
- **Downstock coverage** for each day.
- **Issues** logged (+) and fixed (✓) each day. ⚑ marks freight left on the sales floor.
- **Weekly totals:** issues logged, issues fixed, and the change in open issues.

Tap a day to see everything that happened that day. Use ‹ › to move between weeks.

## Fixing the past
- **Downstock:** use ‹ › next to the date on the Today board to view an earlier day. Changes there are saved to that day. The Calendar's day sheet also has **Edit downstock for this day**.
- **Trucks:** use **Add past** or **Edit** (see Trucks above).
- **Issues:** on the issue screen, **Change dates** lets you set when it was logged and when it was fixed.

## Debug tools
**Lists → Debug tools** shows:
- the app version
- how much data is stored
- the sync status and any changes waiting to sync
- the last errors on this device

It also has buttons to:
- **Sync now**
- **Check for app update** and **Reload app**
- **Copy debug report**, to paste into a chat when something's wrong
- **Download data** (no photos)
- **Re-ask skipped truck days**

## Notes for later
Tap **Note** at the top of any screen to jot down a bug, an improvement or a feature idea while you're on the floor. You can also tap the mic on the phone's keyboard and talk instead of typing.
- **Context is saved with each note:** the screen you were on and the app version.
- **Read them in Lists → Notes for later.** Tick off the ones that are done, or **Copy** or **Share** them (for example, to paste into a chat).
- **Notes sync to your other devices** and are included in backups.
- **What you've typed is kept if you close the note without saving.**

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
1. Commit and push the changed files. With each release, bump `VERSION` in `sw.js` and `APP_VERSION` in `index.html` to the same value.
2. GitHub Pages republishes within a minute or two.
3. Each device switches to the new version the second time it opens ROIL with a connection.

Your data isn't touched by updates.
