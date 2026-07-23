# Embedded Reference Videos Design

## Goal

Update the portfolio so visitors can preview and play YouTube work without
leaving the Shutters Films website. Present every portfolio item in a consistent
16:9 frame and keep the non-YouTube event entry visually separate.

## Scope

- Convert all portfolio media cards from 3:4 to 16:9.
- Show official YouTube thumbnails for individual videos.
- Show appropriate YouTube playlist thumbnails for live-session playlists.
- Replace a YouTube thumbnail with an embedded player when the visitor selects
  it, with playback starting in that card.
- Keep playback inside the portfolio instead of opening YouTube in a new tab.
- Present the Aalakatha external event separately from the YouTube work, using
  the same 16:9 media ratio.
- Preserve the site's current visual language, responsive behavior, animation,
  and category filtering.
- Do not add view-count sorting in this change.

## Interaction Design

### YouTube items

Each YouTube item initially renders as a lightweight 16:9 thumbnail card with
its category badge, title, and a clear play control. Selecting the card replaces
that card's thumbnail with a privacy-enhanced YouTube embed and starts playback.
Only selected players are loaded, avoiding the performance cost of loading every
YouTube iframe when the page opens.

Individual videos use a `youtube-nocookie.com/embed/<video-id>` URL. Playlists
use a `youtube-nocookie.com/embed/videoseries?list=<playlist-id>` URL.

The play control is keyboard accessible and has an accessible label that
includes the project title. Once the iframe is loaded, YouTube supplies its
standard playback controls.

### External event

The Aalakatha item is not placed inside the YouTube video grid. It appears in a
separate Events area below the YouTube work, with a 16:9 image, event label,
title, and external-link treatment. Selecting it may open the existing
Aalakatha website because it is not playable media.

### Filtering

The existing filters remain:

- All
- Music Videos
- Live Sessions
- Events

When `All`, `Music Videos`, or `Live Sessions` is selected, the YouTube grid is
shown for the relevant items. The separate Events area is shown for `All` and
`Events`. Selecting `Events` hides the YouTube grid.

Changing a filter unmounts hidden embeds, which stops any video that is no
longer visible.

## Data Model

YouTube portfolio entries store the information required to render and embed
them:

- stable ID
- title
- category
- tag
- YouTube item type (`video` or `playlist`)
- YouTube video or playlist ID
- thumbnail URL

External events remain a distinct data collection containing their title, tag,
destination URL, and image URL. This prevents external links from being treated
as playable YouTube media.

## Error Handling

The existing image fallback component remains responsible for failed thumbnail
loads. If YouTube blocks or cannot load an embed, the iframe's own error surface
is shown within the 16:9 card; the site does not redirect automatically.

## Validation

Automated checks will cover the portfolio data and embed URL behavior where
practical in the current project. Final verification will include:

- production build succeeds
- GitHub Pages output verification succeeds
- source contains no YouTube watch-link redirects for playable portfolio items
- all portfolio media containers use a 16:9 ratio
- video and playlist embed URLs use the privacy-enhanced YouTube host
- event content remains separate and retains its external destination

## Deployment

Commit and push the verified implementation to the `main` branch. The existing
GitHub Pages workflow will build and deploy the site. Confirm the deployment
workflow reaches a successful state and report the live site URL.
