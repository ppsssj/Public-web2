const events = [
  {
    id: "event-jk",
    number: "01",
    type: "Poster Session",
    title: "The 9th Japan–Korea Joint Workshop on Communication Sciences",
    date: "2023.01.04 — 2023.01.06",
    location: "Lahan Select Gyeongju · Korea",
    topic:
      "Basic Research Design for Chinese Font Recommendation System Based on Stroke Elements",
    images: [
      "/assets/Events/event-01-poster.jpg",
      "/assets/Events/event-01-session.jpg",
    ],
  },
  {
    id: "event-icce",
    number: "02",
    type: "Oral Session",
    title: "3rd International Conference on Computer and Communication Engineering",
    date: "2023.03.10 — 2023.03.12",
    location: "Elite Palace Hotel · Stockholm, Sweden",
    topic:
      "An Analysis of the Performance Changes of the Model by Reducing the Input Feature Dimension in Stock Price Forecasting",
    images: [
      "/assets/Events/event-02-session.jpg",
      "/assets/Events/event-02-stockholm.jpg",
    ],
  },
  {
    id: "event-kcc",
    number: "03",
    type: "Poster Session",
    title: "KCC 2023 · 한국컴퓨터종합학술대회",
    date: "2023.06.18 — 2023.06.20",
    location: "Ramada Plaza Jeju & Jeju Oriental Hotel · Korea",
    topic:
      "급락 종목 분석을 통한 이상치 탐지 알고리즘 효과성 검증 · Effectiveness Verification of Outlier Detection Algorithm through Analysis of Sharp Decline Stocks",
    images: [
      "/assets/Events/event-03-poster.jpg",
      "/assets/Events/event-03-banner.jpg",
    ],
  },
];

export default function EventsPage() {
  return (
    <main className="events-page">
      <section
        className="events-hero"
        id="events-overview"
        aria-labelledby="events-title"
      >
        <div className="events-page-kicker events-page-enter">
          <span>Conference archive</span>
          <span>Presentations &amp; field notes</span>
        </div>

        <h1 className="events-page-title events-page-enter" id="events-title">
          Events
        </h1>

        <div className="events-page-intro events-page-enter">
          <p>
            Research shared beyond the lab through workshops, conference
            sessions, academic exchange, and conversations in the field.
          </p>
          <dl>
            <div>
              <dt>Events</dt>
              <dd>03</dd>
            </div>
            <div>
              <dt>Cities</dt>
              <dd>03</dd>
            </div>
            <div>
              <dt>Archive</dt>
              <dd>2023</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="events-archive" id="events-archive">
        <header className="events-archive-heading" data-reveal>
          <span>Field notes</span>
          <h2>Academic<br />Exchange</h2>
          <p>Three presentations across Gyeongju, Stockholm, and Jeju.</p>
        </header>

        <div className="event-list">
          {events.map((event) => (
            <article
              className="event-entry"
              id={event.id}
              data-reveal
              key={event.number}
            >
              <header className="event-entry-heading">
                <span>{event.number} / 03</span>
                <div>
                  <span>{event.type}</span>
                  <h3>{event.title}</h3>
                </div>
                <time>{event.date}</time>
              </header>

              <div className="event-entry-details">
                <div>
                  <span>Location</span>
                  <p>{event.location}</p>
                </div>
                <div>
                  <span>Presentation topic</span>
                  <p>{event.topic}</p>
                </div>
              </div>

              <div className="event-gallery">
                {event.images.map((image, index) => (
                  <figure key={image}>
                    <img
                      src={image}
                      alt={`${event.title} 현장 ${index + 1}`}
                      loading="lazy"
                    />
                    <figcaption>
                      <span>{event.number}.{index + 1}</span>
                      <span>{index === 0 ? event.type : event.location}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
