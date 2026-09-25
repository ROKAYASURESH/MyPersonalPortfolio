import { useEffect } from "react";
import { SITE } from "../../seo/site";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Lightweight per-route SEO updater (no extra dependency, no bundle cost).
 * Sets title, description, canonical, Open Graph and Twitter tags.
 * The static defaults in public/index.html cover the homepage + no-JS crawlers.
 */
export default function SEO({ title, description, path = "/", image, noindex = false }) {
  useEffect(() => {
    const desc = description || SITE.description;
    const url = `${SITE.canonicalBase}${path === "/" ? "/" : path}`;
    const img = image || SITE.image;
    const fullTitle = title || `Suresh Rokaya | Software Developer & Full-Stack Web Developer`;

    document.title = fullTitle;
    upsertMeta("name", "description", desc);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertLink("canonical", url);

    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", desc);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", img);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE.siteName);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", desc);
    upsertMeta("name", "twitter:image", img);
  }, [title, description, path, image, noindex]);

  return null;
}
