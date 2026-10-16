# AI Agent Instructions — Resume

## Overview
This repository is an interactive, single-page web resume built with **React 18**, **Vite**, and **Tachyons CSS**, deployed to GitHub Pages (`https://c2khanna.github.io/resume`).

---

## CRITICAL INVARIANT: Fixed Page Dimensions (Do Not Make Responsive)
- **Export Method**: The user generates PDF resumes for recruiters by using the browser's **Print $\to$ Save as PDF** feature.
- **Strictly Fixed Dimensions**: The container in `src/ResumeContainer.jsx` has fixed dimensions:
  - Width: `1024px`
  - Height: `1325px` (11 / 8.5 US Letter aspect ratio)
- **DO NOT make this layout responsive or fluid**. It must strictly maintain these fixed proportions at all times to ensure pixel-perfect 1-page PDF exports without page breaks, clipping, or text shifting.

---

## Primary Workflow: Updating Resume Content Before Interviews
The main task in this repository is updating and tailoring experience for job applications.

### Content Rules (`src/data.js`)
All resume content lives exclusively in `src/data.js`. When the user asks to add, edit, or customize resume content:
1. **Never edit React components** to change resume text. Always edit `src/data.js`.
2. **Strict 1-Page Budget**: Because the height is strictly locked to 1 page:
   - Keep bullet points concise and impactful (3–4 bullets per role).
   - Use `isDisplayed: false` on older or less relevant jobs/projects to tailor the resume for a specific role without losing historical data.
   - Ensure the total content never overflows the fixed 1325px height.
3. **Date Formatting**:
   - Dates must be `'YYYY-MM-DD'` strings for `moment` parsing.
   - For active roles, set `endDate: null` or leave it invalid so the UI renders `'Present'`.
4. **Skills & Sorting**:
   - `skills.languages`: Each item is `{ name: '...', proficiency: 0.0 - 1.0 }`. The sidebar automatically sorts languages descending by proficiency.
   - `skills.libraries` & `skills.technologies`: Arrays of strings.

---

## Tech Stack & Commands
- **Dev Server**: `npm start` (or `npm run dev`) at http://localhost:3000
- **Build**: `npm run build` (outputs to `build/`)
- **Deploy**: `npm run deploy` (builds and deploys to `gh-pages` branch)

---

## Code & Architecture Guidelines
- **Components**: Located in `src/*.jsx`, written as functional components using `prop-types`.
- **Styling**: Tachyons CSS utility classes + custom brand palette in `src/styles.css` (`heading-bg-color`, `title-bg-color`). Do not install conflicting CSS frameworks.
- **Verification**: Always run `npm run build` after changes to verify zero compilation errors.
