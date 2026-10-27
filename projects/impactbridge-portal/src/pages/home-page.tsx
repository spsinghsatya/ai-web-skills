import { useState } from "react";
import {
  ArrowRight, GraduationCap, Leaf, Sprout, Users, Globe2, HandHeart, Layers, Droplets, Handshake,
} from "lucide-react";
import { site } from "../config/site";
import { categories, projects } from "../data/projects";
import { ProjectCard } from "../components/project-card";
import { ButtonLink } from "../components/ui/button";
import { cn } from "../lib/utils";

const heroStats = [
  { value: "120+", label: "communities" },
  { value: "8", label: "nations" },
  { value: "14", label: "active programs" },
];

const pillars = [
  { icon: GraduationCap, title: "Education", text: "Safe classrooms, trained teachers and learning materials that keep children in school." },
  { icon: Leaf, title: "Environment", text: "Community-led restoration and clean energy that protect the places people call home." },
  { icon: Sprout, title: "Livelihoods", text: "Skills, mentoring and market access that turn effort into lasting income." },
];

const impact = [
  { icon: Users, value: "250,000+", label: "People reached (sample)" },
  { icon: Droplets, value: "180", label: "Water points (sample)" },
  { icon: Layers, value: "14", label: "Active programs (sample)" },
  { icon: Handshake, value: "65", label: "Partner organizations (sample)" },
];

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-linear-to-b from-brand-50 via-white to-white">
      {/* Decorative gradient mesh — no external images */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-24 size-120 rounded-full bg-brand-200/60 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 size-96 rounded-full bg-amber-accent/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div>
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-800 shadow-sm ring-1 ring-brand-100">
            <span className="size-2 rounded-full bg-amber-accent" aria-hidden="true" />
            NGO &amp; CSR Project Portal
          </p>
          <h1 id="hero-title" className="animate-fade-up mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-brand-950 [animation-delay:100ms] sm:text-5xl lg:text-6xl">
            Building bridges between <span className="text-brand-600">generosity</span> and lasting change.
          </h1>
          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-slate-600 [animation-delay:200ms]">
            {site.description}
          </p>
          <div className="animate-fade-up mt-9 flex flex-wrap gap-4 [animation-delay:300ms]">
            <ButtonLink href="#projects" size="lg">Explore Projects <ArrowRight className="size-5" aria-hidden="true" /></ButtonLink>
            <ButtonLink href="#partner" size="lg" variant="outline">Partner With Us</ButtonLink>
          </div>

          <dl className="animate-fade-up mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-brand-100 pt-6 [animation-delay:400ms]">
            {heroStats.map((s) => (
              <div key={s.label}>
                <dd className="font-display text-3xl font-semibold text-brand-900">{s.value}</dd>
                <dt className="text-sm text-slate-600">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Decorative visual */}
        <div aria-hidden="true" className="animate-fade-up relative mx-auto hidden aspect-square w-full max-w-md [animation-delay:250ms] lg:block">
          <div className="animate-float absolute inset-0 rounded-[3rem] bg-linear-to-br from-brand-900 via-brand-700 to-brand-500 shadow-2xl" />
          <svg viewBox="0 0 400 400" className="absolute inset-0 size-full">
            <circle cx="320" cy="90" r="38" fill="#f2a93b" />
            <path d="M30 290C100 170 300 170 370 290" fill="none" stroke="#fff" strokeOpacity=".9" strokeWidth="14" strokeLinecap="round" />
            <path d="M80 290v-60M140 290v-95M200 290v-110M260 290v-95M320 290v-60" stroke="#fff" strokeOpacity=".75" strokeWidth="10" strokeLinecap="round" />
            <path d="M0 330c60-24 120 24 200 0s140-24 200 0v70H0z" fill="#062a29" fillOpacity=".45" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section aria-labelledby="mission-title" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-deep">Our mission</p>
          <h2 id="mission-title" className="mt-3 font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
            {site.tagline}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We pair local knowledge with corporate and individual partners, and report progress openly, so every contribution can be traced to a result.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-2xl border border-slate-200 bg-brand-50/50 p-8 transition hover:border-brand-300 hover:bg-brand-50">
              <span className="grid size-12 place-items-center rounded-xl bg-brand-900 text-amber-accent">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-brand-950">{title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const [active, setActive] = useState("All");
  const filters = ["All", ...categories];
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-deep">Featured projects</p>
          <h2 id="projects-title" className="mt-3 font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
            Programs shaping communities
          </h2>
          <p className="mt-4 text-lg text-slate-600">Sample programs shown for demonstration. Filter by focus area.</p>
        </div>

        <div role="group" aria-label="Filter projects by category" className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={active === f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition",
                active === f
                  ? "border-brand-900 bg-brand-900 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-brand-600 hover:text-brand-800",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <p className="sr-only" role="status" aria-live="polite">Showing {visible.length} project{visible.length === 1 ? "" : "s"}</p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <li key={p.id}><ProjectCard project={p} /></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ImpactBand() {
  return (
    <section aria-labelledby="impact-title" className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-24">
      <div aria-hidden="true" className="absolute -left-20 top-0 size-96 rounded-full bg-brand-700/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-accent">Impact at a glance</p>
          <h2 id="impact-title" className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Results we measure and share</h2>
        </div>
        <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impact.map(({ icon: Icon, value, label }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Icon className="size-7 text-amber-accent" aria-hidden="true" />
              <dd className="mt-4 font-display text-4xl font-semibold">{value}</dd>
              <dt className="mt-1 text-sm text-brand-100">{label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="partner" aria-labelledby="cta-title" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-linear-to-br from-brand-900 to-brand-700 px-8 py-14 text-center text-white shadow-xl sm:px-16">
          <Globe2 className="mx-auto size-10 text-amber-accent" aria-hidden="true" />
          <h2 id="cta-title" className="mt-5 font-display text-3xl font-semibold sm:text-4xl">Join the mission</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
            Whether you represent a company, a foundation or yourself, there is a way to help build something that lasts.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href="#partner" variant="accent" size="lg"><Handshake className="size-5" aria-hidden="true" />Become a Partner</ButtonLink>
            <ButtonLink href="#partner" variant="light" size="lg"><HandHeart className="size-5" aria-hidden="true" />Donate</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <FeaturedProjects />
      <ImpactBand />
      <CtaSection />
    </>
  );
}
