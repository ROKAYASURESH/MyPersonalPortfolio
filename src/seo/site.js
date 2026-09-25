export const SITE = {
  name: "Suresh Rokaya",
  role: "Software Developer & Full-Stack Web Developer",
  url: "https://sureshrokaya.com.np",
  canonicalBase: "https://sureshrokaya.com.np",
  description:
    "Suresh Rokaya is a software and full-stack web developer from Nepal specializing in Django, Django REST Framework, React, Vue.js, PostgreSQL, and modern web applications.",
  image: "https://sureshrokaya.com.np/og-image.jpg",
  locale: "en_US",
  siteName: "Suresh Rokaya — Software Developer",
  github: "https://github.com/ROKAYASURESH",
  email: "sureshrokaya761@gmail.com",
  // Add real LinkedIn / Facebook URLs here when available.
  // They are intentionally omitted from `sameAs` until verified
  // so search engines are never given invented profile links.
  // linkedin: "",
  // facebook: "",
};

export function pageMeta({
  title,
  description = SITE.description,
  path = "/",
  image = SITE.image,
  noindex = false,
}) {
  const url = `${SITE.canonicalBase}${path === "/" ? "/" : path}`;
  return { title, description, url, image, noindex };
}
