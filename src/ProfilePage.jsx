const education = [
  {
    period: "2011.03 — 2015.02",
    degree: "B.S. in Multimedia Science",
    institution: "Sookmyung Women's University",
  },
  {
    period: "2015.03 — 2021.02",
    degree: "Ph.D. in IT Engineering",
    institution: "Sookmyung Women's University",
  },
];

const career = [
  {
    period: "2025.09 — Present",
    role: "Assistant Professor",
    institution: "Soonchunhyang University · Computer Software Engineering",
  },
  {
    period: "2022.04 — 2025.08",
    role: "Assistant Professor",
    institution: "Semyung University · School of Computer Science",
  },
  {
    period: "2021.09 — 2022.03",
    role: "Principal Researcher",
    institution: "ICT Convergence Research Institute, Sookmyung Women's University",
  },
  {
    period: "2020.09 — 2022.02",
    role: "Lecturer",
    institution: "Seoul National University of Science and Technology",
  },
  {
    period: "2020.09 — 2021.08",
    role: "Lecturer",
    institution: "Sookmyung Women's University",
  },
];

const researchFocus = [
  "Artificial Intelligence",
  "Machine Learning",
  "Financial Forecasting",
  "Digital Accessibility",
  "AI Applications",
  "Explainable AI",
];

function ProfileArrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function ProfilePage() {
  return (
    <main className="profile-page">
      <section
        className="profile-hero"
        id="profile-overview"
        aria-labelledby="profile-title"
      >
        <div className="profile-kicker profile-enter">
          <span>Professor profile</span>
          <span>01 / AICS</span>
        </div>

        <h1 className="profile-title profile-enter" id="profile-title">
          Profile
        </h1>

        <div className="profile-hero-grid">
          <div className="profile-identity profile-enter">
            <div>
              <p className="profile-label">Principal Investigator</p>
              <h2>Yoojeong Song</h2>
              <p className="profile-position">
                Assistant Professor<br />
                Computer Software Engineering<br />
                Soonchunhyang University
              </p>
            </div>

            <div className="profile-contact">
              <a href="mailto:yoojeong@sch.ac.kr">
                yoojeong@sch.ac.kr <ProfileArrow />
              </a>
              <p>
                Building practical and human-centered artificial intelligence
                through prediction, accessibility, and explainability.
              </p>
            </div>
          </div>

          <div
            className="profile-portrait-space profile-enter"
            aria-label="Professor portrait image area reserved"
          >
            <span>Portrait / reserved</span>
          </div>
        </div>
      </section>

      <section className="profile-history profile-section" id="profile-history">
        <div className="profile-section-heading" data-reveal>
          <span>Background</span>
          <h2>Education<br />&amp; Career</h2>
        </div>

        <div className="profile-history-content">
          <div className="profile-history-group" data-reveal>
            <h3>Education</h3>
            <div className="profile-history-list">
              {education.map((item, index) => (
                <article className="profile-history-row" key={item.period}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <time>{item.period}</time>
                  <div>
                    <h4>{item.degree}</h4>
                    <p>{item.institution}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="profile-history-group" data-reveal>
            <h3>Career</h3>
            <div className="profile-history-list">
              {career.map((item, index) => (
                <article className="profile-history-row" key={item.period}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <time>{item.period}</time>
                  <div>
                    <h4>{item.role}</h4>
                    <p>{item.institution}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="profile-focus profile-section" id="profile-focus">
        <div className="profile-section-heading" data-reveal>
          <span>Research focus</span>
          <h2>Fields of<br />Interest</h2>
        </div>

        <ol className="profile-focus-list">
          {researchFocus.map((focus, index) => (
            <li data-reveal key={focus}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{focus}</strong>
              {/* <span aria-hidden="true">↘</span> */}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
