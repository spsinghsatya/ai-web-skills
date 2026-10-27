import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/layout/layout";
import HomePage from "./pages/home-page";

const AboutPage = lazy(() => import("./pages/about-page"));
const ProjectsPage = lazy(() => import("./pages/projects-page"));
const ContactPage = lazy(() => import("./pages/contact-page"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p className="p-16 text-center text-slate-600" role="status">Loading…</p>}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
