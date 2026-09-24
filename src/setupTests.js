import "@testing-library/jest-dom";

// jsdom does not implement matchMedia, which GSAP's ScrollTrigger needs at
// registration time. Individual suites may override window.matchMedia.
if (typeof window.matchMedia !== "function") {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
  });
}
