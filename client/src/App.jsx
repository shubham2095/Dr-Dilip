import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Facility = lazy(() => import("@/pages/Facility"));
const PathologyRadiology = lazy(() => import("@/pages/PathologyRadiology"));
const TpaList = lazy(() => import("@/pages/TpaList"));
const PanelsOfDoctors = lazy(() => import("@/pages/PanelsOfDoctors"));
const Contact = lazy(() => import("@/pages/Contact"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const RefundPolicy = lazy(() => import("@/pages/RefundPolicy"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">
          Loading…
        </div>
      }
    >
      <Routes>
        {/* ⚠️ Every page MUST be a CHILD of this one Route, so Layout wraps all of them */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/pathology-radiology" element={<PathologyRadiology />} />
          <Route path="/tpa-list" element={<TpaList />} />
          <Route path="/panels-of-doctors" element={<PanelsOfDoctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}