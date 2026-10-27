import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/layout/layout";
import HomePage from "./pages/home-page";

const AboutPage = lazy(() => import("./pages/about-page"));
const ProjectsPage = lazy(() => import("./pages/projects-page"));
const ContactPage = lazy(() => import("./pages/contact-page"));
const NotFoundPage = lazy(() => import("./pages/not-found-page"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
