import React from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import TrustStrip from "../components/TrustStrip.jsx";
import Features from "../components/Features.jsx";
import Comparison from "../components/Comparison.jsx";
import Pricing from "../components/Pricing.jsx";
import FAQ from "../components/FAQ.jsx";
import Footer from "../components/Footer.jsx";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import { useNavScroll } from "../hooks/useNavScroll.js";
import "../styles/home.css";

export default function Home() {
  useScrollReveal();
  useNavScroll();

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <TrustStrip />
        <Features />
        <Comparison />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
