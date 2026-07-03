import { career, education, profileDetails, researchFocus } from "./data/profile.js";
import { siteSettings } from "./data/site.js";

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
              <h2>{profileDetails.name}</h2>
              <p className="profile-position">
                {profileDetails.position}<br />
                {profileDetails.department}<br />
                {profileDetails.university}
              </p>
            </div>

            <div className="profile-contact">
              <a href={`mailto:${siteSettings.contactEmail}`}>
                {siteSettings.contactEmail} <ProfileArrow />
              </a>
              <p>{profileDetails.introduction}</p>
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
