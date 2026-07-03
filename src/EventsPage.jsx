import { events } from "./data/events.js";

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
