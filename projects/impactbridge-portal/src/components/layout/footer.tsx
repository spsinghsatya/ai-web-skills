import { Link } from "react-router";
import { Mail, MapPin, Phone, Waypoints } from "lucide-react";
import { site } from "../../config/site";

export function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="flex items-center gap-2.5 font-display text-lg font-semibold text-white">
            <span className="grid size-9 place-items-center rounded-xl bg-white/10 text-amber-accent" aria-hidden="true">
              <Waypoints className="size-5" />
            </span>
            {site.name}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200">{site.description}</p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-accent">Quick links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {site.nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-brand-100 underline-offset-4 hover:text-white hover:underline">{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-accent">Programs</h2>
          <ul className="mt-4 space-y-2 text-sm text-brand-100">
            {site.programs.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-accent">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2"><Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="underline-offset-4 hover:text-white hover:underline">{site.email}</a></li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />{site.phone}</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />{site.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-brand-200 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {site.name}. Sample content for demonstration purposes only.
        </p>
      </div>
    </footer>
  );
}
