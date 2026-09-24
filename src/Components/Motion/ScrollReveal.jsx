import React, { useRef } from "react";
import {
  gsap,
  ScrollTrigger,
  useGSAP,
  prefersReducedMotion,
  reduceMotionQuery,
  revealDistance,
  revealDuration,
  revealEase,
  staggerDelay,
} from "../../animations/gsapSetup";

// Content is visible by default. GSAP only hides it when a reveal will
// actually run, so reduced-motion users and unsupported browsers always
// receive the static layout. One consistent language everywhere:
// opacity 0 -> 1, small y movement, played once on entry.
export default function ScrollReveal({
  as: Element = "div",
  className = "",
  stagger = 0,
  children,
  style,
  ...props
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const element = ref.current;
      if (!element) return undefined;
      let trigger = null;

      const finish = () => {
        gsap.set(element, { clearProps: "opacity,transform" });
        element.classList.add("is-revealed");
        trigger?.kill();
        trigger = null;
      };

      if (prefersReducedMotion() || typeof ScrollTrigger === "undefined") {
        finish();
        return undefined;
      }

      gsap.set(element, { opacity: 0, y: revealDistance() });
      trigger = ScrollTrigger.create({
        trigger: element,
        start: "top 88%",
        once: true,
        onEnter: () => {
          element.classList.add("is-revealed");
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: revealDuration,
            ease: revealEase,
            delay: staggerDelay(stagger),
            onComplete: () =>
              gsap.set(element, { clearProps: "opacity,transform" }),
          });
        },
      });

      // Keyboard navigation must never wait for a reveal or its stagger delay.
      const preference = window.matchMedia?.(reduceMotionQuery);
      const onPreferenceChange = (event) => {
        if (event.matches) finish();
      };
      element.addEventListener("focusin", finish);
      preference?.addEventListener?.("change", onPreferenceChange);
      return () => {
        trigger?.kill();
        trigger = null;
        element.removeEventListener("focusin", finish);
        preference?.removeEventListener?.("change", onPreferenceChange);
      };
    },
    { scope: ref },
  );

  return (
    <Element ref={ref} className={`scroll-reveal ${className}`} style={style} {...props}>
      {children}
    </Element>
  );
}
