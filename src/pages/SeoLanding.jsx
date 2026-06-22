import React from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useNavScroll } from "../hooks/useNavScroll.js";
import { getLandingPage, SEO_LANDING_PAGES } from "../seo/landingPages.js";
import "../styles/home.css";
import "../styles/privacy.css";

const pageTitles = Object.fromEntries(SEO_LANDING_PAGES.map((page) => [page.path, page.title]));

export default function SeoLanding() {
  const location = useLocation();
  const page = getLandingPage(location.pathname);
  useNavScroll();

  if (!page) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Header />

      <main className="seo-landing">
        <div className="seo-landing-hero">
          <p className="updated">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="seo-landing-lede">{page.lede}</p>
          <div className="seo-landing-actions">
            <a className="button button-primary" href="https://releases.clibo.us/Clibo-1.2.8-32.dmg">
              Download Free Trial
            </a>
            <a
              className="button button-primary button-teal"
              href="https://checkout.dodopayments.com/buy/pdt_0NfjSslAaILXA11xz0qCX?quantity=1&redirect_url=https%3A%2F%2Fclibo.us%2Fsuccess"
            >
              Buy - $7.66
            </a>
          </div>
        </div>

        <div className="seo-landing-grid">
          <article className="seo-landing-article">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="seo-landing-cta">
              <h2>{page.ctaHeading}</h2>
              <p>{page.ctaBody}</p>
              <div className="seo-landing-actions">
                <a className="button button-primary" href="https://releases.clibo.us/Clibo-1.2.8-32.dmg">
                  Download Free Trial
                </a>
                <Link className="button button-primary button-teal" to="/docs">
                  Read Docs
                </Link>
              </div>
            </section>
          </article>

          <aside className="seo-landing-sidebar" aria-label="Related Clibo guides">
            <h2>Related guides</h2>
            <nav>
              {page.related.map((path) => (
                <Link key={path} to={path}>
                  {pageTitles[path] || path}
                </Link>
              ))}
              <Link to="/docs">Clibo Documentation</Link>
              <Link to="/support">Support</Link>
            </nav>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
