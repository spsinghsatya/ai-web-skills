import { Link } from "react-router";
import { ArrowRight, MapPin } from "lucide-react";
import type { Project } from "../data/projects";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardTitle } from "./ui/card";

const statusTone = { Active: "green", Completed: "slate", Upcoming: "amber" } as const;

export function ProjectCard({ project }: { project: Project }) {
  const { title, category, summary, location, impact, progress, sdg, status } = project;
  return (
    <Card className="group relative flex h-full flex-col hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-xl focus-within:-translate-y-1.5 focus-within:border-brand-300 focus-within:shadow-xl">
      <div
        aria-hidden="true"
        className="h-2 rounded-t-2xl bg-linear-to-r from-brand-900 via-brand-500 to-amber-accent"
      />
      <CardContent className="flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{category}</Badge>
          <Badge tone={statusTone[status]}>{status}</Badge>
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{summary}</p>
        <p className="mt-3 flex items-center gap-1.5 text-sm text-slate-600">
          <MapPin className="size-4 text-brand-600" aria-hidden="true" />
          {location}
        </p>
        <p className="mt-1 text-sm font-medium text-brand-800">{impact}</p>

        <div className="mt-5">
          <div className="mb-1.5 flex justify-between text-xs font-semibold text-slate-600">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div
            role="progressbar"
            aria-label={`${title} progress`}
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-2 overflow-hidden rounded-full bg-slate-100"
          >
            <div
              className="h-full rounded-full bg-linear-to-r from-brand-600 to-amber-accent transition-[width] duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between pt-1">
          <span className="text-xs font-medium text-slate-500">{sdg.join(" · ")}</span>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-800 underline-offset-4 after:absolute after:inset-0 after:content-[''] hover:underline"
          >
            Learn more<span className="sr-only"> about {title}</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
