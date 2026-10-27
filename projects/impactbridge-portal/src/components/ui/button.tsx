import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type Variant = "primary" | "accent" | "outline" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-amber-accent disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
const variants: Record<Variant, string> = {
  primary: "bg-brand-900 text-white hover:bg-brand-700 shadow-sm hover:shadow-md",
  accent: "bg-amber-accent text-brand-950 hover:bg-amber-300 shadow-sm hover:shadow-md",
  outline: "border-2 border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white",
  light: "border-2 border-white/70 text-white hover:bg-white hover:text-brand-900",
  ghost: "text-brand-900 hover:bg-brand-50",
};
const sizes: Record<Size, string> = { md: "h-11 px-6 text-sm", lg: "h-13 px-8 text-base" };

export function buttonStyles(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type Common = { variant?: Variant; size?: Size };

export function Button({ variant, size, className, ...props }: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={buttonStyles(variant, size, className)} {...props} />;
}

export function ButtonLink({ variant, size, className, ...props }: Common & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={buttonStyles(variant, size, className)} {...props} />;
}
