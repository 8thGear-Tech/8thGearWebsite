import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HomepageNav } from "../../../components/Navbar";
import { motion, useInView } from "framer-motion";
import "./ZohoLandingPage.css";

import zohologo        from "../../../assets/images/tech-marketplace/zohos-logo.png";
import zohoonelogo     from "../../../assets/images/tech-marketplace/zohoone-logo.png";
import crmlogo         from "../../../assets/images/tech-marketplace/crm.png";
import zohobookslogo   from "../../../assets/images/tech-marketplace/zohobooks-logo.png";
import zohosalesiqlogo from "../../../assets/images/tech-marketplace/zohosalesiq-logo.png";
import zohodesklogo    from "../../../assets/images/tech-marketplace/zohodesk-logo.png";
import zohocampaigns   from "../../../assets/images/tech-marketplace/zohocampaigns-logo.png";

/* ── Constants ──────────────────────────────── */
const SIGNUP_URL =
  "https://store.zoho.com/ResellerCustomerSignUp.do?id=42fa030e987f359f5efd652e6d6d4e9aed081382a36fde6a336d3388cdac81ab";
  

/* ── Animation Variants ─────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden:   {},
  visible:  { transition: { staggerChildren: 0.1 } },
};

/* ── Reusable Animated Wrappers ─────────────── */

// Wraps any content and animates it into view on scroll
const Reveal = ({ children, variant = fadeUp, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Wraps a grid of cards and staggers their entrance
const StaggerGrid = ({ children, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ── Data ───────────────────────────────────── */
const STATS = [
  { num: "60+",   label: "Products" },
  { num: "150M+", label: "Users Worldwide" },
  { num: "30+",   label: "Years in Business" },
  { num: "₦ NGN", label: "Local Naira Pricing" },
];

const PRODUCTS = [
  {
    logo: zohoonelogo, name: "Zoho One",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=f8988e720e096d7c4f0996652473d34e",
    desc: "The all-in-one operating system for your business. 60+ integrated apps covering CRM, Books, Desk, HR, Projects, Campaigns and more.",
  },
  {
    logo: crmlogo, name: "Zoho CRM",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=ae47982fb7c4b5113a610e0121d21857",
    desc: "Manage leads, automate your sales pipeline, track customer interactions, and close deals faster with AI-powered insights.",
  },
  {
    logo: zohobookslogo, name: "Zoho Books",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=1957eae31aff62948c7fe7f162b916b5",
    desc: "Complete accounting software for invoicing, expenses, bank reconciliation, tax compliance, and detailed financial reports.",
  },
  {
    logo: zohosalesiqlogo, name: "Zoho SalesIQ",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=d0fe091c79341ca579bdc34f362c4c35",
    desc: "Live chat and visitor intelligence tool that helps you engage website visitors in real time and convert them into customers.",
  },
  {
    logo: zohodesklogo, name: "Zoho Desk",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=9b1685071c85ac29a55a03ec2b7ab2e2",
    desc: "Context-aware helpdesk software to manage support tickets, automate workflows, and boost customer satisfaction scores.",
  },
  {
    logo: zohocampaigns, name: "Zoho Campaigns",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=b84f92df5adc867e3a5a0c4aa473792d",
    desc: "Email marketing platform to design campaigns, build automation workflows, segment audiences, and track engagement analytics.",
  },
];

const PRICING = [
  {
    logo: zohoonelogo, name: "Zoho One", featured: true, badge: "Most Popular",
    price: "₦69,300", yearlyPrice: "₦80,850", period: "/ user / month",
    tagline: "Best value all-in-one suite",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=f8988e720e096d7c4f0996652473d34e",
    features: ["60+ integrated business apps", "CRM, Books, Desk, Campaigns & more", "Single sign-on across all apps", "Advanced analytics & reporting", "AI-powered Zia assistant", "Unlimited users on all apps", "Billed in Nigerian Naira"],
  },
  {
    logo: crmlogo, name: "Zoho CRM", featured: false,
    price: "₦15,400", yearlyPrice: "₦10,780", period: "/ user / month",
    tagline: "Grow your sales pipeline",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=ae47982fb7c4b5113a610e0121d21857",
    features: ["Lead & contact management", "Sales pipeline automation", "Email & phone integration", "Real-time analytics & dashboards", "Workflow automation (Blueprints)", "AI sales predictions (Zia)"],
  },
  {
    logo: zohobookslogo, name: "Zoho Books", featured: false,
    price: "₦4,320", yearlyPrice: "₦3,600", period: "/ user / month",
    tagline: "Smart accounting for MSMEs",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=ae47982fb7c4b5113a610e0121d21857",
    features: ["Professional invoicing & billing", "Expense tracking & receipts", "Bank feeds & reconciliation", "Workflow automation", "Unified collaboration with your team", "Client portal & payment links"],
  },
  {
    logo: zohosalesiqlogo, name: "Zoho SalesIQ", featured: false,
    price: "₦7,700", yearlyPrice: "₦5,390", period: "/ operator / month",
    tagline: "Convert visitors into customers",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=d0fe091c79341ca579bdc34f362c4c35",
    features: ["Live chat & visitor tracking", "AI-powered chatbot builder", "Lead scoring & hot prospects", "CRM and Social Media integration", "Contact management", "Real-time chat analytics"],
  },
  {
    logo: zohodesklogo, name: "Zoho Desk", featured: false,
    price: "₦6,930", yearlyPrice: "₦5,390", period: "/ user / month",
    tagline: "World-class customer support",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=9b1685071c85ac29a55a03ec2b7ab2e2",
    features: ["Omni-channel ticket management", "SLA management & escalations", "AI-powered ticket routing", "Self-service knowledge base", "Reports & CSAT tracking", "Zoho CRM & Books integration"],
  },
  {
    logo: zohocampaigns, name: "Zoho Campaigns", featured: false,
    price: "₦3,080", yearlyPrice: "₦2,310", period: "/ month",
    tagline: "Email marketing that converts",
    link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=b84f92df5adc867e3a5a0c4aa473792d",
    features: ["Unlimited emails", "SMS marketing", "Access to all ready-to-use email templates", "Dedicated IP", "10 users", "Basic drag-and-drop workflows", "Basic segmentation"],
  },
];

const WHY_US = [
  { icon: "🏆", label: "Official Zoho Partner",   desc: "We are a certified and authorized Zoho reseller in Nigeria. You are in safe hands." },
  { icon: "🛠️", label: "Expert Setup & Onboarding", desc: "Our Zoho Support Team handles everything, from initial configuration to team training and workflow optimization." },
  { icon: "🇳🇬", label: "Local Nigeria Support",   desc: "Get fast, knowledgeable support from a team that understands the Nigerian business environment." },
  { icon: "💳", label: "Pay in Naira",             desc: "No dollar billing surprises. All pricing is fixed in Naira, predictable and stable." },
  { icon: "📈", label: "Growth-Focused Approach",  desc: "We don't just sell software, we help you scale your business with the right Zoho tools." },
  { icon: "🔒", label: "Data Privacy & Security",  desc: "GDPR compliant. Your business data is protected to the highest standards." },
];

const FAQS = [
  {
    q: "What is the difference between Zoho One and Zoho CRM?",
    a: "Zoho CRM is a dedicated sales and customer management tool. Zoho One is the full business suite; it includes Zoho CRM plus 45+ other apps (accounting, HR, marketing, helpdesk, etc.) under one subscription.",
  },
 {
  q: "Do I get support after signing up?",
  a: "Yes. As an authorized Zoho partner, we provide paid dedicated onboarding, configuration, and ongoing support. For assistance, you can ",
  links: [
    { text: "call us", href: "tel:+2348000000000" },
    { text: "send an email", href: "mailto:zoho@8thgearhub.com" },
    { text: "fill out our contact form", href: "/contact" },
  ],
  aSuffix: " and our team will get back to you.",
},
   {
    q: "I have a need for a custom application specific to my business. Can Zoho One help?",
    a: "Zoho One includes Zoho Creator, an application development platform that lets you build custom apps for your business needs. Over 1.5 million custom apps have been built on this platform. If you're not comfortable building your own, we have a developer team who can help.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes! Most Zoho products offer a 15-day free trial with no credit card required. You can test the full feature set before committing to a paid plan.",
  }
];

/* ── Sub-components ─────────────────────────── */
const SectionHeader = ({ title, sub }) => (
  <Reveal className="text-center mb-5">
    <h2 className="zh-section-title">{title}</h2>
    <div className="zh-divider" />
    <p className="zh-section-sub">{sub}</p>
  </Reveal>
);

const ProductCard = ({ product }) => (
  <motion.div variants={fadeUp} className="h-100">
    <div className="zh-product-card h-100">
      <img src={product.logo} alt={product.name} className="zh-product-logo" />
      <h5>{product.name}</h5>
      <p>{product.desc}</p>
      <a href={product.link} target="_blank" rel="noreferrer" className="zh-product-btn">
        Get {product.name} →
      </a>
    </div>
  </motion.div>
);

const PricingCard = ({ plan }) => (
  <motion.div variants={fadeUp} className="h-100">
    <div className={`zh-pricing-card${plan.featured ? " featured" : ""} h-100`}>
      {plan.badge && <span className="zh-pricing-badge">{plan.badge}</span>}
      <img src={plan.logo} alt={plan.name} className="zh-pricing-logo" />
      <h4>{plan.name}</h4>
      <p>{plan.tagline}</p>
      <div style={{ marginBottom: 20 }}>
        <span className="zh-price-starting">Starting from</span>
        <div>
          <span className="zh-price-amount">{plan.price}</span>
          <span className="zh-price-period">{plan.period}</span>
        </div>
        <div className="zh-price-yearly">Annual: {plan.yearlyPrice}{plan.period}</div>
      </div>
      <ul className="zh-feature-list">
        {plan.features.map((f, i) => (
          <li key={i} className="zh-feature-item">{f}</li>
        ))}
      </ul>
      <a href={plan.link} target="_blank" rel="noreferrer" className="zh-pricing-btn">
        Get {plan.name}
      </a>
    </div>
  </motion.div>
);

const WhyCard = ({ item }) => (
  <motion.div variants={fadeUp} className="h-100">
    <div className="zh-why-card h-100">
      <div className="zh-why-icon" style={{ background: "rgba(146,15,132,0.07)" }}>
        {item.icon}
      </div>
      <h5>{item.label}</h5>
      <p>{item.desc}</p>
    </div>
  </motion.div>
);

const FaqItem = ({ item }) => {
 const [open, setOpen] = useState(false);

  const renderAnswer = () => {
    if (!item.links) return item.a;
    return (
      <>
        {item.a}
        {item.links.map((link, i) => (
          <span key={i}>
            <a href={link.href} className="zh-faq-link">{link.text}</a>
            {i < item.links.length - 1 && (i === item.links.length - 2 ? ", or " : ", ")}
          </span>
        ))}
        {item.aSuffix}
      </>
    );
  };
  return (
    <div className={`zh-faq-item${open ? " open" : ""}`}>
      <button className="zh-faq-trigger" onClick={() => setOpen(!open)}>
        <span>{item.q}</span>
        <span className="zh-faq-icon">{open ? "−" : "+"}</span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
          <div className="zh-faq-body">{renderAnswer()}</div>
      </motion.div>
    </div>
  );
};

/* ── Main Page ──────────────────────────────── */
const ZohoLandingPage = () => (
  <div className="zoho-page">
    <HomepageNav />

    {/* Hero */}
    <section className="zh-hero">
      <div className="zh-hero-grid" />
      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="align-items-center">
          <Col lg={6}>
            <Reveal variant={fadeRight}>
              <div className="zh-hero-badge">
                <span /> Trusted Zoho Partner in Nigeria
              </div>
              <h1>Run Your Entire Business on Zoho</h1>
              <p>
                The complete cloud software suite for Nigerian businesses. Manage Sales,
                Accounting, Customer Support and Marketing, all from one powerful platform.
                Pay in Naira. No dollar surprises.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="zh-cta-primary">
                  Create Free Account →
                </a>
                <a href="#pricing" className="zh-cta-secondary">See Pricing</a>
              </div>
            </Reveal>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <Reveal variant={fadeLeft} delay={0.15}>
              <div className="zh-hero-image-wrap">
                <div className="zh-hero-stat-pill top"><span>150M+</span> Users Globally</div>
                <img src={zohologo} alt="Zoho" />
                <div className="zh-hero-stat-pill bottom">🇳🇬 <span>Billed in ₦ Naira</span></div>
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Stats Bar */}
    <Container className="mb-5" style={{ marginTop: "-50px", position: "relative", zIndex: 10 }}>
      <Reveal>
        <div className="zh-stats">
          <Row className="align-items-center justify-content-around g-3">
            {STATS.map((s, i) => (
              <Col key={i} xs={6} md={3}>
                <div className="zh-stat-item">
                  <div className="zh-stat-num">{s.num}</div>
                  <div className="zh-stat-label">{s.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Reveal>
    </Container>

    {/* Products */}
    <section className="zh-section">
      <Container>
        <SectionHeader
          title="Zoho Products"
          sub="Choose the tools that power your business or get all of them with Zoho One."
        />
        <StaggerGrid>
          <Row className="g-4">
            {PRODUCTS.map((p, i) => (
              <Col key={i} md={6} lg={4}>
                <ProductCard product={p} />
              </Col>
            ))}
          </Row>
        </StaggerGrid>
        {/* Products section — after the StaggerGrid */}
<Reveal>
  <div className="text-center mt-4">
    <a href="https://store.zoho.com/ResellerCustomerSignUp.do?id=42fa030e987f359f5efd652e6d6d4e9aed081382a36fde6a336d3388cdac81ab" target="_blank" rel="noopener noreferrer" className="zh-see-all">
      See All Products →
    </a>
  </div>
</Reveal>
      </Container>
    </section>

    {/* Pricing */}
    <section className="zh-section zh-section-alt" id="pricing">
      <Container>
        <SectionHeader
          title="Zoho Pricing in Nigeria"
          sub="All prices shown are starting from the lowest monthly plan. Annual billing saves you up to 15%."
        />
        <StaggerGrid>
          <Row className="g-4 align-items-stretch">
            {PRICING.map((p, i) => (
              <Col key={i} md={6} lg={4}>
                <PricingCard plan={p} />
              </Col>
            ))}
          </Row>
        </StaggerGrid>
        {/* Pricing section — after the StaggerGrid */}
<Reveal>
  <div className="text-center mt-4">
    <a href="https://store.zoho.com/ResellerCustomerSignUp.do?id=42fa030e987f359f5efd652e6d6d4e9aed081382a36fde6a336d3388cdac81ab" target="_blank" rel="noopener noreferrer" className="zh-see-all">
      See All Pricing →
    </a>
  </div>
</Reveal>
        <Reveal>
          <p style={{ textAlign: "center", marginTop: 32, fontSize: "0.8rem", color: "var(--text-muted)" }}>
            * Prices shown are the lowest available monthly starting price. Annual plans offer savings of up to 15%.
          </p>
        </Reveal>
      </Container>
    </section>

    {/* Why Us */}
    <section className="zh-section">
      <Container>
        <SectionHeader
          title="Why Get Zoho From Us"
          sub="We're not just resellers, we're your local Zoho Growth Partner."
        />
        <StaggerGrid>
          <Row className="g-4">
            {WHY_US.map((w, i) => (
              <Col key={i} md={6} lg={4}>
                <WhyCard item={w} />
              </Col>
            ))}
          </Row>
        </StaggerGrid>
      </Container>
    </section>

    {/* FAQ */}
    <section className="zh-section zh-section-alt">
      <Container>
        <SectionHeader
          title="Frequently Asked Questions"
          sub="Everything you need to know about Zoho in Nigeria."
        />
        <Row className="justify-content-center">
          <Col lg={8}>
            {FAQS.map((item, i) => <FaqItem key={i} item={item} />)}
          </Col>
        </Row>
      </Container>
    </section>

    {/* Final CTA */}
    {/* Final CTA */}
<section className="zh-cta-footer">
  <Reveal>
    <Container className="text-center" style={{ position: "relative", zIndex: 2, paddingBottom: "50px" }}>
      <h3 className="text-white">Start Using Zoho Today</h3>
      <p>Join thousands of Nigerian businesses growing smarter with Zoho.</p>
      <a
        href={SIGNUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="zh-cta-primary"
        style={{ fontSize: "1.05rem", padding: "16px 20px" }}
      >
        Create Your Zoho Account
      </a>

      <div className="zh-cta-contact">
        <p className="zh-cta-contact-label">Need a demo or have questions?</p>
        <div className="zh-cta-contact-links">
          <a href="tel:+2349132462410" className="zh-cta-contact-item">📞 Call Us</a>
          <span className="zh-cta-contact-dot" />
          <a href="mailto:support@8thgearpartners.com" className="zh-cta-contact-item">✉️ Send an Email</a>
          <span className="zh-cta-contact-dot" />
          <a href="https://forms.gle/ehFzYU6fiDFyZ2Qb7"  target="_blank"
        rel="noopener noreferrer" className="zh-cta-contact-item">📋 Fill a Form</a>
        </div>
      </div>
    </Container>
  </Reveal>
</section>
  </div>
);

export default ZohoLandingPage;