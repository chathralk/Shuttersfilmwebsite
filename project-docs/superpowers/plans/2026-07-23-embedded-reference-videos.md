# Embedded Reference Videos Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Render every portfolio item at 16:9, play YouTube videos and playlists inside their cards, and keep the external event in a separate area.

**Architecture:** Keep the small site's portfolio data and presentation together in `Portfolio.tsx`. YouTube projects provide a privacy-enhanced embed URL and official thumbnail, while a set of selected IDs controls click-to-load players. External events use separate data and markup so they cannot be treated as playable media.

**Tech Stack:** React 18, TypeScript, Vite, Motion, Tailwind CSS, Vitest, Testing Library, jsdom, GitHub Pages.

## Global Constraints

- Every portfolio media surface uses `aspect-ratio: 16 / 9`.
- Video embeds use `https://www.youtube-nocookie.com/embed/<video-id>?autoplay=1`.
- Playlist embeds use `https://www.youtube-nocookie.com/embed/videoseries?list=<playlist-id>&autoplay=1`.
- YouTube items play inside the site and do not link to YouTube watch pages.
- Aalakatha stays external, appears separately, and retains `https://aalakatha.lk/`.
- Preserve the existing colors, typography, animation style, and filters.
- Do not add view-count sorting.

---

### Task 1: Add portfolio interaction regression tests

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `src/app/components/Portfolio.test.tsx`

**Interfaces:**
- Consumes: the named `Portfolio` React component.
- Produces: `npm test`, running Vitest in jsdom.

- [x] **Step 1: Add the test dependencies and script**

Install Vitest, jsdom, Testing Library, and jest-dom. Add:

```json
"test": "vitest run"
```

- [x] **Step 2: Write failing tests**

Render the real component and assert all 16 media surfaces are 16:9, clicking
an individual video creates the expected privacy-enhanced iframe, clicking a
playlist creates a `videoseries` iframe, and Aalakatha appears inside an
accessible Events region.

- [x] **Step 3: Verify the tests fail against the old implementation**

Run:

```bash
npm test -- src/app/components/Portfolio.test.tsx
```

Expected: four failures because the old portfolio uses 3:4 outbound links and
does not provide a separate Events region.

### Task 2: Implement the 16:9 click-to-play portfolio

**Files:**
- Modify: `src/app/components/Portfolio.tsx`
- Test: `src/app/components/Portfolio.test.tsx`

**Interfaces:**
- Consumes: no props.
- Produces: accessible YouTube play buttons, privacy-enhanced iframes, and a
  separately labelled Events region.

- [x] **Step 1: Separate YouTube and event data**

Define `YouTubeProject` entries with category, tag, embed URL, and thumbnail.
Define `EventProject` entries with external URL and image. Keep the 12 existing
video IDs, three playlist IDs, and Aalakatha URL.

- [x] **Step 2: Add click-to-load state**

Use a `Set<number>` of playing project IDs. Add the selected ID on play and
clear the set when a category changes so hidden videos stop.

- [x] **Step 3: Render YouTube cards**

Render every project inside:

```tsx
<div data-testid="portfolio-media" style={{ aspectRatio: "16 / 9" }}>
```

Before selection, show the official thumbnail and an accessible
`Play <title>` button. After selection, replace that button with:

```tsx
<iframe
  src={project.embedUrl}
  title={`${project.title} video player`}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
/>
```

- [x] **Step 4: Render the separate Events area**

Show `<section aria-label="Events">` for the All and Events filters. Keep the
Aalakatha card 16:9 and link it to `https://aalakatha.lk/`.

- [x] **Step 5: Verify focused and complete tests**

Run:

```bash
npm test -- src/app/components/Portfolio.test.tsx
npm test
```

Expected: one test file and four tests pass.

### Task 3: Validate, commit, publish, and deploy

**Files:**
- Verify: `docs/index.html`
- Verify: `docs/assets/*`

**Interfaces:**
- Consumes: the completed portfolio and test suite.
- Produces: a verified `main` commit and successful GitHub Pages deployment.

- [x] **Step 1: Build and verify the static site**

Run:

```bash
npm run build
npm run verify:pages
```

Expected: Vite builds successfully and the Pages verifier reports the output is
ready in `docs/`.

- [ ] **Step 2: Review and commit the exact change**

Run:

```bash
git diff --check
git status --short
git diff --stat
```

Commit the portfolio, tests, dependency lockfile, durable planning documents,
and refreshed `docs` output with:

```bash
git commit -m "Add embedded reference video playback"
```

- [ ] **Step 3: Push and monitor deployment**

Push `main`, find the matching GitHub Pages workflow run, and wait until its
build and deploy jobs complete successfully.
