import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

const videoSource = "/assets/a.mp4";

const projects = [
  {
    name: "Financial Time-Series Analysis & Prediction",
    field: "Finance AI",
    role: "Forecasting · Trend Analysis · Volatility Modeling",
    awards: "Forecasting  ·  Trend Analysis  ·  Volatility Modeling",
  },
  {
    name: "Visual Information Processing & AI Applications",
    field: "Vision AI",
    role: "Visual data processing with AI",
    awards: "Computer Vision · Image Processing · Object Detection",
  },
  {
    name: "Accessibility & Explainable",
    field: "XAI",
    role: "Human-centered and trustworthy AI",
    awards: "XAI · Interpretability · Inclusive Design",
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

function PixelSplitTitle({ children }) {
  const titleRef = useRef(null);
  const tileRefs = useRef([]);
  const frameRef = useRef(null);
  const runningRef = useRef(false);
  const trailRef = useRef([]);
  const sizeRef = useRef({ width: 1, height: 1 });
  const lastPointer = useRef({ x: 0, y: 0, active: false });
  const columns = 20;
  const rows = 10;
  const tileCount = columns * rows;
  const particles = useRef(
    Array.from({ length: tileCount }, () => ({ x: 0, y: 0, vx: 0, vy: 0 })),
  );

  useEffect(
    () => () => {
      cancelAnimationFrame(frameRef.current);
    },
    [],
  );

  const animateTiles = () => {
    const title = titleRef.current;
    if (!title) return;
    const now = performance.now();
    trailRef.current = trailRef.current.filter(
      (point) => now - point.time < 560,
    );
    const { width, height } = sizeRef.current;
    const radius = Math.min(105, height * 0.27);
    let movement = 0;

    particles.current.forEach((particle, index) => {
      const column = index % columns;
      const row = Math.floor(index / columns);
      const tileX = ((column + 0.5) / columns) * width;
      const tileY = ((row + 0.5) / rows) * height;

      trailRef.current.forEach((point) => {
        const dx = tileX - point.x * width;
        const dy = tileY - point.y * height;
        const distance = Math.hypot(dx, dy);
        if (distance >= radius) return;

        const age = Math.max(0, 1 - (now - point.time) / 560);
        const force = (1 - distance / radius) ** 2 * age;
        const safeDistance = Math.max(1, distance);
        const radialX = dx / safeDistance;
        const radialY = dy / safeDistance;
        const tangentX = -radialY;
        const tangentY = radialX;
        const spin = Math.sign(point.dx * dy - point.dy * dx) || 1;

        particle.vx +=
          (point.dx * 0.06 + radialX * 0.4 + tangentX * spin * 0.42) * force;
        particle.vy +=
          (point.dy * 0.06 + radialY * 0.4 + tangentY * spin * 0.42) * force;
      });

      particle.vx += -particle.x * 0.11;
      particle.vy += -particle.y * 0.11;
      particle.vx *= 0.72;
      particle.vy *= 0.72;
      particle.x = Math.max(-12, Math.min(12, particle.x + particle.vx));
      particle.y = Math.max(-9, Math.min(9, particle.y + particle.vy));
      movement = Math.max(movement, Math.abs(particle.x), Math.abs(particle.y));

      const tile = tileRefs.current[index];
      if (tile)
        tile.style.transform = `translate3d(${particle.x.toFixed(2)}px, ${particle.y.toFixed(2)}px, 0)`;
    });

    if (trailRef.current.length || movement > 0.08) {
      frameRef.current = requestAnimationFrame(animateTiles);
    } else {
      runningRef.current = false;
      title.classList.remove("is-splitting");
    }
  };

  const distortAtPointer = (event) => {
    const title = titleRef.current;
    if (!title) return;

    const rect = title.getBoundingClientRect();
    sizeRef.current = { width: rect.width, height: rect.height };
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const previous = lastPointer.current;
    const dx = previous.active
      ? Math.max(-24, Math.min(24, event.clientX - previous.x))
      : 0;
    const dy = previous.active
      ? Math.max(-24, Math.min(24, event.clientY - previous.y))
      : 0;
    lastPointer.current = { x: event.clientX, y: event.clientY, active: true };

    trailRef.current.push({ x, y, dx, dy, time: performance.now() });
    if (trailRef.current.length > 30) trailRef.current.shift();
    title.classList.add("is-splitting");

    if (!runningRef.current) {
      runningRef.current = true;
      frameRef.current = requestAnimationFrame(animateTiles);
    }
  };

  const releasePointer = () => {
    lastPointer.current.active = false;
  };

  return (
    <div
      ref={titleRef}
      className="hero-word pixel-title"
      onPointerMove={distortAtPointer}
      onPointerLeave={releasePointer}
      aria-hidden="true"
    >
      <span className="pixel-title-base">{children}</span>
      <span className="pixel-title-layers">
        {Array.from({ length: tileCount }, (_, index) => {
          const column = index % columns;
          const row = Math.floor(index / columns);
          const top = (row / rows) * 100;
          const right = 100 - ((column + 1) / columns) * 100;
          const bottom = 100 - ((row + 1) / rows) * 100;
          const left = (column / columns) * 100;
          return (
            <span
              ref={(element) => {
                tileRefs.current[index] = element;
              }}
              className="pixel-title-tile"
              style={{
                clipPath: `inset(${top}% ${right}% ${bottom}% ${left}%)`,
              }}
              key={index}
            >
              {children}
            </span>
          );
        })}
      </span>
    </div>
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
        <PixelSplitTitle>AICS</PixelSplitTitle>
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
            <div className="project-meta">
              <span>{project.role}</span>
              <span>{project.awards}</span>
            </div>
            <div className="project-title">
              <h3>{project.name}</h3>
              <span>{project.field}</span>
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
      <div className="studio-grid" data-reveal>
        <div className="studio-art" aria-hidden="true">
          <span>Z</span>
          <span>26</span>
        </div>
        <div className="fact">
          <h3>Services:</h3>
          <ul>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>Branding</li>
            <li>Motion Graphics</li>
            <li>3D Illustration</li>
            <li>Sound Design</li>
            <li>Webflow</li>
          </ul>
        </div>
        <div className="fact">
          <h3>Stats:</h3>
          <ul>
            <li>Founded 2015</li>
            <li>Clients 300+</li>
            <li>Countries 12</li>
            <li>Awwwards 62</li>
            <li>Team 28</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Playground() {
  return (
    <section className="playground section-pad" id="playground">
      <div className="section-intro playground-intro" data-reveal>
        <h2>AICS</h2>
        <h2>
          Location
          <Arrow />
        </h2>
        <p>
          We dare to be different: to experiment, innovate, bring things into
          being, and spark emotions. Join us in creating something truly unique.
        </p>
      </div>
      <div className="z15" aria-hidden="true">
        Z15<sup>™</sup>
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
