import { useEffect } from "react";
import { HomepageNav } from "../../../components/Navbar";
import SolutionCard from "./SolutionCard";
import FeatureCard from "./FeatureCard";
import PartnerCard from "./PartnerCard";
import { SOLUTIONS, FEATURES, PARTNERS } from "./data";
import {
  C, F,
  bodyTxt,
  Btn, Icon,
  Chip, Div, FadeUp,
  injectFonts,
} from "../../../Tokens.js";

import b2bImage from "../../../assets/images/tech-marketplace/b2bImage.png";
import partnerwithus from "../../../assets/images/tech-marketplace/partnerwithus.png";
import tailoredsolution from "../../../assets/images/tech-marketplace/tailoredsolution.png";

export default function MSMEMarketplace() {
  // Fonts are declared in index.css — injectFonts() is a no-op if already loaded.
  useEffect(() => { injectFonts(); }, []);

  return (
    <>
      <HomepageNav />

      <style>{`
        /* Responsive */
        @media(max-width:991px) {
          .msm-why-grid { grid-template-columns:repeat(2, minmax(0, 1fr)) !important; }
          .msm-solutions-grid { grid-template-columns:repeat(auto-fit,minmax(300px,1fr)) !important; }
        }
        @media(max-width:767px) {
          .msm-why-grid { grid-template-columns:1fr !important; }
          .msm-hero-grid { gap:24px !important; }
        }
      `}</style>

      { // HERO
         }
      <section style={{
        background: `linear-gradient(135deg, ${C.purple} 0%, ${C.teal} 50%, ${C.tealDark} 100%)`,
        padding: "70px 0 100px",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}>
        {/* Background decorative elements */}
        <div style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          filter: "blur(40px)",
          pointerEvents: "none"
        }}/>
        <div style={{
          position: "absolute",
          bottom: "15%",
          right: "8%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          filter: "blur(30px)",
          pointerEvents: "none"
        }}/>
        <div style={{
          position: "absolute",
          top: "50%",
          right: "15%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          filter: "blur(20px)",
          pointerEvents: "none"
        }}/>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row align-items-center g-5">
            {/* Left side - Content */}
            <div className="col-lg-6">
              <FadeUp>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "50px",
                  padding: "8px 20px",
                  fontFamily: F.open,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: C.teal, // Using website's main teal color
                  marginBottom: 20,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
                }}>
                  MSME Marketplace
                </div>
                <h1 style={{
                  fontFamily: F.rubik,
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: C.white,
                  marginBottom: 24,
                }}>
                  Transform Your Business with
                  <span style={{
                    background: "linear-gradient(45deg, #ffffff, rgba(255,255,255,0.8))",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "block"
                  }}>
                    Cutting-Edge Solutions
                  </span>
                </h1>
                <p style={{
                  ...bodyTxt(true),
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  marginBottom: 32,
                  maxWidth: "500px"
                }}>
                  Discover vetted B2B tools and services that drive growth, streamline operations, and give you a competitive edge in today's digital marketplace.
                </p>

                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <a href="https://forms.gle/ehFzYU6fiDFyZ2Qb7" target="_blank" rel="noopener noreferrer">
                    <button style={Btn.whiteOutline(false)}
                      onMouseEnter={(e) => e.target.style.background = "rgba(255,255,255,0.13)"}
                      onMouseLeave={(e) => e.target.style.background = "transparent"}>
                      Get Started Today {Icon.arrowR(C.white)}
                    </button>
                  </a>
                </div>
              </FadeUp>
            </div>

            {/* Right side - Visual */}
            <div className="col-lg-6">
              <FadeUp delay={200}>
                <div style={{
                  position: "relative",
                  textAlign: "center"
                }}>
                  <img src={b2bImage} alt="B2B Solutions"
                    style={{
                      width: "100%",
                      maxWidth: "500px",
                      borderRadius: C.radius,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                      transform: "rotate(-2deg)",
                      marginBottom: 40
                    }} />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (Feature Cards Section) */}
      <section style={{background: C.greyBg, padding: "100px 0 80px", position: "relative"}}>
        {/* Background decoration */}
        <div style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: `linear-gradient(45deg, ${C.tealLight}, ${C.purpleLight})`,
          opacity: 0.3,
          filter: "blur(60px)",
          pointerEvents: "none"
        }}/>
        <div style={{
          position: "absolute",
          bottom: "15%",
          right: "8%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: `linear-gradient(45deg, ${C.purpleLight}, ${C.tealLight})`,
          opacity: 0.2,
          filter: "blur(40px)",
          pointerEvents: "none"
        }}/>

        <div className="container" style={{position: "relative", zIndex: 1}}>
          <div className="text-center mb-5">
            <FadeUp>
              <Chip label="Why Choose Us" col="teal"/>
              <Div center/>
              <h2 style={{
                fontFamily: F.rubik,
                color: C.dark,
                letterSpacing: "-0.02em",
                marginBottom: 16,
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                fontWeight: 700
              }}>
                Why Businesses Choose <span style={{color: C.teal}}>Our Marketplace</span>
              </h2>
              <p style={{
                ...bodyTxt(),
                maxWidth: 700,
                margin: "0 auto",
                fontSize: "1.1rem",
                lineHeight: "1.6"
              }}>
                Join hundreds of growing businesses who trust our curated marketplace for reliable, scalable B2B solutions that drive real results.
              </p>
            </FadeUp>
          </div>

          <div
            className="msm-why-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 28,
              maxWidth: "1000px",
              margin: "0 auto"
            }}
          >
            {/* Feature Cards */}
            {FEATURES.map((f, i) => (
              <FadeUp key={f.title} delay={i * 150}>
                <FeatureCard feature={f} index={i} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      { // SOLUTIONS
        }
      <section style={{background:C.purple,padding:"92px 0"}}> 
        <div className="container">
          <div className="text-center mb-5">
            <Chip label="Our Solutions"/>
            <Div center/>
            <h2 style={{fontFamily:F.rubik,color:C.white,letterSpacing:"-0.02em",marginBottom:10}}>
              Explore Trusted <span style={{color:C.teal}}>Tech Providers</span>
            </h2>
            <p style={{...bodyTxt(true),maxWidth:600,margin:"0 auto"}}>
              Handpicked software and tools designed for scalability and reliability.
            </p>
          </div>
          <div className="msm-solutions-grid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:24,maxWidth:"1180px",margin:"0 auto"}}>
            {SOLUTIONS.map((sol,i)=>(
              <FadeUp key={sol.title} delay={i*100}>
                <SolutionCard {...sol} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      { // TAILORED SOLUTIONS
      }
      <section style={{background:C.white,padding:"92px 0"}}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <FadeUp>
                <Chip label="Tailored Solutions"/>
                <Div/>
                <h2 style={{fontFamily:F.rubik,color:C.dark,letterSpacing:"-0.02em",marginBottom:16}}>
                  Tell Us What You Need,<br/><span style={{color:C.teal}}>We’ll Make It Happen</span>
                </h2>
                <p style={{...bodyTxt(),marginBottom:24}}>
                  If our featured solutions don’t match your needs, we’re here to create custom solutions that do.
                </p>
                  <a href="https://forms.gle/ehFzYU6fiDFyZ2Qb7" target="_blank" rel="noopener noreferrer">
                    <button
                      style={Btn.tealOutline(false)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = C.teal;
                        e.currentTarget.style.color = C.white;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = C.teal;
                      }}
                    >
                      Request Custom Solution {Icon.arrowR("currentColor")}
                    </button>
                  </a>
              </FadeUp>
            </div>
            <div className="col-lg-6">
              <FadeUp delay={200}>
                <img src={tailoredsolution} alt="Tailored Solutions" style={{width:"100%", borderRadius:C.radius, boxShadow:C.shadowMd}} />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      { // PARTNERS LOGOS
      }
      <section style={{background:C.greyBg,padding:"72px 0"}}>
        <div className="container text-center">
          <FadeUp>
            <Chip label="Our Partners"/>
            <Div center/>
            <h2 style={{fontFamily:F.rubik,color:C.dark,letterSpacing:"-0.02em",marginBottom:10}}>
              Meet Our <span style={{color:C.teal}}>Trusted Partners</span>
            </h2>
            <p style={{...bodyTxt(),maxWidth:500,margin:"0 auto 40px"}}>
              We collaborate with industry-leading platforms to bring you the best in business technology.
            </p>
          </FadeUp>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:40,alignItems:"center"}}>
            {PARTNERS.map((partner,i)=>(
              <FadeUp key={partner.name} delay={i*100}>
                <PartnerCard partner={partner} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      { // PARTNERS CTA (UNCHANGED)
          }
      <PartnersSection />
    </>
  );
}

// Original PartnersSection (unchanged)
const PartnersSection = () => {
  return (
    <div className="container px-0 mt-5 pt-5">
      <div
        className="hero-section text-white d-flex justify-content-center align-items-center rounded-4"
        style={{
          backgroundImage: `url(${partnerwithus})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <div className="text-center p-4 rounded">
          <h2 className="fw-bold mb-3">
            Want to Offer Your Tech <br className="d-none d-md-block" />
            Solution to Growing Businesses?
          </h2>
          <p className="mb-4">
            Join our marketplace and connect with the right B2B audience.
            <br className="d-none d-md-block" />
            Showcase your product, gain visibility, and grow your reach.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe_k2Vk4CgZKz4-sPtP7h7aflemd-AcpGSpWodxUoGT6UuKJg/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <button className="btn btn-light">Partner With Us</button>
          </a>
        </div>
      </div>
    </div>
  );
};