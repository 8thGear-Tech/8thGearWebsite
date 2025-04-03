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
import blogcardimg from "../../assets/images/insights/blogcardimg.png";
import fullblogimg from "../../assets/images/insights/fullblogimg.png";
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
  const { quoteText } = post.quoteSection;
  const { introductionTitle, introductionText } = post.fullcontent;

  return (
    <>
      <HomepageNav />
      <Header post={post} />
      <QuoteSection quoteText={quoteText} />
      <FullBlogPost
        introductionTitle={introductionTitle}
        introductionText={introductionText}
      />
      {/* <FullBlogPost content={post.fullcontent} /> */}
      <AuthorSection />
    </>
  );
};

const Header = ({ post }) => {
  return (
    // <div className="container py-5">
    //   <div className="row">
    //     <div className="col-md-8 text-start">
    //       <p className="text-uppercase mb-2" style={{ color: "#A83EAA" }}>
    //         <b>Startup</b>
    //       </p>
    //       <h2 className="fw-bold mb-3">
    //         From Startup to Scale-Up; Key Strategies for Navigating the Growth
    //         Phase
    //       </h2>
    //       <p style={{ color: "#A83EAA" }}>March 27, 2025 • 4 min read</p>{" "}
    //       <div className="col-md-4 d-flex align-items-center mt-3 mt-md-0">
    //         <FaFacebook className="fs-4 mx-2" style={{ color: "#A83EAA" }} />
    //         <FaInstagram className="fs-4 mx-2" style={{ color: "#A83EAA" }} />
    //         <FaTwitter className="fs-4 mx-2" style={{ color: "#A83EAA" }} />
    //         <FaLinkedin className="fs-4 mx-2" style={{ color: "#A83EAA" }} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
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

const QuoteSection = ({ quoteText }) => {
  return (
    <div className="container-fluid px-0">
      <div className="row g-0">
        <div className="col-12 col-md-6">
          <img
            src={blogcardimg}
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

// const FullBlogPost = () => {
//   return (
//     <div className="container py-4">
//       <h3 className="mb-4">Introduction</h3>

//       <div className="row align-items-center mb-5">
//         <div className="">
//           <p>
//             The journey from startup to scale-up is one of the most exciting yet
//             challenging periods in the lifecycle of a company. Having survived
//             the initial trials and tribulations of starting a business, you're
//             now entering a new phase: growth. As your business gains traction,
//             it must navigate the complexities of scaling—expanding operations,
//             increasing customer bases, and ensuring sustainable growth without
//             losing what made the company successful in the first place. Scaling
//             is not simply about increasing size or revenue; it’s about building
//             a foundation that can handle future growth.
//           </p>
//         </div>
//       </div>
//       <div className="">
//         <img
//           src={fullblogimg}
//           alt="Introduction Image"
//           className="img-fluid "
//         />
//       </div>

//       <div>
//         <p className="mt-5">
//           Here are the key strategies for effectively navigating the growth
//           phase of your business:
//         </p>
//         <h5 className="mb-3" style={{ color: "#494B5C" }}>
//           Solidify Your Core Values and Vision
//         </h5>
//         <p>
//           As your business grows, it becomes increasingly important to ensure
//           that your original vision and company values are preserved. While
//           expansion and scaling require adjustments in processes, culture, and
//           roles, staying true to the ethos that defined your startup will ensure
//           a unified direction for your team. Clear communication of your values
//           will help guide decision-making as the company grows and diversifies.
//         </p>
//         <p>
//           <strong style={{ color: "#494B5C" }}>Tip:</strong> Establish a mission
//           statement that resonates across the organization. Revisit your core
//           values regularly and ensure they align with your scaling goals.
//         </p>{" "}
//         <h5 className="mb-3" style={{ color: "#494B5C" }}>
//           Optimize Operations and Processes
//         </h5>
//         <p>
//           In the early days of a startup, it's common to rely on a lean and
//           flexible approach to operations. However, when scaling, the same
//           informal methods that worked when your team was small will no longer
//           be sufficient. Optimizing processes, adopting new tools, and
//           automating where possible will help you manage the increased workload
//           while maintaining quality and efficiency.
//         </p>
//         <p>
//           <strong style={{ color: "#494B5C" }}>Tip:</strong> Invest in software
//           or systems that can scale with you. Think CRM systems, inventory
//           management tools, and project management platforms.
//         </p>{" "}
//         <h5 className="mb-3" style={{ color: "#494B5C" }}>
//           Focus on Customer Retention and Experience
//         </h5>
//         <p>
//           As you scale, it’s easy to focus on acquiring new customers. However,
//           retaining existing customers should be a priority. A strong customer
//           retention strategy, built around delivering exceptional experiences,
//           will not only improve your lifetime value per customer but also
//           generate referrals, which are crucial during the growth phase.
//         </p>
//         <p>
//           <strong style={{ color: "#494B5C" }}>Tip:</strong> Collect and act on
//           customer feedback regularly. Use this data to refine your offerings
//           and improve the overall customer journey.
//         </p>{" "}
//         <h5 className="mb-3" style={{ color: "#494B5C" }}>
//           Final Thoughts
//         </h5>
//         <p>
//           The transition from startup to scale-up is a delicate balancing act.
//           By solidifying your core values, optimizing operations, and nurturing
//           customer relationships, you lay the groundwork for scalable, long-term
//           success. A strong team, disciplined financial management, and a keen
//           eye on innovation will help you stay competitive and adaptable as you
//           grow. Remember, scaling is not just about growth in size—it’s about
//           fostering sustainable practices that will allow your business to
//           thrive in a rapidly changing marketplace.
//         </p>
//       </div>
//     </div>
//   );
// };

// Updated FullBlogPost component
// const FullBlogPost = ({ content }) => {
//   return (
//     <div className="container py-4">
//       {/* Introduction Section */}
//       <h3 className="mb-4">Introduction</h3>
//       <div className="row align-items-center mb-5">
//         <div>
//           <p>{content.introduction}</p>
//         </div>
//       </div>
//       {/* Main Image */}
//       <div>
//         <img
//           src={content.mainImage}
//           alt="Introduction Image"
//           className="img-fluid"
//           style={{ width: "100%", objectFit: "cover" }}
//         />
//       </div>
//       {/* Dynamic Sections */}
//       <div>
//         <p className="mt-5">
//           Here are the key strategies for effectively navigating the growth
//           phase of your business:
//         </p>
//         {content.sections.map((section, index) => (
//           <div key={index}>
//             <h5 className="mb-3" style={{ color: "#494B5C" }}>
//               {section.heading}
//             </h5>
//             <p>{section.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
const FullBlogPost = ({ introductionTitle, introductionText }) => {
  return (
    <div className="container py-4">
      {/* Introduction Section */}
      {/* <h3 className="mb-4">{fullcontent.introductionTitle}</h3> */}
      <div className="row align-items-center mb-5">
        <div>
          <p>{introductionTitle}</p>
        </div>
      </div>

      {/* Main Image */}
      {/* {fullcontent.mainImage && (
        <div>
          <img
            src={fullcontent.mainImage}
            alt="Introduction Image"
            className="img-fluid"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
      )} */}

      {/* Dynamic Services or Sections */}
      {/* <div>
        <p className="mt-5">
          Here are the key strategies for effectively navigating the growth
          phase of your business:
        </p>
        {fullcontent.sections.map((section, index) => (
          <div key={index}>
            <h5 className="mb-3" style={{ color: "#494B5C" }}>
              {section.heading}
            </h5>
            <p>{section.description}</p>
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            )}
            {section.source && (
              <p style={{ fontStyle: "italic", color: "#666" }}>
                {section.source}
              </p>
            )}
          </div>
        ))}
      </div> */}

      {/* Competitive Edge Section */}
      {/* {fullcontent.competitiveEdge && (
        <div className="mt-5">
          <h4>{fullcontent.competitiveEdge.title}</h4>
          <ul>
            {fullcontent.competitiveEdge.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      )} */}

      {/* Call-to-Action Section */}
      {/* {fullcontent.callToAction && (
        <div className="mt-5">
          <h4>{fullcontent.callToAction.title}</h4>
          <p>{fullcontent.callToAction.text}</p>
          <ul>
            {fullcontent.callToAction.actions.map((action, idx) => (
              <li key={idx}>{action}</li>
            ))}
          </ul>
        </div>
      )} */}

      {/* Engagement Section */}
      {/* {fullcontent.engagement && (
        <div className="mt-5">
          <h5>{fullcontent.engagement.prompt}</h5>
          <p>{fullcontent.engagement.text}</p>
        </div>
      )} */}

      {/* Sources Section */}
      {/* {fullcontent.sources && fullcontent.sources.length > 0 && (
        <div className="mt-5">
          <h6>Sources</h6>
          <ul>
            {fullcontent.sources.map((source, idx) => (
              <li key={idx}>{source}</li>
            ))}
          </ul>
        </div>
      )} */}
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
