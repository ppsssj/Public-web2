import { useEffect, useRef, useState } from "react";
import { publicationGroups } from "./data/publications.js";

const publicationCount = publicationGroups.reduce(
  (total, group) => total + group.items.length,
  0,
);

const publicationYears = publicationGroups
  .map((group) => group.year)
  .filter((year) => /^\d{4}$/.test(year));

function scholarLink(citation) {
  return `https://scholar.google.com/scholar?q=${encodeURIComponent(citation)}`;
}

export default function PublicationPage() {
  let publicationIndex = 0;
  const [currentYear, setCurrentYear] = useState(publicationYears[0]);
  const [yearQuery, setYearQuery] = useState(publicationYears[0]);
  const [yearError, setYearError] = useState("");
  const [showYearNav, setShowYearNav] = useState(false);
  const yearNavigationTarget = useRef(null);

  useEffect(() => {
    let frame = 0;
    let scrollSettleTimer = 0;

    const updateCurrentYear = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const triggerLine = Math.min(window.innerHeight * 0.45, 420);
        let visibleYear = publicationYears[0];

        publicationYears.forEach((year) => {
          const group = document.getElementById(`publication-year-${year}`);
          if (group && group.getBoundingClientRect().top <= triggerLine) {
            visibleYear = year;
          }
        });

        const archive = document.getElementById("publication-archive");
        const archiveRect = archive?.getBoundingClientRect();
        setShowYearNav(
          Boolean(
            archiveRect &&
              archiveRect.top <= window.innerHeight * 0.7 &&
              archiveRect.bottom > 120,
          ),
        );
        setCurrentYear(yearNavigationTarget.current || visibleYear);
      });
    };

    const handleScroll = () => {
      window.clearTimeout(scrollSettleTimer);
      updateCurrentYear();

      if (yearNavigationTarget.current) {
        scrollSettleTimer = window.setTimeout(() => {
          yearNavigationTarget.current = null;
          updateCurrentYear();
        }, 220);
      }
    };

    updateCurrentYear();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(scrollSettleTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setYearQuery(currentYear);
    setYearError("");
  }, [currentYear]);

  const jumpToYear = (year) => {
    setYearError("");
    yearNavigationTarget.current = year;
    setCurrentYear(year);
    const targetId = `publication-year-${year}`;
    const target = document.getElementById(targetId);

    window.history.pushState(null, "", `#${targetId}`);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleYearSubmit = (event) => {
    event.preventDefault();
    const year = yearQuery.trim();

    if (!publicationYears.includes(year)) {
      setYearError("Enter a year from 2016 to 2026");
      return;
    }

    jumpToYear(year);
  };

  const handleYearChange = (event) => {
    const year = event.target.value.replace(/\D/g, "").slice(0, 4);
    setYearQuery(year);
    setYearError("");

    if (publicationYears.includes(year)) {
      jumpToYear(year);
    } else if (year.length === 4) {
      setYearError("Enter a year from 2016 to 2026");
    }
  };

  const currentYearIndex = publicationYears.indexOf(currentYear);
  const newerYear =
    currentYearIndex > 0 ? publicationYears[currentYearIndex - 1] : null;
  const olderYear =
    currentYearIndex < publicationYears.length - 1
      ? publicationYears[currentYearIndex + 1]
      : null;

  return (
    <main className="publication-page">
      <section
        className="publication-hero"
        id="publication-overview"
        aria-labelledby="publication-title"
      >
        <div className="publication-page-kicker publication-page-enter">
          <span>Research archive</span>
          <span>2016 — 2026</span>
        </div>

        <h1
          className="publication-page-title publication-page-enter"
          id="publication-title"
        >
          Publications
        </h1>

        <div className="publication-hero-summary publication-page-enter">
          <p>
            Research across artificial intelligence, financial forecasting,
            digital accessibility, visual understanding, and typography.
          </p>
          <dl>
            <div>
              <dt>Works</dt>
              <dd>{publicationCount}</dd>
            </div>
            <div>
              <dt>Years</dt>
              <dd>11</dd>
            </div>
            <div>
              <dt>Latest</dt>
              <dd>2026</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="publication-archive" id="publication-archive">
        <header className="publication-archive-heading" data-reveal>
          <span>Complete list</span>
          <h2>Selected<br />Works</h2>
        </header>

        <div className="publication-year-groups">
          {publicationGroups.map((group) => (
            <section
              className="publication-year-group"
              id={`publication-year-${group.year.toLowerCase()}`}
              data-reveal
              key={group.year}
            >
              <div className="publication-year">
                <h3>{group.year}</h3>
                <span>{String(group.items.length).padStart(2, "0")} works</span>
              </div>

              <div className="publication-rows">
                {group.items.map((publication) => {
                  publicationIndex += 1;
                  const publicationNumber = publicationCount - publicationIndex + 1;
                  const direct = Boolean(publication.url);

                  return (
                    <a
                      className="publication-row"
                      href={publication.url || scholarLink(publication.citation)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${publication.citation} — ${direct ? "full text" : "find paper"}`}
                      key={publication.citation}
                    >
                      <span className="publication-row-number">
                        {String(publicationNumber).padStart(2, "0")}
                      </span>
                      <span className="publication-row-type">{publication.type}</span>
                      <span className="publication-row-citation">
                        {publication.citation}
                      </span>
                      <span className="publication-row-link">
                        {direct ? "Full text" : "Find paper"}
                        <span aria-hidden="true">↗</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </section>

      <nav
        className={`publication-year-nav ${showYearNav ? "is-visible" : ""}`}
        aria-label="Publication years"
        aria-hidden={!showYearNav}
      >
        {newerYear ? (
          <button
            type="button"
            className="publication-year-nav-step publication-year-nav-step--newer"
            aria-label={`Go to ${newerYear}`}
            onClick={() => jumpToYear(newerYear)}
          >
            <strong>{newerYear}</strong>
          </button>
        ) : (
          <span className="publication-year-nav-step is-disabled" aria-hidden="true">
            <strong>—</strong>
          </span>
        )}

        <form onSubmit={handleYearSubmit} noValidate>
          {yearError && (
            <span className="publication-year-nav-error" role="status">
              {yearError}
            </span>
          )}
          <label htmlFor="publication-year-input">Year</label>
          <input
            id="publication-year-input"
            type="text"
            inputMode="numeric"
            maxLength="4"
            placeholder="YYYY"
            value={yearQuery}
            aria-invalid={Boolean(yearError)}
            aria-label="Publication year"
            onFocus={(event) => event.target.select()}
            onChange={handleYearChange}
          />
        </form>

        {olderYear ? (
          <button
            type="button"
            className="publication-year-nav-step publication-year-nav-step--older"
            aria-label={`Go to ${olderYear}`}
            onClick={() => jumpToYear(olderYear)}
          >
            <strong>{olderYear}</strong>
          </button>
        ) : (
          <span className="publication-year-nav-step is-disabled" aria-hidden="true">
            <strong>—</strong>
          </span>
        )}
      </nav>
    </main>
  );
}
