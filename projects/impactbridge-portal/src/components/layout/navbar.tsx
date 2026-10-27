import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X, Waypoints } from "lucide-react";
import { site } from "../../config/site";
import { buttonStyles } from "../ui/button";
import { cn } from "../../lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-brand-600",
      isActive ? "text-brand-900 underline decoration-amber-accent decoration-2 underline-offset-8" : "text-slate-600",
    );

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-semibold text-brand-950">
          <span className="grid size-9 place-items-center rounded-xl bg-brand-900 text-amber-accent" aria-hidden="true">
            <Waypoints className="size-5" />
          </span>
          {site.name}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === "/"} className={linkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="ml-3">
            <a href="#partner" className={buttonStyles("primary")}>Partner With Us</a>
          </li>
        </ul>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg text-brand-900 hover:bg-brand-50 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-slate-200 bg-white md:hidden">
        <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
          {site.nav.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === "/"} className={(s) => cn(linkClass(s), "block text-base")}>
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <a href="#partner" className={buttonStyles("primary", "md", "w-full")}>Partner With Us</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
