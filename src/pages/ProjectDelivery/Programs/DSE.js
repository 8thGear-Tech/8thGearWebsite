import { HomepageNav } from "../../../components/Navbar"; 
import DigitalSE from "../../../assets/images/projectdelivery/DSE/DSE.jpg"
import { Badge } from "react-bootstrap";

const DSE = () => {
  return (
    <>
      <HomepageNav />
      <DSEHero />
      <DSEAbout />
      <DSEWhoShouldApply />
      <DSETrainingDetails />
      <DSECallToAction />
    </>
  );
};

const DSEHero = () => {
  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(135deg, #6E006A 0%, #9B1B96 100%)",
        minHeight: "70vh",
      }}
    >
      <div className="row align-items-center justify-content-center px-3 px-md-5">
        <div className="col-12 col-md-6 text-white py-5">
          <Badge
            pill
            bg="light"
            className="text-dark px-3 py-2 mb-3 fs-6 fw-light"
          >
            Cohort 2 - Now Open
          </Badge>
          <h3 className="fw-bold mb-3" style={{ fontSize: "3rem" }}>
            Digital Skills for{" "}
            <span style={{ color: "#00d2ff" }}>Entrepreneurs</span>
          </h3>
          <p className="mb-4" style={{ lineHeight: "1.8" }}>
            A three-week, blended capacity-building program designed to close
            the digital literacy gap and empower MSMEs for sustainable growth.
          </p>
          <a
            href="https://forms.gle/deVsWi1aGdpeJg7E9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="btn btn-lg fw-bold "
              style={{
                background: "white",
                color: "#6E006A",
                borderRadius: "8px",
                
                fontSize: "1.1rem",
              }}
            >
              Apply Now →
            </button>
          </a>
        </div>
        <div className="col-12 col-md-6 d-none d-md-block">
          <img
            src={DigitalSE}
            alt="DSE Training"
            className="img-fluid rounded"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

const DSEAbout = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="text-center mb-5">
            <h4
              className="fw-bold mb-3"
              style={{ color: "#6E006A" }}
            >
              About DSE Cohort 2
            </h4>
            <p className="text-muted">
              Building on the success of Cohort 1
            </p>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div
                className="card h-100 border-0 shadow-sm text-center p-4"
                style={{ borderTop: "4px solid #6E006A" }}
              >
                <div
                  className="mb-3 mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#F5E6F5",
                    borderRadius: "50%",
                  }}
                >
                  <h2 className="mb-0 fw-bold" style={{ color: "#6E006A" }}>
                    80+
                  </h2>
                </div>
                <h5 className="fw-bold mb-2">Cohort 1 Success</h5>
                <p className="text-muted mb-0">
                  Entrepreneurs trained with improved digital presence and
                  increased sales
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card h-100 border-0 shadow-sm text-center p-4"
                style={{ borderTop: "4px solid #9B1B96" }}
              >
                <div
                  className="mb-3 mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#F5E6F5",
                    borderRadius: "50%",
                  }}
                >
                  <h2 className="mb-0 fw-bold" style={{ color: "#9B1B96" }}>
                    50
                  </h2>
                </div>
                <h5 className="fw-bold mb-2">Limited Slots</h5>
                <p className="text-muted mb-0">
                  MSMEs across Lagos and neighboring commercial hubs
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card h-100 border-0 shadow-sm text-center p-4"
                style={{ borderTop: "4px solid #C62E65" }}
              >
                <div
                  className="mb-3 mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#F5E6F5",
                    borderRadius: "50%",
                  }}
                >
                  <h2 className="mb-0 fw-bold" style={{ color: "#C62E65" }}>
                    3
                  </h2>
                </div>
                <h5 className="fw-bold mb-2">Weeks Training</h5>
                <p className="text-muted mb-0">
                  Blended learning with physical and virtual sessions
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <p className="" style={{ lineHeight: "1.9", color: "#4a5568" }}>
                The <strong>Digital Skills for Entrepreneurs (DSE) Cohort 2</strong> is a
                three-week, blended capacity-building program designed to close
                the digital literacy gap. Following the success of Cohort 1,
                where over 80 entrepreneurs strengthened their digital presence,
                improved operations, and increased sales, Cohort 2 is set to
                train 50 MSMEs across Lagos and neighboring commercial hubs.
              </p>
              <p className="" style={{ lineHeight: "1.9", color: "#4a5568" }}>
                Through hands-on physical sessions, flexible virtual classes,
                and real-world application, participants will learn{" "}
                <strong>digital marketing, AI for business, financial management</strong>,
                and develop a clear <strong>Digital Transformation Roadmap</strong>.
              </p>
              <p className="fw-semibold" style={{ color: "#6E006A" }}>
                DSE Cohort 2 empowers entrepreneurs not just to learn digital
                tools but to use them for sustainable growth and long-term
                competitiveness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DSEWhoShouldApply = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{ background: "#f7f2f7" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="text-center mb-5">
              <h3
                className="fw-bold mb-3"
                style={{ color: "#6E006A" }}
              >
                Who Should Apply?
              </h3>
              <p className="text-muted">
                Are you an entrepreneur ready to strengthen your digital
                presence and grow your business?
              </p>
            </div>

            <div className="row g-4">
              {[
                {
                  icon: "💼",
                  title: "Business Experience",
                  description: "Business owners with at least 3 years of operation",
                  color: "#E91E63",
                },
                {
                  icon: "📍",
                  title: "Location",
                  description: "Entrepreneurs based in Lagos State and neighboring hubs",
                  color: "#9C27B0",
                },
                {
                  icon: "🏪",
                  title: "Industry Focus",
                  description:
                    "Founders in Trade, Retail, Wholesale, Hospitality, Food Services, Education, Transport & Logistics",
                  color: "#3F51B5",
                },
                {
                  icon: "✅",
                  title: "Commitment",
                  description: "Ready to commit to an intensive 3-week training program",
                  color: "#009688",
                },
              ].map((item, index) => (
                <div key={index} className="col-md-6">
                  <div
                    className="card h-100 border-0 shadow-sm p-4"
                    style={{
                      borderLeft: `5px solid ${item.color}`,
                      background: "#fff",
                    }}
                  >
                    <div className="d-flex align-items-start gap-3">
                      <div
                        className="d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{
                          width: "60px",
                          height: "60px",
                          background: item.color,
                          borderRadius: "12px",
                          fontSize: "1.8rem",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">{item.title}</h5>
                        <p className="text-muted mb-0">{item.description}</p>
                      </div>
                    </div>
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

const DSETrainingDetails = () => {
  const curriculum = [
    "Digital Competence & Mindset",
    "Entrepreneurs Mindset in Nigeria’s Digital Economy",
    "Ideas, Opportunities and and Innovation",
    "Mobilising Resources, Talents, Technology and Partnerships",
    "Creating Online Presence",
     "Digital Marketing",
    "Social Media Management",
    "Creating and maintaining Digital Content Assets",
    "E-Commerce Fundamentals",
    "Supply Chain and Logistics",
    "Financial Management",
    "BMC for Scaling and Growing Business",
    "Ethics and Staying Legit",
    "Responsible Action and Leadership",
    "Digital Transformation Roadmap (Evidence of Digital Literacy)",
  ];

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="text-center mb-5">
            <h3
              className="fw-bold mb-3"
              style={{ color: "#6E006A" }}
            >
              Training Details
            </h3>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div
                className="p-4 rounded h-100"
                style={{
                  background: "linear-gradient(135deg, #6E006A 0%, #9B1B96 100%)",
                  color: "white",
                }}
              >
                <h4 className="fw-bold mb-3">📅 Training Dates</h4>
                <h5 className="fw-bold mb-2">Feb 26 – March 20, 2026</h5>
                <p className="mb-0">3-week intensive program</p>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="p-4 rounded h-100"
                style={{
                  background: "linear-gradient(135deg, #C62E65 0%, #E91E63 100%)",
                  color: "white",
                }}
              >
                <h4 className="fw-bold mb-3">💰 Training Cost</h4>
                <h3 className="fw-bold mb-2">₦100,000</h3>
              
              </div>
            </div>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div
                className="card border-0 shadow-sm p-4 text-center h-100"
                style={{ borderTop: "4px solid #6E006A" }}
              >
                <h2 className="fw-bold mb-2" style={{ color: "#6E006A" }}>
                  6
                </h2>
                <p className="mb-0 fw-semibold">Physical Sessions</p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card border-0 shadow-sm p-4 text-center h-100"
                style={{ borderTop: "4px solid #9B1B96" }}
              >
                <h2 className="fw-bold mb-2" style={{ color: "#9B1B96" }}>
                  10
                </h2>
                <p className="mb-0 fw-semibold">Virtual Classes</p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card border-0 shadow-sm p-4 text-center h-100"
                style={{ borderTop: "4px solid #C62E65" }}
              >
                <h2 className="fw-bold mb-2" style={{ color: "#C62E65" }}>
                  2
                </h2>
                <p className="mb-0 fw-semibold">Time Slots Daily</p>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <h4 className="fw-bold mb-4" style={{ color: "#6E006A" }}>
              What You'll Learn
            </h4>
            <div className="row g-3">
              {curriculum.map((item, index) => (
                <div key={index} className="col-md-6">
                  <div className="d-flex align-items-center gap-3 p-3 rounded" style={{ background: "#f7f2f7" }}>
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "#6E006A",
                        borderRadius: "50%",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {index + 1}
                    </div>
                    <p className="mb-0 fw-semibold">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="p-4 rounded"
            style={{ background: "#FFF3E0", border: "2px solid #FF9800" }}
          >
            <div className="d-flex align-items-start gap-3">
              <span style={{ fontSize: "2rem" }}>⏰</span>
              <div>
                <h5 className="fw-bold mb-2" style={{ color: "#E65100" }}>
                  Application Deadline
                </h5>
                <p className="mb-0 fs-5 fw-semibold" style={{ color: "#E65100" }}>
                  Tuesday, February 24, 2026
                </p>
                <p className="mb-0 text-muted">Limited slots available - Apply now!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DSECallToAction = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(135deg, #6E006A 0%, #9B1B96 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center text-white">
          <div className="col-12 col-lg-8">
            <h3 className="fw-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="mb-4" style={{ lineHeight: "1.8" }}>
              Join 50 forward-thinking entrepreneurs in building sustainable
              digital skills for long-term growth and competitiveness.
            </p>
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center mb-4">
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
                    fontSize: "1.2rem",
                  }}
                >
                  Apply Now →
                </button>
              </a>
              
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSE;