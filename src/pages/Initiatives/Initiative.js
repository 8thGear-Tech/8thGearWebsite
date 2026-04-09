import { useState } from "react";
import { HomepageNav } from "../../components/Navbar";
import LogoScroll from "../../components/Hero/LogoScroll";
import "../../sassfiles/_colors.scss";
import "../../sassfiles/pages/initiatives/_initiatives.scss";
import { FadeUp, Icon } from "../../components/GlobalUI";
import { FILTER_TABS, PROGRAMMES, COMPETENCIES, TESTIMONIALS } from "./data";
import ProgrammeCard from "./ProgrammeCard";
import CompetencyCard from "./CompetencyCard";
import { TestiCard, TestimonialLink } from "./TestimonialComponents";

export default function InitiativesPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? PROGRAMMES : PROGRAMMES.filter((p) => p.cat === filter);

  return (
    <div className="ig8-page">
      <HomepageNav />

      <section className="ig8-hero">
        <div className="ig8-hero__orb ig8-hero__orb--top" />
        <div className="ig8-hero__orb ig8-hero__orb--bottom" />

        <div className="container ig8-section__content">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h1 className="ig8-hero__title">
                Building Resilient
                <br />
                <span className="ig8-hero__title-accent">MSMEs &amp; Entrepreneurs</span>
                <br />
                Across Nigeria
              </h1>

              <p className="ig8-hero__copy ig8-hero__copy--light" style={{ maxWidth: 520, marginBottom: 36 }}>
                From enterprise support to talent development initiatives, 8thGear Hub is driving measurable impact across Southwest Nigeria and beyond
              </p>

              <div className="ig8-hero__actions">
                <a
                  href="https://docs.google.com/forms/d/108Rzj8GqngAeK9_gFRikHqnupR_upycv-NvuasBm4cw/viewform?edit_requested=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ig8-btn ig8-btn--purple"
                >
                  Request for Proposal {Icon.ext("currentColor")}
                </a>
                <a href="#programmes" className="ig8-btn ig8-btn--outline">
                  Impact Report {Icon.arrowR("currentColor")}
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="ig8-hero__card">
                <p className="ig8-hero__eyebrow">Impact at a Glance</p>

                {[
                  { label: "StartUps Supported", val: "2000+" },
                  { label: "Projects Delivered", val: "10+" },
                  { label: "Tech Talents Empowered", val: "1000+" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="d-flex align-items-center justify-content-between py-3 border-bottom border-white border-opacity-25"
                  >
                    <span className="ig8-hero__stat-label">{item.label}</span>
                    <span className="ig8-hero__stat-value">{item.val}</span>
                  </div>
                ))}

                <div className="pt-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="ig8-hero__satisfaction">Satisfaction Rate</span>
                    <span className="ig8-hero__percent">95%</span>
                  </div>
                  <div className="ig8-hero__progress">
                    <div className="ig8-hero__progress-bar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ig8-section ig8-section--white pb-4">
        <div className="container mb-4">
          <div className="text-center">
            <div className="ig8-section__eyebrow">Our Partners</div>
            <div className="ig8-section__divider" />
            <h2 className="ig8-section__title">
              Trusted by Leading <span className="ig8-section__accent">Institutions</span>
            </h2>
            <p className="ig8-section__copy ig8-section__copy--narrow">
              We collaborate with development agencies, Corporate CSR units and Philanthropies to design and deliver on Social Impact driven initiatves.
            </p>
          </div>
        </div>
        <LogoScroll />
      </section>

      <section className="ig8-section ig8-section--muted">
        <div className="container">
          <div className="text-center mb-5">
            <div className="ig8-section__eyebrow">Our Competencies</div>
            <div className="ig8-section__divider" />
            <h2 className="ig8-section__title">
              Our Core <span className="ig8-section__accent">Competencies</span>
            </h2>
            <p className="ig8-section__copy">
              We are keeping this section focused on two core areas where 8thGear delivers the strongest value.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {COMPETENCIES.map((item, i) => (
              <div className="col-md-6 col-lg-5" key={i}>
                <FadeUp delay={i * 55}>
                  <CompetencyCard item={item} />
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ig8-section ig8-section--white" id="programmes">
        <div className="container">
          <div className="row align-items-end g-3 mb-4">
            <div className="col-lg-8">
              <div className="ig8-section__eyebrow">Impact Reports</div>
              <div className="ig8-section__divider ig8-section__divider--left" />
              <h2 className="ig8-section__title">
                Initiatives &amp; <span className="ig8-section__accent">Impact Evidence</span>
              </h2>
              <p className="ig8-section__copy ig8-section__copy--left" style={{ maxWidth: 500 }}>
                Fueling Innovation, Empowering Entrepreneurs and Transforming Communities.
              </p>
            </div>

            <div className="col-lg-4 d-flex justify-content-lg-end">
              <div className="ig8-filterbar">
                {FILTER_TABS.map((t) => (
                  <button
                    key={t.key}
                    className={`ig8-filterbar__button ${filter === t.key ? "is-active" : ""}`}
                    onClick={() => setFilter(t.key)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="row g-4">
            {filtered.map((d, i) => (
              <div className="col-md-6 col-lg-4" key={d.id}>
                <FadeUp delay={i * 55}>
                  <ProgrammeCard data={d} />
                </FadeUp>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center mt-4">
              <p className="ig8-section__copy">No programmes found for this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="ig8-section ig8-section--muted" id="testimonials">
        <div className="container">
          <div className="text-center mb-5">
            <div className="ig8-section__eyebrow">Testimonials &amp; Reviews</div>
            <div className="ig8-section__divider" />
            <h2 className="ig8-section__title">
              What Participants <span className="ig8-section__accent">Are Saying</span>
            </h2>
            <p className="ig8-section__copy">
              Our programmes earn consistently high ratings across delivery sites.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-7">
              <div className="ig8-testimonials__panel">
                <p className="ig8-testimonials__label">Review Snapshot</p>
                {[
                  { val: "4.4/5", label: "DBN Ibadan" },
                  { val: "4.46/5", label: "DBN Lagos" },
                  { val: "95%", label: "DSE Excellent" },
                  { val: "96.3%", label: "Networking" },
                ].map((r) => (
                  <div key={r.label} className="ig8-testimonials__item">
                    <span className="ig8-testimonials__item-copy">{r.label}</span>
                    <span className="ig8-testimonials__item-value">{r.val}</span>
                  </div>
                ))}
              </div>
              <div className="d-flex flex-wrap gap-2 mt-3">
                {[
                  { label: "View Testimonials", href: "#testimonials" },
                  { label: "View Programmes & Reports", href: "#programmes" },
                ].map((lnk) => (
                  <TestimonialLink key={lnk.label} lnk={lnk} />
                ))}
              </div>
            </div>
          </div>

          <div className="row g-4 mt-1">
            {TESTIMONIALS.slice(0, 4).map((t) => (
              <div className="col-12 col-md-6 col-xl-3" key={t.id}>
                <FadeUp delay={t.id * 65}>
                  <TestiCard data={t} />
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ig8-cta">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-6">
              <div className="ig8-section__eyebrow ig8-cta__eyebrow">
                Get Involved
              </div>
              <h2 className="ig8-cta__title">
                Ready to Partner with <span className="ig8-cta__accent">8thGear Hub?</span>
              </h2>
              <p className="ig8-cta__copy">
                We collaborate with development agencies, Corporate CSR units and Philanthropies to design and deliver on Social Impact driven initiatves.
              </p>

              <ul className="ig8-check-list mt-4">
                {["Access to a broad network of MSMEs", "Expert-led programme design and delivery", "Measurable impact reporting"].map((item) => (
                  <li key={item} className="ig8-check-list__item">
                    <span className="ig8-check-list__icon">{Icon.check("currentColor")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div className="ig8-cta__card">
                <p className="ig8-cta__card-title">What We Deliver</p>
                <p className="ig8-cta__card-copy">
                  Structured support for innovation, enterprise development, community activation and measurable programme delivery.
                </p>

                <div className="mt-4">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe_k2Vk4CgZKz4-sPtP7h7aflemd-AcpGSpWodxUoGT6UuKJg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ig8-btn ig8-btn--purple"
                  >
                    Request for Proposal {Icon.ext("currentColor")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
