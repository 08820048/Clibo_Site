import { Routes, Route } from "react-router-dom";
import { LangProvider } from "./context/LangContext.jsx";
import Home from "./pages/Home.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Refund from "./pages/Refund.jsx";
import Releases from "./pages/Releases.jsx";
import Success from "./pages/Success.jsx";
import Docs from "./pages/Docs.jsx";

export default function App() {
  return (
    <LangProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/success" element={<Success />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </LangProvider>
  );
}
