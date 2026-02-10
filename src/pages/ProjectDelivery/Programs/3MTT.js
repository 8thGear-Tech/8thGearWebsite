import { HomepageNav } from "../../../components/Navbar";
// import { Footer } from "../../../components/website/footer";
import React, { useState } from "react";

// // Import your images
// import hero3mtt1 from "../../../assets/website/images/3mtt/3mtt-hero-1.jpeg";
import deepTechLogo from "../../../assets/images/projectdelivery/3MTT/deepTechLogo.jpg";
import location from "../../../assets/images/projectdelivery/3MTT/location.jpeg";
// import threeMTTLogo from "../../../assets/website/images/3mtt/3mtt-logo.png";
// import nitdaLogo from "../../../assets/website/images/3mtt/nitda-logo.png";

import ThreeMTTHero from "../../../assets/images/projectdelivery/3MTT/3MTT.jpg"

const ThreeMTT = () => {
  return (
    <>
      <HomepageNav />
      <HeroSection />
      {/* <TalentPipelineValue /> */}
      <ProgrammeOverview />
      <WhyPartnerWithUs />
      {/* <HowItWorksForBusiness /> */}
      <TalentAccessCTA />
      <TalentApplicationSection />
      {/* <Footer /> */}
    </>
  );
};

const HeroSection = () => {
  return (
    <section className="hero-3mtt-business">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            {/* Programme Logos */}
            <div className="programme-logos">
              <img src={deepTechLogo} alt="DeepTech Ready by Data Science Nigeria" />
              {/* <img src={threeMTTLogo} alt="3MTT Programme" />
              <img src={nitdaLogo} alt="NITDA - Federal Ministry of Communications" /> */}
              {/* <div style={{height: '60px', background: '#e0e0e0', width: '150px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: '#666'}}>DeepTech Logo</div>
              <div style={{height: '60px', background: '#e0e0e0', width: '120px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: '#666'}}>3MTT Logo</div>
              <div style={{height: '60px', background: '#e0e0e0', width: '120px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: '#666'}}>NITDA Logo</div> */}
            </div>
            
            <div className="hero-label mb-3">
              <span className="badge-govt">Federal Government Initiative</span>
            </div>
            <h1 className=" mb-4">
              Access <span className="text-highlight">Job-Ready AI Talent</span> for Your MSME
            </h1>
            <p className="mb-4">
              Tap into Nigeria's largest tech talent pipeline. Get pre-trained AI and data science professionals ready to drive your business growth, no recruitment hassle, no training costs.
            </p>
            <div className="value-props mb-4">
              <div className="value-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>3 million skilled professionals being trained</span>
              </div>
              <div className="value-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Pre-vetted, job-ready talent pool</span>
              </div>
              <div className="value-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Government-certified training standards</span>
              </div>
            </div>
            <div className="hero-cta">
              <a href="Expert trainers and mentors" target="_blank" rel="noopener noreferrer" className="btn btn-primary-8th btn-lg">
                Get Talent Now
              </a>
              <a href="#talent-section" className="btn btn-outline-8th btn-lg ms-3">
                For Talent
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            {/* <div className="hero-image-container">
              <img src={ThreeMTTHero} alt="AI Talent for MSMEs" className="hero-img" />
              <div style={{height: '400px', background: '#e0e0e0', borderRadius: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: '#666'}}>Hero Image</div>
              <div className="stats-overlay">
                <div className="stat-card">
                  <div className="stat-number">3M</div>
                  <div className="stat-label">Talents Being Trained</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">49</div>
                  <div className="stat-label">Training Centres Nationwide</div>
                </div>
              </div>
            </div> */}

            <div className="hero-image-container">
  <img
    src={ThreeMTTHero}
    alt="AI Talent for MSMEs"
    className="hero-img"
  />

  <div className="stats-overlay">
    <div className="stat-card">
      <div className="stat-number">3M</div>
      <div className="stat-label">Talents Being Trained</div>
    </div>
    <div className="stat-card">
      <div className="stat-number">49</div>
      <div className="stat-label">Training Centres Nationwide</div>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

const TalentPipelineValue = () => {
  return (
    <section className="talent-pipeline">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h3 className="section-title text-white">Why MSMEs Choose 8thGear's 3MTT Talent Pipeline</h3>
            <div className="title-underline-white mx-auto"></div>
            <p className="text-white-80 mt-3" >
              We're building the future-ready AI and digital talent that B2B startups and tech-enabled MSMEs rely on. Skip the hiring friction and access professionals who are trained specifically for your business needs.
            </p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="talent-benefit-card">
              <div className="benefit-number">01</div>
              <h4>Faster, Smarter Hiring</h4>
              <p>
                We handle training and vetting, giving you access to job-ready professionals who can deliver value from day one. Reduce hiring delays and minimize onboarding effort.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="talent-benefit-card">
              <div className="benefit-number">02</div>
              <h4>Business-Ready Skills</h4>
              <p>
                Our curriculum is designed around real challenges faced by MSMEs. These aren't just tech enthusiasts, they're professionals trained to solve actual business problems.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="talent-benefit-card">
              <div className="benefit-number">03</div>
              <h4>Scale Your Innovation</h4>
              <p>
                Access AI and data science expertise without the enterprise price tag. Bring fresh perspectives and technical capabilities that drive competitive advantage.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="talent-benefit-card">
              <div className="benefit-number">04</div>
              <h4>Sustainable Growth</h4>
              <p>
                Build teams that grow with your business. Our talent pipeline ensures you always have access to skilled professionals as your needs evolve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProgrammeOverview = () => {
  return (
    <section className="programme-overview">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h3 className="section-title">About the 3MTT Talent Programme</h3>
            <div className="title-underline mx-auto"></div>
            <p className="mt-3">
              Nigeria's largest government-backed initiative to train tech professionals for MSMEs
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="overview-content">
              <p className="lead-text">
                The <strong>Three Million Technical Talent (3MTT)</strong> programme is a Federal Government initiative training three million Nigerians in AI, data science, and digital skills.
              </p>
              <p className="body-text">
                For MSMEs, this means unprecedented access to a pipeline of skilled professionals without the typical barriers of talent acquisition. The programme specifically focuses on skills that <strong>Micro, Small, and Medium Enterprises</strong> need to compete and grow.
              </p>
              <p className="body-text">
                Through 8thGear's role in this ecosystem, we ensure that trained talent is not just technically proficient, but business-ready, equipped to understand and solve the unique challenges MSMEs face in today's digital economy.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="impact-cards">
              <div className="impact-card">
                <div className="impact-icon">
                  <i className="bi bi-lightning-charge"></i>
                </div>
                <h5>Faster Time to Productivity</h5>
                <p>Pre-trained talent means shorter onboarding and faster ROI on your hiring decisions</p>
              </div>
              <div className="impact-card">
                <div className="impact-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h5>Quality Assurance</h5>
                <p>Government-certified training with standardized curriculum ensures consistent quality</p>
              </div>
              <div className="impact-card">
                <div className="impact-icon">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <h5>Competitive Edge</h5>
                <p>Access to AI and data science expertise that was previously out of reach for MSMEs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyPartnerWithUs = () => {
  const partnerships = [
    {
      icon: "people-fill",
      title: "Massive Talent Pool",
      description: "Access to 3 million trained professionals, the largest tech talent pipeline in Nigeria"
    },
    {
      icon: "award-fill",
      title: "Government Certified",
      description: "Federal Government-backed training ensures quality, standards, and legitimacy"
    },
    {
      icon: "cpu-fill",
      title: "Future-Ready Skills",
      description: "AI, data science, and emerging technologies that position your business ahead"
    },
    // {
    //   icon: "geo-alt-fill",
    //   title: "49 Centres Nationwide",
    //   description: "Find talent in your location with our extensive network across Nigeria"
    // },
    {
      icon: "briefcase",
      title: "MSME-First Design",
      description: "Training specifically calibrated for the real-world needs of small and medium businesses"
    },
    {
      icon: "arrow-repeat",
      title: "Continuous Pipeline",
      description: "Regular cohorts mean you always have fresh talent available as your business scales"
    }
  ];

  return (
    <section className="why-partner">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h3 className="section-title">Why This Matters for Your Business</h3>
            <div className="title-underline mx-auto"></div>
            <p className="mt-3">
              Strategic advantages that help MSMEs compete in the digital economy
            </p>
          </div>
        </div>
        <div className="row g-4">
          {partnerships.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="partner-card">
                <div className="partner-icon">
                  <i className={`bi bi-${item.icon}`}></i>
                </div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorksForBusiness = () => {
  const steps = [
    {
      step: "1",
      title: "Define Your Needs",
      description: "Tell us about your business challenges and the skills you're looking for"
    },
    {
      step: "2",
      title: "Get Matched with Talent",
      description: "We connect you with pre-vetted professionals from our trained pipeline"
    },
    {
      step: "3",
      title: "Interview & Select",
      description: "Meet candidates who are already trained and ready to contribute"
    },
    {
      step: "4",
      title: "Onboard & Grow",
      description: "Bring talent onboard quickly with minimal training overhead"
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h3 className="">How to Access Talent</h3>
            <div className="title-underline mx-auto"></div>
            <p className="section-subtitle mt-3">
              A simple, streamlined process designed for busy entrepreneurs
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="steps-container">
              {steps.map((item, index) => (
                <div key={index} className="step-card">
                  <div className="step-number">{item.step}</div>
                  <div className="step-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  {index < steps.length - 1 && <div className="step-connector"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TalentAccessCTA = () => {
  return (
    <section className="contact-cta">
      <div className="container">
        <div className="cta-container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <h3 className=" mb-3">Ready to Access Job-Ready AI Talent?</h3>
              <p className="mb-4">
                Join forward-thinking MSMEs who are leveraging the 3MTT talent pipeline to scale their operations, drive innovation, and compete effectively in the digital economy.
              </p>
              <div className="cta-features">
                <div className="cta-feature">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>No upfront training costs</span>
                </div>
                <div className="cta-feature">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Pre-vetted, government-certified talent</span>
                </div>
                <div className="cta-feature">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Business-ready professionals</span>
                </div>
              </div>
            </div>
            <div className="col-lg-5 text-lg-end">
              <a href="Expert trainers and mentors" target="_blank" rel="noopener noreferrer" className="btn btn-primary-8th btn-lg w-100 w-lg-auto">
                Get Talent Now
              </a>
              <p className="mt-3 mb-0 text-muted">
                <small>Connect with skilled AI & data science professionals</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TalentApplicationSection = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const applicationLink = "https://forms.gle/kzxe9y7GswjtpQ57A";
  const applicationDeadline = "February 15, 2026";

  return (
    <section className="talent-section" id="talent-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="talent-application-box">
              <div className="text-center mb-4">
                <span className="talent-badge">Aspiring Tech Professionals</span>
                <h3 className="mt-3">Want to Join the Talent Pipeline?</h3>
                <div className="title-underline mx-auto"></div>
                <p className="mt-3 text-muted">
                  If you're looking to develop in-demand AI and data science skills, apply to join the 3MTT programme. Training is 100% FREE and government-certified.
                </p>
              </div>

              {/* Tabs */}
              <div className="talent-tabs mb-4">
                <button 
                  className={`talent-tab ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Programme Info
                </button>
                <button 
                  className={`talent-tab ${activeTab === 'benefits' ? 'active' : ''}`}
                  onClick={() => setActiveTab('benefits')}
                >
                  What You Get
                </button>
                <button 
                  className={`talent-tab ${activeTab === 'location' ? 'active' : ''}`}
                  onClick={() => setActiveTab('location')}
                >
                  Location
                </button>
              </div>

              {/* Tab Content */}
              <div className="tab-content">
                {activeTab === 'overview' && (
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-calendar-check info-box-icon"></i>
                        <h6>Duration</h6>
                        <p>Intensive courses for rapid skill development</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-cash-coin info-box-icon"></i>
                        <h6>100% FREE</h6>
                        <p>Federal Government funded, no cost to you</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-laptop info-box-icon"></i>
                        <h6>Focus Areas</h6>
                        <p>AI, data science, and digital technologies</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-award info-box-icon"></i>
                        <h6>Certification</h6>
                        <p>Government-certified upon completion</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'benefits' && (
                  <div className="benefits-grid">
                    <div className="benefit-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>Job-ready skills for MSME employment</span>
                    </div>
                    <div className="benefit-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>Expert trainers and mentors</span>
                    </div>
                    <div className="benefit-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>Real-world projects and portfolio</span>
                    </div>
                    <div className="benefit-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>Peer learning environment</span>
                    </div>
                    <div className="benefit-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>Networking Opportunities</span>
                    </div>
                  
                   
                    
                  </div>
                )}

                {activeTab === 'location' && (
                  <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                          <img
    src={location}
    alt="AI Talent for MSMEs"
    className="hero-img"
  />
                      {/* <div style={{height: '300px', background: '#e0e0e0', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: '#666'}}>Learning Centre</div> */}
                    </div>
                    <div className="col-md-6">
                      <div className="location-info">
                        <div className="location-highlight mb-4">
                          <h5 className="mb-3">Physical Classes in Lagos</h5>
                          <p className="text-muted">
                            Hands-on training with expert instructors in a collaborative environment.
                          </p>
                        </div>
                        <div className="featured-centre">
                          <h6 className="text-primary mb-2">8thGear Partners Ltd</h6>
                          <div className="d-flex align-items-center mb-2">
                            <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                            <span>41, CMD Road, Magodo, Lagos</span>
                          </div>
                          <div className="d-flex align-items-center">
                            <i className="bi bi-calendar3 text-primary me-2"></i>
                            <span><strong>Next Cohort:</strong> March 2026</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Application CTA */}
              <div className="application-cta-box mt-5">
                <div className="row align-items-center">
                  <div className="col-lg-8 mb-3 mb-lg-0">
                    <h5 className="mb-2">Ready to Build Your Tech Career?</h5>
                    <p className="mb-0 text-muted">
                      <i className="bi bi-clock me-2"></i>
                      Application closes: <strong className="text-danger">{applicationDeadline}</strong>
                    </p>
                  </div>
                  <div className="col-lg-4 text-lg-end">
                    <a href={applicationLink} target="_blank" rel="noopener noreferrer" className="btn btn-application btn-lg">
                      Apply Now - FREE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeMTT;