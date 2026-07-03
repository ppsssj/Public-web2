const researchAreas = [
  {
    number: "01",
    title: "Financial Intelligence",
    summary:
      "Learning robust signals from complex financial time-series data for prediction, anomaly detection, and decision support.",
    topics: ["Market Forecasting", "Trend Reversal", "Anomaly Detection"],
  },
  {
    number: "02",
    title: "Accessible Intelligence",
    summary:
      "Designing AI systems that make charts, documents, and digital services more accessible to people with visual impairments.",
    topics: ["Chart Understanding", "Assistive AI", "Inclusive Interaction"],
  },
  {
    number: "03",
    title: "Visual & Explainable AI",
    summary:
      "Connecting visual representations, multimodal learning, and interpretable reasoning to build transparent AI applications.",
    topics: ["Multimodal Learning", "Visual Reasoning", "Explainable AI"],
  },
];

const researchProjects = [
  {
    period: "2026.03 — 2029.02",
    title: "신진연구",
    program: "Early-Career Research Program",
    role: "Principal Investigator",
    status: "Ongoing",
  },
  {
    period: "2022.09 — 2025.02",
    title: "딥러닝 기반 주식시장 시세조종행위 탐지 및 예측 모델 개발",
    program: "한국연구재단 · 개인기초연구(생애첫연구)",
    role: "Principal Investigator",
    status: "Completed",
  },
  {
    period: "2021.09 — 2022.04",
    title:
      "멀티모달 데이터를 지원하는 딥러닝 기반 주가예측 모델과 투자성향 기반 매매정책 개발",
    program: "한국연구재단 · 학문후속세대양성(박사후국내연수)",
    role: "Principal Investigator",
    status: "Closed 2022.04",
  },
  {
    period: "Completed 2021.05",
    title: "현재 글꼴 구조 정보의 딥러닝 학습을 통한 상황 맞춤형 폰트 추천 기술",
    program: "Font Intelligence Research",
    role: "Principal Researcher",
    status: "Completed",
  },
  {
    period: "2018.03 — 2021.05",
    title: "딥러닝 기반 국내/국외 주가예측 시스템 및 매매정책 생성기 개발",
    program: "Financial AI Research",
    role: "Principal Researcher",
    status: "Completed",
  },
  {
    period: "2018.08 — 2021.05",
    title:
      "음성 기반 개인화 서비스를 통한 시각장애 대학생의 독립적 학습 지원 기술 개발",
    program: "Digital Accessibility Research",
    role: "Researcher",
    status: "Completed",
  },
];

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
