import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export { gsap, ScrollTrigger, useGSAP };

export const reduceMotionQuery = "(prefers-reduced-motion: reduce)";
export const finePointerQuery = "(hover: hover) and (pointer: fine)";
export const mobileQuery = "(max-width: 760px)";

export function prefersReducedMotion() {
  return Boolean(window.matchMedia?.(reduceMotionQuery)?.matches);
}

export function hasFinePointer() {
  return Boolean(window.matchMedia?.(finePointerQuery)?.matches);
}

function isMobileViewport() {
  return Boolean(window.matchMedia?.(mobileQuery)?.matches);
}

export const revealEase = "power3.out";
export const revealDuration = 0.56;

export function revealDistance() {
  return isMobileViewport() ? 10 : 18;
}

export function staggerDelay(order) {
  const step = isMobileViewport() ? 0.035 : 0.065;
  return Math.max(0, Math.min(order ?? 0, 3)) * step;
}
