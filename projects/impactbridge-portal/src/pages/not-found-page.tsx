import { Link } from "react-router";
import { buttonStyles } from "../components/ui/button";

export default function NotFoundPage() {
  return (
    <section aria-labelledby="page-title" className="bg-linear-to-b from-brand-50 to-white py-28">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="font-display text-7xl font-semibold text-amber-deep">404</p>
        <h1 id="page-title" className="mt-4 font-display text-4xl font-semibold text-brand-950">Page not found</h1>
        <p className="mt-4 text-lg text-slate-600">The page you are looking for does not exist or has moved.</p>
        <Link to="/" className={buttonStyles("primary", "lg", "mt-8")}>Back to home</Link>
      </div>
    </section>
  );
}
