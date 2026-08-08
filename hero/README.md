# Makini homepage hero — "Gateways on the ring"

The approved hero concept, cut out of the preview into something portable.
Open `index.html` in a browser and it runs, no build step and no server.

Live: https://gazovik7.github.io/makini-homepage-preview/hero/

---

## Files

| File | What it is |
|---|---|
| `index.html` | Standalone demo. The markup below plus the two files under it. |
| `hero.html` | Just the hero markup, nothing else. This is the part you paste. |
| `hero.css` | The hero layer. ~9 KB. |
| `hero.js` | The hero layer. ~20 KB, no dependencies, no jQuery. |
| `logos/` | 29 integration logos used by the orbit, plus the 3 feature-row icons. 120 KB total. |
| `vendor/` | A copy of the site's own Webflow stylesheet, **only** so this demo renders correctly. Do not ship it, the site already loads it. |

---

## How it plugs in

The hero does not restyle anything you already have. The headline, the
sub-heading, the two buttons and the feature row keep their existing classes
(`.m-h1`, `.home-subheading`, `.home-s2-left-btns`, `.price-card-btn`,
`.s1-list-features_main`) and are untouched. Everything the hero adds is
prefixed `.wh-`.

Required structure:

```html
<div class="wh-stage">
  <section class="wh-hero">
    <div class="wh-rings" data-rings></div>   <!-- orbit tiles go here -->
    <div class="wh-veil"></div>               <!-- keeps the centre readable -->
    <div class="wh-rail"></div>               <!-- the line tiles land on -->
    <div class="wh-spot" data-spot></div>     <!-- pointer spotlight -->
    <div class="wh-glow"></div>
    <div class="m-container relative">
      <div class="home-s1-box">
        ... your existing headline / sub / buttons / feature row ...
      </div>
    </div>
  </section>
</div>
```

Three things the script depends on, so keep the names:

- `[data-rings]` — the box it measures and fills. Its size defines the whole
  layout, so it must be `position:absolute; inset:0` inside `.wh-hero`.
- `[data-spot]` — the blurred spotlight that follows the pointer.
- `.home-s1-box` — the two gateway chips are appended **inside** it, and their
  measured position is what the connecting lines are drawn from.

Nothing else is queried.

---

## The gateway pair

`Unified API` and `MCP server` are built in JS and appended to `.home-s1-box`
as an ordinary centred flex row (`.wh-ports`). They are in the normal document
flow on purpose.

An earlier version pinned them to the orbit at `W/2 ± W*0.395`, so the gap
between them scaled with the window: 1138px apart at 1440, 2022px at 2560,
stuck to the screen edges. Please keep them in the flow. If you need to move
them, change the margin on `.wh-ports`, not the JS.

---

## Performance — please do not undo this

This hero was rewritten specifically because the first version dropped frames.
The rules it now follows:

1. **Nothing animates a layout or paint property.** No `left`, `top`, `width`,
   `height`, `filter` or `box-shadow` in any `@keyframes`. Only `transform`
   and `opacity`.
2. **The fan is static.** All links on one side are merged into a handful of
   `<path>` elements grouped by opacity, drawn once and never touched. The
   earlier version built 12 links × 3 layers per gateway = 72 paths, 24 of them
   with `filter: blur(4px)` and 24 animating `stroke-dashoffset`. That is what
   was repainting the whole viewport every frame.
3. **The travelling dots are not SVG.** They are 6–8 small divs, each with a
   generated `@keyframes` track of `translate3d()` steps sampled along the
   curve. Injected into a `<style data-pk-kf>` inside the hero and rebuilt on
   resize.
4. **Tile blur sits on the leaf.** `filter` is on `.wh-tile .in`, not on
   `.wh-tile`, because `.wh-tile` is what the scroll choreography transforms.
   Moving the blur up one level makes it re-render every frame while the hero
   is at rest.

If a line has to move along a wire, put the dot on a track that spans the wire
and translate the track by a percentage. Percentages in `translate` resolve
against the element's own width, so it needs no JS and stays composited.

---

## Behaviour

- **Scroll.** The orbit unwraps into a single row of logos that lands on the
  rail, driven by how far the hero has scrolled past the top of the viewport
  (`RUN = 45%` of the hero height). No pinning, no scroll hijacking, the
  section leaves like any other.
- **Pointer.** The rings parallax, a spotlight follows the cursor, and the
  nearest logo racks into focus and names itself. Focus stops once the unwrap
  has started.
- **Breakpoints.** Below 992px the fan and the rail are hidden and the gateway
  pair becomes a plain centred row. Below 768px it stacks.
- **`prefers-reduced-motion`** disables the float, the fan dots and the scroll
  choreography.
- **Resize** rebuilds the whole thing, debounced by 220ms.

---

## Assets

The 29 orbit logos in `logos/` are the same files the site already serves from
`index-from-website_files/`. Point `var F` at the top of `hero.js` at wherever
they live in your build and delete the folder.

The hero's own weight is ~29 KB of code plus ~120 KB of logos. It does not
load any font, library or third-party script of its own.
