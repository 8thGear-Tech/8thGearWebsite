
import { HomepageNav } from "../../../components/Navbar";
import EGLImage from "../../../assets/images/projectdelivery/DSE/DSE.jpg";
import { Badge } from "react-bootstrap";
import { useState } from "react";

const styles = `
  .egl-button-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 450px;
  }

  .egl-button-wrapper {
    width: 100%;
  }

  @media (min-width: 768px) {
    .egl-button-container {
      flex-direction: row;
      gap: 16px;
      max-width: 600px;
    }

    .egl-button-wrapper {
      flex: 1;
      max-width: 210px;
    }
  }

  .egl-button {
    background: white;
    color: #6E006A;
    border-radius: 8px;
    font-size: 1rem;
    padding: 12px 24px;
    width: 100%;
    border: none;
    transition: all 0.3s ease;
    cursor: pointer;
    font-weight: bold;
  }

  .egl-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.15);
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
if (typeof document !== "undefined") {
  document.head.appendChild(styleSheet);
}

const EGL = () => {
  return (
    <>
      <HomepageNav />
      <EGLHero />
      <EGLAbout />
      <EGLModules />
      <EGLSchedule />
      <EGLOffices />
      <EGLCallToAction />
    </>
  );
};

const EGLHero = () => {
  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(135deg, #6E006A 0%, #9B1B96 100%)",
        // minHeight: "70vh",
      }}
    >
      <div className="row align-items-center justify-content-center px-3 px-md-5">
        <div className="col-12 col-md-6 text-white py-5">
          <Badge
            pill
            bg="light"
            className="text-dark px-3 py-2 mb-3 fs-6 fw-light"
          >
            Quarterly Sessions
          </Badge>
          <h3
            className="fw-bold mb-3"
            style={{ fontSize: "clamp(1.5rem, 5vw, 2.2rem)", lineHeight: "1.2" }}
          >
            Entrepreneurs
            <br />
            <span style={{ color: "#00d2ff" }}>Growth Lab</span>
          </h3>
          <p className="mb-4 text-white" style={{ lineHeight: "1.8", fontSize: "clamp(0.9rem, 3vw, 1rem)" }}>
            Quarterly masterclasses featuring hands-on digital tools and
            practical strategies for sales and marketing, accounting and
            bookkeeping, business IP protection, and team optimization.
          </p>
          <div className="egl-button-container">
            <a href="#schedule" className="egl-button-wrapper">
              <button className="egl-button">
                View Schedule →
              </button>
            </a>
            <a href="https://forms.gle/deVsWi1aGdpeJg7E9" target="_blank" rel="noopener noreferrer" className="egl-button-wrapper">
              <button className="egl-button">
                Apply Now
              </button>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 d-none d-md-block">
          <img
            src={EGLImage}
            alt="Entrepreneurs Growth Lab"
            className="img-fluid rounded"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

const EGLAbout = () => {
  return (
    <div className="container-fluid py-5" style={{ background: "#f5f5f5" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="text-center">
              <h4
                className="fw-bold mb-3"
                style={{ color: "#6E006A", fontSize: "1.2rem" }}
              >
                ABOUT THE PROGRAM
              </h4>
              <p
                className="text-muted"
                style={{ lineHeight: "1.8", fontSize: "1rem" }}
              >
                Three sequential modules targeting different business
                challenges. Sessions are interactive, hands-on, and built around
                real business pain points with clear action plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EGLModules = () => {
  const modules = [
    {
      number: "Module 1",
      title: "Digital Tools for Sales",
      description:
        "Helping MSME owners attract, convert, and retain customers using the right digital sales and marketing tools.",
      topics: [
        "Fundamentals of Sales & Marketing",
        "How to manage customer relationships and track your sales pipeline",
        "Using live chat and chatbots to engage customers on your website, social media & WhatsApp",
        "Setting up and managing an online store to sell your products and services",
      ],
      color: "#E91E63",
      icon: "💼",
      bgGradient: "linear-gradient(135deg, #FFE5E5 0%, #FFF0F5 100%)",
    },
    {
      number: "Module 2",
      title: "Digital Tools for Finance",
      description:
        "Equipping MSME owners with practical financial management skills and the software to run clean, compliant books.",
      topics: [
        "Basic bookkeeping principles",
        "Financial and Tax Compliance for Nigerian Businesses",
        "Excel Bookkeeping Templates",
        "Introduction to accounting and bookkeeping softwares",
      ],
      color: "#9C27B0",
      icon: "💰",
      bgGradient: "linear-gradient(135deg, #F3E5F5 0%, #FCE4EC 100%)",
    },
    {
      number: "Module 3",
      title: "Business Protection & Team Growth",
      description:
        "Helping MSMEs legally protect their business assets and build a capable, well-managed team.",
      topics: [
        "Incorporation/Business Registration, Trademarks, Copyrights, and Brand protection (CAC vs Trademark Registry)",
        "Basics of Recruitment, drafting Job Descriptions, and Performance Tracking Systems for teams. Templates Incl.",
        "HR and recruitment software for managing your team",
      ],
      color: "#3F51B5",
      icon: "🛡️",
      bgGradient: "linear-gradient(135deg, #E8EAF6 0%, #F3E5F5 100%)",
    },
  ];

  return (
    <div className="container-fluid py-5" style={{ background: "#fff" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="row g-4">
              {modules.map((module, index) => (
                <div key={index} className="col-12 mb-3">
                  <div
                    className="card border-0 p-3 p-md-5"
                    style={{
                      background: module.bgGradient,
                      borderLeft: `6px solid ${module.color}`,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                      borderRadius: "10px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 8px 16px rgba(0,0,0,0.12)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 2px 8px rgba(0,0,0,0.06)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >

                    <div className="d-flex flex-column flex-md-row align-items-start gap-3 mb-3">
                      <div style={{ fontSize: "2.5rem", flexShrink: 0 }}>
                        {module.icon}
                      </div>
                      <div>
                        <p className="mb-1 fw-semibold" style={{ color: module.color, fontSize: "0.85rem" }}>
                          {module.number}
                        </p>
                        <h5 className="fw-bold mb-2" style={{ color: "#6E006A", fontSize: "1.2rem" }}>
                          {module.title}
                        </h5>
                      </div>
                    </div>

                    <p
                      className="text-muted mb-4"
                      style={{ lineHeight: "1.7" }}
                    >
                      {module.description}
                    </p>

                    <div>
                      <p
                        className="fw-semibold mb-3"
                        style={{ color: "#6E006A", fontSize: "0.95rem" }}
                      >
                        Topics Covered:
                      </p>
                      <ul className="list-unstyled">
                        {module.topics.map((topic, i) => (
                          <li
                            key={i}
                            className="text-muted mb-2"
                            style={{
                              paddingLeft: "20px",
                              position: "relative",
                              fontSize: "0.9rem",
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                left: 0,
                                color: module.color,
                              }}
                            >
                              ✓
                            </span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="p-3 p-md-5 rounded mt-4"
              style={{ background: "#f5f5f5", border: "none" }}
            >
              <h5 className="fw-bold mb-4" style={{ color: "#6E006A" }}>
                Session Details
              </h5>
              <div className="row g-4">
                <div className="col-md-4">
                  <p className="mb-1 fw-semibold">💰 Registration Fee</p>
                  <p className="text-muted">₦5,000 per module</p>
                </div>
                <div className="col-md-4">
                  <p className="mb-1 fw-semibold">🎯 Frequency</p>
                  <p className="text-muted">Quarterly</p>
                </div>
                <div className="col-md-4">
                  <p className="mb-1 fw-semibold">🌐 Format</p>
                  <p className="text-muted">Hybrid (Online + Physical)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EGLSchedule = () => {
  const [activeQuarter, setActiveQuarter] = useState("q2");

  const quarters = [
    { id: "q2", label: "Q2 · May-Jun" },
    { id: "q3", label: "Q3 · Jul-Sep" },
    { id: "q4", label: "Q4 · Oct-Dec" },
  ];

  const sessions = {
    q2: [
      {
        date: "May 15",
        year: "2026",
        module: "Business Protection & Team Growth",
        badge: "Module 3",
        badgeType: "protect",
      },
      {
        date: "Jun 4-5",
        year: "2026",
        module: "Digital Tools for Sales & Finance",
        badge: "Module 1 & 2",
        badgeType: "sales",
      },
    ],
    q3: [
      {
        date: "Jul 17",
        year: "2026",
        module: "Business Protection & Team Growth",
        badge: "Module 3",
        badgeType: "protect",
      },
      {
        date: "Aug 14",
        year: "2026",
        module: "Digital Tools for Sales",
        badge: "Module 1",
        badgeType: "sales",
      },
      {
        date: "Sep 18",
        year: "2026",
        module: "Digital Tools for Finance",
        badge: "Module 2",
        badgeType: "finance",
      },
    ],
    q4: [
      {
        date: "Oct 16",
        year: "2026",
        module: "Business Protection & Team Growth",
        badge: "Module 3",
        badgeType: "protect",
      },
      {
        date: "Nov 13",
        year: "2026",
        module: "Digital Tools for Sales",
        badge: "Module 1",
        badgeType: "sales",
      },
      {
        date: "Dec 18",
        year: "2026",
        module: "Digital Tools for Finance",
        badge: "Module 2",
        badgeType: "finance",
      },
    ],
  };

  const badgeStyles = {
    sales: { background: "#FFE5EF", color: "#993556" },
    finance: { background: "#F3E5F5", color: "#6A1B9A" },
    protect: { background: "#E8EAF6", color: "#303F9F" },
  };

  const legend = [
    { label: "Digital Tools for Sales", color: "#D4537E" },
    { label: "Digital Tools for Finance", color: "#9C27B0" },
    { label: "Business Protection & Team Growth", color: "#3F51B5" },
  ];

  const Badge = ({ session }) => (
    <span
      style={{
        ...badgeStyles[session.badgeType],
        fontSize: "0.75rem",
        padding: "4px 12px",
        borderRadius: "6px",
        fontWeight: "500",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {session.badge}
    </span>
  );

  const SessionCard = ({ session }) => (
    <div
      style={{
        padding: "14px 18px",
        background: "#fff",
        border: "1px solid #e8e8e8",
        borderRadius: "12px",
        transition: "border-color 0.15s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#bbb")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#e8e8e8")}
    >
      {/* Mobile layout: date + badge on top row, module title below */}
      <div className="d-flex d-sm-none flex-column gap-2">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{ fontSize: "0.88rem", fontWeight: "600", color: "#222" }}
            >
              {session.date}
            </div>
            <div
              style={{ fontSize: "0.72rem", color: "#999", marginTop: "1px" }}
            >
              {session.year}
            </div>
          </div>
          <Badge session={session} />
        </div>
        <div style={{ fontSize: "0.9rem", fontWeight: "500", color: "#222" }}>
          {session.module}
        </div>
      </div>

      {/* Desktop layout: date | divider | module | badge all in one row */}
      <div
        className="d-none d-sm-flex align-items-center"
        style={{ gap: "16px" }}
      >
        <div style={{ minWidth: "64px", flexShrink: 0 }}>
          <div
            style={{ fontSize: "0.88rem", fontWeight: "600", color: "#222" }}
          >
            {session.date}
          </div>
          <div style={{ fontSize: "0.72rem", color: "#999", marginTop: "1px" }}>
            {session.year}
          </div>
        </div>
        <div
          style={{
            width: "1px",
            height: "32px",
            background: "#eee",
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "0.9rem", fontWeight: "500", color: "#222" }}>
            {session.module}
          </div>
        </div>
        <Badge session={session} />
      </div>
    </div>
  );

  return (
    <div
      className="container-fluid py-5"
      id="schedule"
      style={{ background: "#f5f5f5" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="mb-4">
              <h3
                className="fw-bold mb-1"
                style={{ color: "#6E006A", fontSize: "1.2rem" }}
              >
                2026 Quarterly Schedule
              </h3>
              <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                Select a quarter to view sessions
              </p>
            </div>

            <div className="d-flex flex-wrap gap-3 mb-4">
              {legend.map((item, i) => (
                <div key={i} className="d-flex align-items-center gap-2">
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: item.color,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: "0.78rem", color: "#666" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="d-flex gap-2 mb-4 flex-wrap">
              {quarters.map((q) => (
                <button
                  key={q.id}
                  onClick={() => setActiveQuarter(q.id)}
                  style={{
                    padding: "7px 18px",
                    borderRadius: "8px",
                    border: "1px solid",
                    borderColor: activeQuarter === q.id ? "#6E006A" : "#ccc",
                    background: activeQuarter === q.id ? "#6E006A" : "#fff",
                    color: activeQuarter === q.id ? "#fff" : "#555",
                    fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    fontWeight: activeQuarter === q.id ? "500" : "400",
                  }}
                >
                  {q.label}
                </button>
              ))}
            </div>

            <div className="d-flex flex-column gap-2">
              {sessions[activeQuarter].map((session, i) => (
                <SessionCard key={i} session={session} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EGLOffices = () => {
  const offices = [
    {
      name: "8thGear HQ",
      address: "41 CMD Road, Secretariat/Magodo, Lagos State, Nigeria",
      icon: "🏢",
      color: "#E91E63",
    },
    {
      name: "8thGear Ondo Liaison Office",
      address:
        "Technology Park and Incubation Centre (TechPIC), Federal University of Technology, Akure, Ondo State, Nigeria",
      icon: "📍",
      color: "#9C27B0",
    },
  ];

  return (
    <div className="container-fluid py-5" style={{ background: "#fff" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="text-center mb-5">
              <h3
                className="fw-bold"
                style={{ color: "#6E006A", fontSize: "1.2rem" }}
              >
                OUR LOCATIONS
              </h3>
              <p className="text-muted">
                Physical sessions held at our locations
              </p>
            </div>

            <div className="row g-4">
              {offices.map((office, index) => (
                <div key={index} className="col-md-6">
                  <div
                    className="h-100 p-4"
                    style={{
                      background: `linear-gradient(135deg, ${office.color}10 0%, ${office.color}05 100%)`,
                      border: `2px solid ${office.color}30`,
                      borderRadius: "12px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = office.color;
                      e.currentTarget.style.boxShadow = `0 8px 16px ${office.color}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${office.color}30`;
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div className="mb-3" style={{ fontSize: "2.5rem" }}>
                      {office.icon}
                    </div>
                    <h5
                      className="fw-bold mb-3"
                      style={{ color: "#6E006A", fontSize: "1.1rem" }}
                    >
                      {office.name}
                    </h5>
                    <p
                      className="text-muted mb-0"
                      style={{ lineHeight: "1.6", fontSize: "0.9rem" }}
                    >
                      {office.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EGLCallToAction = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(135deg, #6E006A 0%, #9B1B96 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center text-white">
          <div className="col-12 col-lg-8 px-3">
            <h3 className="fw-bold mb-4" style={{ fontSize: "clamp(1.3rem, 5vw, 1.5rem)" }}>
              Ready to Transform Your Business?
            </h3>
            <p
              className="mb-4 text-white"
              style={{ lineHeight: "1.8", fontSize: "clamp(0.9rem, 3vw, 1.05rem)" }}
            >
              Join MSMEs learning practical digital strategies. Register for the
              next quarterly session.
            </p>
            <a
              href="https://forms.gle/deVsWi1aGdpeJg7E9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="btn fw-bold"
                style={{
                  background: "white",
                  color: "#6E006A",
                  borderRadius: "8px",
                  fontSize: "clamp(0.85rem, 2.5vw, 1.1rem)",
                  padding: "clamp(8px, 2vw, 12px) clamp(20px, 4vw, 28px)",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.2)";
                }}
              >
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EGL;