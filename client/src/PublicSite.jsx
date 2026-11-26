import { lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import FloatingContact from "@/components/layout/FloatingContact";

const Home = lazy(() => import("@/pages/public/Home"));
const About = lazy(() => import("@/pages/public/About"));
const Services = lazy(() => import("@/pages/public/Services"));
const Facility = lazy(() => import("@/pages/public/Facility"));
const PathologyRadiology = lazy(() => import("@/pages/public/PathologyRadiology"));
const TpaList = lazy(() => import("@/pages/public/TpaList"));
const PanelsOfDoctors = lazy(() => import("@/pages/public/PanelsOfDoctors"));
const Contact = lazy(() => import("@/pages/public/Contact"));
const Privacy = lazy(() => import("@/pages/public/Privacy"));
const Terms = lazy(() => import("@/pages/public/Terms"));
const RefundPolicy = lazy(() => import("@/pages/public/RefundPolicy"));
const NotFound = lazy(() => import("@/pages/public/NotFound"));

// Shared layout plus every public route.
// Adding a page? Also add it to server/controllers/seoController.js for the sitemap.
export default function PublicSite() {
  const location = useLocation();

  return (
    <div>
      <ScrollProgressBar />
      <ScrollToTop />
      <Navbar />
      <main key={location.pathname} className="flex-1 animate-in fade-in duration-300">
        <Routes>
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
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
