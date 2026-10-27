import { Suspense } from "react";
import { useLocation, useOutlet } from "react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { usePageMeta } from "../../hooks/use-page-meta";

export function Layout() {
  const { pathname } = useLocation();
  // useOutlet captures the element at render time, so the exiting page keeps its own content.
  const outlet = useOutlet();
  const reduce = useReducedMotion();
  usePageMeta();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-amber-accent px-4 py-2 font-semibold text-brand-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1 overflow-x-clip focus:outline-none">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Suspense fallback={<div className="min-h-[60vh]" role="status" aria-label="Loading page" />}>{outlet}</Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
