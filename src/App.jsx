import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

const videoSource = "/assets/a.mp4";

const projects = [
  {
    name: "Financial Time-Series Analysis & Prediction",
    field: "Finance AI",
    role: "Financial data modeling & prediction",
    awards: "Forecasting  ·  Trend Analysis  ·  Volatility Modeling",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Visual Information Processing & AI Applications",
    field: "Vision AI",
    role: "Visual data processing with AI",
    awards: "Computer Vision · Image Processing · Object Detection",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Accessibility & Explainable",
    field: "XAI",
    role: "Human-centered and trustworthy AI",
    awards: "XAI · Interpretability · Inclusive Design",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=85",
  },
];

const publications = [
  {
    title:
      "Enhancing Stock Market Trend Reversal Prediction using Feature-enriched Neural Networks",
    venue: "Heliyon",
    url: "https://www.cell.com/heliyon/fulltext/S2405-8440%2824%2900167-1",
    image: "/assets/Research/enhancing stock.jpg",
  },
  {
    title: "A Real-Time Chart Explanation System for Visually Impaired Individuals",
    venue: "ICCHP 2024",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-62846-7_37",
    image: "/assets/Research/a realtime.webp",
  },
  {
    title:
      "Implementing and Evaluating a Font Recommendation System Through Emotion-Based Content-Font Mapping",
    venue: "Applied Sciences",
    url: "https://www.mdpi.com/2076-3417/14/3/1123",
    image: "/assets/Research/Implementing and.jpg",
  },
  {
    title:
      "SymbolNet: Bridging Latent Neural Representations and Symbolic Reasoning via Intermediate Feature Interpretating",
    venue: "IEEE Access",
    url: "https://ieeexplore.ieee.org/abstract/document/10980088/",
    image: "/assets/Research/symbolnet.jpg",
  },
];

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↘
    </span>
  );
}

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return undefined;

    const lenis = new Lenis({
      autoRaf: true,
      autoToggle: true,
      smoothWheel: true,
      lerp: 0.085,
      wheelMultiplier: 0.9,
      anchors: true,
      allowNestedScroll: true,
      stopInertiaOnNavigate: true,
    });

    return () => lenis.destroy();
  }, []);
}

function Header({ onContact }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="AICS home">
        AICS®
      </a>
      <nav aria-label="Primary navigation">
        <a href="#work">research</a>
        <a href="#studio">about</a>
        <button type="button" onClick={onContact}>
          contact
        </button>
      </nav>
      <span className="location">SCH University</span>
    </header>
  );
}

function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playShowreel = () => {
    videoRef.current?.play().catch(() => {});
  };

  return (
    <section className="hero hero--playing" id="top">
      <div className="hero-copy">
        <div className="hero-word" aria-hidden="true">
          AICS
        </div>
      </div>
      <div className={`hero-media ${isPlaying ? "is-playing" : ""}`}>
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/a-poster.jpg"
          onPlay={() => setIsPlaying(true)}
        >
          <source src={videoSource} type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <button
          className="showreel-trigger"
          type="button"
          onClick={playShowreel}
          aria-label="Play showreel"
        >
          <span className="showreel-play" aria-hidden="true">
            ▶
          </span>
          <span className="showreel-copy">
            <strong>Watch Showreel</strong>
            <small>2015–26</small>
          </span>
        </button>
      </div>
      <div className="hero-entry" aria-hidden="true">
        <div className="hero-entry-word">
          <span className="hero-entry-ai">AI</span>
          <span className="hero-entry-cs">CS</span>
        </div>
        <div className="hero-entry-bar" />
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="work section-pad" id="work">
      <div className="section-intro research-intro" data-reveal>
        <h2>
          Research Interests <Arrow />
        </h2>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project" key={project.name} data-reveal>
            <span className="project-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="project-summary">
              <h3>{project.name}</h3>
              <span>{project.awards}</span>
            </div>
            <div className="project-field">
              <strong>{project.field}</strong>
              <span>{project.role}</span>
            </div>
            <div className="project-thumb">
              <img
                src={project.image}
                alt={`${project.field} research`}
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Studio() {
  return (
    <section className="studio section-pad" id="studio">
      <div className="section-intro" data-reveal>
        <h2>
          Key Research Areas <Arrow />
        </h2>
        <p>
          We research practical AI technologies for prediction, accessibility,
          visual understanding, and explainability, building intelligent systems
          that are useful, transparent, and human-centered.
        </p>{" "}
      </div>
      <div className="publication-grid" data-reveal>
        {publications.map((publication, index) => (
          <article className="publication-card" key={publication.title}>
            <span className="publication-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="publication-image">
              <img src={publication.image} alt="" loading="lazy" />
            </div>
            <div className="publication-content">
              <span className="publication-venue">{publication.venue}</span>
              <h3>{publication.title}</h3>
              <a
                href={publication.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${publication.title} full text`}
              >
                Full text <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Playground() {
  const address = "충남 아산시 순천향로 22-11 멀티미디어 5층 507호";
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="playground section-pad" id="playground">
      <div className="section-intro playground-intro" data-reveal>
        <h2>
          Location
          <Arrow />
        </h2>
      </div>

      <div className="location-card" data-reveal>
        <div className="location-map">
          <iframe
            title="AICS 연구실 위치 지도"
            src={mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="location-info">
          <span className="location-label">ADDRESS</span>
          <address>{address}</address>
          <a href={mapLink} target="_blank" rel="noreferrer">
            View on Google Maps <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact({ open, onClose }) {
  useEffect(() => {
    document.body.classList.toggle("modal-open", open);
    const closeOnEscape = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open, onClose]);

  return (
    <div
      className={`contact-modal ${open ? "contact-modal--open" : ""}`}
      aria-hidden={!open}
    >
      <button
        className="contact-close"
        type="button"
        onClick={onClose}
        aria-label="Close contact form"
      >
        ×
      </button>
      <div className="contact-inner">
        <h2>Let’s collaborate!</h2>
        <form onSubmit={(event) => event.preventDefault()}>
          <label>
            <span>01</span> What can we do for you?
            <select defaultValue="Design">
              <option>Design</option>
              <option>Development</option>
              <option>2D & 3D Art</option>
              <option>Animation</option>
            </select>
          </label>
          <label>
            <span>02</span> Your name
            <input type="text" placeholder="Enter name" />
          </label>
          <label>
            <span>03</span> Your email
            <input type="email" placeholder="Enter email" />
          </label>
          <label>
            <span>04</span> Project details
            <textarea placeholder="Tell us about your idea" rows="3" />
          </label>
          <button className="submit" type="submit">
            Send request <Arrow />
          </button>
        </form>
      </div>
    </div>
  );
}

function Footer({ onContact }) {
  return (
    <footer className="footer section-pad">
      <div className="footer-logo">AICS®</div>
      <div>
        <a href="#work">Work</a>
        <a href="#studio">Studio</a>
        <button type="button" onClick={onContact}>
          Contact
        </button>
        <small>aics 2026</small>
      </div>
      <div>
        <a href="mailto:yoojeong@sch.ac.kr">yoojeong@sch.ac.kr</a>
      </div>
    </footer>
  );
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  useSmoothScroll();
  useReveal();

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setScroll(max ? scrollY / max : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scroll})` }}
      />
      <Header onContact={() => setContactOpen(true)} />
      <main>
        <Hero />
        <Work />
        <Studio />
        <Playground />
      </main>
      <Footer onContact={() => setContactOpen(true)} />
      <Contact open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
