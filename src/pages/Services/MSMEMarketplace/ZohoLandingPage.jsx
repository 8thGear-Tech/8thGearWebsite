// import React, { useEffect, useRef, useState } from "react";
// import { Container, Row, Col, Button, Card } from "react-bootstrap";
// import { HomepageNav } from "../../../components/Navbar";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import zohologo from "../../../assets/images/tech-marketplace/zohos-logo.png";
// import zohoonelogo from "../../../assets/images/tech-marketplace/zohoone-logo.png";
// import crmlogo from "../../../assets/images/tech-marketplace/crm.png";
// import zohobookslogo from "../../../assets/images/tech-marketplace/zohobooks-logo.png";
// import zohosalesiqlogo from "../../../assets/images/tech-marketplace/zohosalesiq-logo.png";
// import zohodesklogo from "../../../assets/images/tech-marketplace/zohodesk-logo.png";
// import zohocampaignslogo from "../../../assets/images/tech-marketplace/zohocampaigns-logo.png";


// //    GLOBAL STYLES  (injected once via <style>)

// const GlobalStyles = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;600&display=swap');

//     :root {
//       /* ── Brand Pink (dominant) ── */
//       --pink:        #920f84;
//       --pink-dark:   #6b0a60;
//       --pink-mid:    #b8178a;
//       --pink-light:  rgba(146,15,132,0.08);
//       --pink-pale:   #fdf0fc;

//       /* ── Supporting Deep Blue (accent only, not mixed into buttons) ── */
//       --blue-deep:   #0047AB;
//       --blue-light:  #e8f0fe;
//       --blue-pale:   #f0f4ff;

//       /* ── Neutrals ── */
//       --text-dark:   #0f172a;
//       --text-mid:    #334155;
//       --text-muted:  #64748b;
//       --white:       #ffffff;
//       --border:      #e8d4e8;
//       --radius:      16px;
//       --radius-sm:   10px;

//       /* ── Shadows (pink-tinted) ── */
//       --shadow-sm:  0 2px 12px rgba(146,15,132,0.08);
//       --shadow-md:  0 8px 32px rgba(146,15,132,0.14);
//       --shadow-lg:  0 20px 60px rgba(146,15,132,0.18);
//       --transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
//     }

//     * { box-sizing: border-box; }

//     body, .zoho-page { font-family: 'Open Sans', sans-serif; color: var(--text-dark); }

//     /* ── TYPOGRAPHY matching site SCSS spec ── */
//     .zoho-page h1 { font-size: 2.5rem; font-weight: 600; color: var(--white); font-family: 'Rubik', sans-serif; }
//     .zoho-page h2 { font-size: 2rem; font-family: 'Rubik', sans-serif; }
//     .zoho-page h3 { font-size: 1.5rem; font-family: 'Rubik', sans-serif; }
//     .zoho-page h4 { font-size: 1.3rem; font-family: 'Rubik', sans-serif; }
//     .zoho-page h5 { font-size: 1rem; font-weight: 400; font-family: 'Rubik', sans-serif; }
//     .zoho-page h6 { font-size: 0.82em; font-weight: 400; font-family: 'Rubik', sans-serif; }
//     .zoho-page p  { font-size: 1rem; font-weight: 400; line-height: 1.75rem; font-family: 'Open Sans', sans-serif; }
//     .zoho-page ul li { font-weight: 400 !important; font-size: 0.98rem; font-family: 'Open Sans', sans-serif; }

//     /* ── HERO ── */
//     .zh-hero {
//       background: linear-gradient(145deg, #3a0535 0%, #6b0a60 35%, #920f84 70%, #b8178a 100%);
//       padding: 120px 0 100px;
//       position: relative;
//       overflow: hidden;
//     }
//     .zh-hero::before {
//       content: '';
//       position: absolute; inset: 0;
//       background:
//         radial-gradient(ellipse 55% 70% at 75% 50%, rgba(255,255,255,0.18) 0%, transparent 65%),
//         radial-gradient(ellipse 30% 40% at 15% 80%, rgba(130,30,107,0.25) 0%, transparent 60%);
//     }
//     .zh-hero::after {
//       content: '';
//       position: absolute;
//       bottom: -2px; left: 0; right: 0;
//       height: 80px;
//       background: white;
//       background: #fff;
//       clip-path: ellipse(55% 100% at 50% 100%);
//     }
//     .zh-hero-grid {
//       position: absolute; inset: 0;
//       background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
//                         linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
//       background-size: 60px 60px;
//     }
//     .zh-hero-badge {
//       display: inline-flex; align-items: center; gap: 8px;
//       background: rgba(255,255,255,0.15);
//       backdrop-filter: blur(8px);
//       border: 1px solid rgba(255,255,255,0.25);
//       border-radius: 100px;
//       padding: 6px 16px;
//       font-size: 13px; font-weight: 600;
//       color: white; margin-bottom: 24px;
//     }
//     .zh-hero-badge span { width:8px; height:8px; border-radius:50%; background:#4ade80; display:block; animation: pulse 2s infinite; }
//     @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
//     .zh-hero h1 { font-family: 'Rubik', sans-serif; font-size: clamp(2.2rem, 5vw, 3.6rem); font-weight: 600; line-height: 1.15; color: white; margin-bottom: 20px; }
//     .zh-hero p { font-size: 1rem; color: rgba(255,255,255,0.85); line-height: 1.75rem; margin-bottom: 36px; font-weight: 300; font-family: 'Open Sans', sans-serif; }
//     .zh-cta-primary {
//       background: white; color: var(--pink);
//       border: none; border-radius: 50px;
//       padding: 14px 32px; font-size: 1rem; font-weight: 700;
//       box-shadow: 0 8px 24px rgba(0,0,0,0.18);
//       transition: var(--transition);
//       text-decoration: none; display: inline-block;
//       font-family: 'Rubik', sans-serif;
//     }
//     .zh-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(0,0,0,0.25); color: var(--pink-dark); background: #fff8fe; }
//     .zh-cta-secondary {
//       background: transparent; color: white;
//       border: 2px solid rgba(255,255,255,0.5); border-radius: 50px;
//       padding: 13px 28px; font-size: 1rem; font-weight: 600;
//       transition: var(--transition);
//       text-decoration: none; display: inline-block; margin-left: 12px;
//       font-family: 'Rubik', sans-serif;
//     }
//     .zh-cta-secondary:hover { background: rgba(255,255,255,0.15); border-color: white; color: white; }
//     .zh-hero-image-wrap {
//       position: relative;
//       background: rgba(255,255,255,0.22);
//       backdrop-filter: blur(6px);
//       border: 1px solid rgba(255,255,255,0.4);
//       border-radius: 24px;
//       padding: 40px;
//       text-align: center;
//       box-shadow: 0 32px 80px rgba(0,0,0,0.15);
//     }
//     .zh-hero-image-wrap img { max-width: 320px; width: 100%; }
//     .zh-hero-stat-pill {
//       position: absolute;
//       background: white; border-radius: 50px;
//       padding: 10px 20px;
//       font-size: 13px; font-weight: 700;
//       color: var(--text-dark);
//       box-shadow: var(--shadow-md);
//       white-space: nowrap;
//     }
//     .zh-hero-stat-pill.top { top: -18px; right: 20px; }
//     .zh-hero-stat-pill.bottom { bottom: -18px; left: 20px; }
//     .zh-hero-stat-pill span { color: var(--pink); font-size: 15px; }

//     /* ── SECTION WRAPPER ── */
//     .zh-section { padding: 80px 0; }
//     .zh-section-alt { background: var(--pink-pale); }
//     .zh-section-title { font-family: 'Rubik', sans-serif; font-size: clamp(1.7rem, 3.5vw, 2.4rem); font-weight: 600; color: var(--text-dark); margin-bottom: 12px; text-align: center; }
//     .zh-section-sub { font-size: 1.05rem; color: var(--text-muted) !important; text-align: center; max-width: 560px; margin: 0 auto 52px; font-weight: 300; }
//     .zh-divider { width: 56px; height: 4px; border-radius: 4px; background: var(--pink); margin: 12px auto 0; }

//     /* ── PRODUCT CARDS ── */
//     .zh-product-card {
//       background: white;
//       border: 1px solid var(--border);
//       border-radius: var(--radius);
//       padding: 28px 24px;
//       height: 100%;
//       transition: var(--transition);
//       position: relative;
//       overflow: hidden;
//       display: flex; flex-direction: column;
//     }
//     .zh-product-card::before {
//       content: '';
//       position: absolute; top: 0; left: 0; right: 0;
//       height: 3px;
//       background: var(--pink);
//       transform: scaleX(0); transform-origin: left;
//       transition: transform 0.35s ease;
//     }
//     .zh-product-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: var(--pink-mid); }
//     .zh-product-card:hover::before { transform: scaleX(1); }
//     .zh-product-logo { height: 64px; object-fit: contain; margin-bottom: 20px; }
//     .zh-product-card h5 { font-family: 'Rubik', sans-serif; font-size: 1rem; font-weight: 500; margin-bottom: 10px; color: var(--text-dark); }
//     .zh-product-card p { font-size: 0.9rem; color: var(--text-muted); line-height: 1.65; flex: 1; font-weight: 300; }
//     .zh-product-btn {
//       display: inline-block; margin-top: 20px;
//       background: var(--pink);
//       color: white; border-radius: 50px;
//       padding: 10px 24px; font-size: 0.875rem; font-weight: 600;
//       text-decoration: none; transition: var(--transition);
//       box-shadow: 0 4px 14px rgba(146,15,132,0.3);
//       border: none; cursor: pointer; font-family: 'Rubik', sans-serif;
//     }
//     .zh-product-btn:hover { background: var(--pink-dark); transform: translateY(-2px); color: white; box-shadow: 0 6px 20px rgba(146,15,132,0.4); }

//     /* ── PRICING ── */
//     .zh-pricing-card {
//       background: white;
//       border: 1.5px solid var(--border);
//       border-radius: var(--radius);
//       padding: 32px 28px;
//       height: 100%;
//       transition: var(--transition);
//       position: relative;
//       overflow: hidden;
//       display: flex; flex-direction: column;
//     }
//     .zh-pricing-card.featured {
//       background: linear-gradient(160deg, var(--pink-dark) 0%, var(--pink) 60%, var(--pink-mid) 100%);
//       border-color: transparent;
//       color: white;
//     }
//     .zh-pricing-card.featured .zh-price-amount,
//     .zh-pricing-card.featured h4,
//     .zh-pricing-card.featured p,
//     .zh-pricing-card.featured li { color: rgba(255,255,255,0.9) !important; }
//     .zh-pricing-card.featured .zh-feature-item::before { color: rgba(255,255,255,0.9) !important; }
//     .zh-pricing-card:not(.featured):hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); border-color: var(--pink); }
//     .zh-pricing-badge {
//       position: absolute; top: 20px; right: 20px;
//       background: var(--pink);
//       color: white; font-size: 11px; font-weight: 700;
//       padding: 4px 12px; border-radius: 100px;
//       text-transform: uppercase; letter-spacing: .5px;
//     }
//     .zh-price-amount { font-family: 'Rubik', sans-serif; font-size: 2rem; font-weight: 700; color: var(--pink); line-height: 1; }
//     .zh-price-period { font-size: 0.8rem; color: var(--text-muted); font-weight: 400; margin-left: 2px; font-family: 'Open Sans', sans-serif; }
//     .zh-price-starting { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600; color: var(--pink-mid); margin-bottom: 4px; font-family: 'Rubik', sans-serif; display: block; }
//     .zh-price-yearly {
//       display: inline-flex; align-items: center; gap: 6px;
//       background: rgba(146,15,132,0.07);
//       border: 1px solid rgba(146,15,132,0.2);
//       border-radius: 50px;
//       padding: 4px 12px;
//       font-size: 0.78rem; font-weight: 600;
//       color: var(--pink); margin-top: 8px; display: inline-flex;
//       font-family: 'Open Sans', sans-serif;
//     }
//     .save-badge {
//       background: var(--pink-dark); color: white;
//       font-size: 10px; font-weight: 700;
//       padding: 2px 7px; border-radius: 50px;
//     }
//     .zh-pricing-card.featured .zh-price-yearly { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.35); color: rgba(255,255,255,0.95); }
//     .zh-pricing-card.featured .zh-price-starting { color: rgba(255,255,255,0.6); }
//     .zh-pricing-card h4 { font-family: 'Rubik', sans-serif; font-size: 1.3rem; font-weight: 600; margin-bottom: 6px; }
//     .zh-pricing-card p { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 20px; font-weight: 300; }
//     .zh-feature-list { list-style: none; padding: 0; margin: 0 0 24px; flex: 1; }
//     .zh-feature-item { font-size: 0.875rem; padding: 7px 0; display: flex; align-items: flex-start; gap: 8px; border-bottom: 1px solid rgba(0,0,0,0.05); font-weight: 300; font-family: 'Open Sans', sans-serif; }
//     .zh-pricing-card.featured .zh-feature-item { border-bottom-color: rgba(255,255,255,0.1); }
//     .zh-feature-item::before { content: '✓'; color: var(--pink); font-weight: 700; flex-shrink: 0; margin-top: 1px; }
//     .zh-pricing-btn {
//       display: block; text-align: center;
//       background: var(--pink);
//       color: white; border-radius: 50px;
//       padding: 12px 24px; font-size: 0.9rem; font-weight: 600;
//       text-decoration: none; transition: var(--transition);
//       box-shadow: 0 4px 14px rgba(146,15,132,0.3);
//       font-family: 'Rubik', sans-serif;
//     }
//     .zh-pricing-card.featured .zh-pricing-btn { background: white; color: var(--pink); box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
//     .zh-pricing-btn:hover { background: var(--pink-dark); transform: translateY(-1px); color: white; box-shadow: 0 6px 20px rgba(146,15,132,0.4); }
//     .zh-pricing-card.featured .zh-pricing-btn:hover { color: var(--pink-dark); background: #fff8fe; }
//     .zh-pricing-logo { height: 44px; object-fit: contain; margin-bottom: 18px; }

//     /* ── WHY US ── */
//     .zh-why-card {
//       background: white;
//       border-radius: var(--radius);
//       padding: 32px 28px;
//       text-align: center;
//       border: 1px solid var(--border);
//       transition: var(--transition);
//       height: 100%;
//     }
//     .zh-why-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); border-color: var(--pink); }
//     .zh-why-icon {
//       width: 64px; height: 64px; border-radius: 18px;
//       display: flex; align-items: center; justify-content: center;
//       margin: 0 auto 20px;
//       font-size: 1.8rem;
//     }
//     .zh-why-card h5 { font-family: 'Rubik', sans-serif; font-size: 1rem; font-weight: 500; margin-bottom: 10px; }
//     .zh-why-card p { font-size: 0.875rem; color: var(--text-muted); line-height: 1.7; margin: 0; font-weight: 500; }

//     /* ── FAQ ── */
//     .zh-faq-item {
//       background: white;
//       border: 1px solid var(--border);
//       border-radius: var(--radius-sm);
//       margin-bottom: 12px;
//       overflow: hidden;
//       transition: border-color 0.2s;
//     }
//     .zh-faq-item.open { border-color: var(--pink); }
//     .zh-faq-item:hover { border-color: var(--pink); box-shadow: var(--shadow-sm); }
//     .zh-faq-trigger {
//       width: 100%; text-align: left;
//       background: none; border: none;
//       padding: 20px 24px;
//       display: flex; align-items: center; justify-content: space-between; gap: 12px;
//       cursor: pointer; font-family: 'Plus Jakarta Sans', sans-serif;
//       font-size: 1rem; font-weight: 600; color: var(--text-dark);
//     }
//     .zh-faq-trigger:focus { outline: none; }
//     .zh-faq-icon {
//       width: 28px; height: 28px; border-radius: 50%;
//       background: var(--pink-light); color: var(--pink);
//       display: flex; align-items: center; justify-content: center;
//       font-size: 1.1rem; font-weight: 700; flex-shrink: 0;
//       transition: var(--transition);
//     }
//     .zh-faq-item.open .zh-faq-icon { background: var(--pink); color: white; }
//     .zh-faq-body { padding: 0 24px 20px; font-size: 0.9rem; color: var(--text-muted); line-height: 1.75; }

//     /* ── CTA FOOTER ── */
//     .zh-cta-footer {
//       background: linear-gradient(145deg, #3a0535 0%, var(--pink-dark) 40%, var(--pink) 80%, var(--pink-mid) 100%);
//       padding: 100px 0 0;
//       position: relative; overflow: hidden;
//       margin-bottom: 0;
//     }
//     .zh-cta-footer::before {
//       content: '';
//       position: absolute; inset: 0;
//       background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
//     }
//     .zh-cta-footer h2 { font-family: 'Rubik', sans-serif; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 600; color: white; margin-bottom: 16px; }
//     .zh-cta-footer p { font-size: 1.05rem; color: rgba(255,255,255,0.8); margin-bottom: 40px; }

//     /* ── STATS BAR ── */
//     .zh-stats { background: white; box-shadow: 0 4px 24px rgba(0,0,0,0.07); border-radius: var(--radius); padding: 32px 40px; margin-top: -50px; position: relative; z-index: 10; }
//     .zh-stat-item { text-align: center; }
//     .zh-stat-num { font-family: 'Rubik', sans-serif; font-size: 2rem; font-weight: 700; color: var(--pink); }
//     .zh-stat-label { font-size: 0.85rem; color: var(--text-muted); margin-top: 4px; }
//     .zh-stat-divider { width: 1px; background: var(--border); align-self: stretch; }

//     @media (max-width: 768px) {
//       .zh-hero { padding: 80px 0 120px; }
//       .zh-hero-image-wrap { margin-top: 48px; }
//       .zh-cta-secondary { margin-left: 0; margin-top: 12px; display: block; text-align: center; }
//       .zh-stats { padding: 24px 20px; }
//       .zh-stat-divider { display: none; }
//     }
//   `}</style>
// );


// //    DATA

// const SIGNUP = "https://store.zoho.com/ResellerCustomerSignUp.do?id=42fa030e987f359f5efd652e6d6d4e9aed081382a36fde6a336d3388cdac81ab";

// const products = [
//   {
//     logo: zohoonelogo, name: "Zoho One", link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=f8988e720e096d7c4f0996652473d34e",
//     desc: "The all-in-one operating system for your business. 60+ integrated apps covering CRM, Books, Desk, HR, Projects, Campaigns and more.",
//   },
//   {
//     logo: crmlogo, name: "Zoho CRM", link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=ae47982fb7c4b5113a610e0121d21857",
//     desc: "Manage leads, automate your sales pipeline, track customer interactions, and close deals faster with AI-powered insights.",
//   },
//   {
//     logo: zohobookslogo, name: "Zoho Books", link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=1957eae31aff62948c7fe7f162b916b5",
//     desc: "Complete accounting software for invoicing, expenses, bank reconciliation, tax compliance, and detailed financial reports.",
//   },
//   {
//     logo: zohosalesiqlogo, name: "Zoho SalesIQ", link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=d0fe091c79341ca579bdc34f362c4c35",
//     desc: "Live chat and visitor intelligence tool that helps you engage website visitors in real time and convert them into customers.",
//   },
//   {
//     logo: zohodesklogo, name: "Zoho Desk", link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=9b1685071c85ac29a55a03ec2b7ab2e2",
//     desc: "Context-aware helpdesk software to manage support tickets, automate workflows, and boost customer satisfaction scores.",
//   },
//   {
//     logo: zohocampaignslogo, name: "Zoho Campaigns", link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=b84f92df5adc867e3a5a0c4aa473792d",
//     desc: "Email marketing platform to design campaigns, build automation workflows, segment audiences, and track engagement analytics.",
//   },
// ];

// const pricingPlans = [
//   {
//     logo: zohoonelogo,
//     name: "Zoho One",
//     price: "₦69,300",
//     yearlyPrice: "₦80,850",
//     period: "/ user / month",
//     tagline: "Best value all-in-one suite",
//     featured: true,
//     badge: "Most Popular",
//     link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=f8988e720e096d7c4f0996652473d34e",
//     features: [
//       "60+ integrated business apps",
//       "CRM, Books, Desk, Campaigns & more",
//       "Single sign-on across all apps",
//       "Advanced analytics & reporting",
//       "AI-powered Zia assistant",
//       "Unlimited users on all apps",
//       "Billed in Nigerian Naira",
//     ],
//   },
//   {
//     logo: crmlogo,
//     name: "Zoho CRM",
//     price: "₦15,400",
//     yearlyPrice: "₦10,780",
//     period: "/ user / month",
//     tagline: "Grow your sales pipeline",
//     featured: false,
//     link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=ae47982fb7c4b5113a610e0121d21857",
//     features: [
//       "Lead & contact management",
//       "Sales pipeline automation",
//       "Email & phone integration",
//       "Real-time analytics & dashboards",
//       "Workflow automation (Blueprints)",
//       "AI sales predictions (Zia)",
//     ],
//   },
//   {
//     logo: zohobookslogo,
//     name: "Zoho Books",
//     price: "₦4,320",
//     yearlyPrice: "₦3,600",
//     period: "/ user / month",
//     tagline: "Smart accounting for MSMEs",
//     featured: false,
//     link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=1957eae31aff62948c7fe7f162b916b5",
//     features: [
//       "Professional invoicing & billing",
//       "Expense tracking & receipts",
//       "Bank feeds & reconciliation",
//       "Workflow automation",
//       "Unified collaboration with your team",
//       "Client portal & payment links",
//     ],
//   },
//   {
//     logo: zohosalesiqlogo,
//     name: "Zoho SalesIQ",
//     price: "₦7,700",
//     yearlyPrice: "₦5,390",
//     period: "/ operator / month",
//     tagline: "Convert visitors into customers",
//     featured: false,
//     link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=d0fe091c79341ca579bdc34f362c4c35",
//     features: [
//       "Live chat & visitor tracking",
//       "AI-powered chatbot builder",
//       "Lead scoring & hot prospects",
//       "CRM and Social Media integration",
//       "Contact management",
//       "Real-time chat analytics",
//     ],
//   },
//   {
//     logo: zohodesklogo,
//     name: "Zoho Desk",
//     price: "₦6,930",
//     yearlyPrice: "₦5,390",
//     period: "/ user / month",
//     tagline: "World-class customer support",
//     featured: false,
//     link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=9b1685071c85ac29a55a03ec2b7ab2e2",
//     features: [
//       "Omni-channel ticket management",
//       "SLA management & escalations",
//       "AI-powered ticket routing",
//       "Self-service knowledge base",
//       "Reports & CSAT tracking",
//       "Zoho CRM & Books integration",
//     ],
//   },
//   {
//     logo: zohocampaignslogo,
//     name: "Zoho Campaigns",
//     price: "₦3,080",
//     yearlyPrice: "₦2,310",
//     period: "/ month",
//     tagline: "Email marketing that converts",
//     featured: false,
//     link: "https://store.zoho.com/ResellerCustomerSignUp.do?id=b84f92df5adc867e3a5a0c4aa473792d",
//     features: [
//       "Unlimited emails",
//       "SMS marketing",
//       "Access to all ready-to-use email templates",
//       "Dedicated IP",
//       "10 users",
//       "Basic drag-and-drop workflows",
//       "Basic segmentation"
//     ],
//   },
// ];

// const whyUs = [
//   { icon: "🏆", color: "rgba(146,15,132,0.07)", label: "Official Zoho Partner", desc: "We are a certified and authorized Zoho reseller in Nigeria. You are in safe hands." },
//   { icon: "🛠️", color: "rgba(146,15,132,0.07)", label: "Free Setup & Onboarding", desc: "Our team configures Zoho for your specific business workflows at zero extra cost." },
//   { icon: "🇳🇬", color: "rgba(146,15,132,0.07)", label: "Local Nigeria Support", desc: "Get fast, knowledgeable support from a team that understands the Nigerian business environment." },
//   { icon: "💳", color: "rgba(146,15,132,0.07)", label: "Pay in Naira", desc: "No dollar billing surprises. All pricing is fixed in Naira, predictable and stable." },
//   { icon: "📈", color: "rgba(146,15,132,0.07)", label: "Growth-Focused Approach", desc: "We don't just sell software, we help you scale your business with the right Zoho tools." },
//   { icon: "🔒", color: "rgba(146,15,132,0.07)", label: "Data Privacy & Security", desc: "GDPR & NDPR compliant. Your business data is protected to the highest standards." },
// ];

// const faqs = [
//   { q: "I have a need for a custom application that's specific to my business. Can Zoho One help me in any way?", a: "Zoho One includes Zoho Creator, an application development platform that lets you create custom applications to meet your custom business needs. Over the last 10 years, 1.5 million custom business applications have been created by various users on this platform, including web and mobile apps. If you're not comfortable building your own app, we have developer partners who can help you." },
//   { q: "Who will be the owner of the leads signed up for an application?", a: "The leads generated from an application will be owned by the developer who built it." },
//   { q: "What is the difference between Zoho One and Zoho CRM?", a: "Zoho CRM is a dedicated sales and customer management tool. Zoho One is the full business suite. It includes Zoho CRM plus 45+ other apps (accounting, HR, marketing, helpdesk, etc.) under one subscription." },
//   { q: "Do I get support after signing up?", a: "Yes. As an authorized Zoho partner, we provide free onboarding, configuration, and ongoing support. We are here to help you with any questions or issues you may have." },
//   { q: "Is there a free trial available?", a: "Yes! Most Zoho products offer a 15-day free trial with no credit card required. You can test the full feature set before committing to a paid plan." },
//   { q: "Will I be able to retrieve deleted transactions in Zoho Books?", a: "No, once you delete a transaction, you cannot retrieve it in Zoho Books. However, you can check the Activity Log and Audit Trail report to find out the user who deleted it. " },
// ];


// //    FAQ ACCORDION

// const FaqItem = ({ item, index }) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className={`zh-faq-item${open ? " open" : ""}`}>
//       <button className="zh-faq-trigger" onClick={() => setOpen(!open)}>
//         <span>{item.q}</span>
//         <span className="zh-faq-icon">+</span>
//       </button>
//       {open && <div className="zh-faq-body">{item.a}</div>}
//     </div>
//   );
// };


// //    MAIN COMPONENT

// const ZohoLandingPage = () => {
//   useEffect(() => {
//     AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
//   }, []);

//   return (
//     <div className="zoho-page">
//       <GlobalStyles />
//       <HomepageNav />

//       {/* ── HERO ── */}
//       <section className="zh-hero">
//         <div className="zh-hero-grid" />
//         <Container style={{ position: "relative", zIndex: 2 }}>
//           <Row className="align-items-center">
//             <Col lg={6} data-aos="fade-right">
//               <div className="zh-hero-badge">
//                 <span /> Trusted Zoho Partner in Nigeria
//               </div>
//               <h1>Run Your Entire Business on Zoho</h1>
//               <p>
//                 The complete cloud software suite for Nigerian businesses. Manage Sales,
//                 Accounting, Customer Support and Marketing. All from one powerful platform.
//                 Pay in Naira. No dollar surprises.
//               </p>
//               <div className="d-flex flex-wrap gap-3">
//                 <a href={SIGNUP} target="_blank" rel="noopener noreferrer" className="zh-cta-primary">Create Free Account →</a>
//                 <a href="#pricing" className="zh-cta-secondary">See Pricing</a>
//               </div>
//             </Col>
//             <Col lg={6} data-aos="fade-left" className="mt-5 mt-lg-0">
//               <div className="zh-hero-image-wrap">
//                 <div className="zh-hero-stat-pill top"><span>150M+</span> Users Globally</div>
//                 <img src={zohologo} alt="Zoho" />
//                 <div className="zh-hero-stat-pill bottom">🇳🇬 <span>Billed in ₦ Naira</span></div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* ── STATS BAR ── */}
//       <Container className="mb-5" style={{ marginTop: "-50px", position: "relative", zIndex: 10 }}>
//         <div className="zh-stats" data-aos="fade-up">
//           <Row className="align-items-center justify-content-around g-3">
//             {[
//               { num: "60+", label: "Products" },
//               { num: "150M+", label: "Users Worldwide" },
//               { num: "30+", label: "Years in Business" },
//               { num: "₦ NGN", label: "Local Naira Pricing" },
//             ].map((s, i) => (
//               <Col key={i} xs={6} md={3}>
//                 <div className="zh-stat-item">
//                   <div className="zh-stat-num">{s.num}</div>
//                   <div className="zh-stat-label">{s.label}</div>
//                 </div>
//               </Col>
//             ))}
//           </Row>
//         </div>
//       </Container>

//       {/* ── PRODUCTS ── */}
//       <section className="zh-section">
//         <Container>
//           <div data-aos="fade-up">
//             <h2 className="zh-section-title">Zoho Products</h2>
//             <div className="zh-divider" />
//             <p className="zh-section-sub">Choose the tools that power your business or get all of them with Zoho One.</p>
//           </div>
//           <Row className="g-4">
//             {products.map((p, i) => (
//               <Col md={6} lg={4} key={i} data-aos="fade-up" data-aos-delay={i * 80}>
//                 <div className="zh-product-card">
//                   <img src={p.logo} alt={p.name} className="zh-product-logo" />
//                   <h5>{p.name}</h5>
//                   <p>{p.desc}</p>
//                   <div>
//                     <a href={p.link} target="_blank" rel="noreferrer" className="zh-product-btn">
//                       Get {p.name} →
//                     </a>
//                   </div>
//                 </div>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>

//       {/* ── PRICING ── */}
//       <section className="zh-section zh-section-alt" id="pricing">
//         <Container>
//           <div data-aos="fade-up">
//             <h2 className="zh-section-title">Zoho Pricing in Nigeria </h2>
//             <div className="zh-divider" />
//             <p className="zh-section-sub" style={{color:"var(--text-muted)"}}>All prices shown are <strong>starting from the lowest monthly plan</strong>. Annual billing saves you up to 15%.</p>
//           </div>
//           <Row className="g-4 align-items-stretch">
//             {pricingPlans.map((plan, i) => (
//               <Col md={6} lg={4} key={i} data-aos="fade-up" data-aos-delay={i * 70}>
//                 <div className={`zh-pricing-card${plan.featured ? " featured" : ""}`}>
//                   {plan.badge && <span className="zh-pricing-badge">{plan.badge}</span>}
//                   <img src={plan.logo} alt={plan.name} className="zh-pricing-logo" />
//                   <h4>{plan.name}</h4>
//                   <p>{plan.tagline}</p>
//                   <div style={{ marginBottom: 20 }}>
//                     <span className="zh-price-starting">Starting from</span>
//                     <div>
//                       <span className="zh-price-amount">{plan.price}</span>
//                       <span className="zh-price-period">{plan.period}</span>
//                     </div>
//                     <div className="zh-price-yearly">
//                        Annual: {plan.yearlyPrice}{plan.period} 
//                     </div>
//                   </div>
//                   <ul className="zh-feature-list">
//                     {plan.features.map((f, j) => (
//                       <li key={j} className="zh-feature-item">{f}</li>
//                     ))}
//                   </ul>
//                   <a href={plan.link} target="_blank" rel="noreferrer" className="zh-pricing-btn">
//                     Get {plan.name}
//                   </a>
//                 </div>
//               </Col>
//             ))}
//           </Row>
//           <p data-aos="fade-up" style={{ textAlign: "center", marginTop: 32, fontSize: "0.8rem", color: "var(--text-muted)" }}>
//             * Prices shown are the lowest available monthly starting price for each product. Annual plans offer savings of up to 15%. 
//           </p>
//         </Container>
//       </section>

//       {/* ── WHY US ── */}
//       <section className="zh-section">
//         <Container>
//           <div data-aos="fade-up">
//             <h2 className="zh-section-title">Why Get Zoho From Us</h2>
//             <div className="zh-divider" />
//             <p className="zh-section-sub">We're not just resellers, we're your local Zoho growth partner.</p>
//           </div>
//           <Row className="g-4">
//             {whyUs.map((w, i) => (
//               <Col md={6} lg={4} key={i} data-aos="fade-up" data-aos-delay={i * 70}>
//                 <div className="zh-why-card">
//                   <div className="zh-why-icon" style={{ background: w.color }}>{w.icon}</div>
//                   <h5>{w.label}</h5>
//                   <p>{w.desc}</p>
//                 </div>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>

//       {/* ── FAQ ── */}
//       <section className="zh-section zh-section-alt">
//         <Container>
//           <div data-aos="fade-up">
//             <h2 className="zh-section-title">Frequently Asked Questions</h2>
//             <div className="zh-divider" />
//             <p className="zh-section-sub">Everything you need to know about Zoho in Nigeria.</p>
//           </div>
//           <Row className="justify-content-center">
//             <Col lg={8}>
//               {faqs.map((item, i) => <FaqItem key={i} item={item} index={i} />)}
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* ── FINAL CTA ── */}
//       <section className="zh-cta-footer">
//         <Container className="text-center" style={{ position: "relative", zIndex: 2, paddingBottom: "100px" }} data-aos="fade-up">
//           <h2>Start Using Zoho Today</h2>
//           <p>Join thousands of Nigerian businesses growing smarter with Zoho.</p>
//           <a href={SIGNUP} target="_blank" rel="noopener noreferrer" className="zh-cta-primary" style={{ fontSize: "1.05rem", padding: "16px 20px" }}>
//             Create Your Zoho Account →
//           </a>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default ZohoLandingPage;
