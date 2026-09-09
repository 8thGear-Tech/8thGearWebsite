import React from "react";
import "../../sassfiles/_colors.scss";
import "../../sassfiles/components/hero/_freeDiagnosticsHero.scss";

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe5l7kRjJTfdzKAAhff_VXCoihQUFwkEaUFZOkx3m5hyHUOpA/viewform?embedded=true";

export const startFreeDiagnosticsAssessment = () => {
  window.open(FORM_URL, "_blank", "noopener,noreferrer");
};

export const FreeDiagnosticsHero = ({
  badge = "For Founders Ready to Diagnose the Real Problem",
  headingPrefix = "Most Founders Think",
  headingAccent = "Money",
  headingSuffix = "Is Always What They Need",
  paragraph = "When growth slows, the instinct is to raise more capital. But founders who've worked with us reveal something different, their real constraints aren't financial. They're operational, strategic, or systemic.",
  accentParagraph = "Money alone won't fix what's actually broken.",
  ctaText = "Take the Free Assessment",
  ctaMeta = "Takes only 5 minutes",
  onCtaClick = startFreeDiagnosticsAssessment,
  noteTitle = "What's Actually Slowing Growth",
  noteItems = [
    "No Operational Structure",
    "Weak Decision-Making Data",
    "Customer Retention Gaps",
    "Pricing Misalignment",
    "Scaling Too Early",
  ],
}) => (
  <section className="freeDiagnosticsHero">
    <div className="container" style={{ position: "relative", zIndex: 1 }}>
      <div className="row align-items-center gy-5">
        <div className="col-lg-6">
          <div className="heroBadge">{badge}</div>

          <h1 className="heroHeading">
            {headingPrefix} <span className="heroAccent">{headingAccent}</span> {headingSuffix}
          </h1>

          <div className="heroDivider" />

          <p className="heroParagraph">{paragraph}</p>

          <p className="heroParagraph heroParagraphAccent">{accentParagraph}</p>

          <div className="heroCtaWrap">
            <button type="button" className="freeDiagnosticsBtn" onClick={onCtaClick}>
              {ctaText}
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="heroMeta">{ctaMeta}</span>
          </div>
        </div>

        <div className="col-lg-5 offset-lg-1">
          <div className="noteCard">
            <div className="notePinOuter" />
            <p className="noteTitle">{noteTitle}</p>
            {noteItems.map((item) => (
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
);

export default FreeDiagnosticsHero;
