# Hoist Maintenance Test — Setup Guide

**Created by Albaraa Alghamdi**
HSE Engineer · 2026

---

A multilingual (English / Arabic / Hindi) safety knowledge test app for
tower crane hoist maintenance workers.

## Features

- 10 questions based on OSHA, ASME B30.7, ISO 4309, EN 14492 standards
- 80% pass mark
- Three languages, easy switching, full RTL support for Arabic
- Worker name + ID logged with every test
- Records saved permanently on each phone (no internet needed)
- Supervisor PIN lock on records screen (default PIN: **1234** — change after first use)
- Export records to CSV (for Excel) or PDF (for filing)
- Installable to phone home screen as a native-like app
- Works fully offline after first load

## Files

- `index.html`  — the entire app
- `manifest.json` — makes it installable as an app
- `sw.js` — makes it work offline

## Free hosting — three options, all free forever

### Option 1 — GitHub Pages (recommended)

1. Go to https://github.com and create a free account.
2. Click **New repository**, name it `hoist-test`, set to **Public**, click **Create**.
3. Click **Add file → Upload files**, drag in `index.html`, `manifest.json`, `sw.js`. Click **Commit**.
4. Click **Settings → Pages**.
5. Under **Source**, choose **Deploy from a branch**, select `main`, folder `/ (root)`. Save.
6. Wait 1–2 minutes. Your app is live at:
   `https://YOUR-USERNAME.github.io/hoist-test/`
7. Send that link to your workers.

### Option 2 — Netlify Drop (easiest, no account needed for first deploy)

1. Go to https://app.netlify.com/drop
2. Drag the whole `hoist-app` folder onto the page.
3. Get a link like `https://random-name-12345.netlify.app`
4. (Optional) Create a free account to keep the link permanent and rename it.

### Option 3 — Cloudflare Pages

1. https://pages.cloudflare.com → free account.
2. **Upload assets**, drop the folder, get a link. Free forever, fast worldwide.

All three have generous free tiers that easily cover any construction site.

## How workers install it on their phone

### Android (Chrome)
1. Open the link in Chrome.
2. Tap the menu (⋮) → **Install app** or **Add to Home screen**.
3. The app icon now sits on the home screen and opens like a native app.

### iPhone (Safari)
1. Open the link in Safari.
2. Tap the share button (square with arrow).
3. Tap **Add to Home Screen**.

After installation, no internet is needed to take the test.

## Supervisor instructions

1. Default PIN is **1234** — change it on first use (Records → Change PIN).
2. To view all test records: tap **Supervisor: view records** on the start screen, enter PIN.
3. **Export to CSV** opens in Excel / Google Sheets.
4. **Export to PDF** is ready for printing or emailing.
5. Records are stored only on the device that ran the test. If a worker uses
   a different phone, those records stay on that phone.

## Customizing questions

Open `index.html` in any text editor. Search for `questions:[`. You will find
three blocks (English, Arabic, Hindi). Each question has:

```
{
  q: 'The question text',
  a: ['Option A', 'Option B', 'Option C', 'Option D'],
  c: 1,    // index of the correct answer (0, 1, 2, or 3)
  e: 'Explanation shown in review mode'
}
```

Add or remove questions consistently across all three languages.

## Resetting the PIN if forgotten

In the browser, open Developer Tools → Application → Local Storage, and
remove the `hoist_test_pin_v1` key. PIN resets to 1234.

Or have the supervisor clear browser data for the site (this also deletes
records, so export them first).

---

## Author

**Albaraa Alghamdi**
HSE Engineer
© 2026
