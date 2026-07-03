import { researchAreas, researchProjects } from "./data/research.js";

export default function ResearchPage() {
  return (
    <main className="research-page">
      <section
        className="research-page-hero"
        id="research-overview"
        aria-labelledby="research-title"
      >
        <div className="research-page-kicker research-page-enter">
          <span>Areas &amp; projects</span>
          <span>AICS / Research</span>
        </div>

        <h1
          className="research-page-title research-page-enter"
          id="research-title"
        >
          Research
        </h1>

        <div className="research-page-intro research-page-enter">
          <p>
            We develop practical AI systems that can predict, understand, and
            explain—while remaining useful to the people they are designed for.
          </p>
          <dl>
            <div>
              <dt>Core areas</dt>
              <dd>03</dd>
            </div>
            <div>
              <dt>Projects</dt>
              <dd>06</dd>
            </div>
            <div>
              <dt>Active through</dt>
              <dd>2029</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="research-directions" id="research-areas">
        <header className="research-directions-heading" data-reveal>
          <span>Research framework</span>
          <h2>Three Ways<br />We Build AI</h2>
        </header>

        <div className="research-area-list">
          {researchAreas.map((area) => (
            <article className="research-area" data-reveal key={area.number}>
              <span className="research-area-number">{area.number}</span>
              <div className="research-area-content">
                <h3>{area.title}</h3>
                <p>{area.summary}</p>
              </div>
              <ul>
                {area.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
              <span className="research-area-arrow" aria-hidden="true">↘</span>
            </article>
          ))}
        </div>
      </section>

      <section className="research-projects" id="research-projects">
        <header className="research-projects-heading" data-reveal>
          <span>Funded &amp; collaborative work</span>
          <h2>Research<br />Careers</h2>
          <p>
            A timeline of research programs led and supported over the past
            several years.
          </p>
        </header>

        <div className="research-project-list">
          {researchProjects.map((project, index) => (
            <article className="research-project" data-reveal key={project.title}>
              <span className="research-project-number">
                {String(researchProjects.length - index).padStart(2, "0")}
              </span>
              <time>{project.period}</time>
              <div className="research-project-main">
                <h3>{project.title}</h3>
                <p>{project.program}</p>
              </div>
              <div className="research-project-meta">
                <strong>{project.role}</strong>
                <span className={project.status === "Ongoing" ? "is-active" : ""}>
                  {project.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
