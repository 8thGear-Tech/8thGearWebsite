import { useEffect } from "react";
import { HomepageNav } from "../../../components/Navbar";
import "./IDICE.css";

const PROGRAMME_STEPS = [
  {
    week: "Weeks 1–3",
    title: "Foundation & Ideation",
    desc: "Understand your market landscape, define your value proposition and develop a clear problem-solution framework.",
    icon: "🧭",
  },
  {
    week: "Weeks 4–6",
    title: "Business Model Design",
    desc: "Map out your revenue streams, customer segments and cost structures using proven startup frameworks.",
    icon: "🗂️",
  },
  {
    week: "Weeks 7–9",
    title: "Market Validation",
    desc: "Test your assumptions, engage with target customers and iterate your product based on real feedback.",
    icon: "🔬",
  },
  {
    week: "Weeks 10–11",
    title: "Execution & Scaling",
    desc: "Build your go-to-market plan, optimise operations and prepare for early-stage growth.",
    icon: "🚀",
  },
  {
    week: "Week 12",
    title: "Demo Day",
    desc: "Showcase your solution to investors, mentors and ecosystem stakeholders at the Startup Bridge Demo Day.",
    icon: "🏆",
  },
];

const ELIGIBILITY = [
  "Business is at idea or market validation stage",
  "Business will operate from any of the 36+ states in Nigeria or FCT Abuja",
  "Founder is between 18 and 35 years old",
  "Ability to commit to the full 12-week structured programme",
  "Willingness to participate in learning sessions and assignments",
  "Ready to take part in evaluations and Demo Day activities",
];

const APPLY_URL = "https://accelerator.vester.ai/apply/start?code=Ght8ZplI";

export default function IDICEFoundersLab() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="idice-page">
      <HomepageNav />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container">
          <div className="hero-layout">

            {/* LEFT — copy */}
            <div className="hero-content">
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-dot" />
                Applications Ongoing · Closes April 20, 2026
              </div>

              <h1 className="hero-title">
                iDICE Startup Bridge –{" "}
                <span className="accent">Founders Lab</span>
              </h1>

              <p className="hero-sub">
                A 12-week capacity-building programme under the iDICE Startup Bridge
                initiative, designed to help early-stage founders take the first structured
                steps in building a digital or technical business.
              </p>

              <div className="hero-actions">
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Apply Now →
                </a>
                <a href="#about" className="btn-outline">
                  Learn More
                </a>
              </div>

              <div className="hero-stats">
                {[
                  { val: "12 Weeks",   label: "Programme Duration"  },
                  { val: "Apr 20",     label: "Closes"              },
                  { val: "36+ States", label: "Nigeria-Wide"        },
                  { val: "18–35",      label: "Age Requirement"     },
                ].map((s) => (
                  <div className="hero-stat" key={s.label}>
                    <div className="hero-stat-val">{s.val}</div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — image only, no floating elements */}
            <div className="hero-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=720&q=85&auto=format&fit=crop"
                alt="Early-stage founders collaborating in a workspace"
                className="hero-img"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-grid">

            {/* Left */}
            <div>
              <span className="section-label reveal">About the Programme</span>
              <h2 className="section-title reveal reveal-delay-1">
                Built for Founders Ready to Start Strong
              </h2>
              <p className="section-body reveal reveal-delay-2">
                Founders Lab is for early-stage innovators ready to turn ideas into real
                businesses. If you have an idea, prototype, or early MVP, the programme
                gives you the guidance, structure, and practical tools needed to start strong.
              </p>
              <p className="section-body reveal reveal-delay-3">
                Using a hands-on, build-as-you-learn approach, founders develop clearer
                products and stronger business models. Milestone-based funding is also
                provided to help transform progress into growth.
              </p>
            </div>

            {/* Right — info card */}
            <div className="about-card reveal reveal-delay-2">
              <div className="about-card-top-bar" />
              <p className="about-card-tag">Programme Snapshot</p>
              <p className="about-card-headline">Hands-On. Structured. Funded.</p>
              <p className="about-card-sub">
                A 12-week build-as-you-learn experience — combining practical tools,
                structured milestones and funding to move founders from idea to execution.
              </p>
              <div className="about-card-meta">
                <div className="meta-item">
                  <span className="meta-icon">📅</span>
                  <span>Closes <strong>April 20, 2026</strong></span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">📍</span>
                  <span>All 36 states + FCT Abuja</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">⏱️</span>
                  <span>12 weeks · Applications ongoing</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROGRAMME STRUCTURE ── */}
      <section className="programme-section" id="programme">
        <div className="container">
          <span className="section-label reveal">Programme Structure</span>
          <h2 className="section-title reveal reveal-delay-1">A 12-Week Founder Journey</h2>
          <p className="section-body reveal reveal-delay-2">
            From idea through market validation to Demo Day — with expert support at every step.
          </p>

          <div className="programme-grid">
            {PROGRAMME_STEPS.map((step, i) => (
              <div
                key={step.title}
                className={`prog-card reveal reveal-delay-${Math.min(i + 1, 4)}`}
              >
                <div className="prog-card-top">
                  <span className="prog-icon">{step.icon}</span>
                  <span className="prog-week">{step.week}</span>
                </div>
                <p className="prog-title">{step.title}</p>
                <p className="prog-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY ── */}
      <section className="eligibility-section" id="eligibility">
        <div className="container">
          <span className="section-label reveal">Who Should Apply</span>
          <h2 className="section-title reveal reveal-delay-1">The Programme is Designed For</h2>
          <p className="section-body reveal reveal-delay-2">
            Founders Lab is built for early-stage innovators across Nigeria who are ready
            to commit to structured learning and take decisive steps on their idea.
          </p>

          <div className="eligibility-grid reveal reveal-delay-3">
            {ELIGIBILITY.map((item) => (
              <div key={item} className="eligibility-item">
                <span className="eligibility-check">✓</span>
                <p className="eligibility-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <span className="section-label reveal" style={{ color: "rgba(255,255,255,0.65)" }}>
              Apply Now
            </span>
            <h2 className="cta-title reveal reveal-delay-1">
              Ready to Build Your Business?
            </h2>
            <p className="cta-sub reveal reveal-delay-2">
              Applications are ongoing and close on <strong>April 20, 2026</strong>.
              If you have an idea, prototype, or early MVP — apply today and get the
              guidance, structure and funding to start strong.
            </p>
            <div className="reveal reveal-delay-3">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
              >
                Apply Now →
              </a>
            </div>
            <p className="cta-note reveal reveal-delay-4">
              Closes April 20, 2026 · Ages 18–35 · Open to all 36 states + FCT Abuja
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}