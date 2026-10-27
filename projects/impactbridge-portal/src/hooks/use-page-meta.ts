import { useEffect } from "react";
import { useLocation } from "react-router";
import { site } from "../config/site";

const titles: Record<string, string> = {
  "/": `${site.name} — NGO & CSR Project Portal`,
  "/about": `About — ${site.name}`,
  "/projects": `Projects — ${site.name}`,
  "/contact": `Contact — ${site.name}`,
};

/** Per-route document.title, scroll-to-top (unless hash) and focus on <main>. */
export function usePageMeta() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] ?? `Page not found — ${site.name}`;
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [pathname, hash]);
}
