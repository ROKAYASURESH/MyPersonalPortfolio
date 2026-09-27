import { useEffect, useRef } from "react";
import "./water-cursor.css";

export default function WaterCursor() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mouse = window.matchMedia("(any-hover: hover) and (any-pointer: fine)");
    const pointer = { x: 0, y: 0, active: false, pressed: false, interactive: false };
    const drop = { x: 0, y: 0, radius: 3 };
    let accent = getComputedStyle(document.documentElement).getPropertyValue("--accent-primary").trim() || "#315940";
    const themeObserver = new MutationObserver(() => {
      accent = getComputedStyle(document.documentElement).getPropertyValue("--accent-primary").trim() || "#315940";
      if (pointer.active && !frame) frame = requestAnimationFrame(draw);
    });
    let trail = [], ripples = [], frame = 0, last = 0;
    let width = 0, height = 0;
    const clear = () => ctx.clearRect(0, 0, width, height);
    const stop = () => {
      pointer.active = pointer.pressed = false;
      trail = []; ripples = [];
      cancelAnimationFrame(frame);
      frame = last = 0;
      clear();
    };
    const resize = () => {
      width = window.innerWidth; height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const draw = (time) => {
      frame = 0;
      const dt = Math.min((time - (last || time)) / 1000, 0.04);
      last = time;
      clear();
      const ease = 1 - Math.exp(-22 * dt);
      drop.x += (pointer.x - drop.x) * ease;
      drop.y += (pointer.y - drop.y) * ease;
      const targetRadius = pointer.pressed ? 3 : pointer.interactive ? 14 : 3;
      drop.radius += (targetRadius - drop.radius) * ease;
      ctx.strokeStyle = accent;
      ctx.fillStyle = accent;
      if (pointer.pressed) {
        trail.unshift({ x: drop.x, y: drop.y, born: time });
        trail = trail.slice(0, 65);
      }
      trail = trail.filter(p => time - p.born < 650);
      // Older samples sway sideways and drift down like flowing water.
      const points = trail.map(p => {
        const age = (time - p.born) / 650;
        return { x: p.x + Math.sin(age * 12 - time * 0.005) * age * 10,
          y: p.y + age * 16, age };
      });
      ctx.lineCap = "round";
      for (let i = points.length - 1; i > 0; i -= 1) {
        const p = points[i], next = points[i - 1];
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(next.x, next.y);
        ctx.lineWidth = 3 * (1 - p.age) + 0.5;
        ctx.globalAlpha = (1 - p.age) * 0.22;
        ctx.stroke();
      }
      ripples = ripples.filter(p => time - p.born < 900);
      ripples.forEach(p => {
        const age = (time - p.born) / 900;
        if (age < 0) return; // Stagger the waves without extra timers.
        const spread = 1 - Math.pow(1 - age, 2);
        const radius = 6 + spread * 42;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.globalAlpha = Math.sin(Math.min(age / 0.1, 1) * Math.PI / 2) *
          Math.pow(1 - age, 1.5) * 0.38;
        ctx.lineWidth = 1 - age * 0.5;
        ctx.stroke();
      });
      if (pointer.active) {
        // A fine, translucent halo matches the portfolio's understated palette.
        const wobble = pointer.pressed ? Math.sin(time * 0.008) * 0.07 : 0;
        ctx.beginPath();
        ctx.ellipse(drop.x, drop.y, drop.radius * (1 + wobble),
          drop.radius * (1 - wobble), 0, 0, Math.PI * 2);
        ctx.globalAlpha = pointer.interactive ? 0.05 : 0.035;
        ctx.fill();
        ctx.globalAlpha = pointer.interactive ? 0.45 : 0.32;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      if (pointer.pressed || trail.length || ripples.length ||
          Math.hypot(pointer.x - drop.x, pointer.y - drop.y) > 0.1 ||
          Math.abs(targetRadius - drop.radius) > 0.05) {
        frame = requestAnimationFrame(draw);
      } else last = 0;
    };
    const move = event => {
      if (event.pointerType !== "mouse" || motion.matches || !mouse.matches) return;
      pointer.interactive = Boolean(event.target instanceof Element &&
        event.target.closest('a, button, input, textarea, select, [role="button"]'));
      pointer.x = event.clientX; pointer.y = event.clientY;
      if (!pointer.active) { drop.x = pointer.x; drop.y = pointer.y; }
      pointer.active = true;
      pointer.pressed = (event.buttons & 1) === 1;
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const down = event => {
      if (event.button !== 0 || event.pointerType !== "mouse" || motion.matches || !mouse.matches) return;
      move(event); pointer.pressed = true;
      const now = performance.now();
      for (let wave = 0; wave < 3; wave += 1) {
        ripples.push({ x: pointer.x, y: pointer.y, born: now + wave * 140 });
      }
      ripples = ripples.slice(-24);
    };
    const up = () => { pointer.pressed = false; };
    const leave = event => { if (!event.relatedTarget) stop(); };
    const visibility = () => { if (document.hidden) stop(); };
    const events = { resize, pointermove: move, pointerdown: down,
      pointerup: up, pointercancel: stop, pointerout: leave, blur: stop };
    resize();
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "class", "style"] });
    Object.entries(events).forEach(([name, handler]) => window.addEventListener(name, handler, { passive: true }));
    document.addEventListener("visibilitychange", visibility);
    motion.addEventListener("change", stop);
    mouse.addEventListener("change", stop);
    return () => {
      stop();
      themeObserver.disconnect();
      Object.entries(events).forEach(([name, handler]) => window.removeEventListener(name, handler));
      document.removeEventListener("visibilitychange", visibility);
      motion.removeEventListener("change", stop);
      mouse.removeEventListener("change", stop);
    };
  }, []);
  return <canvas ref={canvasRef} className="water-cursor" aria-hidden="true" />;
}
