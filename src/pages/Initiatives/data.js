export const FILTER_TABS = [
  { key: "all", label: "All" },
  { key: "enterprise", label: "Enterprise Support" },
  { key: "talent", label: "Talent Development" },
];

export const PROGRAMMES = [
  {
    id: 1,
    cat: "enterprise",
    col: "teal",
    badge: "Ibadan · Oct 2–4, 2025",
    title: "DBN Capacity Building Workshop — Ibadan",
    body: "Brought together 60+ MSME operators, startup founders, and PFIs. Sessions covered investment readiness, access to finance, and business.",
    images: [
      require("../../assets/images/tech-marketplace/DBN Ibadan.jpeg"),
      require("../../assets/images/tech-marketplace/DBN Ibadan 1.jpeg"),
      require("../../assets/images/tech-marketplace/DBN Ibadan 2.jpeg"),
    ],
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
    cat: "talent",
    col: "purple",
    badge: "Oct 17 – Nov 7, 2025",
    title: "Digital Skills for Entrepreneurs (DSE)",
    body: "Trained 89 MSMEs across Ogun and Lagos states. Covered digital marketing, e-commerce, financial literacy, and Digital Transformation Roadmaps.",
    images: [
      require("../../assets/images/tech-marketplace/DSE Lagos 1.jpeg"),
      require("../../assets/images/tech-marketplace/DSE Lagos.jpeg"),
      require("../../assets/images/tech-marketplace/DSE Ogun 1.jpeg"),
      require("../../assets/images/tech-marketplace/DSE Ogun.jpeg"),
    ],
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
    id: 3,
    cat: "enterprise",
    col: "purple",
    badge: "Lagos · Nov 26–28, 2025",
    title: "DBN Capacity Building Workshop — Lagos",
    body: "Built on Ibadan learnings with sharper sessions on pitch-deck preparation, advanced money management, legal protection, and sales strategies.",
    images: [
      require("../../assets/images/tech-marketplace/DBN Lagos.jpeg"),
      require("../../assets/images/tech-marketplace/DBN Lagos 1.jpeg"),
      require("../../assets/images/tech-marketplace/DBN Lagos 2.jpeg"),
      
    ],
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
    id: 4,
    cat: "enterprise",
    col: "teal",
    badge: "GIZ-DTC · EU Funded",
    title: "GIZ-DTC / EU Digital Innovation Hub",
    body: "Leading a consortium driving digital transformation for MSMEs across Trade, Transport & Logistics, and Education in Southwest Nigeria, co-funded by GIZ and the European Union.",
    images: [
      require("../../assets/gallerycards/employabilityGIZ.png"),
      require("../../assets/gallerycards/employability2.jpg"),
      require("../../assets/gallerycards/employability3.jpg"),
    ],
    metrics: null,
    highlights: [
      "98 Beneficiaries",
      "Over 120 job/Internship placements",
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
    cat: "enterprise",
    col: "teal",
    badge: "April 15 – April 26, 2024",
    title: "Get Online with DigiPlus Training",
    body: "The training program, conducted by Digiplus Alliance was a pivotal initiative aimed at digitally transforming venture entrepreneurs in Lagos, Nigeria.",
    images: [
      require("../../assets/gallerycards/getOnlineWithDigiplus.png"),
    ],
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
    {
    id: 6,
    cat: "talent",
    col: "purple",
    badge: "Dec 11, 2023 – Aug 16, 2024",
    title: "USADF/LSETF Fully Funded Scholarship",
    body: "The application process attracted over 1,000 applicants, leading to a rigorous selection process.",
    images: [
      require("../../assets/gallerycards/LSETFTraining23.png"),
    ],
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
];

export const COMPETENCIES = [
  {
    title: "Enterprise Support",
    desc: "We have a range of support services and programs designed to assist MSMEs. We also have experienced advisors and mentors who can guide startups.",
    tags: ["MSME Support", "Advisory", "Mentorship"],
    icon: (col = "currentColor") => (
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
    title: "Talent Development and Employability",
    desc: "At 8thGear, we are committed to providing exceptional Talent Management to individuals and organizations alike.",
    tags: ["Talent Development", "Employability", "Training"],
    icon: (col = "currentColor") => (
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

export const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    role: "MSME — Ibadan",
    text: "This workshop has impacted me by giving more confidence to present my business idea clearly and professionally.",
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
    role: "DSE Participant",
    text: "This has been the best organized, highest value and intentionally transformative programme that i have ever attended(and i have attended a few).",
  },
  {
    id: 4,
    rating: 5,
    role: "DBN - Ibadan",
    text: "It has helped me clearly identify my target audience and understand promotional and marketing strategies to scale my business.",
  },
];
