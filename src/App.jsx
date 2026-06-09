import { Routes, Route, Navigate } from "react-router-dom";
import { LangProvider } from "./context/LangContext.jsx";
import Home from "./pages/Home.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Refund from "./pages/Refund.jsx";
import Releases from "./pages/Releases.jsx";
import Support from "./pages/Support.jsx";
import Success from "./pages/Success.jsx";
import Docs from "./pages/Docs.jsx";
import Seo from "./seo/Seo.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <LangProvider>
      <Seo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/support" element={<Support />} />
        <Route path="/success" element={<Success />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/changelog" element={<Navigate to="/releases" replace />} />
        <Route path="/pricing" element={<Navigate to="/#pricing" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LangProvider>
  );
}
