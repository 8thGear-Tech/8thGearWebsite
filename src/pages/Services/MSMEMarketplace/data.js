import b2bImage from "../../../assets/images/tech-marketplace/b2bImage.png";
import trulance from "../../../assets/images/tech-marketplace/trulance.png";
import legalmo from "../../../assets/images/tech-marketplace/legalmo.png";
import finamo from "../../../assets/images/tech-marketplace/finamo.png";
import talenmo from "../../../assets/images/tech-marketplace/talenmo.png";
import mtn from "../../../assets/images/tech-marketplace/mtn.png";
import zoho from "../../../assets/images/tech-marketplace/zoho.png";
import legalmologo from "../../../assets/images/tech-marketplace/legalmo-logo.png";
import trulancelogo from "../../../assets/images/tech-marketplace/trulance-logo.png";
import mtnlogo from "../../../assets/images/tech-marketplace/mtn-logo.png";
import zohologo from "../../../assets/images/tech-marketplace/zoho-logo.png";
import partnerwithus from "../../../assets/images/tech-marketplace/partnerwithus.png";
import tailoredsolution from "../../../assets/images/tech-marketplace/tailoredsolution.png";
import digiplus from "../../../assets/images/tech-marketplace/digiplus.png";

export const SOLUTIONS = [
  {img:legalmo,title:"LegalMo",desc:"Legal document automation and management for seamless compliance.",link:"https://www.legalmo.biz/",btnText:"Learn More",accent:"#00a495"},
  {img:trulance,title:"Trulance",desc:"Financial tracking and reporting tools for better business insights.",link:"https://www.trulance.io/",btnText:"Learn More",accent:"#821e6b"},
  {img:finamo,title:"Finamo",desc:"Accounting and invoicing solutions tailored for growing businesses.",link:"https://www.finamo.biz/",btnText:"Learn More",accent:"#0ea5a4"},
  {img:talenmo,title:"TalenMo",desc:"HR and talent management platform for modern businesses.",link:"https://www.talenmo.biz/",btnText:"Learn More",accent:"#7c3aed"},
  {img:mtn,title:"MTN Business",desc:"Connectivity and telecom solutions for enterprise needs.",link:"https://shop.mtn.ng/category/shop?affiliate_code=8thGearHub",btnText:"Learn More",accent:"#14b8a6"},
  {img:zoho,title:"Zoho Suite",desc:"Comprehensive business software for CRM, HR, and operations.",link:"/msme-marketplace/zoho",btnText:"Learn More",accent:"#821e6b", internal:true},
  {img:digiplus,title:"DigiPlus",desc:"Partner-powered digital solutions to help businesses scale.",link:"https://docs.google.com/forms/d/1agXtoUszfyAQuIXG12bUhbrY8Etub8-TRkn_F1vtGns/edit",btnText:"Learn More",accent:"#7c3aed"}
];

export const FEATURES = [
  {
    number: "01",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: "Save Time & Resources",
    desc: "Skip the endless vendor research and demos. Our pre-vetted solutions are ready to implement immediately.",
    color: "#00a495"
  },
  {
    number: "02",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/>
      </svg>
    ),
    title: "Expert-Vetted Quality",
    desc: "Every solution undergoes rigorous evaluation to ensure reliability, security, and proven business impact.",
    color: "#821e6b"
  },
  {
    number: "03",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><line x1="16" y1="21" x2="16" y2="5"/><line x1="22" y1="7" x2="2" y2="7"/>
      </svg>
    ),
    title: "Transparent Pricing",
    desc: "No hidden fees or surprise costs. Clear pricing structures with dedicated support for implementation.",
    color: "#00a495"
  },
  {
    number: "04",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 6L13.5 15.5 8.5 10.5 1 18"/><polyline points="17,6 23,6 23,12"/>
      </svg>
    ),
    title: "Scale with Confidence",
    desc: "Solutions that grow with your business, from startup to enterprise, with ongoing support and updates.",
    color: "#821e6b"
  }
];

export const PARTNERS = [
  {logo: legalmologo, name: "LegalMo"},
  {logo: trulancelogo, name: "Trulance"},
  {logo: mtnlogo, name: "MTN"},
  {logo: zohologo, name: "Zoho"},
];

export { b2bImage, tailoredsolution, partnerwithus };