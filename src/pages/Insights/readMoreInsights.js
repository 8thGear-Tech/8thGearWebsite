import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
// import blogcardimg from "../../assets/images/insights/blogcardimg.png";
// import fullblogimg from "../../assets/images/insights/fullblogimg.png";
import openingquote from "../../assets/images/insights/openingquote.png";
import closingquote from "../../assets/images/insights/closingquote.png";
import "../Insights/insights.css";
import { HomepageNav } from "../../components/Navbar";
import blogData from "../../data/blogPosts.json";

export const ReadMoreInsights = () => {
  // Get the dynamic post id from the URL
  const { id } = useParams();

  // Use the imported JSON data to find the matching blog post.
  // We use parseInt to compare the string id from the URL to the numeric id from JSON.
  const post = blogData.blogPosts.find((post) => post.id === parseInt(id, 10));

  // If no matching blog post is found, show an error message.
  if (!post) {
    return <div>Post Not Found</div>;
  }

  // Destructure the values for the quote section from the post
  const { quoteImage, quoteText } = post.quoteSection;
  const {
    introductionTitle,
    introText1,
    introText2,
    introText3,
    introText4,
    fullblogimg,
  } = post.fullcontent;
  // const { title, subtitle, description, bullets, source } = post.services;

  return (
    <>
      <HomepageNav />
      <Header post={post} />
      <QuoteSection quoteText={quoteText} quoteImage={quoteImage} />
      <FullBlogPost
        introductionTitle={introductionTitle}
        introText1={introText1}
        introText2={introText2}
        introText3={introText3}
        introText4={introText4}
        fullblogimg={fullblogimg}
        services={post.fullcontent.services}
        competitiveEdge={post.fullcontent.competitiveEdge}
        callToAction={post.fullcontent.callToAction}
        engagement={post.fullcontent.engagement}
        sources={post.fullcontent.sources}
      />
      {/* <FullBlogPost content={post.fullcontent} /> */}
      <AuthorSection />
    </>
  );
};

const Header = ({ post }) => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 text-start">
          <p className="text-uppercase mb-2" style={{ color: "#A83EAA" }}>
            <b>{post.category}</b>
          </p>
          <h2 className="fw-bold mb-3">{post.title}</h2>
          <p style={{ color: "#A83EAA" }}>
            {post.date} • {post.readTime}
          </p>
          <div className="col-md-4 d-flex align-items-center mt-3 mt-md-0">
            <FaFacebook className="fs-4 mx-2" style={{ color: "#A83EAA" }} />
            <FaInstagram className="fs-4 mx-2" style={{ color: "#A83EAA" }} />
            <FaTwitter className="fs-4 mx-2" style={{ color: "#A83EAA" }} />
            <FaLinkedin className="fs-4 mx-2" style={{ color: "#A83EAA" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const QuoteSection = ({ quoteText, quoteImage }) => {
  return (
    <div className="container-fluid px-0">
      <div className="row g-0">
        <div className="col-12 col-md-6">
          <img
            src={quoteImage}
            alt="Discussion"
            className="img-fluid w-100"
            style={{ objectFit: "cover", height: "300px" }}
          />
        </div>

        <div
          className="col-12 col-md-6 bg-purple text-white d-flex align-items-center justify-content-center position-relative p-5"
          style={{ overflow: "hidden" }}
        >
          <img
            src={openingquote}
            alt="Opening Quote"
            className="position-absolute d-none d-lg-block"
            style={{
              top: "50px",
              left: "65px",
              width: "50px",
            }}
          />
          <img
            src={openingquote}
            alt="Opening Quote Small"
            className="position-absolute d-block d-md-none"
            style={{
              top: "20px",
              left: "20px",
              width: "30px",
            }}
          />

          <p
            className="px-3 position-relative text-md-left d-none d-lg-block d-md-block"
            style={{
              lineHeight: "1.8",
              maxWidth: "85%",
              zIndex: 1,
              fontSize: "1.2rem",
            }}
          >
            {quoteText}
          </p>
          <p
            className="px-3 position-relative text-md-left d-block d-md-none d-lg-none"
            style={{
              lineHeight: "1.8",
              zIndex: 1,
              fontSize: "1.2rem",
            }}
          >
            {quoteText}
          </p>

          <img
            src={closingquote}
            alt="Closing Quote"
            className="position-absolute d-none d-lg-block"
            style={{
              bottom: "10px",
              right: "90px",
              width: "200px",
              zIndex: 0,
            }}
          />
          <img
            src={closingquote}
            alt="Closing Quote Small"
            className="position-absolute d-block d-md-none"
            style={{
              bottom: "10px",
              right: "10px",
              width: "80px",
              zIndex: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
};

// Helper function for rendering action items
const renderAction = (action, idx) => {
  // If action is a string, render it with normal font weight.
  if (typeof action === "string") {
    return (
      <li key={idx}>
        <span style={{ fontWeight: "normal" }}>{action}</span>
      </li>
    );
  }

  // If action is an object that contains a "text" array, map over the fragments.
  if (typeof action === "object" && Array.isArray(action.text)) {
    return (
      <li key={idx}>
        {action.text.map((fragment, i) => {
          if (typeof fragment === "string") {
            return (
              <span key={i} style={{ fontWeight: "normal" }}>
                {fragment}
              </span>
            );
          }
          if (
            typeof fragment === "object" &&
            fragment.linkText &&
            fragment.url
          ) {
            return (
              <a
                key={i}
                href={fragment.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: "normal" }}
              >
                {fragment.linkText}
              </a>
            );
          }
          return null;
        })}
      </li>
    );
  }

  return null;
};

const FullBlogPost = ({
  introductionTitle,
  introText1,
  introText2,
  introText3,
  introText4,
  fullblogimg,
  services,
  competitiveEdge,
  callToAction,
  engagement,
  sources,
}) => {
  return (
    <div className="container py-4">
      {/* Introduction Section */}
      {/* <h3 className="mb-4">{fullcontent.introductionTitle}</h3> */}
      <div className="row align-items-center my-3">
        <div>
          <h4>{introductionTitle}</h4>
          <p>{introText1}</p>
          <p>{introText2}</p>
          <p>{introText3}</p>
          <p>{introText4}</p>
        </div>
      </div>

      {/* Main Image */}
      {fullblogimg && (
        <div>
          <img
            src={fullblogimg}
            alt="Introduction Image"
            className="img-fluid"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
      )}

      {/* Dynamic Services or Sections */}
      <div>
        <p className="mt-5">
          Here are the key strategies for effectively navigating the growth
          phase of your business:
        </p>
        {services.map((service, index) => (
          <div key={index}>
            <h4>{service.title}</h4>
            {service.subtitle && <h5>{service.subtitle}</h5>}
            <p>{service.description}</p>
            <ul>
              {service.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <p>
              <strong>Source:</strong> {service.source}
            </p>
          </div>
        ))}
      </div>

      {/* Competitive Edge Section */}
      {competitiveEdge && (
        <div className="mt-5">
          <h4>{competitiveEdge.title}</h4>
          <ul>
            {competitiveEdge.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Call-to-Action Section */}
      {/* {callToAction && (
        <div className="mt-5">
          <h4>{callToAction.title}</h4>
          <p>{callToAction.text}</p>
          <ul>
            {callToAction.actions.map((action, idx) => (
              <li key={idx}>{action}</li>
            ))}
          </ul>
        </div>
      )} */}
      {callToAction && (
        <div className="mt-5">
          <h4>{callToAction.title}</h4>
          <p>{callToAction.text}</p>
          <ul>
            {callToAction.actions.map((action, idx) =>
              renderAction(action, idx)
            )}
          </ul>
        </div>
      )}

      {/* Engagement Section */}
      {engagement && (
        <div className="mt-5">
          <h5>{engagement.prompt}</h5>
          <p>{engagement.text}</p>
        </div>
      )}

      {/* Sources Section */}
      {sources && sources.length > 0 && (
        <div className="mt-5">
          <h6>Sources</h6>
          <ul>
            {sources.map((source, idx) => (
              <li key={idx}>{source}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const AuthorSection = () => {
  return (
    <div className="container py-5 text-center">
      <div className="d-flex justify-content-center mb-4">
        <a
          href="https://www.facebook.com"
          className="mx-3"
          style={{ color: "#A83EAA" }}
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.instagram.com"
          className="mx-3"
          style={{ color: "#A83EAA" }}
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.whatsapp.com"
          className="mx-3"
          style={{ color: "#A83EAA" }}
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="mailto:example@example.com"
          className="mx-3"
          style={{ color: "#A83EAA" }}
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://www.linkedin.com"
          className="mx-3"
          style={{ color: "#A83EAA" }}
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <div>
        <p className="mb-1 text-uppercase fw-bold">Author</p>
        <h5 className="mb-1">Adekoya Boluwatife</h5>
        <p className="text-muted">Marketing Executive at 8thGear</p>
      </div>
    </div>
  );
};
