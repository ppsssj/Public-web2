import { useEffect, useState } from "react";

const directLinks = {
  symbolnet: "https://ieeexplore.ieee.org/abstract/document/10980088/",
  csi300: "https://www.mdpi.com/2079-9292/14/9/1729",
  stockReversal: "https://www.cell.com/heliyon/fulltext/S2405-8440%2824%2900167-1",
  fontMapping: "https://www.mdpi.com/2076-3417/14/3/1123",
  chartExplanation: "https://link.springer.com/chapter/10.1007/978-3-031-62846-7_37",
  hangulDetection: "https://www.mdpi.com/2079-9292/12/2/383",
  voiceReport: "https://www.mdpi.com/2079-9292/11/12/1847",
  eventFeatures: "https://www.mdpi.com/2076-3417/10/5/1597",
};

const publicationGroups = [
  {
    year: "2026",
    items: [
      {
        type: "SCIE",
        citation: "Park, J. H., Jeong, S., Yoo, J., & Song, Y. (2026). Towards Inclusive Online Learning: AI-Driven Chart Description for Visually Impaired Learners. IEEE Access.",
      },
      {
        type: "Top Conference",
        citation: "Jeong, S., Song, Y., & Kim, H. (2026). Understanding the Visual Projection Space of Multimodal LLMs. IEEE Winter Conference on Applications of Computer Vision 2026.",
      },
      {
        type: "KCI",
        citation: "송유정, 정성헌, 장보성, & 박주현. (2026). 뇌 신호를 이용한 시각 정보 재구성: 멀티모달 데이터셋과 모델의 도전과제. 멀티미디어학회논문지, 29(1), 45-53.",
      },
      {
        type: "KCI",
        citation: "박주현, 정성헌, & 송유정. (2026). 시각장애인을 위한 실시간 차트 해석 기술: 시각 데이터 접근성 향상을 위한 방법. 멀티미디어학회논문지, 29(1), 34-44.",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        type: "SCIE",
        citation: "Lim, S. B., Kim, H. Y., Yoo, J., Seo, K., & Song, Y. (2025). Development of K-PANOSE Algorithm for Measuring and Classifying Shape Elements of Hangul Fonts. IEEE Access.",
      },
      {
        type: "SCIE",
        citation: "Jeong, S., Kim, H., & Song, Y. (2025). SymbolNet: Bridging Latent Neural Representations and Symbolic Reasoning via Intermediate Feature Interpretation. IEEE Access.",
        url: directLinks.symbolnet,
      },
      {
        type: "SCIE",
        citation: "Seo, K., Dong, Z., & Song, Y. (2025). Neural Network-Based CSI300 Stock Prediction: Feature Importance and Attention Mechanism Analysis. Electronics, 14(9), 1729.",
        url: directLinks.csi300,
      },
      {
        type: "SCOPUS",
        citation: "Song, Y., Seo, K., Kim, S., & Park, J. H. (2025). HCC: A Hierarchical Chart Captioning Model for Enhanced Accessibility of Chart Data for Visually Impaired Users. International Journal of Advanced Computer Science & Applications, 16(12).",
      },
      {
        type: "KCI",
        citation: "서강현, & 송유정. (2025). AutoML 기반 단기 해상상태 예측 모델 연구. Journal of the KNST, 8(4), 726-731.",
      },
      {
        type: "KCI",
        citation: "송유정, 박주현, & 한상익. (2025). 획 요소 검출과 다중 특징 임베딩을 활용한 한글-한자 크로스 스크립트 글꼴 추천 시스템. 멀티미디어학회논문지, 28(12), 1862-1871.",
      },
      {
        type: "KCI",
        citation: "조우진, 박동준, 박주현, 유주한, 이종우, & 송유정. (2025). 시각장애인을 위한 음성 명령 기반 주식 거래 시스템 설계 및 개발. 멀티미디어학회논문지, 28(2), 226-236.",
      },
      {
        type: "SCOPUS",
        citation: "Yvette, C. C., & Song, Y. (2025). A Bilingual App for Campus Wayfinding and Local Cultural Immersion. International Conference on Multimedia Information Technology and Applications, 209-214.",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        type: "SCI(E)",
        citation: "Song, Y. (2024). Enhancing Stock Market Trend Reversal Prediction Using Feature-Enriched Neural Networks. Heliyon, 10(2).",
        url: directLinks.stockReversal,
      },
      {
        type: "SCI(E)",
        citation: "Lim, S. B., Lee, Y., & Song, Y. (2024). Definition and Automatic Extraction Performance Analysis of Stroke Elements in the English Alphabet. IEEE Access.",
      },
      {
        type: "SCI(E)",
        citation: "Lim, S. B., Ji, Y. S., Ahn, B., Park, J. H., & Song, Y. (2024). Implementing and Evaluating a Font Recommendation System Through Emotion-Based Content-Font Mapping. Applied Sciences, 14(3), 1123.",
        url: directLinks.fontMapping,
      },
      {
        type: "Top Conference",
        citation: "Seo, K., Lee, S., Cho, W. J., Song, Y., & Yang, J. (2024). Multi-Time Window Ensemble and Maximization of Expected Return for Stock Movement Prediction. PAKDD, 17-29.",
      },
      {
        type: "SCOPUS",
        citation: "Song, Y., Jeong, S., Cho, W., Lim, S. B., & Park, J. H. (2024). A Real-Time Chart Explanation System for Visually Impaired Individuals. ICCHP, 306-312.",
        url: directLinks.chartExplanation,
      },
      {
        type: "KCI",
        citation: "조우진, 김윤주, 김형준, 임순범, & 송유정. (2024). TransFont: 웹 페이지 번역 및 K-Means 군집화 기반 한국어-중국어 유사 글꼴 추천 시스템. 멀티미디어학회논문지, 27(1), 134-145.",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        type: "SCI(E)",
        citation: "Lim, S. B., Lee, J., Zhao, X., & Song, Y. (2023). Detection Model of Hangul Stroke Elements: Expansion of Non-Structured Font and Influence Evaluation by Stroke Element Combinations. Electronics, 12(2), 383.",
        url: directLinks.hangulDetection,
      },
      {
        type: "KCI",
        citation: "조우진, 조효동, 임순범, & 송유정. (2023). 한글과 한자 획요소 간 매핑 조합 연구. 한국콘텐츠학회논문지, 23(1), 275-282.",
      },
      {
        type: "KCI",
        citation: "임순범, 박세연, 전은결, 정다은, 박재홍, & 송유정. (2023). 블로그 게시물에서 감정분석을 통한 폰트 추천 서비스의 개발. 멀티미디어학회논문지, 26(12), 1575-1582.",
      },
      {
        type: "SCOPUS",
        citation: "Song, Y., Cho, W. J., & Yoo, J. (2023). An Analysis of the Performance Changes of the Model by Reducing the Input Feature Dimension in Stock Price Forecasting. ICCE, 171-178.",
      },
      {
        type: "Domestic Conference",
        citation: "조우진, 박주현, & 송유정. (2023). 급락 종목 분석을 통한 이상치 탐지 알고리즘 효과성 검증. 한국컴퓨터종합학술대회(KCC 2023), 1347-1349.",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        type: "SCI(E)",
        citation: "Choi, J., Song, Y., & Lee, J. (2022). Implementation of Voice-Based Report Generator Application for Visually Impaired. Electronics, 11(12), 1847.",
        url: directLinks.voiceReport,
      },
      {
        type: "KCI",
        citation: "윤지애, 송유정, 전자연, 안병학, & 임순범. (2022). 글꼴 유사도 판단을 위한 한글 형태소의 글자 크기별 영향력 검증 및 분석. 한국멀티미디어학회논문지, 25(8), 1059-1068.",
      },
      {
        type: "Domestic Conference",
        citation: "박주현, 김현영, & 송유정. (2022). 시각장애인을 위한 전자출판물에서의 수식 콘텐츠의 한글 독음 텍스트 변환 서비스. 한국컴퓨터종합학술대회(KCC 2022), 1495-1497.",
      },
    ],
  },
  {
    year: "2021",
    items: [
      {
        type: "Domestic Conference",
        citation: "이소진, 이지현, 송유정, & 이종우. (2021). 투자자의 개입을 방지하는 완전 자동 주식매매 시스템 구현. 한국컴퓨터종합학술대회(KCC 2021), 1604-1606.",
      },
    ],
  },
  {
    year: "2020",
    items: [
      {
        type: "SCI(E)",
        citation: "Song, Y., Lee, J. W., & Lee, J. (2020). Development of Intelligent Stock Trading System Using Pattern Independent Predictor and Turning Point Matrix. Computational Economics.",
      },
      {
        type: "SCI(E)",
        citation: "Song, Y., & Lee, J. (2020). Importance of Event Binary Features in Stock Price Prediction. Applied Sciences, 10(5), 1597.",
        url: directLinks.eventFeatures,
      },
    ],
  },
  {
    year: "2019",
    items: [
      {
        type: "SCI(E)",
        citation: "Song, Y., Lee, J. W., & Lee, J. (2019). A Study on Novel Filtering and Relationship Between Input-Features and Target-Vectors in a Deep Learning Model for Stock Price Prediction. Applied Intelligence, 49(3), 897-911.",
      },
      {
        type: "SCOPUS",
        citation: "Song, Y., & Lee, J. (2019). Design of Stock Price Prediction Model with Various Configuration of Input Features. AIPCC, 1-5.",
      },
    ],
  },
  {
    year: "2018",
    items: [
      {
        type: "SCOPUS",
        citation: "Song, Y., & Lee, J. (2018). Performance Evaluation of Deep Learning Stock Price by Chart Type for Buying Policy Verification. Fuzzy Systems and Data Mining IV, 646-652.",
      },
      {
        type: "KCI",
        citation: "송유정, 문예은, 엄지연, & 이종우. (2018). 더치 터치: 더치페이를 쉽게 해주는 모바일 어플리케이션 구현. 한국디지털콘텐츠학회 논문지, 19(1), 11-18.",
      },
      {
        type: "International Conference",
        citation: "Choi, J., Gill, H., Ou, S., Song, Y., & Lee, J. (2018). Design of Voice to Text Conversion and Management Program Based on Google Cloud Speech API. CSCI, 1452-1453.",
      },
      {
        type: "Domestic Conference",
        citation: "송유정, 김도희, 원희수, & 이종우. (2018). 주가예측을 위한 차트 유형별 필터링 구현. 한국소프트웨어종합학술대회(KSC 2018), 1604-1606.",
      },
    ],
  },
  {
    year: "2017",
    items: [
      {
        type: "KCI",
        citation: "송유정, 이재원, & 이종우. (2017). 텐서플로우를 이용한 주가 예측에서 가격-기반 입력 피쳐의 예측 성능 평가. 정보과학회 컴퓨팅의 실제 논문지, 23(11), 625-631.",
      },
      {
        type: "KCI",
        citation: "이종우, 박지연, 조사라, 한유진, & 송유정. (2017). 경매 방식을 이용한 중고도서 거래 웹 서비스 설계 및 구현. 한국디지털콘텐츠학회 논문지, 18(1), 9-16.",
      },
      {
        type: "Domestic Conference",
        citation: "신채원, 이유진, 송유정, & 이종우. (2017). 카드 사용 알림 메시지 인식을 지원하는 계획적 소비를 위한 가계부 개발. 한국컴퓨터종합학술대회(KCC 2017), 1729-1731.",
      },
      {
        type: "Domestic Conference",
        citation: "송유정, & 이종우. (2017). 텐서플로우를 이용한 주가 변동 예측 딥러닝 모델 설계 및 개발. 한국소프트웨어종합학술대회(KSC 2017), 799-801.",
      },
      {
        type: "Research Paper",
        citation: "송유정 외. (2017). 절단 장애인의 손동작 지원을 위한 3D 프린팅 전자의수 제어 소프트웨어 API 연구. WISET 주니어과학기술 연구논문 발표집, 1, 407.",
      },
    ],
  },
  {
    year: "2016",
    items: [
      {
        type: "International Conference",
        citation: "Song, Y. J., Ou, S. B., & Lee, J. W. (2016). An Analysis of Existing Android Image Loading Libraries: Picasso, Glide, Fresco, AUIL and Volley. DEStech Transactions on Engineering and Technology Research.",
      },
    ],
  },
  {
    year: "Thesis",
    items: [
      {
        type: "Ph.D. Dissertation",
        citation: "송유정. 신경망 기반 주가예측 성능 향상 기법. 숙명여자대학교, 공학박사.",
      },
    ],
  },
];

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

  useEffect(() => {
    let frame = 0;

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
        setCurrentYear(visibleYear);
      });
    };

    updateCurrentYear();
    window.addEventListener("scroll", updateCurrentYear, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateCurrentYear);
    };
  }, []);

  useEffect(() => {
    setYearQuery(currentYear);
    setYearError("");
  }, [currentYear]);

  const jumpToYear = (year) => {
    setYearError("");
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
                        {String(publicationIndex).padStart(2, "0")}
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
