# Portfolio motion

The site uses CSS animations and Intersection Observer; no animation dependency is needed for the current interactions.

- `motion.css` owns duration, easing, distance, and stagger tokens. Interactions take 180ms, panel changes 320ms, and reveals 560ms. Mobile reveals use 9px movement, 420ms duration, and 35ms stagger intervals.
- `ScrollReveal` accepts `as`, `className`, and `stagger` (0–3). Wrap a related group, not each word or paragraph. Content is visible before observation and stays visible without browser support.
- Reveals disconnect after entering the viewport. Focus immediately ends the entrance. A live reduced-motion preference change cancels pending observation.
- Use `translate` for hover movement so it does not conflict with reveal transforms. Hover elevation is restricted to fine pointers.
- The header observes section intersections and uses ResizeObserver to measure the shared underline. Scroll progress uses CSS scroll timelines only when supported, without a JS scroll listener.
- Reduced motion disables animations, hover movement, smooth scrolling, and the progress indicator. Color and focus feedback remain available.

Validation: `CI=true npm test -- --watchAll=false --runInBand` and `npm run build`. In a browser, check keyboard navigation during entrances, reduced motion (including changing it live), mobile menu open/close, section links, project links, and both themes. Do not add continuous decorative effects or fabricated counters.
