import { alumni, currentMembers, theses } from "./data/members.js";

export default function MembersPage() {
  return (
    <main className="members-page">
      <section className="members-hero" aria-labelledby="members-title">
        <div className="members-page-kicker members-page-enter">
          <span>People of AICS</span>
          <span>Students &amp; alumni</span>
        </div>

        <h1 className="members-page-title members-page-enter" id="members-title">
          Members
        </h1>

        <div className="members-page-intro members-page-enter">
          <p>
            A collaborative group exploring intelligent systems through
            research, engineering, and human-centered problem solving.
          </p>
          <dl>
            <div>
              <dt>Current</dt>
              <dd>06</dd>
            </div>
            <div>
              <dt>Alumni profiles</dt>
              <dd>02</dd>
            </div>
            <div>
              <dt>Master's theses</dt>
              <dd>03</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="current-members-section" id="current-members">
        <header className="members-section-heading" data-reveal>
          <span>Current members</span>
          <h2>Undergraduate<br />Researchers</h2>
        </header>

        <div className="member-grid">
          {currentMembers.map((member, index) => (
            <article className="member-card" data-reveal key={member.name}>
              <div className="member-photo">
                <img src={member.image} alt={`${member.name} 프로필`} loading="lazy" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="member-card-info">
                <h3>{member.name}</h3>
                <p>Undergraduate Researcher</p>
                <span>AICS Lab.</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="alumni-section" id="members-alumni">
        <header className="alumni-section-heading" data-reveal>
          <span>SMU alumni</span>
          <h2>Former<br />Researchers</h2>
        </header>

        <div className="alumni-grid">
          {alumni.map((member, index) => (
            <article className="alumni-card" data-reveal key={member.name}>
              <div className="alumni-card-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{member.degree}</span>
              </div>
              <h3>{member.name}</h3>
              <div className="alumni-card-details">
                <div>
                  <h4>Background</h4>
                  <ul>
                    {member.history.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Research interests</h4>
                  <ul>
                    {member.interests.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="thesis-section" id="members-theses">
        <header className="thesis-section-heading" data-reveal>
          <span>Master's archive</span>
          <h2>Selected<br />Theses</h2>
        </header>

        <div className="thesis-list">
          {theses.map((thesis, index) => (
            <article className="thesis-row" data-reveal key={thesis.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <time>{thesis.year}</time>
              <div>
                <h3>{thesis.title}</h3>
                <p>{thesis.author} · 세명대학교 일반대학원 컴퓨터학과</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
