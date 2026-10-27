import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

type Tag = "div" | "h2" | "p" | "li" | "section" | "dl";

type RevealProps = {
  children: ReactNode;
  as?: Tag;
  delay?: number;
  distance?: number;
  duration?: number;
  className?: string;
};

const motionTags = { div: motion.div, h2: motion.h2, p: motion.p, li: motion.li, section: motion.section, dl: motion.dl } as const;

/** Scroll-reveal (fade + rise), once. Renders a plain element for reduced-motion users. */
export function Reveal({ children, as = "div", delay = 0, distance = 24, duration = 0.6, className }: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  const variants: Variants = {
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] } },
  };
  const Tag = motionTags[as];
  return (
    <Tag className={className} variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
      {children}
    </Tag>
  );
}
