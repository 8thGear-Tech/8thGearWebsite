import { useState, useEffect, useRef } from "react";
import "./SurveyBanner.css";

export default function SurveyBanner() {
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const bannerRef = useRef(null);

  // Launch modal after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Update --banner-height whenever banner mounts/unmounts or window resizes
  useEffect(() => {
    const updateHeight = () => {
      if (bannerRef.current && showBanner) {
        document.documentElement.style.setProperty(
          "--banner-height",
          `${bannerRef.current.offsetHeight}px`
        );
      } else {
        document.documentElement.style.setProperty("--banner-height", "0px");
      }
    };

    updateHeight();
    const t = setTimeout(updateHeight, 50); // catch after paint
    window.addEventListener("resize", updateHeight);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", updateHeight);
    };
  }, [showBanner]);

  const handleModalClose = () => {
    setShowModal(false);
    setTimeout(() => setShowBanner(true), 2000);
  };

  const handleBannerClose = () => {
    setShowBanner(false);
    document.documentElement.style.setProperty("--banner-height", "0px");
  };

  return (
    <>
      {showModal && (
        <div className="survey-modal-overlay" onClick={handleModalClose}>
          <div className="survey-modal" onClick={(e) => e.stopPropagation()}>
            <button className="survey-modal-close" onClick={handleModalClose}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="survey-modal-badge">MSME Survey 2026</div>
            <p className="survey-modal-body">
              We're collecting honest feedback to understand the real impact of
              sponsored talent and MSME development programmes in Nigeria.
              <br /><br />
              <span style={{ fontSize: "12px", opacity: 0.85 }}>
                ⏱ Takes <strong>5–7 minutes</strong> &nbsp;·&nbsp; 🔒 Fully Anonymous
                <br />
                📊 Findings published <strong>December 2026</strong>
              </span>
            </p>
            <div className="survey-modal-actions">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe7FjSTjyCKAZQooBHyxkOGWTXx3z_uc-bDn3K8zfhsvcCpsA/viewform?usp=sharing&ouid=115803220851822061793"
                target="_blank"
                rel="noopener noreferrer"
                className="survey-banner-cta survey-modal-cta"
                onClick={handleModalClose}
              >
                Take the Survey →
              </a>
            </div>
          </div>
        </div>
      )}

      {showBanner && (
        <div className="survey-banner" ref={bannerRef}>
          <div className="survey-banner-content">
            <div className="survey-banner-text">
              <h3 className="survey-banner-title">MSME Survey 2026</h3>
              <p className="survey-banner-description">
                Does sponsored talent &amp; MSME development programmes{" "}
                <span className="survey-time">actually move the needle</span>{" "}
                for your business? Tell us in 5–7 mins · Fully Anonymous ·
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
            <button onClick={handleBannerClose} className="survey-banner-close">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}