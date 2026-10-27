import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type Tone = "brand" | "amber" | "slate" | "green";
const tones: Record<Tone, string> = {
  brand: "bg-brand-50 text-brand-800 ring-brand-200",
  amber: "bg-amber-50 text-amber-900 ring-amber-200",
  slate: "bg-slate-100 text-slate-700 ring-slate-200",
  green: "bg-emerald-50 text-emerald-900 ring-emerald-200",
};

export function Badge({ tone = "brand", className, ...props }: { tone?: Tone } & HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset", tones[tone], className)}
      {...props}
    />
  );
}
