// // import { useEffect, useState } from "react";
// // import "./SurveyBanner.css";

// //     export default function SurveyBanner() {
// //      const [isVisible, setIsVisible] = useState(true);

// //  useEffect(() => {
// //   const bannerHeight = 40; // match your banner's actual px height
// //   document.documentElement.style.setProperty('--banner-height', `${bannerHeight}px`);
// //   document.documentElement.style.setProperty('--nav-offset', `${bannerHeight + 64}px`); // 64 = approx navbar height
// //   return () => {
// //     document.documentElement.style.setProperty('--banner-height', '0px');
// //     document.documentElement.style.setProperty('--nav-offset', '64px');
// //   };
// // }, []);

// // const handleClose = () => {
// //   setIsVisible(false);
// //   document.documentElement.style.setProperty('--banner-height', '0px');
// //   document.documentElement.style.setProperty('--nav-offset', '64px'); // navbar height only
// // };

// //   if (!isVisible) return null;
// //     return (
// //  <div className="survey-banner">
// //     <div className="survey-banner-content">
// //       <div className="survey-banner-text">
// //         <h3 className="survey-banner-title">MSME Survey 2026</h3>
// //        <p className="survey-banner-description">
// //   Does sponsored talent &amp; MSME development programmes{" "}
// //   <span className="survey-time">actually move the needle</span>{" "}
// //   for your business? Tell us in 5-7 mins · Fully Anonymous · Findings will be published in December 2026.
// // </p>
// //       </div>
// //       <a
// //         href="https://docs.google.com/forms/d/e/1FAIpQLSe7FjSTjyCKAZQooBHyxkOGWTXx3z_uc-bDn3K8zfhsvcCpsA/viewform?usp=sharing&ouid=115803220851822061793"
// //         target="_blank"
// //         rel="noopener noreferrer"
// //         className="survey-banner-cta"
// //       >
// //         Take Survey
// //       </a>
// //       <button
// //         onClick={() => setIsVisible(false)}
// //         className="survey-banner-close"
// //         aria-label="Close survey banner"
// //       >
// //         <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
// //           <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// //         </svg>
// //       </button>
// //     </div>
// //   </div>
// // );
// //     }

// import { useEffect, useState } from "react";
// import "./SurveyBanner.css";

// export default function SurveyBanner() {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const calculateBannerHeight = () => {
//       // Get actual banner element height - only if visible
//       const bannerElement = document.querySelector('.survey-banner');
//       if (bannerElement && isVisible) {
//         const actualHeight = bannerElement.offsetHeight;
//         document.documentElement.style.setProperty('--banner-height', `${actualHeight}px`);
//       } else {
//         // If not visible, set height to 0
//         document.documentElement.style.setProperty('--banner-height', '0px');
//       }
//     };

//     // Calculate after banner renders (small delay to ensure DOM is painted)
//     setTimeout(calculateBannerHeight, 100);

//     // Recalculate on resize
//     window.addEventListener('resize', calculateBannerHeight);

//     return () => {
//       window.removeEventListener('resize', calculateBannerHeight);
//       document.documentElement.style.setProperty('--banner-height', '0px');
//     };
//   }, [isVisible]);

//   const handleClose = () => {
//     setIsVisible(false);
//     document.documentElement.style.setProperty('--banner-height', '0px');
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="survey-banner">
//       <div className="survey-banner-content">
//         <div className="survey-banner-text">
//           <h3 className="survey-banner-title">MSME Survey 2026</h3>
//           <p className="survey-banner-description">
//             Does sponsored talent &amp; MSME development programmes{" "}
//             <span className="survey-time">actually move the needle</span>{" "}
//             for your business? Tell us in 5-7 mins · Fully Anonymous · Findings will be published in December 2026.
//           </p>
//         </div>
//         <a
//           href="https://docs.google.com/forms/d/e/1FAIpQLSe7FjSTjyCKAZQooBHyxkOGWTXx3z_uc-bDn3K8zfhsvcCpsA/viewform?usp=sharing&ouid=115803220851822061793"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="survey-banner-cta"
//         >
//           Take Survey
//         </a>
//         <button
//           onClick={handleClose}
//           className="survey-banner-close"
//           aria-label="Close survey banner"
//         >
//           <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//             <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import "./SurveyBanner.css";

export default function SurveyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // No useEffect needed — no CSS variables to manage

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