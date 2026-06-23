import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LangProvider } from "./context/LangContext.jsx";
import Home from "./pages/Home.jsx";
import Seo from "./seo/Seo.jsx";
import { SEO_LANDING_PAGES } from "./seo/landingPages.js";

const Privacy = lazy(() => import("./pages/Privacy.jsx"));
const Terms = lazy(() => import("./pages/Terms.jsx"));
const Refund = lazy(() => import("./pages/Refund.jsx"));
const Releases = lazy(() => import("./pages/Releases.jsx"));
const Support = lazy(() => import("./pages/Support.jsx"));
const Success = lazy(() => import("./pages/Success.jsx"));
const Docs = lazy(() => import("./pages/Docs.jsx"));
const YushengaPrivacy = lazy(() => import("./pages/YushengaPrivacy.jsx"));
const SeoLanding = lazy(() => import("./pages/SeoLanding.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  return (
    <LangProvider>
      <Seo />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/releases" element={<Releases />} />
          <Route path="/support" element={<Support />} />
          <Route path="/success" element={<Success />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/yushenga/privacy" element={<YushengaPrivacy />} />
          <Route path="/yushenga/privacy/" element={<YushengaPrivacy />} />
          {SEO_LANDING_PAGES.map((page) => (
            <Route key={page.path} path={page.path} element={<SeoLanding />} />
          ))}
          <Route path="/changelog" element={<Navigate to="/releases" replace />} />
          <Route path="/pricing" element={<Navigate to="/#pricing" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </LangProvider>
  );
}
