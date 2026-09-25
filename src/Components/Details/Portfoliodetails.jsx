import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PortfolioData } from "../All file Data/Data";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import SEO from "../Common/SEO";
import { SITE } from "../../seo/site";

function projectAlt(project) {
  if (!project?.Project) return "";
  if (project.Pheading === "Direct Sales Report")
    return "Direct Sales Report application by Suresh Rokaya — sales reporting interface";
  return `${project.Pheading} project by Suresh Rokaya — website interface screenshot`;
}

export default function Portfoliodetails() {
  let { Pheading } = useParams();
  const portfolio = PortfolioData.find(
    (element) => element.Pheading === Pheading,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Pheading]);

  if (!portfolio) {
    return (
      <div className="detail-page-error">
        <div className="container">
          <SEO
            title="Project not found | Suresh Rokaya"
            description="The requested project could not be found. Browse projects by Suresh Rokaya."
            path="/portfolio"
            noindex
          />
          <h1>Project not found</h1>
          <p>
            This project is no longer listed.{" "}
            <Link to="/portfolio">Browse all projects by Suresh Rokaya</Link>.
          </p>
          <Link to="/portfolio" className="btn btn-primary">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const path = `/portfoliodetails/${encodeURIComponent(portfolio.Pheading)}`;
  const title = `${portfolio.Pheading} | ${portfolio.stack} | Suresh Rokaya`;
  const description = `${portfolio.Pheading} — ${portfolio.PParagraph} Built by Suresh Rokaya, software developer.`;

  return (
    <>
      <SEO title={title} description={description} path={path} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: SITE.canonicalBase + "/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Projects",
              item: SITE.canonicalBase + "/portfolio",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: portfolio.Pheading,
              item: SITE.canonicalBase + path,
            },
          ],
        })}
      </script>
      <section className="detail-hero-section">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <Link to="/portfolio" className="detail-back-button">
              <FaArrowLeft style={{ marginRight: "8px" }} aria-hidden="true" />
              Back to projects by Suresh Rokaya
            </Link>
          </nav>

          <div className="detail-hero-content">
            <h1 className="detail-hero-title">{portfolio.Pheading}</h1>
            <p className="detail-hero-subtitle">{portfolio.PParagraph}</p>
          </div>
        </div>
      </section>

      <section className="portfolio-detail-section">
        <div className="container">
          <article>
            {portfolio.Project && (
              <div>
                <img
                  src={portfolio.Project}
                  alt={projectAlt(portfolio)}
                  className="portfolio-detail-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}

            <div className="project-facts">
              <div>
                <span className="eyebrow">PROJECT TYPE</span>
                <p>{portfolio.kind}</p>
              </div>
              <div>
                <span className="eyebrow">TECHNOLOGIES / FOCUS</span>
                <p>{portfolio.stack}</p>
              </div>
              <div>
                <span className="eyebrow">PROJECT NOTES</span>
                {portfolio.role ? (
                  <>
                    <p>
                      <strong>My role:</strong> {portfolio.role}
                    </p>
                    <ul>
                      {portfolio.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <p>
                      <strong>Development focus:</strong> {portfolio.focus}
                    </p>
                  </>
                ) : (
                  <p>
                    This is an earlier frontend project from my archive. The
                    screenshot records the interface; detailed implementation
                    notes and a source repository are not yet listed.
                  </p>
                )}
              </div>
            </div>
            <div className="portfolio-actions">
              {portfolio.URL && (
                <a
                  href={portfolio.URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-glow"
                >
                  {portfolio.linkLabel || "View Live Project"}
                  <FaExternalLinkAlt
                    style={{ marginLeft: "8px" }}
                    aria-hidden="true"
                  />
                </a>
              )}{" "}
              <Link className="text-link" to="/about">
                More about Suresh Rokaya <span aria-hidden="true">→</span>
              </Link>{" "}
              <Link className="text-link" to="/contact">
                Discuss a similar project <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
