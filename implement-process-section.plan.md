# Styleframes Scroll-Driven Animation Plan

## Overview
Transform the `.styleframes-sync` section to use CSS view timelines for scroll-linked wipe animations. Each `.text-block` will scroll naturally from bottom to top, and as it enters/exits the viewport, the corresponding `.preview-slot` will clip in/out using CSS-driven animations tied to scroll progress.

## Implementation Steps

### 1) Update HTML (src/pages/index.astro)
- Make `.reveal-stage` the sticky preview container on the left (inside `.left-stack`).
- Keep `.styleframes-title` scrolling naturally.
- Add `data-section` to each `.text-block` (0, 1, 2) for timeline naming.

### 2) CSS (src/styles/portfolio.css)
- `.styleframes-sync`: grid with `timeline-scope: --section-0, --section-1, --section-2;` and sufficient `min-height` for scroll space.
- `.reveal-stage`: `position: sticky; top: 50%; transform: translateY(-50%); height: 60vh; overflow: hidden`.
- `.preview-slot`: `position: absolute; inset: 0;` (stacked layers).
- View-timeline animation:
  - `@keyframes wipe-out { 0% { clip-path: inset(0 0 0% 0) } 100% { clip-path: inset(0 0 100% 0) } }`
  - `.preview-slot { animation: wipe-out 1s linear both; animation-range: entry 0% contain 0%; }`
  - Map layers to NEXT section: `[data-slot="1"] -> --section-1`, `[data-slot="2"] -> --section-2`, last stays visible.
- `.styleframes-text`: right column as a grid with large vertical `gap` (e.g., `80vh`) so the next block appears when the current is ~20% visible; `padding-bottom: 0` so the last block stops at the top.
- `.styleframes-text .text-block`: `min-height: 100%`, `view-timeline-axis: block`; assign names:
  - `[data-section="0"] { view-timeline-name: --section-0; }`
  - `[data-section="1"] { view-timeline-name: --section-1; }`
  - `[data-section="2"] { view-timeline-name: --section-2; }`
- Fallback for browsers without view-timeline: fade the active `.preview-slot`.

### 3) JS (src/pages/index.astro)
- Compute `view-timeline-inset` from `.reveal-stage` top/bottom relative to viewport and apply to each `.text-block` so the wipe runs exactly while a section passes through the frame.

```ts
const revealStageEl = document.querySelector('.reveal-stage');
const textBlocksEls = document.querySelectorAll('.styleframes-text .text-block');
if (revealStageEl && textBlocksEls.length) {
  function calculateTimelineInset() {
    const r = revealStageEl.getBoundingClientRect();
    const vh = window.innerHeight;
    const topPercent = (r.top / vh) * 100;
    const bottomPercent = ((vh - r.bottom) / vh) * 100;
    const inset = `${topPercent.toFixed(2)}% ${bottomPercent.toFixed(2)}%`;
    textBlocksEls.forEach(b => (b.style as any).viewTimelineInset = inset);
  }
  calculateTimelineInset();
  window.addEventListener('resize', calculateTimelineInset);
}
```

## Notes
- Only `.reveal-stage` is sticky; the title scrolls naturally.
- Overlap tuning via `.styleframes-text { gap: 80vh; }` (next block appears when ~20% of the current remains).
- The last `.preview-slot` does not wipe (stays visible) so the section ends cleanly.
- Keep animations lightweight (single `clip-path` per layer) for compositor performance.

## Browser Support
- `animation-timeline: view()` in Chromium/Edge 115+ and Safari 17.2+.
- Fallback provided for Firefox (simple opacity change or no effect).

