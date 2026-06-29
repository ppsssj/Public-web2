const currentMembers = [
  { name: "노재준", image: "/assets/Members/no-jaejun.jpg" },
  { name: "노경태", image: "/assets/Members/no-gyeongtae.jpg" },
  { name: "신동화", image: "/assets/Members/shin-donghwa.jpg" },
  { name: "박성진", image: "/assets/Members/park-sungjin.jpg" },
  { name: "이현준", image: "/assets/Members/lee-hyeonjun.jpg" },
  { name: "허주완", image: "/assets/Members/heo-juwan.jpg" },
];

const alumni = [
  {
    name: "Woojin Cho",
    degree: "M.S. · 2024",
    history: [
      "B.A., Chinese Language and Literature, Chungbuk National University",
      "M.S., Computer Science, Semyung University",
    ],
    interests: [
      "Stock Forecasting",
      "Anomaly Detection",
      "Machine Learning",
      "Deep Learning",
    ],
  },
  {
    name: "Zhipeng Dong",
    degree: "M.S. · 2024",
    history: [
      "B.E., Electronic Information Engineering, Nantong University",
      "Computer Teacher & Information Center, Lianyungang Technical School",
      "M.S., Computer Engineering, Semyung University",
    ],
    interests: [
      "Stock Forecasting",
      "Deep Learning",
      "Web Design",
      "Network Security",
    ],
  },
];

const theses = [
  {
    year: "2024",
    author: "Zhipeng Dong · 동지붕",
    title: "신경망 기반 중국 주식시장 분석 및 예측",
  },
  {
    year: "2024",
    author: "Woojin Cho · 조우진",
    title: "주가 예측을 위한 어텐션메커니즘 활용 신경망 모델 개발",
  },
  {
    year: "2025",
    author: "Heumgui Oh · 오흠귀",
    title: "획 요소 검출 기반의 이중 문자체 글꼴 추천 시스템 설계",
  },
];

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
