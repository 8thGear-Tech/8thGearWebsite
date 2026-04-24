import { useState } from "react";
import "./SurveyBanner.css";

export default function SurveyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="survey-banner">
      <div className="survey-banner-content">
        <div className="survey-banner-text">
          <h3 className="survey-banner-title">MSME Survey 2026</h3>
          <p className="survey-banner-description">
            Does sponsored talent &amp; MSME development programmes{" "}
            <span className="survey-time">actually move the needle</span>{" "}
            for your business? Tell us in 5-7 mins · Fully Anonymous · 
            Findings will be published in December 2026.
          </p>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe7FjSTjyCKAZQooBHyxkOGWTXx3z_uc-bDn3K8zfhsvcCpsA/viewform?usp=sharing&ouid=115803220851822061793"
          target="_blank"
          rel="noopener noreferrer"
          className="survey-banner-cta"
        >
          Take Survey
        </a>
        <button
          onClick={() => setIsVisible(false)}
          className="survey-banner-close"
          aria-label="Close survey banner"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path 
              d="M12 4L4 12M4 4L12 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}