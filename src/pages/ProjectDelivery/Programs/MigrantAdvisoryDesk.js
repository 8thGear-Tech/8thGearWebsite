import { Button } from "react-bootstrap";
import migrationadvisorydesk from "../../../assets/images/talentplacement/migrationadvisorydesk.jpg";
import { HomepageNav } from "../../../components/Navbar";


const MigrantAdvisoryDesk = () => {
  return (
    <>
      <HomepageNav/>
      <AdvisoryDesk />
    
    </>
  );
};

const AdvisoryDesk = () => {
  return (
    
    <div className="container-fluid py-5" style={{ background: "linear-gradient(135deg, rgba(130, 30, 107, 0.05) 0%, rgba(130, 30, 107, 0.15) 100%)" }} id="migrant-advisory-desk">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="pe-lg-4">
                <h4 className="pt-2">
                Migrant Advisory Desk
              </h4>

              <h5 className="mb-4">
                Verified Guidance for Safe, Successful Migration
              </h5>

              {/* <p className="mb-4">
                Get trusted migration support backed by our GIZ partnership. MAD provides verified guidance and practical employability training, ensuring you are globally job-ready, not just travel-ready.
              </p> */}

              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div
                      className="me-3 mt-1"
                      style={{
                        width: "24px",
                        height: "24px",
                        background: "#821E6B",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <span style={{ color: "#fff", fontSize: "14px" }}>✓</span>
                    </div>
                    <div>
                      <h6 style={{ color: "#681955", marginBottom: "0.25rem" }}>Expert Support</h6>
                      <p style={{ fontSize: "0.8rem", color: "#666", marginBottom: 0 }}>
                        Backed by GIZ partnership
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div
                      className="me-3 mt-1"
                      style={{
                        width: "24px",
                        height: "24px",
                        background: "#821E6B",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <span style={{ color: "#fff", fontSize: "14px" }}>✓</span>
                    </div>
                    <div>
                      <h6 style={{ color: "#681955", marginBottom: "0.25rem" }}>Safe Migration</h6>
                      <p style={{ fontSize: "0.8rem", color: "#666", marginBottom: 0 }}>
                        Trusted support throughout
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div
                      className="me-3 mt-1"
                      style={{
                        width: "24px",
                        height: "24px",
                        background: "#821E6B",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <span style={{ color: "#fff", fontSize: "14px" }}>✓</span>
                    </div>
                    <div>
                      <h6 style={{ color: "#681955", marginBottom: "0.25rem" }}>Employability Training</h6>
                      <p style={{ fontSize: "0.8rem", color: "#666", marginBottom: 0 }}>
                        Practical skills development
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div
                      className="me-3 mt-1"
                      style={{
                        width: "24px",
                        height: "24px",
                        background: "#821E6B",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <span style={{ color: "#fff", fontSize: "14px" }}>✓</span>
                    </div>
                    <div>
                      <h6 style={{ color: "#681955", marginBottom: "0.25rem" }}>Global Job-Ready</h6>
                      <p style={{ fontSize: "0.8rem", color: "#666", marginBottom: 0 }}>
                        Not just travel-ready
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">


                <Button
                  className="aboutbtn m-0"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                  style={{
                    transition: "all 0.3s ease"
                  }}
                >
                  <a
                    href="https://chat.whatsapp.com/IntMLN10e5mIkzxW9BqRq2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none purple-text"
                  >
                    Learn More →
                  </a>
                </Button>
              </div>

            </div>
          </div>

          {/* Image Content */}
          <div className="col-lg-6 col-md-12">
            <div className="position-relative">
              <div
                className="p-4 rounded-3"
                style={{
                  background: "#fff",
                  boxShadow: "0 10px 40px rgba(130, 30, 107, 0.15)"
                }}
              >
                <img
                  src={migrationadvisorydesk}
                  className="img-fluid rounded-3"
                  alt="Migrant Advisory Desk"
                />
              </div>

              {/* Decorative element */}
              <div
                className="position-absolute"
                style={{
                  width: "100px",
                  height: "100px",
                  background: "rgba(130, 30, 107, 0.1)",
                  borderRadius: "50%",
                  top: "-20px",
                  right: "-20px",
                  zIndex: -1
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default MigrantAdvisoryDesk;
