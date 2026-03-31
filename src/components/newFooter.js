import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Accordion, Container } from "react-bootstrap";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import "../sassfiles/components/_footer.scss";
import { FaXTwitter } from "react-icons/fa6";
import "./newFooter.css";

export const NewFooter = () => (
  <footer className="ft">
    <Container>

      <div className="ft-grid ft-desktop">

        {/* Col 1 – Logo + tagline + socials */}
        <div>
          <img src={logo} alt="8thGear" style={{ width: "125px" }} />
          <p className="ft-tagline">
            Your trusted partner in venture building, guiding startups and businesses towards sustainable growth and success, developing a thriving ecosystem for enterpreneurs
          </p>
          <div className="ft-socials">
            <a href="https://www.facebook.com/8thgearhub" className="ft-social" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook" /></a>
            <a href="https://twitter.com/8thGearHub?s=20&t=Ttt07nAvnFJbTFVGup2Ugg" className="ft-social" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href="https://www.linkedin.com/company/8thgearhub/" className="ft-social" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin" /></a>
            <a href="https://www.instagram.com/8thgearhub/" className="ft-social" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram" /></a>
          </div>
        </div>

        {/* Col 2 – Offices + contact */}
        <div>
          <p className="ft-col-head">Our Offices</p>
          <div className="ft-addr-card">
            <div className="d-flex align-items-start gap-2">
              <FiMapPin size={11} style={{ color: "#008261", marginTop: "2px", flexShrink: 0 }} />
              <div>
                <p className="ft-addr-name">8thGear HQ</p>
                <p className="ft-addr-text">41 CMD Road, Secretariat/Magodo, Lagos State, Nigeria</p>
              </div>
            </div>
          </div>
          <div className="ft-addr-card">
            <div className="d-flex align-items-start gap-2">
              <FiMapPin size={11} style={{ color: "#008261", marginTop: "2px", flexShrink: 0 }} />
              <div>
                <p className="ft-addr-name">8thGear Ondo Liaison Office</p>
                <p className="ft-addr-text">Technology Park and Incubation Centre (TechPIC), Federal University of Technology, Akure, Ondo State, Nigeria</p>
              </div>
            </div>
          </div>
          <hr className="ft-inner-divider" />
          <p className="ft-col-head">Get in Touch</p>
          <div className="ft-contact-item"><FiPhone size={12} /><a href="tel:2349132462410">+234 913 246 2410</a></div>
          <div className="ft-contact-item"><FiMail size={12} /><a href="mailto:info@8thgearpartners.com">info@8thgearpartners.com</a></div>
        </div>

        {/* Col 3 – Hub Services + Explore */}
        <div>
          <p className="ft-col-head">Hub Services</p>
          <Link to="/msme-marketplace" className="ft-nav-link">MSME Marketplace</Link>
          <Link to="/growth-advisory" className="ft-nav-link">Growth Advisory</Link>
          <Link to="/coworking" className="ft-nav-link">Co-working</Link>
          <hr className="ft-inner-divider" />
          <p className="ft-col-head">Explore</p>
          <Link to="/about" className="ft-nav-link">About Us</Link>
          <Link to="/initiatives" className="ft-nav-link">Initiatives</Link>
          <Link to="/resources" className="ft-nav-link">Resources &amp; Materials</Link>
          <Link to="/insights" className="ft-nav-link">Insights &amp; Publications</Link>
          <Link to="/events" className="ft-nav-link">Events</Link>
        </div>

        {/* Col 4 – Venture Studio + Legal */}
        <div>
          <p className="ft-col-head">Venture Studio</p>
          <Link to="/portfolio" className="ft-nav-link">Portfolio</Link>
          <Link to="/hub-membership" className="ft-nav-link">Hub Membership</Link>
          <a href="https://chat.whatsapp.com/JAKxj7Jv07W5r6Q0JQSbXK" target="_blank" rel="noopener noreferrer" className="ft-nav-link">Community</a>
          <hr className="ft-inner-divider" />
          <p className="ft-col-head">Legal</p>
          <Link to="/privacy-policy" className="ft-nav-link">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="ft-nav-link">Terms &amp; Conditions</Link>
          <Link to="/refund-policy" className="ft-nav-link">Refund Policy</Link>
          <Link to="/genderpolicy" className="ft-nav-link">Gender Policy</Link>
        </div>

      </div>

      {/* ── MOBILE ── */}
      <div className="ft-mob-wrap ft-mob">
        <img src={logo} alt="8thGear" style={{ width: "120px", marginBottom: "0.75rem" }} />
        <p className="ft-tagline" style={{ marginBottom: "1rem" }}>
         Your trusted partner in venture building, guiding startups and businesses towards sustainable growth and success, developing a thriving ecosystem for enterpreneurs
        </p>
        <div className="ft-addr-card mb-2">
          <div className="d-flex align-items-start gap-2">
            <FiMapPin size={11} style={{ color: "#008261", marginTop: "2px", flexShrink: 0 }} />
            <div><p className="ft-addr-name">8thGear HQ</p><p className="ft-addr-text">41 CMD Road, Secretariat/Magodo, Lagos</p></div>
          </div>
        </div>
        <div className="ft-addr-card mb-2">
          <div className="d-flex align-items-start gap-2">
            <FiMapPin size={11} style={{ color: "#008261", marginTop: "2px", flexShrink: 0 }} />
            <div><p className="ft-addr-name">8thGear Ondo Liaison Office</p><p className="ft-addr-text">Technology Park and Incubation Centre (TechPIC), Federal University of Technology, Akure.</p></div>
          </div>
        </div>
        <div className="ft-contact-item mt-2"><FiPhone size={12} /><a href="tel:+2349132462410">+234 913 246 2410</a></div>
        <div className="ft-contact-item" style={{ marginBottom: "1rem" }}><FiMail size={12} /><a href="mailto:info@8thgearpartners.com">info@8thgearpartners.com</a></div>
        <div className="ft-socials mb-4">
          <a href="https://www.facebook.com/8thgearhub" className="ft-social" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook" /></a>
          <a href="https://twitter.com/8thGearHub?s=20&t=Ttt07nAvnFJbTFVGup2Ugg" className="ft-social" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          <a href="https://www.linkedin.com/company/8thgearhub/" className="ft-social" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin" /></a>
          <a href="https://www.instagram.com/8thgearhub/" className="ft-social" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram" /></a>
        </div>
        <Accordion>
          {[
            { key: "0", label: "Hub Services", links: [{ to: "/msme-marketplace", l: "MSME Marketplace" }, { to: "/growth-advisory", l: "Growth Advisory" }, { to: "/coworking", l: "Co-working" }] },
            { key: "1", label: "Explore", links: [{ to: "/about", l: "About Us" }, { to: "/initiatives", l: "Initiatives" }, { to: "/resources", l: "Resources & Materials" }, { to: "/insights", l: "Insights & Publications" }, { to: "/events", l: "Events" }] },
            { key: "2", label: "Venture Studio", links: [{ to: "/portfolio", l: "Portfolio" }, { to: "/hub-membership", l: "Hub Membership" }] },
            { key: "3", label: "Legal", links: [{ to: "/privacy-policy", l: "Privacy Policy" }, { to: "/terms-and-conditions", l: "Terms & Conditions" }, { to: "/refund-policy", l: "Refund Policy" }, { to: "/genderpolicy", l: "Gender Policy" }] },
          ].map(({ key, label, links }) => (
            <Accordion.Item key={key} eventKey={key}>
              <Accordion.Header>{label}</Accordion.Header>
              <Accordion.Body>
                {links.map(({ to, l }) => <Link key={to} to={to} className="ft-nav-link">{l}</Link>)}
                {key === "2" && <a href="https://chat.whatsapp.com/JAKxj7Jv07W5r6Q0JQSbXK" target="_blank" rel="noopener noreferrer" className="ft-nav-link">Community</a>}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      {/* ── COPYRIGHT BAR ── */}
      <div className="ft-copy-bar">
        <p className="ft-copy">© 2026 8thGear Partners Ltd. All rights reserved.</p>
      </div>

    </Container>
  </footer>
);