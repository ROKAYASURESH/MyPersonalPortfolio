import React, { useEffect, useRef } from "react";

// Content is visible by default. Observation only adds a one-time entrance;
// unsupported browsers and reduced-motion users receive the static layout.
export default function ScrollReveal({
  as: Element = "div",
  className = "",
  stagger = 0,
  children,
  style,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!element || preference?.matches || !window.IntersectionObserver) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.classList.add("is-revealed");
        observer.disconnect();
      },
      { threshold: 0.08 },
    );

    // Keyboard navigation must never wait for a reveal or its stagger delay.
    const finish = () => {
      element.classList.remove("is-revealed");
      observer.disconnect();
    };
    const onPreferenceChange = (event) => {
      if (event.matches) finish();
    };
    element.addEventListener("focusin", finish);
    preference?.addEventListener?.("change", onPreferenceChange);
    observer.observe(element);
    return () => {
      observer.disconnect();
      element.removeEventListener("focusin", finish);
      preference?.removeEventListener?.("change", onPreferenceChange);
    };
  }, []);

  return (
    <Element
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{ "--reveal-order": Math.max(0, Math.min(stagger, 3)), ...style }}
      {...props}
    >
      {children}
    </Element>
  );
}
