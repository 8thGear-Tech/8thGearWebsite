import React from "react";
import { HomepageNav } from "../../components/Navbar";
import "../../sassfiles/_colors.scss";
import "../../sassfiles/pages/services/_freeDiagnostics.scss";

const brokenItems = [
  {
    icon: "🏗️",
    title: "No Operational Structure",
    desc: "Your team is working hard but without systems in place, everything depends on you.",
  },
  {
    icon: "📊",
    title: "Weak Decision-Making Data",
    desc: "Decisions are gut-driven. Without reliable data, every move is a guess.",
  },
  {
    icon: "🔄",
    title: "Customer Retention Gaps",
    desc: "You're acquiring customers but losing them quietly. Revenue never compounds.",
  },
  {
    icon: "💰",
    title: "Pricing Misalignment",
    desc: "Your pricing doesn't reflect your value, you're leaving money on the table.",
  },
  {
    icon: "🚀",
    title: "Scaling Too Early",
    desc: "Growing before the foundation is solid amplifies every problem you already have.",
  },
];

const steps = [
  {
    icon: "⏱️",
    title: "5-Minute Diagnostic",
    desc: "Answer focused questions designed to surface your real operational constraints not the symptoms.",
  },
  {
    icon: "🔍",
    title: "Identify What's Actually Broken",
    desc: "Get a clear picture of which area is truly holding your growth back.",
  },
  {
    icon: "🗺️",
    title: "Know Your Next Move",
    desc: "Walk away with actionable clarity on exactly where to focus your energy next.",
  },
];

// ─── SVG Check Icon ────────────────────────────────────────────────────────
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
// ─── Component ────────────────────────────────────────────────────────────
const FounderAssessmentLanding = () => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfE3pz94JLInXlUkXAHKL_ldaxHD54JoZDgOOeLzwsE0aLQOw/viewform?embedded=true";

  const handleStartAssessment = () => {
    // Open the form in a new tab instead of embedding it
    window.open(formUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="freeDiagnosticsPage">
      <HomepageNav />

      <section className="freeDiagnosticsHero">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <div className="heroBadge">For Founders Ready to Diagnose the Real Problem</div>

              <h1 className="heroHeading">
                Most Founders Think <span className="heroAccent">Money</span> Is Always What They Need
              </h1>

              <div className="heroDivider" />

              <p className="heroParagraph">
                When growth slows, the instinct is to raise more capital. But founders who've worked with us reveal something different, their real constraints aren't financial. They're operational, strategic, or systemic.
              </p>

              <p className="heroParagraph heroParagraphAccent">
                Money alone won't fix what's actually broken.
              </p>

              <div className="heroCtaWrap">
                <button type="button" className="freeDiagnosticsBtn" onClick={handleStartAssessment}>
                  Take the Free Assessment
                  <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <span className="heroMeta">Takes only 5 minutes</span>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div className="noteCard">
                <div className="notePinOuter" />
                <p className="noteTitle">What's Actually Slowing Growth</p>
                {[
                  "No Operational Structure",
                  "Weak Decision-Making Data",
                  "Customer Retention Gaps",
                  "Pricing Misalignment",
                  "Scaling Too Early",
                ].map((item) => (
                  <div key={item} className="noteItem">
                    <div className="noteCheckIcon">
                      <CheckIcon />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brokenSection">
        <div className="container">
          <div className="row gy-4 align-items-start">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <p className="sectionLabel">Here's What We're Actually Seeing</p>
              <h2 className="sectionHeading">The Real Constraints Holding Founders Back</h2>
              <p className="sectionBody">
                Across every founder we've worked with, the same five operational gaps keep surfacing and none of them are solved by writing a bigger cheque.
              </p>
              <div className="heroDivider" />
            </div>

            <div className="col-lg-8">
              <div className="row gy-3">
                {brokenItems.map((item) => (
                  <div className="col-md-6" key={item.title}>
                    <div className="brokenCard">
                      <div className="brokenCardIconWrap">
                        <span>{item.icon}</span>
                      </div>
                      <div>
                        <p className="brokenCardTitle">{item.title}</p>
                        <p className="brokenCardDesc">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stepsSection">
        <div className="container">
          <div className="text-center mb-5">
            <p className="sectionLabel">Diagnose the Real Problem</p>
            <h2 className="sectionHeading">
              Three Steps to Clarity 
              <span className="freeBadge">Free</span>
            </h2>
            <p className="sectionBody">
              No fluff. No sales pitch. Just a focused diagnostic that tells you exactly where to look.
            </p>
          </div>

          <div className="row gy-4 justify-content-center">
            {steps.map((step) => (
              <div className="col-md-4" key={step.title}>
                <div className="stepCard">
                  <div className="stepIconWrap">
                    <span>{step.icon}</span>
                  </div>
                  <p className="stepTitle">{step.title}</p>
                  <p className="stepDesc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="ctaBgAccent" />
        <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
          <p className="sectionLabel">The Free Assessment</p>
          <h2 className="ctaHeading">
            Stop Guessing. Start <span className="heroAccent">Growing</span>.
          </h2>
          <p className="ctaSubtext">
            Take the 5-minute founder diagnostic and walk away knowing exactly which operational constraint is slowing your growth and what to do about it.
          </p>

          <button type="button" className="freeDiagnosticsBtn" onClick={handleStartAssessment}>
            Get Started — It's Free
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

        </div>
      </section>

      
    </div>
  );
};

export default FounderAssessmentLanding;
