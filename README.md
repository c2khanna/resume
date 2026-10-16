# Resume

An interactive, single-page web resume built with **React 18**, **Vite**, and **Tachyons CSS**.

Live version: **[c2khanna.github.io/resume](https://c2khanna.github.io/resume)**

---

## Design & Print-to-PDF
This application uses **strictly fixed dimensions** (`1024px × 1325px`) matching standard **US Letter** proportions (8.5" × 11"). 

It is intentionally **non-responsive** so that using the browser's **Print $\to$ Save as PDF** produces an exact, pixel-perfect single-page resume ready to send to recruiters without pagination breaks or layout shifts.

---

## Updating Content
All resume data is centralized in [`src/data.js`](src/data.js):
- **Jobs & Projects**: Each entry supports `isDisplayed: true|false` to toggle visibility for tailoring resumes to specific roles without deleting past history.
- **Languages**: Automatically sorted by `proficiency` value (`0.0` - `1.0`).
- **Dates**: Formatted with `YYYY-MM-DD` strings; omitting `endDate` displays `Present`.

---

## Development

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:3000)
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## AI Agent Instructions
For AI coding assistants (Cursor, Claude, Copilot, Antigravity, etc.), see [`AGENTS.md`](AGENTS.md) for architecture rules and constraints.
