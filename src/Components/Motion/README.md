# Portfolio motion

The site uses GSAP (`gsap`, `@gsap/react`) for entrances and scroll-linked
motion, plus CSS for hovers, focus states, and the sticky navbar. Shared
setup lives in `src/animations/gsapSetup.js`.

- `motion.css` owns duration and easing tokens. Interactions take 180ms, panel changes 320ms, and reveals run ~560ms (420ms on mobile).
- `ScrollReveal` accepts `as`, `className`, and `stagger` (0–3). Wrap a related group, not each word or paragraph. Content is visible before observation and stays visible without browser support. Reveals play once (`once: true`); stagger is 65ms per step (35ms on mobile) with 18px of rise (10px on mobile).
- The hero entrance is one GSAP timeline: navigation, badge, heading words (40px rise, small stagger), supporting copy, CTAs with their arrows, portrait (fade + 0.95 scale), footnote. It finishes in about a second and never blocks interaction.
- The portrait drifts a few pixels with the mouse (`quickTo`, fine pointers only, no touch, no reduced motion). No continuous floating or rotation.
- The experience rail draws with scroll position (scrubbed `--tl-progress`); without scroll it simply shows fully.
- Route changes fade the new page in; same-page anchor jumps stay instant.
- Reveals release their triggers on unmount. Focus immediately ends a pending entrance. A live reduced-motion preference change cancels pending observation.
- Use `translate` for hover movement so it does not conflict with reveal transforms. Hover elevation is restricted to fine pointers.
- The header observes section intersections and uses ResizeObserver to measure the shared underline. Scroll progress uses CSS scroll timelines only when supported, without a JS scroll listener. Card hovers, button microinteractions, and form focus stay in CSS with the exact same restrained values.
- Reduced motion disables GSAP entrances, parallax, mouse-follow effects, and the progress indicator. Color and focus feedback remain available. There are no statistics counters because the portfolio has no real numbers to animate.

Validation: `CI=true npm test -- --watchAll=false --runInBand` and `npm run build`. In a browser, check keyboard navigation during entrances, reduced motion (including changing it live), mobile menu open/close, section links, project links, and both themes. Do not add continuous decorative effects or fabricated counters.
- `ScrollReveal` accepts `as`, `className`, and `stagger` (0–3). Wrap a related group, not each word or paragraph. Content is visible before observation and stays visible without browser support.
- Reveals disconnect after entering the viewport. Focus immediately ends the entrance. A live reduced-motion preference change cancels pending observation.
- Use `translate` for hover movement so it does not conflict with reveal transforms. Hover elevation is restricted to fine pointers.
- The header observes section intersections and uses ResizeObserver to measure the shared underline. Scroll progress uses CSS scroll timelines only when supported, without a JS scroll listener.
- Reduced motion disables animations, hover movement, smooth scrolling, and the progress indicator. Color and focus feedback remain available.

Validation: `CI=true npm test -- --watchAll=false --runInBand` and `npm run build`. In a browser, check keyboard navigation during entrances, reduced motion (including changing it live), mobile menu open/close, section links, project links, and both themes. Do not add continuous decorative effects or fabricated counters.
