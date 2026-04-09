import { HomepageNav } from "../../../components/Navbar";
import "../../../sassfiles/_colors.scss";
import "../../../sassfiles/pages/services/_msmeMarketplace.scss";
import LogoScroll from "../../../components/Hero/LogoScroll";
import SolutionCard from "./SolutionCard";
import FeatureCard from "./FeatureCard";
import { SOLUTIONS, FEATURES, PARTNERS } from "./data";
import { FadeUp, Icon } from "../../../components/GlobalUI";

import b2bImage from "../../../assets/images/tech-marketplace/b2bImage.png";
import partnerwithus from "../../../assets/images/tech-marketplace/partnerwithus.png";
import tailoredsolution from "../../../assets/images/tech-marketplace/tailoredsolution.png";

export default function MSMEMarketplace() {
  return (
    <div className="msm-page">
      <HomepageNav />

      <section className="msm-hero">
        <div className="msm-hero__orb msm-hero__orb--one" />
        <div className="msm-hero__orb msm-hero__orb--two" />
        <div className="msm-hero__orb msm-hero__orb--three" />

        <div className="container msm-section__content">
          <div className="row align-items-center g-5 msm-hero-grid">
            <div className="col-lg-6">
              <FadeUp>
                <div className="msm-hero__eyebrow">MSME Marketplace</div>
                <h1 className="msm-hero__title">
                  Transform Your Business with
                  <span className="msm-hero__title-accent">Cutting-Edge Solutions</span>
                </h1>
                <p className="msm-hero__copy">
                  Discover vetted B2B tools and services that drive growth, streamline operations, and give you a competitive edge in today's digital marketplace.
                </p>

                <div className="d-flex gap-3 flex-wrap align-items-center">
                  <a
                    href="https://forms.gle/ehFzYU6fiDFyZ2Qb7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="msm-btn msm-btn--white"
                  >
                    Get Started Today {Icon.arrowR("currentColor")}
                  </a>
                </div>
              </FadeUp>
            </div>

            <div className="col-lg-6">
              <FadeUp delay={200}>
                <div className="text-center">
                  <img src={b2bImage} alt="B2B Solutions" className="msm-hero__image" />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <section className="msm-section msm-section--muted">
        <div className="msm-section__bg-orb msm-section__bg-orb--one" />
        <div className="msm-section__bg-orb msm-section__bg-orb--two" />

        <div className="container msm-section__content">
          <div className="text-center mb-5">
            <FadeUp>
              <div className="msm-chip">Why Choose Us</div>
              <div className="msm-divider" />
              <h2 className="msm-section__title">
                Why Businesses Choose <span className="msm-section__accent">Our Marketplace</span>
              </h2>
              <p className="msm-section__copy msm-section__copy--wide">
                Join hundreds of growing businesses who trust our curated marketplace for reliable, scalable B2B solutions that drive real results.
              </p>
            </FadeUp>
          </div>

          <div className="msm-grid msm-grid--why">
            {FEATURES.map((f, i) => (
              <FadeUp key={f.title} delay={i * 150}>
                <FeatureCard feature={f} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="msm-section msm-section--solutions">
        <div className="container">
          <div className="text-center mb-5">
            <div className="msm-chip msm-chip--purple">Our Solutions</div>
            <div className="msm-divider" />
            <h2 className="msm-section__title msm-section__title--solutions">
              Explore Trusted <span className="msm-section__accent">Tech Providers</span>
            </h2>
            <p className="msm-section__copy" style={{ maxWidth: 600, margin: "0 auto" }}>
              Handpicked software and tools designed for scalability and reliability.
            </p>
          </div>

          <div className="msm-grid msm-grid--solutions">
            {SOLUTIONS.map((sol, i) => (
              <FadeUp key={sol.title} delay={i * 100}>
                <SolutionCard {...sol} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="msm-section msm-section--white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <FadeUp>
                <div className="msm-chip">Tailored Solutions</div>
                <div className="msm-divider msm-divider--left" />
                <h2 className="msm-section__title">
                  Tell Us What You Need,
                  <br />
                  <span className="msm-section__accent">We'll Make It Happen</span>
                </h2>
                <p className="msm-section__copy" style={{ marginBottom: 24 }}>
                  If our featured solutions don’t match your needs, we’re here to create custom solutions that do.
                </p>
                <a
                  href="https://forms.gle/ehFzYU6fiDFyZ2Qb7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="msm-tailored__btn"
                >
                  Request Custom Solution {Icon.arrowR("currentColor")}
                </a>
              </FadeUp>
            </div>

            <div className="col-lg-6">
              <FadeUp delay={200}>
                <img src={tailoredsolution} alt="Tailored Solutions" className="msm-tailored__image" />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <section className="msm-section msm-section--partners">
        <div className="container text-center">
          <FadeUp>
            <div className="msm-chip">Our Partners</div>
            <div className="msm-divider" />
            <h2 className="msm-section__title">
              Meet Our <span className="msm-section__accent">Trusted Partners</span>
            </h2>
            <p className="msm-section__copy" style={{ maxWidth: 500, margin: "0 auto 40px" }}>
              We collaborate with industry-leading platforms to bring you the best in business technology.
            </p>
          </FadeUp>
          <LogoScroll logos={PARTNERS.map((partner) => partner.logo)} />
        </div>
      </section>

      <PartnersSection />
    </div>
  );
}

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
            <button className="btn btn-light">Partner With Us</button>
          </a>
        </div>
      </div>
    </div>
  );
};
