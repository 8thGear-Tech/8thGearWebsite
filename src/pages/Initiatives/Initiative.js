import { useState, useEffect, useRef } from "react";
import { HomepageNav } from "../../components/Navbar";
import LogoScroll from "../../components/Hero/LogoScroll";
import piggeryTraining from "../../assets/gallerycards/piggerytraining.png";
import employabilityGIZ from "../../assets/gallerycards/employabilityGIZ.png";
import itf from "../../assets/gallerycards/itf.png";
import lsetfTraining23 from "../../assets/gallerycards/LSETFTraining23.png";
import getOnlineWithDigiplus from "../../assets/gallerycards/getOnlineWithDigiplus.png";

/**
 * 8thGear Hub — Initiatives Page (Full Redesign)
 *
 * Key upgrades:
 *  1. Competencies — redesigned with numbered icon cards, hover accent lines,
 *     clean grid with visual rhythm
 *  2. Programmes — compact professional cards (not oversized), each programme
 *     uses an embedded image slider with thumbnail navigation
 *  3. PDF Report slot — properly styled document card; set report.pdf to a file
 *     path or URL to enable the download/open CTA
 *  4. Fully responsive at all breakpoints, clean colour blending throughout
 *
 * Colour tokens mirror project SCSS — no :root injection
 */

// ─── Google Fonts ───────────────────────────────────────────────────────────
const FONT_LINK =
  "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;600&display=swap";

// ─── Colour tokens ──────────────────────────────────────────────────────────
const C = {
  white: "#ffffff",
  teal: "#00a495",
  tealDark: "#007d71",
  tealLight: "rgba(0,164,149,0.07)",
  tealBorder: "rgba(0,164,149,0.25)",
  tealBorder2: "rgba(0,164,149,0.20)",
  tealMid: "rgba(0,164,149,0.13)",
  purple: "#821e6b",
  purpleHover: "#6b185a",
  purpleLight: "rgba(130,30,107,0.07)",
  purpleBorder: "rgba(130,30,107,0.20)",
  dark: "#0f172a",
  slate: "#1e293b",
  textPri: "#0f172a",
  textSec: "#475569",
  textLight: "#94a3b8",
  greyBg: "#f4f6f8",
  greyBorder: "#e2e8f0",
  shadow: "0 2px 14px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.04)",
  shadowMd: "0 6px 24px rgba(0,0,0,0.09)",
  shadowLg: "0 16px 44px rgba(0,0,0,0.14)",
  radius: "12px",
  radiusSm: "8px",
};
const F = { rubik: "Rubik,sans-serif", open: "Open Sans,sans-serif" };

// ─── Shared helpers ──────────────────────────────────────────────────────────
const bodyTxt = (light = false) => ({
  fontFamily: F.open,
  fontSize: "0.97rem",
  fontWeight: 300,
  lineHeight: "1.75rem",
  color: light ? "rgba(255,255,255,0.78)" : C.textSec,
  marginBottom: 0,
});
const label = (col = C.textLight) => ({
  fontFamily: F.open,
  fontSize: "10px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.09em",
  color: col,
});

const accentColors = (col) => ({
  main: col === "purple" ? C.purple : C.teal,
  light: col === "purple" ? C.purpleLight : C.tealLight,
  border: col === "purple" ? C.purpleBorder : C.tealBorder2,
});

// ─── Buttons ─────────────────────────────────────────────────────────────────
const Btn = {
  purple: (h) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: h ? C.purpleHover : C.purple,
    color: C.white,
    border: "none",
    borderRadius: "100px",
    padding: "12px 28px",
    fontFamily: F.open,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background 0.2s",
    textDecoration: "none",
  }),
  whiteOutline: (h) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: h ? "rgba(255,255,255,0.13)" : "transparent",
    color: C.white,
    border: "1.5px solid rgba(255,255,255,0.5)",
    borderRadius: "100px",
    padding: "11px 26px",
    fontFamily: F.open,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
    textDecoration: "none",
  }),
  tealOutline: (h) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: h ? C.teal : "transparent",
    color: h ? C.white : C.teal,
    border: `1.5px solid ${C.teal}`,
    borderRadius: "100px",
    padding: "9px 20px",
    fontFamily: F.open,
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
    textDecoration: "none",
  }),
};

// ─── SVG icons ────────────────────────────────────────────────────────────────
const Icon = {
  arrowR: (col = "currentColor", sz = 15) => (
    <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke={col}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  arrowL: (col = "currentColor", sz = 15) => (
    <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none">
      <path
        d="M13 8H3M7 4L3 8l4 4"
        stroke={col}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  ext: (col = "currentColor", sz = 14) => (
    <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none">
      <path
        d="M10 2h4v4M14 2L8 8M6 4H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3"
        stroke={col}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  download: (col = "currentColor", sz = 15) => (
    <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none">
      <path
        d="M8 2v8M5 7l3 3 3-3M3 13h10"
        stroke={col}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  check: (col = C.teal, sz = 15) => (
    <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8l3.5 3.5L13 5"
        stroke={col}
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  close: (col = "currentColor", sz = 18) => (
    <svg width={sz} height={sz} viewBox="0 0 18 18" fill="none">
      <path
        d="M2 2l14 14M16 2L2 16"
        stroke={col}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  star: (filled = true, sz = 14) => (
    <svg
      width={sz}
      height={sz}
      viewBox="0 0 16 16"
      fill={filled ? "#f59e0b" : "none"}
      stroke={filled ? "none" : "#f59e0b"}
      strokeWidth="1.2"
    >
      <path
        d="M8 1l2.09 4.26L15 6.27l-3.5 3.41.83 4.82L8 12.27l-4.33 2.23.83-4.82L1 6.27l4.91-.71L8 1z"
        strokeLinejoin="round"
      />
    </svg>
  ),
  quote: (col = C.teal) => (
    <svg width="32" height="24" viewBox="0 0 36 28" fill="none">
      <path
        d="M0 28V17C0 7.5 5.5 2 16.5 0l1.8 2.8C12 4.2 8.4 7.5 7.5 12H14V28H0zm20 0V17C20 7.5 25.5 2 36.5 0L38.3 2.8C32.3 4.2 28.7 7.5 27.8 12H34V28H20z"
        fill={col}
        opacity="0.15"
      />
    </svg>
  ),
  pdf: (col = C.teal, sz = 26) => (
    <svg width={sz} height={sz} viewBox="0 0 26 26" fill="none">
      <rect
        x="2"
        y="2"
        width="22"
        height="22"
        rx="5"
        fill={col}
        opacity="0.1"
      />
      <rect
        x="2"
        y="2"
        width="22"
        height="22"
        rx="5"
        stroke={col}
        strokeWidth="1.5"
      />
      <path
        d="M7 9h6M7 13h9M7 17h5"
        stroke={col}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect
        x="14"
        y="5"
        width="7"
        height="7"
        rx="1.5"
        fill={col}
        opacity="0.18"
      />
      <text
        x="15"
        y="11"
        fontFamily="Rubik,sans-serif"
        fontSize="4.5"
        fontWeight="800"
        fill={col}
      >
        PDF
      </text>
    </svg>
  ),
  image: (col = C.textLight) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="5"
        stroke={col}
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <circle cx="11" cy="12" r="3" stroke={col} strokeWidth="1.4" />
      <path
        d="M3 24l7-8 5 5 4-4 9 9"
        stroke={col}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  expand: (col = "currentColor", sz = 14) => (
    <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none">
      <path
        d="M10 2h4v4M6 14H2v-4M14 10v4h-4M2 6V2h4"
        stroke={col}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

// ─── Stars ───────────────────────────────────────────────────────────────────
const Stars = ({ n = 5 }) => (
  <div style={{ display: "flex", gap: 2 }}>
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i}>{Icon.star(i <= n)}</span>
    ))}
  </div>
);

// ─── Section chip ─────────────────────────────────────────────────────────────
const Chip = ({ label: lbl, col = "teal" }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      background: col === "teal" ? C.tealLight : C.purpleLight,
      border: `1px solid ${col === "teal" ? C.tealBorder : C.purpleBorder}`,
      borderRadius: "100px",
      padding: "5px 14px 5px 9px",
      fontFamily: F.open,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: col === "teal" ? C.teal : C.purple,
      marginBottom: 14,
    }}
  >
    <span
      style={{
        width: 6,
        height: 6,
        borderRadius: "50%",
        flexShrink: 0,
        background: col === "teal" ? C.teal : C.purple,
      }}
    />
    {lbl}
  </div>
);

// ─── Divider accent ───────────────────────────────────────────────────────────
const Div = ({ col = C.teal, center = false }) => (
  <div
    style={{
      width: 44,
      height: 3,
      borderRadius: "100px",
      background: col,
      marginBottom: 18,
      ...(center ? { margin: "0 auto 18px" } : {}),
    }}
  />
);

// ─── Scroll reveal ────────────────────────────────────────────────────────────
function useFadeIn() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}
const FadeUp = ({ children, delay = 0 }) => {
  const [ref, vis] = useFadeIn();
  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.48s ease ${delay}ms, transform 0.48s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ─── Hover button wrapper ─────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════════════
const FILTER_TABS = [
  { key: "all", label: "All" },
  { key: "capacity", label: "Capacity Building" },
  { key: "digital", label: "Digital Skills" },
  { key: "employ", label: "Employability" },
  { key: "venture", label: "Venture Studio" },
];

/**
 * PROGRAMMES
 * ─────────────────────────────────────────────────────────────
 * images[]     : Array of imported image paths — add as many as needed.
 *                These render as an inline slider on the card.
 * report.pdf   : Path or URL to the PDF.
 *                  "#"               → shows "Coming soon" state
 *                  "/reports/x.pdf"  → opens as download
 *                  "https://..."     → opens in new tab
 * report.isRFP : true = external link icon; false = download icon
 */
function PDFViewer({ pdf }) {
  if (!pdf) return null;

  return (
    <div className="mt-3">
      <iframe
        src={pdf}
        title="Programme Report"
        width="100%"
        height="600px"
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
        }}
      />
    </div>
  );
}
const PROGRAMMES = [
  {
    id: 1,
    cat: "capacity",
    col: "teal",
    badge: "Ibadan · Oct 2–4, 2025",
    title: "DBN Capacity Building Workshop — Ibadan",
    body: "Brought together 60+ MSME operators, startup founders, and PFIs. Sessions covered investment readiness, access to finance, and business sustainability, culminating in a live pitch competition for grants up to ₦5M.",
    images: [piggeryTraining, employabilityGIZ, itf],
    metrics: [
      { val: "60+", key: "Participants" },
      { val: "89%", key: "Endline Score" },
      { val: "4.4/5", key: "Rating" },
    ],
    highlights: [
      "60+ participants engaged",
      "Investment readiness improved to 89%",
      "Post-workshop rating: 4.4/5",
      "96.3% confirmed stronger networking",
    ],
    pills: ["DBN ETP 2025", "Grants ₦5M", "Investment Readiness"],
    report: {
      title: "DBN Ibadan Workshop — Impact Report 2025",
      desc: "Full assessment, participant data, and outcomes from the October 2025 Ibadan workshop.",
      pdf: "/pdfs/Impact Report_DBN Capacity Building Workshop for Southwest Nigeria.pdf",
      type: "Impact Report",
      isRFP: false,
    },
  },
  {
    id: 2,
    cat: "capacity",
    col: "purple",
    badge: "Lagos · Nov 26–28, 2025",
    title: "DBN Capacity Building Workshop — Lagos",
    body: "Built on Ibadan learnings with sharper sessions on pitch-deck preparation, advanced money management, legal protection, and sales strategies. Earned a 4.46/5 post-workshop rating.",
    images: [lsetfTraining23, piggeryTraining, getOnlineWithDigiplus],
    metrics: [
      { val: "40+", key: "Participants" },
      { val: "4.46/5", key: "Rating" },
      { val: "84.8%", key: "Networking" },
    ],
    highlights: [
      "40+ MSMEs and startup founders",
      "Significant gains in planning & bookkeeping",
      "Post-workshop rating: 4.46/5",
      "84.8% confirmed enhanced networking",
    ],
    pills: ["DBN ETP 2025", "Sales Strategy", "Legal Readiness"],
    report: {
      title: "DBN Lagos Workshop — Impact Report 2025",
      desc: "Detailed findings, ratings, and recommendations from the Lagos November 2025 workshop.",
      pdf: "/pdfs/DBN Lagos Workshop Impact Report, 2025..pdf",
      type: "Impact Report",
      isRFP: false,
    },
  },
  {
    id: 3,
    cat: "digital",
    col: "teal",
    badge: "Oct 17 – Nov 7, 2025",
    title: "Digital Skills for Entrepreneurs (DSE)",
    body: "Trained 89 MSMEs across Ogun (35) and Lagos (54) states. 62% of 207 registered participants were women. Covered digital marketing, e-commerce, financial literacy, and Digital Transformation Roadmaps.",
    images: [itf, getOnlineWithDigiplus, employabilityGIZ],
    metrics: [
      { val: "89", key: "MSMEs" },
      { val: "82%", key: "Attendance" },
      { val: "95%", key: "Excellent" },
    ],
    highlights: [
      "89 MSMEs trained across 2 states",
      "62% women representation",
      "82% attendance & participation rate",
      "95% rated as Excellent or Good",
    ],
    pills: ["E-Commerce", "Digital Marketing", "DTR Roadmaps", "62% Women"],
    report: {
      title: "DSE Programme Report 2025",
      desc: "Attendance data, DTR completion rates, and participant feedback across the two-state cohort.",
      pdf: "/pdfs/DSE Programme Report 2025.pdf",
      type: "Programme Report",
      isRFP: false,
    },
  },
  {
    id: 4,
    cat: "digital",
    col: "teal",
    badge: "GIZ-DTC · EU Funded",
    title: "GIZ-DTC / EU Digital Innovation Hub",
    body: "Leading a consortium driving digital transformation for MSMEs across Trade, Transport & Logistics, and Education in Southwest Nigeria, co-funded by GIZ and the European Union.",
    images: [employabilityGIZ, itf, piggeryTraining],
    metrics: null,
    highlights: [
      "Consortium lead across SW Nigeria",
      "Sectors: Trade, Transport, Education",
      "ECOWAS regional scope",
      "EU and GIZ co-funded",
    ],
    pills: ["GIZ Nigeria", "European Union", "ECOWAS", "SW Nigeria"],
    report: {
      title: "GIZ-DTC Programme Brief",
      desc: "Overview of the consortium mandate, sectors covered, and digital transformation objectives.",
      pdf: "#",
      type: "Programme Brief",
      isRFP: false,
    },
  },
  {
    id: 5,
    cat: "employ",
    col: "teal",
    badge: "Dec 11, 2023 – Ongoing",
    title: "USADF/LSETF Fully Funded Scholarship",
    body: "8thGear Partners Limited is inviting applications for prospective candidates for the USADF/LSETF fully funded scholarship. The application process attracted over 1,000 applicants, leading to a rigorous selection process. Ultimately, 172 beneficiaries successfully enrolled after meticulous screening involving both 8thGear and counter-screening partners. The official training commenced on December 11, 2023, with 135 individuals admitted after the two-week admission window from the initial pool of 172 trainees. During this period, participants underwent comprehensive integration into the program, engaging in both theoretical and practical classes for their respective courses. A two-week break was granted to students from December 22, 2023, and they are set to resume training on January 8, 2024, allowing them to celebrate Christmas and the New Year with their families. Monitoring and evaluation began with surveys conducted on both facilitators and trainees during the first week. The baseline survey aimed to gather feedback from trainees regarding their experiences thus far. Responses were overwhelmingly positive, with constructive feedback received to enhance the overall trainee experience. Efforts are already underway to implement the suggested improvements.",
    images: [lsetfTraining23, employabilityGIZ, getOnlineWithDigiplus],
    metrics: [
      { val: "1,000+", key: "Applicants" },
      { val: "172", key: "Enrolled" },
      { val: "135", key: "Admitted" },
    ],
    highlights: [
      "Over 1,000 applicants attracted",
      "172 beneficiaries enrolled after screening",
      "135 individuals admitted after admission window",
      "Comprehensive integration with theoretical and practical classes",
      "Two-week break for Christmas and New Year",
      "Monitoring and evaluation with positive feedback",
    ],
    pills: ["USADF", "LSETF", "8thGear Partners"],
    report: {
      title: "USADF/LSETF Scholarship Impact Report",
      desc: "Placement outcomes, skill acquisition data, and participant testimonials from the USADF/LSETF cohort.",
      pdf: "https://docs.google.com/document/d/1HJwaaDhRUIbwuA-hg1OUINnoNfCWNB1b/edit?usp=sharing&ouid=112570706098096412627&rtpof=true&sd=true target=_blank",
      type: "Impact Report",
      isRFP: false,
    },
  },
  {
    id: 6,
    cat: "digital",
    col: "teal",
    badge: "April 15 – April 26, 2024",
    title: "Get Online with DigiPlus Training Program",
    body: "The 2-week 'Get Online with DigiPlus' training program, conducted by Digiplus Alliance from April 15 to April 26, 2024, was a pivotal initiative aimed at digitally transforming venture entrepreneurs in Lagos, Nigeria. This program, an integral part of the broader digital upskilling effort for non-tech Micro, Small and Medium Enterprises (MSME), emphasized gender equality by offering equal opportunities to both male and female entrepreneurs. With a primary goal of digitally transforming non-tech businesses, the program provided foundational courses in business-related digital skills to its participants, enhancing their innovation competencies through a blend of theoretical learning and practical exercises. The program started with a pre-training survey form given to the participants to get their experiences before the training and to get their expectations from the training. The program's success was evident through its comprehensive curriculum, covering crucial topics such as digital transformation, online bookkeeping, and social media marketing. The training engaged the 22 participants in group work and presentation, hands-on practical sessions on using digital tools to improve business, and so on. The graduation ceremony was held on April 29, 2024, to celebrate participants, and certificates were awarded to them. The post-training feedback highlighted the program's effectiveness, with participants praising the interactive nature of the classes and the relevance of the topics covered. To further improve future editions, recommendations were made to enhance the application process, training duration, and overall program structure, ensuring a continued impact in empowering entrepreneurs through digital upskilling.",
    images: [getOnlineWithDigiplus, lsetfTraining23, employabilityGIZ],
    metrics: [
      { val: "22", key: "Participants" },
      { val: "2 Weeks", key: "Duration" },
      { val: "Positive", key: "Feedback" },
    ],
    highlights: [
      "2-week training for venture entrepreneurs",
      "Emphasized gender equality",
      "Comprehensive digital skills curriculum",
      "Pre and post-training surveys",
      "Interactive group work and presentations",
      "Graduation ceremony on April 29, 2024",
      "Recommendations for future improvements",
    ],
    pills: [
      "Digiplus Alliance",
      "Digital Upskilling",
      "MSME",
      "Gender Equality",
    ],
    report: {
      title: "Get Online with DigiPlus Report",
      desc: "Program outcomes, participant feedback, and recommendations from the Digiplus Alliance training.",
      pdf: "https://docs.google.com/document/d/1JDeMTLqpN_BwAh24zlkD9_xxCo25THqI/edit?usp=sharing&ouid=112570706098096412627&rtpof=true&sd=true target=_blank",
      type: "Impact Report",
      isRFP: false,
    },
  },
];

const COMPETENCIES = [
  {
    title: "Business Enterprise Support and Mentorship",
    desc: "We have a range of support services and programs designed to assist MSMEs. We also have experienced advisors and mentors who can guide startups.",
    tags: ["MSME Support", "Advisory", "Mentorship"],
    icon: (col) => (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path
          d="M13 3L3 8v10l10 5 10-5V8L13 3z"
          stroke={col}
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M3 8l10 5m0 0l10-5m-10 5v10"
          stroke={col}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Talent Development and Employment",
    desc: "At 8thGear, we are committed to providing exceptional Talent Management to individuals and organizations alike.",
    tags: ["Talent Development", "Employment", "Training"],
    icon: (col) => (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="9" stroke={col} strokeWidth="1.7" />
        <path
          d="M9 13l3 3 5-5"
          stroke={col}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    role: "MSME Operator — Ibadan",
    text: "This workshop has impacted me by giving more confidence to present my business idea clearly and professionally. I now understand how to structure my pitch and engage my audience effectively.",
  },
  {
    id: 2,
    rating: 5,
    role: "DBN — Lagos",
    text: "The workshop has introduced me to innovative ways to solve any challenges I can encouter with my business.",
  },
  {
    id: 3,
    rating: 5,
    role: "DSE Programme Participant",
    text: "This has been the best organized, highest value and intentionally transformative programme that i have ever attended(and i have attended a few).",
  },
  {
    id: 4,
    rating: 5,
    role: "DBN - Ibadan",
    text: "It has helped me clearly identify my target audience and understand promotional and marketing strategies to scale my business.",
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// PROGRAMME CARD
function ProgrammeCard({ data }) {
  const [hov, setHov] = useState(false);
  const [cur, setCur] = useState(0);
  const { main: ac, light: al, border: ab } = accentColors(data.col);
  const hasPdf = data.report.pdf && data.report.pdf !== "#";
  const [reportLinkHov, setReportLinkHov] = useState(false);
  const visibleHighlights = data.highlights.slice(0, 3);
  const visiblePills = data.pills.slice(0, 3);
  const isExternalReport = hasPdf && /^https?:\/\//i.test(data.report.pdf);

  const nextSlide = () => setCur((prev) => (prev + 1) % data.images.length);
  const prevSlide = () =>
    setCur((prev) => (prev - 1 + data.images.length) % data.images.length);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: C.white,
        border: `1px solid ${hov ? ac : C.greyBorder}`,
        borderRadius: C.radius,
        boxShadow: hov ? C.shadowLg : C.shadow,
        transition: "all 0.26s ease",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: 550,
      }}
    >
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg,${ac},${ac}88)`,
          flexShrink: 0,
        }}
      />

      <div style={{ padding: "14px 14px 0" }}>
        <div
          style={{
            position: "relative",
            borderRadius: C.radiusSm,
            overflow: "hidden",
            background: C.greyBg,
          }}
        >
          <img
            src={data.images[cur]}
            alt={`${data.title} slide ${cur + 1}`}
            style={{
              width: "100%",
              height: 250,
              objectFit: "cover",
              display: "block",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              fontFamily: F.open,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: C.white,
              background: ac,
              borderRadius: "100px",
              padding: "4px 10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            {data.badge}
          </span>

          {data.images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                aria-label={`Previous image for ${data.title}`}
                style={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(15,23,42,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  padding: 0,
                  backdropFilter: "blur(2px)",
                }}
              >
                {Icon.arrowL(C.white, 12)}
              </button>
              <button
                onClick={nextSlide}
                aria-label={`Next image for ${data.title}`}
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(15,23,42,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  padding: 0,
                  backdropFilter: "blur(2px)",
                }}
              >
                {Icon.arrowR(C.white, 12)}
              </button>
            </>
          )}
        </div>
      </div>

      <div
        style={{
          padding: "16px 18px 18px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 12,
            marginBottom: 10,
          }}
        >
          <h3
            style={{
              fontFamily: F.rubik,
              fontSize: "1rem",
              fontWeight: 700,
              color: C.dark,
              lineHeight: 1.35,
              margin: 0,
            }}
          >
            {data.title}
          </h3>
          <a
            href={hasPdf ? data.report.pdf : undefined}
            target={isExternalReport ? "_blank" : undefined}
            rel={isExternalReport ? "noopener noreferrer" : undefined}
            download={hasPdf && !isExternalReport ? true : undefined}
            onClick={!hasPdf ? (e) => e.preventDefault() : undefined}
            onMouseEnter={() => setReportLinkHov(hasPdf)}
            onMouseLeave={() => setReportLinkHov(false)}
            style={{
              flexShrink: 0,
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              fontFamily: F.open,
              fontSize: 10,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: hasPdf ? (reportLinkHov ? C.white : ac) : C.textLight,
              background: hasPdf ? (reportLinkHov ? ac : al) : C.greyBg,
              border: `1px solid ${hasPdf ? ab : C.greyBorder}`,
              borderRadius: "100px",
              padding: "4px 8px",
              textDecoration: "none",
              cursor: hasPdf ? "pointer" : "default",
              transition: "all 0.2s ease",
            }}
          >
            {hasPdf
              ? data.report.isRFP
                ? Icon.ext(reportLinkHov ? C.white : ac, 10)
                : Icon.download(reportLinkHov ? C.white : ac, 10)
              : Icon.pdf(C.textLight, 12)}
            {data.report.type}
          </a>
        </div>

        <p
          style={{
            ...bodyTxt(),
            fontSize: "0.82rem",
            lineHeight: "1.55rem",
            marginBottom: 14,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {data.body}
        </p>

        {data.metrics && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 8,
              marginBottom: 14,
            }}
          >
            {data.metrics.map((m) => (
              <div
                key={m.key}
                style={{
                  textAlign: "center",
                  padding: "10px 8px",
                  background: al,
                  border: `1px solid ${ab}`,
                  borderRadius: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: F.rubik,
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: ac,
                    display: "block",
                    lineHeight: 1,
                  }}
                >
                  {m.val}
                </span>
                <span
                  style={{
                    ...label(C.textSec),
                    display: "block",
                    marginTop: 4,
                    fontSize: 9,
                  }}
                >
                  {m.key}
                </span>
              </div>
            ))}
          </div>
        )}

        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(244,246,248,0.9) 0%, rgba(255,255,255,1) 100%)",
            border: `1px solid ${C.greyBorder}`,
            borderRadius: C.radiusSm,
            padding: "12px 14px",
            marginBottom: 12,
          }}
        >
          <p style={{ ...label(), marginBottom: 7 }}>Key Outcomes</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {visibleHighlights.map((h) => (
              <li
                key={h}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 7,
                  fontFamily: F.open,
                  fontSize: "0.78rem",
                  fontWeight: 400,
                  color: C.textSec,
                  lineHeight: 1.5,
                  marginBottom: 4,
                }}
              >
                <span style={{ flexShrink: 0, marginTop: 1 }}>
                  {Icon.check(ac, 13)}
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 14,
          }}
        >
          {visiblePills.map((p) => (
            <span
              key={p}
              style={{
                fontFamily: F.open,
                fontSize: 10,
                fontWeight: 600,
                color: C.textSec,
                background: C.greyBg,
                border: `1px solid ${C.greyBorder}`,
                borderRadius: "100px",
                padding: "4px 9px",
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// COMPETENCY CARD
// ═══════════════════════════════════════════════════════════════════════════
function CompetencyCard({ item }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov
          ? `linear-gradient(145deg,${C.tealLight},${C.white})`
          : C.white,
        border: `1px solid ${hov ? C.tealBorder2 : C.greyBorder}`,
        borderRadius: C.radius,
        boxShadow: hov ? C.shadowMd : C.shadow,
        transition: "all 0.26s ease",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minHeight: 250,
      }}
    >
      {/* Animated left accent bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: hov ? 4 : 0,
          background: `linear-gradient(to bottom,${C.teal},${C.tealDark})`,
          transition: "width 0.28s ease",
          borderRadius: "0 2px 2px 0",
        }}
      />

      <div
        style={{
          padding: "24px 24px 20px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          paddingLeft: hov ? 28 : 24,
          transition: "padding-left 0.28s ease",
        }}
      >
        {/* Icon row */}
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: 12,
              background: hov ? C.teal : C.greyBg,
              border: `1.5px solid ${hov ? C.teal : C.greyBorder}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.26s ease",
            }}
          >
            {item.icon(hov ? C.white : C.textLight)}
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: F.rubik,
            fontSize: "1rem",
            fontWeight: 700,
            color: hov ? C.dark : C.textPri,
            lineHeight: 1.3,
            marginBottom: 8,
          }}
        >
          {item.title}
        </h3>

        {/* Desc */}
        <p
          style={{
            fontFamily: F.open,
            fontSize: "0.84rem",
            fontWeight: 300,
            lineHeight: "1.65rem",
            color: C.textSec,
            flexGrow: 1,
            marginBottom: 16,
          }}
        >
          {item.desc}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 5,
            marginTop: "auto",
          }}
        >
          {item.tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: F.open,
                fontSize: 10,
                fontWeight: 600,
                color: hov ? C.teal : C.textSec,
                background: hov ? C.tealLight : C.greyBg,
                border: `1px solid ${hov ? C.tealBorder2 : C.greyBorder}`,
                borderRadius: "100px",
                padding: "3px 9px",
                transition: "all 0.22s ease",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// TESTIMONIAL CARD
// ═══════════════════════════════════════════════════════════════════════════
function TestiCard({ data }) {
  return (
    <div
      style={{
        background: C.white,
        border: `1px solid ${C.greyBorder}`,
        borderRadius: C.radius,
        boxShadow: C.shadow,
        padding: "22px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {Icon.quote(C.teal)}
      <p
        style={{
          fontFamily: F.open,
          fontSize: "0.85rem",
          fontWeight: 300,
          lineHeight: "1.75rem",
          color: C.textSec,
          fontStyle: "italic",
          flexGrow: 1,
          margin: "10px 0 16px",
        }}
      >
        "{data.text}"
      </p>
      <div
        style={{
          borderTop: `1px solid ${C.greyBorder}`,
          paddingTop: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <div>
          {data.name && (
            <div
              style={{
                fontFamily: F.rubik,
                fontSize: "0.9rem",
                fontWeight: 600,
                color: C.dark,
              }}
            >
              {data.name}
            </div>
          )}
          <div
            style={{
              fontFamily: F.open,
              fontSize: 11,
              fontWeight: 300,
              color: C.textSec,
            }}
          >
            {data.role}
          </div>
        </div>
        <Stars n={data.rating} />
      </div>
    </div>
  );
}

function TestimonialLink({ lnk }) {
  const [h, setH] = useState(false);

  return (
    <a
      href={lnk.href}
      target={lnk.href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      style={Btn.tealOutline(h)}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {lnk.label} {Icon.ext(h ? C.white : C.teal)}
    </a>
  );
}
// ═══════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════
export default function InitiativesPage() {
  const [filter, setFilter] = useState("all");
  const [hA, setHA] = useState(null);
  const [hC, setHC] = useState(null);

  const filtered =
    filter === "all" ? PROGRAMMES : PROGRAMMES.filter((p) => p.cat === filter);

  useEffect(() => {
    if (document.querySelector(`link[href="${FONT_LINK}"]`)) return;
    const el = document.createElement("link");
    el.rel = "stylesheet";
    el.href = FONT_LINK;
    document.head.appendChild(el);
  }, []);

  return (
    <>
      <HomepageNav />

      <style>{`
        /* Marquee */
        .ig8-mq { animation: ig8mq 38s linear infinite; }
        .ig8-mq:hover { animation-play-state: paused; }
        @keyframes ig8mq { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

        /* Filter btns */
        .ig8fb:hover { background:#ffffff !important; color:#00a495 !important; }
        .ig8fb:focus-visible { outline:2px solid #00a495; outline-offset:2px; }



        /* Responsive */
        @media(max-width:991px) {
          .ig8-hg  { grid-template-columns:1fr !important; gap:32px !important; }
          .ig8-ctg { grid-template-columns:1fr !important; gap:32px !important; }
        }
        @media(max-width:767px) {
          .ig8-rrow { flex-direction:column !important; align-items:flex-start !important; }
          .ig8-fbar { flex-direction:column; width:100%; }
          .ig8fb    { width:100%; text-align:center; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section
        style={{
          background: `linear-gradient(140deg,${C.tealDark} 0%,${C.teal} 55%,#009688 100%)`,
          padding: "108px 0 100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -100,
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: "60px solid rgba(255,255,255,0.07)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -110,
            left: -90,
            width: 360,
            height: 360,
            borderRadius: "50%",
            border: "50px solid rgba(255,255,255,0.05)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            className="ig8-hg"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 420px",
              gap: 56,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "100px",
                  padding: "5px 16px 5px 10px",
                  fontFamily: F.open,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: C.white,
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#b2f5ea",
                    flexShrink: 0,
                  }}
                />
                8thGear Hub — Programmes &amp; Initiatives
              </div>

              <h1
                style={{
                  fontFamily: F.rubik,
                  fontSize: "clamp(2rem,5vw,3.1rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: C.white,
                  marginBottom: 18,
                }}
              >
                Building Resilient
                <br />
                <span style={{ color: "#b2f5ea" }}>
                  MSMEs &amp; Entrepreneurs
                </span>
                <br />
                Across Nigeria
              </h1>

              <p style={{ ...bodyTxt(true), maxWidth: 520, marginBottom: 36 }}>
                From DBN capacity-building workshops and digital skills training
                to employability programmes and venture studio support. 8thGear
                Hub is driving measurable impact across Southwest Nigeria and
                beyond.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://docs.google.com/forms/d/108Rzj8GqngAeK9_gFRikHqnupR_upycv-NvuasBm4cw/viewform?edit_requested=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={Btn.purple(hA === "rfp")}
                  onMouseEnter={() => setHA("rfp")}
                  onMouseLeave={() => setHA(null)}
                >
                  View RFP {Icon.ext(C.white)}
                </a>
                <a
                  href="#programmes"
                  style={Btn.whiteOutline(hA === "prog")}
                  onMouseEnter={() => setHA("prog")}
                  onMouseLeave={() => setHA(null)}
                >
                  Our Programmes {Icon.arrowR(C.white)}
                </a>
              </div>
            </div>

            {/* Glance card */}
            <div
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: C.radius,
                padding: "30px 26px",
              }}
            >
              <p
                style={{
                  fontFamily: F.open,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: 22,
                }}
              >
                Impact at a Glance
              </p>
              {[
                { label: "StartUps Supported", val: "70+" },
                { label: "Projects Delivered", val: "10+" },
                { label: "Tech Talents Empowered", val: "600+" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: F.open,
                      fontSize: 13,
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.72)",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: F.rubik,
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: C.white,
                    }}
                  >
                    {item.val}
                  </span>
                </div>
              ))}
              <div style={{ paddingTop: 18 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      fontFamily: F.open,
                      fontSize: 12,
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    Satisfaction Rate
                  </span>
                  <span
                    style={{
                      fontFamily: F.rubik,
                      fontSize: 13,
                      fontWeight: 700,
                      color: C.white,
                    }}
                  >
                    95%
                  </span>
                </div>
                <div
                  style={{
                    height: 6,
                    background: "rgba(255,255,255,0.2)",
                    borderRadius: 100,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "95%",
                      height: "100%",
                      background: "#b2f5ea",
                      borderRadius: 100,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PARTNERS
      ══════════════════════════════════════════════ */}
      <section style={{ background: C.white, padding: "52px 0 32px" }}>
        <div className="container mb-4">
          <div className="text-center">
            <Chip label="Our Partners" />
            <Div center />
            <h2
              style={{
                fontFamily: F.rubik,
                color: C.dark,
                letterSpacing: "-0.02em",
                marginBottom: 10,
              }}
            >
              Trusted by Leading{" "}
              <span style={{ color: C.teal }}>Institutions</span>
            </h2>
            <p style={{ ...bodyTxt(), maxWidth: 460, margin: "0 auto 40px" }}>
              We collaborate with development finance institutions, government
              bodies, and international organisations to deliver programmes at
              scale.
            </p>
          </div>
        </div>
        <LogoScroll />
      </section>

      {/* ══════════════════════════════════════════════
          COMPETENCIES
      ══════════════════════════════════════════════ */}
      <section style={{ background: C.greyBg, padding: "88px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <Chip label="Our Competencies" />
            <Div center />
            <h2
              style={{
                fontFamily: F.rubik,
                color: C.dark,
                letterSpacing: "-0.02em",
                marginBottom: 10,
              }}
            >
              Our Core <span style={{ color: C.teal }}>Competencies</span>
            </h2>
            <p style={{ ...bodyTxt(), maxWidth: 620, margin: "0 auto" }}>
              We are keeping this section focused on two core areas where
              8thGear delivers the most direct value to founders, MSMEs, and
              growing teams.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {COMPETENCIES.map((item, i) => (
              <div key={item.title} className="col-12 col-md-6 col-xl-5">
                <FadeUp delay={i * 55}>
                  <CompetencyCard item={item} />
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PROGRAMMES + REPORTS
      ══════════════════════════════════════════════ */}
      <section
        style={{ background: C.white, padding: "92px 0" }}
        id="programmes"
      >
        <div className="container">
          {/* Section header + filter */}
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-5">
            <div>
              <Chip label="Programmes & Reports" />
              <Div />
              <h2
                style={{
                  fontFamily: F.rubik,
                  color: C.dark,
                  letterSpacing: "-0.02em",
                  marginBottom: 10,
                }}
              >
                Our Initiatives &amp;{" "}
                <span style={{ color: C.teal }}>Impact Evidence</span>
              </h2>
              <p style={{ ...bodyTxt(), maxWidth: 500 }}>
                Fueling Innovation, Empowering Entrepreneurs and Transforming
                futures.
              </p>
            </div>

            {/* Filter bar */}
            <div
              className="ig8-fbar"
              style={{
                background: C.greyBg,
                border: `1px solid ${C.greyBorder}`,
                borderRadius: C.radiusSm,
                padding: 5,
                display: "flex",
                flexWrap: "wrap",
                gap: 4,
                flexShrink: 0,
              }}
            >
              {FILTER_TABS.map((t) => (
                <button
                  key={t.key}
                  className="ig8fb"
                  onClick={() => setFilter(t.key)}
                  style={{
                    padding: "7px 16px",
                    borderRadius: 7,
                    border: "none",
                    background: filter === t.key ? C.teal : "transparent",
                    color: filter === t.key ? C.white : C.textSec,
                    fontFamily: F.open,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.18s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid — 3 cols on xl, 2 on md, 1 on sm */}
          <div className="row g-4">
            {filtered.map((prog, i) => (
              <div key={prog.id} className="col-12 col-md-6 col-xl-4">
                <FadeUp delay={i * 55}>
                  <ProgrammeCard data={prog} />
                </FadeUp>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="col-12 text-center py-5">
                <p style={bodyTxt()}>No programmes found for this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════ */}
      <section
        style={{ background: C.greyBg, padding: "88px 0" }}
        id="testimonials"
      >
        <div className="container">
          <div className="row align-items-start g-4 mb-5">
            <div className="col-lg-5">
              <Chip label="Testimonials & Reviews" />
              <Div />
              <h2
                style={{
                  fontFamily: F.rubik,
                  color: C.dark,
                  letterSpacing: "-0.02em",
                  marginBottom: 10,
                }}
              >
                What Participants{" "}
                <span style={{ color: C.teal }}>Are Saying</span>
              </h2>
              <p style={{ ...bodyTxt(), marginBottom: 20 }}>
                Our programmes earn consistently high ratings across delivery
                quality, facilitator expertise, and practical impact.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {[
                  {
                    label: "Read Google Reviews",
                    href: "https://maps.app.goo.gl/ojJPqECbZ3joFcF29",
                  },
                  { label: "View Programmes & Reports", href: "#programmes" },
                ].map((lnk) => (
                  <TestimonialLink key={lnk.label} lnk={lnk} />
                ))}
              </div>
            </div>

            {/* Ratings banner */}
            <div className="col-lg-7">
              <div
                style={{
                  background: C.teal,
                  borderRadius: C.radius,
                  padding: "26px 28px",
                }}
              >
                <p
                  style={{
                    ...label("rgba(255,255,255,0.55)"),
                    marginBottom: 18,
                  }}
                >
                  Programme Ratings Summary
                </p>
                <div
                  className="ig8-rrow"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 18,
                  }}
                >
                  {[
                    { val: "4.4/5", label: "DBN Ibadan" },
                    { val: "4.46/5", label: "DBN Lagos" },
                    { val: "95%", label: "DSE Excellent" },
                    { val: "96.3%", label: "Networking" },
                  ].map((r, i, arr) => (
                    <div
                      key={r.label}
                      style={{ display: "flex", alignItems: "center", gap: 18 }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <span
                          style={{
                            fontFamily: F.rubik,
                            fontSize: "1.7rem",
                            fontWeight: 700,
                            color: C.white,
                            display: "block",
                            lineHeight: 1,
                          }}
                        >
                          {r.val}
                        </span>
                        <span
                          style={{
                            ...label("rgba(255,255,255,0.6)"),
                            display: "block",
                            marginTop: 4,
                          }}
                        >
                          {r.label}
                        </span>
                      </div>
                      {i < arr.length - 1 && (
                        <div
                          style={{
                            width: 1,
                            height: 36,
                            background: "rgba(255,255,255,0.22)",
                            flexShrink: 0,
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.id} className="col-12 col-sm-6 col-lg-3">
                <FadeUp delay={i * 65}>
                  <TestiCard data={t} />
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════ */}
      <section
        style={{
          background: `linear-gradient(140deg,${C.dark} 0%,${C.slate} 100%)`,
          padding: "88px 0",
        }}
      >
        <div className="container">
          <div
            className="ig8-ctg"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 380px",
              gap: 56,
              alignItems: "center",
            }}
          >
            <div>
              <Chip label="Get Involved" />
              <h2
                style={{
                  fontFamily: F.rubik,
                  color: C.white,
                  letterSpacing: "-0.02em",
                  marginBottom: 14,
                }}
              >
                Ready to Partner with{" "}
                <span style={{ color: "#b2f5ea" }}>8thGear Hub?</span>
              </h2>
              <p style={{ ...bodyTxt(true), maxWidth: 480 }}>
                We work with government bodies, enterprises, and international
                donors to design and deliver impactful MSME programmes across
                Nigeria and West Africa.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0" }}>
                {[
                  "Programme co-design and delivery",
                  "Capacity building and skills development",
                  "Digital transformation consulting",
                  "Impact assessment and reporting",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontFamily: F.open,
                      fontSize: "0.9rem",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.75)",
                      lineHeight: "1.75rem",
                      marginBottom: 4,
                    }}
                  >
                    {Icon.check("#b2f5ea")}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.13)",
                borderRadius: C.radius,
                padding: 34,
              }}
            >
              <p
                style={{
                  fontFamily: F.rubik,
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: C.white,
                  marginBottom: 6,
                }}
              >
                Let's Work Together
              </p>
              <p
                style={{
                  fontFamily: F.open,
                  fontSize: "0.88rem",
                  fontWeight: 300,
                  lineHeight: "1.75rem",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: 22,
                }}
              >
                Reach out to explore partnership opportunities, RFPs, or
                programme collaboration with 8thGear Hub.
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <a
                  href="https://docs.google.com/forms/d/108Rzj8GqngAeK9_gFRikHqnupR_upycv-NvuasBm4cw/viewform?edit_requested=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...Btn.purple(hC === "c"),
                    justifyContent: "center",
                  }}
                  onMouseEnter={() => setHC("r")}
                  onMouseLeave={() => setHC(null)}
                >
                  View RFP {Icon.ext(C.white)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
