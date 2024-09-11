import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/FAQ.css";
import { Navbar13 } from "./Navbar";

const FAQ = () => {
  return (
    <>
      <Navbar13 />
      <FAQ1 />
    </>
  );
};

const FAQ1 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Hub Services");

  const Question = {
    "Hub Services": [
      {
        question: "What services does the Hub Services Division offer?",
        answer:
          "The Hub Services division offers a range of business support services, including Co-working space, Growth as a Service for businesses and start-ups, and Talent Placement.",
      },
      {
        question:
          "What networking opportunities are available through the Hub Services Division?",
        answer:
          "We host quarterly founders meetup events for entrepreneurs in our community, we also have seminars where entrepreneurs can connect with other business professionals.",
      },
      {
        question: "Is there a minimum commitment period for using the Hub Services?",
        answer:
          "The commitment period varies depending on the services you require. For co-working space, we offer both short-term and long-term agreements.",
      },
      // New section starts here
      // Duplicate of Hub Services questions and answers
      {
        sectionTitle: "Co-working",  // Added a new section
      },
      {
        question: "How do I apply for office space at 8thGear Hub?",
        answer:
        (
          <>
            You can apply for office space by filling out this{' '}
            <a href="https://forms.gle/pjR1os5hN6WnbzFa9" target="_blank" rel="noopener noreferrer">
              form
            </a>{' '}
            or by contacting our team directly through email or phone.
          </>
        ),
      },
      {
        question:
          "Can I access the Hub Services if I’m not renting office space?",
        answer:
          "Yes, we offer a variety of flexible membership options, including access to networking events, and virtual office solutions.",
      },
        {
          sectionTitle: "Talent Placement",  // Added a new section
        },
        {
          question: "What is the Talent Placement service?",
          answer:
            "Talent Placement is a specialized service by 8thGear that helps companies find and recruit top talent, matching them with skilled professionals who fit their specific business needs.",
        },
        {
          question:
            "What types of roles does 8thGear’s Talent Placement cover?",
          answer:
            "We cover a wide range of roles, from entry-level positions to executive leadership, across various industries including tech, finance, marketing, and more.",
        },
        {
          question: "How does the Talent Placement process work?",
          answer:
            "The process begins with an in-depth consultation to understand your company’s needs, followed by sourcing, screening, and interviewing candidates to ensure a perfect fit.",
        },
        {
          question:
            "Can I use Talent Placement for temporary or contract positions?",
          answer:
            "Yes, we offer flexible talent solutions, including temporary, contract, and full-time placements, depending on your business requirements.",
        },
        {
          question:
            "How long does it take to fill a position through Talent Placement?",
          answer:
            "The timeline varies based on the role and market conditions, but we strive to present qualified candidates within",
        },
        {
          question:
            "What makes 8thGear's Talent Placement service different from other recruitment agencies?",
          answer:
            "8thGear’s Talent Placement service goes beyond traditional recruitment by focusing on a deep understanding of your business culture and goals. We not only match skills but we also provide talent pipeline planning services where we train your staffs to help them upskill.",
        },
        {
          question:
            "What support does 8thGear provide after a candidate is placed?",
          answer:
            "After placement, we offer ongoing support to both the employer and the candidate, including onboarding assistance, performance check-ins, and development plans to ensure long-term success and satisfaction.",
        },
        {
          question:
            "How do you ensure that candidates are a good fit for our company culture?",
          answer:
            "We take the time to understand your company’s culture and values, and we incorporate this understanding into our screening process to ensure that candidates align well with your organizational environment.",
        },
        {
          question:
            "Can you help with onboarding and integration of new hires?",
          answer:
            "Yes, we offer onboarding support services to help new hires transition smoothly into their roles and integrate successfully into your company. This includes training, orientation, and ongoing support.",
        },
      {
        sectionTitle: "GaaS (Growth as a Service)",  // Added a new section
      },
      {
        question: "What is GaaS?",
        answer:
          "Growth as a Service (GaaS) is a tailored business growth solution offered by 8thGear, designed to help companies scale by providing strategic support, market access, and operational efficiency services.",
      },
      {
        question:
          "Who is GaaS designed for?",
        answer:
          "GaaS is ideal for businesses that have a product or service and are looking to scale sustainably. We also offer services for established brands.",
      },
      {
        question: "What services are included in GaaS?",
        answer:
          "GaaS includes services such as brand visibility, market research, digital marketing support services, and customer and sales journey support.",
      },
      {
        question:
          "Can GaaS help my business enter new markets?",
        answer:
          "Yes, GaaS includes market research, localization strategies, and partnerships that can help your business successfully enter and thrive in new markets.",
      },
      {
        question:
          "How do I know if GaaS is right for my business?",
        answer:
          "If you are ready to scale but need expert guidance and resources to do so effectively, GaaS could be a great fit. Contact us for a consultation to discuss your specific needs.",
      },
      {
        question:
          "How do I get started with GaaS?",
        answer:(
          <>
            To get started, simply reach out to us through this{' '}
            <a href="https://calendar.app.google/t7TiMRDyXA1Ssvxs8" target="_blank" rel="noopener noreferrer">
              link
            </a>{' '}
            to schedule a free 15 minutes initial consultation.
          </>
        ),
      },
    ],
    "Impact Projects": [
      {
        question: "What is the Impact Projects Division?",
        answer:
          "The Impact Projects Division focuses on driving social and environmental change through entrepreneurial initiatives that address critical issues, such as sustainability, education, and economic empowerment.",
      },
      {
        question: "How does the Impact Projects Division support social enterprises?",
        answer:
          "We provide mentorship, and strategic partnerships to social enterprises, helping them scale their impact and reach wider audiences.",
      },
      {
        question:
          "Can I submit my project idea to the Impact Projects Division?",
        answer:
          "Yes, we welcome innovative project ideas that have the potential to create significant social or environmental impact. You can submit your proposal through our website.",
      },
      {
        question:
          "What types of projects are eligible for support?",
        answer:
          "Eligible projects typically address issues such as poverty alleviation, environmental sustainability, education, and community development.",
      },
      {
        question:
          "How does the division measure the impact of supported projects?",
        answer:
          "We use a range of metrics and tools to measure the social, economic, and environmental impact of our projects, ensuring that they deliver tangible benefits to the communities they serve.",
      },
      {
        question:
          "Do you collaborate with other organizations in the Impact Projects Division?",
        answer:
          "Yes, we frequently collaborate with NGOs, government agencies, corporations, and other stakeholders to amplify the impact of our projects.",
      },
      {
        question:
          "How can I get involved with the Impact Projects Division?",
        answer:
          "You can get involved by submitting a project proposal to projects@8thgearpartners.com, becoming a partner, volunteering your time, or donating resources to support our initiatives.",
      },
    ],
    "Venture Studio": [
      {
        question:
          "What is the Venture Studio Division?",
        answer:
          "The Venture Studio Division is a unique program that partners with entrepreneurs to co-create, launch, and scale new ventures by providing strategic guidance, operational support, and access to capital.",
      },
      {
        question:
          "How does 8thGear’s Venture Studio support startups?",
        answer:
          " We support startups by offering hands-on involvement in business development, product design, market strategy, and providing funding or access to investors.",
      },
      {
        question:
          "Who can apply to join the Venture Studio?",
        answer:
          "The Venture Studio is open to entrepreneurs, innovators, and early-stage startups that have a validated business idea and are seeking support to scale.",
      },
      {
        question:
          "What is the process to join the Venture Studio?",
        answer:(
        <>
          Interested entrepreneurs can apply via this{' '}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2tUCaXKrBRYS0hVjU7BGRtdV9lN6j9ThGx-LZGwqwlebE_Q/viewform" target="_blank" rel="noopener noreferrer">
            link
          </a>. Selected candidates will undergo a rigorous vetting process.
        </>
      ),
      },
      {
        question:
          "Does the Venture Studio take equity in my startup?",
        answer:
          "Yes, in exchange for our services and support, the Venture Studio typically takes a small equity stake in the startups we partner with.",
      },
      {
        question:
          "How long does a startup stay in the Venture Studio program?",
        answer:
          "The duration varies depending on the needs of the startup, but most ventures stay in the program for 6-12 months, during which we help them reach key growth milestones.",
      },
      {
        question:
          "What kind of resources are available to startups in the Venture Studio?",
        answer:
          "Startups have access to a wide range of resources, including expert mentors, industry connections, business tools, and co-working spaces, all aimed at accelerating their growth.",
      },
    ],
    "Builder's Collectives": [
      {
        question: "What is the Builders Collective?",
        answer:
          " 8thGear Builders' Collective is a subscription-based specially curated closed group for members of our community who are actively building and seeking more support.",
      },
      {
        question:
          "How can I join the Builders Collective?",
        answer:(
          <>
            You can join the Builders Collective by clicking this{' '}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScYKIGrYhSeAHBQ8jLP07eH18UcTMCVxoUIaFtPj8-soyr_Xw/viewform" target="_blank" rel="noopener noreferrer">
              link
            </a>. Membership is open to all entrepreneurs, business owners, and innovators.
          </>
        ),
      },
      {
        question: "What are the benefits of joining the Builders Collective?",
        answer:
          "As part of this subscription service, you'll benefit from our accountability service, where we help track your month-on-month growth across locally relevant metrics andcorporate goals. Members enjoy access to exclusive networking events, workshops, peer-to-peer mentoring, and firsthand insights into 8thGear’s services and offerings.",
      },
      {
        question:
          "What kind of events does the Builders Collective host?",
        answer:
          "We host a variety of events, including founder's meetups, and venture-building workshops (vBIP Program) designed to help members grow their businesses.",
      },
      {
        question:
          "Is there a membership fee for the Builders Collective?",
        answer:
          "Yes, there is a #10,000 monthly membership fee, which covers accountability services, B2B venture listing on our tech marketplace, special in-house sessions and programs, and other member benefits.",
      },
      {
        question:
          "Can I showcase my business at Builders Collective events?",
        answer:
          "Absolutely! Members are encouraged to showcase their businesses at our quarterly founders meet up and our annual Demo-day.",
      },
      {
        question:
          "How does the Builders Collective support entrepreneurial growth?",
        answer:
          "The Collective fosters a supportive environment where members can learn fromeach other, gain valuable feedback, and leverage 8thGear’s growth services to overcome challenges and scale their ventures.",
      },
    ],
  };

  // Function to handle toggling categories (Hub Services, Projects, Venture Studio)
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenIndex(null); // Reset accordion when switching categories
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="h4 fw-medium fs-4 faqHeading">
        Frequently Asked Questions (FAQ’s)
      </h2>

      <div className="mt-4">
        {/* Buttons for switching between categories */}
        <button
          className={`btn btn-primary fw-bold mx-2 faqButton rounded-pill fs-6 py-3 px-5 mb-3 ${
            activeCategory === "Hub Services" ? "active" : ""
          }`}
          onClick={() => handleCategoryChange("Hub Services")}
        >
          Hub Services
        </button>
        <button
          className={`btn btn-primary fw-bold mx-2 faqButton rounded-pill fs-6 py-3 px-5 mb-3 ${
            activeCategory === "Impact Projects" ? "active" : ""
          }`}
          onClick={() => handleCategoryChange("Impact Projects")}
        >
          Impact Projects
        </button>
        <button
          className={`btn btn-primary fw-bold mx-2 faqButton rounded-pill fs-6 py-3 px-5 mb-3 ${
            activeCategory === "Venture Studio" ? "active" : ""
          }`}
          onClick={() => handleCategoryChange("Venture Studio")}
        >
          Venture Studio
        </button>
        <button
          className={`btn btn-primary fw-bold mx-2 faqButton rounded-pill fs-6 py-3 px-5 mb-3 ${
            activeCategory === "Builder's Collectives" ? "active" : ""
          }`}
          onClick={() => handleCategoryChange("Builder's Collectives")}
        >
          Builder's Collectives
        </button>
      </div>

      <div className="accordion-container mt-5 d-flex justify-content-center">
        <div className="accordion w-100 w-md-75" id="accordionExample">
          {/* Mapping over the selected category's questions */}
          {Question[activeCategory].map((item, index) => {
            // Check if the item is a section title (e.g., "Co-working")
            if (item.sectionTitle) {
              return (
                <div key={index} className="my-4 text-start">
                  <h3 className="fw-bold fs-5 text-dark">{item.sectionTitle}</h3>
                  {/* Display section-specific content if needed */}
                </div>
              );
            }

            // Render accordion items for other questions
            return (
              <div className="accordion-item border-0 faqAccordionItem" key={index}>
                <h2 className="accordion-header faqAccordionHeader" id={`heading${index}`}>
                  <button
                    className={`accordion-button ${
                      openIndex === index ? "" : "collapsed"
                    } py-4 mt-3 text-dark bg-transparent faqAccordionButton border-top`}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${
                    openIndex === index ? "show" : ""
                  }`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-start">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

// Responsive Design Notes:
// 1. Used `w-100 w-md-75` for accordion width to ensure it scales on smaller devices.
// 2. Buttons and text are already responsive with Bootstrap utility classes.
// 3. Buttons and accordion are centered, providing a good user experience on all screen sizes (mobile, tablet, desktop).




// import card from "../data/faq.json";

// const FAQ = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div
//           className="accordion accordion mx-auto w-50 mt-5"
//           id="accordionExample"
//         >
//           <div className="accordion-item">
//             <div className="accordion-item faq">
//               <h5 className="accordion-header  pt-4 pb-2  mx-3" id="headingTwo">
//                 Managed Services
//               </h5>
//             </div>
//             <h2 className="accordion-header" id="headingOne">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseOne"
//                 aria-expanded="false"
//                 aria-controls="collapseOne"
//               >
//                 Accordion Item #1
//               </button>
//             </h2>
//             <div
//               id="collapseOne"
//               className="accordion-collapse collapse"
//               aria-labelledby="headingOne"
//               data-bs-parent="#accordionFlushExample"
//             >
//               <div className="accordion-body">
//                 Placeholder content for this accordion, which is intended to
//                 demonstrate the <code>.accordion-flush</code> class. This is the
//                 first item's accordion body.
//               </div>
//             </div>
//           </div>

//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingTwo">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseTwo"
//                 aria-expanded="false"
//                 aria-controls="collapseTwo"
//               >
//                 Accordion Item #2
//               </button>
//             </h2>
//             <div
//               id="collapseTwo"
//               className="accordion-collapse collapse"
//               aria-labelledby="headingTwo"
//               data-bs-parent="#accordionExample"
//             >
//               <div className="accordion-body">
//                 Placeholder content for this accordion, which is intended to
//                 demonstrate the <code>.accordion-flush</code> class. This is the
//                 second item's accordion body. Let's imagine this being filled
//                 with some actual content.
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingThree">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseThree"
//                 aria-expanded="false"
//                 aria-controls="collapseThree"
//               >
//                 Accordion Item #3
//               </button>
//             </h2>
//             <div
//               id="collapseThree"
//               className="accordion-collapse collapse"
//               aria-labelledby="headingThree"
//               data-bs-parent="#accordionExample"
//             >
//               <div className="accordion-body">
//                 Placeholder content for this accordion, which is intended to
//                 demonstrate the <code>.accordion-flush</code> class. This is the
//                 third item's accordion body. Nothing more exciting happening
//                 here in terms of content, but just filling up the space to make
//                 it look, at least at first glance, a bit more representative of
//                 how this would look in a real-world application.
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           className="accordion accordion mx-auto w-50 mt-5"
//           id="accordionExample"
//         >
//           <div className="accordion-item">
//             <div className="accordion-item faq">
//               <h5 className="accordion-header  pt-4 pb-2  mx-3" id="headingTwo">
//                 Co-Working Space
//               </h5>
//             </div>
//             <h2 className="accordion-header" id="headingFour">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseFour"
//                 aria-expanded="false"
//                 aria-controls="collaps Four"
//               >
//                 Accordion Item #1
//               </button>
//             </h2>
//             <div
//               id="collapseFour"
//               className="accordion-collapse collapse"
//               aria-labelledby="headingFour"
//               data-bs-parent="#accordionFlushExample"
//             >
//               <div className="accordion-body">
//                 Placeholder content for this accordion, which is intended to
//                 demonstrate the <code>.accordion-flush</code> class. This is the
//                 first item's accordion body.
//               </div>
//             </div>
//           </div>

//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingFive">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseFive"
//                 aria-expanded="false"
//                 aria-controls="collapseFive"
//               >
//                 Accordion Item #2
//               </button>
//             </h2>
//             <div
//               id="collapseFive"
//               className="accordion-collapse collapse"
//               aria-labelledby="headingFive"
//               data-bs-parent="#accordionExample"
//             >
//               <div className="accordion-body">
//                 Placeholder content for this accordion, which is intended to
//                 demonstrate the <code>.accordion-flush</code> class. This is the
//                 second item's accordion body. Let's imagine this being filled
//                 with some actual content.
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingSix">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseSix"
//                 aria-expanded="false"
//                 aria-controls="collapseSix"
//               >
//                 Accordion Item #3
//               </button>
//             </h2>
//             <div
//               id="collapseSix"
//               className="accordion-collapse collapse"
//               aria-labelledby="headingSix"
//               data-bs-parent="#accordionExample"
//             >
//               <div className="accordion-body">
//                 Placeholder content for this accordion, which is intended to
//                 demonstrate the <code>.accordion-flush</code> class. This is the
//                 third item's accordion body. Nothing more exciting happening
//                 here in terms of content, but just filling up the space to make
//                 it look, at least at first glance, a bit more representative of
//                 how this would look in a real-world application.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const FAQ1 = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div
//           className="accordion accordion mx-auto w-50 mt-5"
//           id="accordionExample"
//         >
//           <div className="accordion-item">
//             <div className="accordion-item faq">
//               <h5 className="accordion-header  pt-4 pb-2  mx-3" id="headingTwo">
//                 Growth As A Service
//               </h5>
//             </div>
//             <h2 className="accordion-header" id="headingSeven">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseSeven"
//                 aria-expanded="false"
//                 aria-controls="collapseSeven"
//               >
//                 Accordion Item #1
//               </button>
//             </h2>
//             <div
//               id="collapseSeven"
//               className="accordion-collapse collapse"
//               aria-labelledby="headingSeven"
//               data-bs-parent="#accordionFlushExample"
//             >
//               <div className="accordion-body">
//                 Placeholder content for this accordion, which is intended to
//                 demonstrate the <code>.accordion-flush</code> className. This is
//                 the first item's accordion body.
//               </div>
//             </div>
//           </div>

//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingEight">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseEight"
//                 aria-expanded="false"
//                 aria-controls="collapseEight"
//               >
//                 Accordion Item #2
//               </button>
//             </h2>
//             <div
//               id="collapseEight"
//               className="accordion-collapse collapse"
//               aria-labelledby="headingEight"
//               data-bs-parent="#accordionExample"
//             >
//               <div className="accordion-body">
//                 Placeholder content for this accordion, which is intended to
//                 demonstrate the <code>.accordion-flush</code> className. This is
//                 the second item's accordion body. Let's imagine this being
//                 filled with some actual content.
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingNine">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseNine"
//                 aria-expanded="false"
//                 aria-controls="collapseNine"
//               >
//                 Accordion Item #3
//               </button>
//             </h2>
//             <div
//               id="collapseNine"
//               className="accordion-collapse collapse"
//               aria-labelledby="headingNine"
//               data-bs-parent="#accordionExample"
//             >
//               <div className="accordion-body">
//                 Placeholder content for this accordion, which is intended to
//                 demonstrate the <code>.accordion-flush</code> className. This is
//                 the third item's accordion body. Nothing more exciting happening
//                 here in terms of content, but just filling up the space to make
//                 it look, at least at first glance, a bit more representative of
//                 how this would look in a real-world application.
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           className="accordion accordion mx-auto w-50 mt-5"
//           id="accordionExample"
//         >
//           <div className="accordion-item">
//             <div className="accordion-item faq">
//               <h5 className="accordion-header  pt-4 pb-2  mx-3" id="headingTwo">
//                 Project Delivery
//               </h5>
//             </div>
//             <h2 className="accordion-header" id="headingTen">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseTen"
//                 aria-expanded="false"
//                 aria-controls="collapseTen"
//               >
//                 Accordion Item #1
//               </button>
//             </h2>
//             <div
//               id="collapseTen"
//               className="accordion-collapse collapse"
//               aria-labelledby="headingTen"
//               data-bs-parent="#accordionFlushExample"
//             >
//               <div className="accordion-body">
//                 Placeholder content for this accordion, which is intended to
//                 demonstrate the <code>.accordion-flush</code> className. This is
//                 the first item's accordion body.
//               </div>
//             </div>
//           </div>

//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingEleven">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseEleven"
//                 aria-expanded="false"
//                 aria-controls="collapseEleven"
//               >
//                 Accordion Item #2
//               </button>
//             </h2>
//             <div
//               id="collapseEleven"
//               className="accordion-collapse collapse"
//               aria-labelledby="headingEleven"
//               data-bs-parent="#accordionExample"
//             >
//               <div className="accordion-body">
//                 Placeholder content for this accordion, which is intended to
//                 demonstrate the <code>.accordion-flush</code> className. This is
//                 the second item's accordion body. Let's imagine this being
//                 filled with some actual content.
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingTwelve">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseTwelve"
//                 aria-expanded="false"
//                 aria-controls="collapseTwelve"
//               >
//                 Accordion Item #3
//               </button>
//             </h2>
//             <div
//               id="collapseSix"
//               className="accordion-collapse collapse"
//               aria-labelledby="headingTwelve"
//               data-bs-parent="#accordionExample"
//             >
//               <div className="accordion-body">
//                 Placeholder content for this accordion, which is intended to
//                 demonstrate the <code>.accordion-flush</code> className. This is
//                 the third item's accordion body. Nothing more exciting happening
//                 here in terms of content, but just filling up the space to make
//                 it look, at least at first glance, a bit more representative of
//                 how this would look in a real-world application.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const FAQ2 = () => {
//   return (
//     <div classNameName="container">
//       <div classNameName="row">
//         <div
//           className="accordion accordion mx-auto w-50 mt-5"
//           id="accordionExample"
//         >
//           <div className="accordion-item">
//             <div className="accordion-item faq">
//               <h5 className="accordion-header  pt-4 pb-2  mx-3" id="headingTwo">
//                 Venture Studio
//               </h5>
//             </div>
//             <h2 className="accordion-header" id="headingTwenty">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseTwenty"
//                 aria-expanded="false"
//                 aria-controls="collapseTwenty"
//               >
//                 Accordion Item #1
//               </button>
//             </h2>
//             <div
//               id="collapseTwenty"
//               className="accordion-collapse collapse"
//               aria-labelledby="headingTwenty"
//               data-bs-parent="#accordionFlushExample"
//             >
//               <div className="accordion-body">
//                 Placeholder content for this accordion, which is intended to
//                 demonstrate the <code>.accordion-flush</code> className. This is
//                 the first item's accordion body.
//               </div>
//             </div>
//           </div>

//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingThirty">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseThirty"
//                 aria-expanded="false"
//                 aria-controls="collapseThirty"
//               >
//                 Accordion Item #2
//               </button>
//             </h2>
//             <div
//               id="collapseThirty"
//               className="accordion-collapse collapse"
//               aria-labelledby="headingThirty"
//               data-bs-parent="#accordionExample"
//             >
//               <div className="accordion-body">
//                 Placeholder content for this accordion, which is intended to
//                 demonstrate the <code>.accordion-flush</code> className. This is
//                 the second item's accordion body. Let's imagine this being
//                 filled with some actual content.
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingForty">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseForty"
//                 aria-expanded="false"
//                 aria-controls="collapseForty"
//               >
//                 Accordion Item #3
//               </button>
//             </h2>
//             <div
//               id="collapseForty"
//               className="accordion-collapse collapse"
//               aria-labelledby="headingForty"
//               data-bs-parent="#accordionExample"
//             >
//               <div className="accordion-body">
//                 Placeholder content for this accordion, which is intended to
//                 demonstrate the <code>.accordion-flush</code> className. This is
//                 the third item's accordion body. Nothing more exciting happening
//                 here in terms of content, but just filling up the space to make
//                 it look, at least at first glance, a bit more representative of
//                 how this would look in a real-world application.
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           className="accordion accordion mx-auto w-50 mt-5"
//           id="accordionExample"
//         >
//           <div className="accordion-item">
//             <div className="accordion-item faq">
//               <h5 className="accordion-header  pt-4 pb-2  mx-3" id="headingTwo">
//                 Events
//               </h5>
//             </div>
//             <h2 className="accordion-header" id="headingFifty">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseFifty"
//                 aria-expanded="false"
//                 aria-controls="collapseFifty"
//               >
//                 Accordion Item #1
//               </button>
//             </h2>
//             <div
//               id="collapseFifty"
//               className="accordion-collapse collapse"
//               aria-labelledby="headingFify"
//               data-bs-parent="#accordionFlushExample"
//             >
//               <div className="accordion-body">
//                 Placeholder content for this accordion, which is intended to
//                 demonstrate the <code>.accordion-flush</code> className. This is
//                 the first item's accordion body.
//               </div>
//             </div>
//           </div>

//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingSixty">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseSixty"
//                 aria-expanded="false"
//                 aria-controls="collapseSixty"
//               >
//                 Accordion Item #2
//               </button>
//             </h2>
//             <div
//               id="collapseSixty"
//               className="accordion-collapse collapse"
//               aria-labelledby="headingSixty"
//               data-bs-parent="#accordionExample"
//             >
//               <div className="accordion-body">
//                 Placeholder content for this accordion, which is intended to
//                 demonstrate the <code>.accordion-flush</code> className. This is
//                 the second item's accordion body. Let's imagine this being
//                 filled with some actual content.
//               </div>
//             </div>
//           </div>
//           <div className="accordion-item">
//             <h2 className="accordion-header" id="headingSeventy">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#collapseSeventy"
//                 aria-expanded="false"
//                 aria-controls="collapseSeventy"
//               >
//                 Accordion Item #3
//               </button>
//             </h2>
//             <div
//               id="collapseSeventy"
//               className="accordion-collapse collapse"
//               aria-labelledby="headingSeventy"
//               data-bs-parent="#accordionExample"
//             >
//               <div className="accordion-body">
//                 Placeholder content for this accordion, which is intended to
//                 demonstrate the <code>.accordion-flush</code> className. This is
//                 the third item's accordion body. Nothing more exciting happening
//                 here in terms of content, but just filling up the space to make
//                 it look, at least at first glance, a bit more representative of
//                 how this would look in a real-world application.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const FAQ1 = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         {card.information.map((heading) => {
//           return (
//             <div
//               className="col-sm-12 col-md-12 col-lg-6 mb-5 p-0 "
//               key={heading.id}
//             >
//               <FAQ {...heading}></FAQ>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// //

// export default FAQ;

//  const { heading, target, collapse, tool } = props;
//   return (
//     <div className="accordion container w-75" id="accordionExample">
//       <div className="accordion-item">
//         <div className="accordion-item  faq">
//           <h2 className="h5 mt-4 mx-3 ">
//             <div>
//               <strong>{heading}</strong>
//               {/* <strong>Managed Services</strong> */}
//             </div>
//           </h2>
//         </div>

//         <h2 className="accordion-header" id={target}>
//           <button
//             className="accordion-button"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target={collapse}
//             aria-expanded="true"
//             aria-controls={tool}
//           >
//             Accordion Item #1
//           </button>
//         </h2>
//         <div
//           id={tool}
//           className="accordion-collapse collapse"
//           aria-labelledby={target}
//           // data-bs-parent="#accordionExample"
//         >
//           <div className="accordion-body">
//             <strong>This is the first item's accordion body.</strong> It is
//             shown by default, until the collapse plugin adds the appropriate
//             classNamees that we use to style each element. These classNamees control the
//             overall appearance, as well as the showing and hiding via CSS
//             transitions. You can modify any of this with custom CSS or
//             overriding our default variables. It's also worth noting that just
//             about any HTML can go within the <code>.accordion-body</code>,
//             though the transition does limit overflow.
//           </div>
//         </div>
//       </div>
//       <div className="accordion-item">
//         <h2 className="accordion-header" id={target}>
//           <button
//             className="accordion-button collapsed"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target={collapse}
//             aria-expanded="false"
//             aria-controls={tool}
//           >
//             Accordion Item #2
//           </button>
//         </h2>
//         <div
//           id={tool}
//           className="accordion-collapse collapse  "
//           aria-labelledby={target}
//           data-bs-parent="#accordionExample"
//         >
//           <div className="accordion-body">
//             <strong>This is the second item's accordion body.</strong> It is
//             hidden by default, until the collapse plugin adds the appropriate
//             classNamees that we use to style each element. These classNamees control the
//             overall appearance, as well as the showing and hiding via CSS
//             transitions. You can modify any of this with custom CSS or
//             overriding our default variables. It's also worth noting that just
//             about any HTML can go within the <code>.accordion-body</code>,
//             though the transition does limit overflow.
//           </div>
//         </div>
//       </div>
//       <div className="accordion-item">
//         <h2 className="accordion-header" id={target}>
//           <button
//             className="accordion-button collapsed"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target={collapse}
//             aria-expanded="false"
//             aria-controls={tool}
//           >
//             Accordion Item #3
//           </button>
//         </h2>
//         <div
//           id={tool}
//           className="accordion-collapse collapse "
//           aria-labelledby={target}
//           data-bs-parent="#accordionExample"
//         >
//           <div className="accordion-body">
//             <strong>This is the third item's accordion body.</strong> It is
//             hidden by default, until the collapse plugin adds the appropriate
//             classNamees that we use to style each element. These classNamees control the
//             overall appearance, as well as the showing and hiding via CSS
//             transitions. You can modify any of this with custom CSS or
//             overriding our default variables. It's also worth noting that just
//             about any HTML can go within the <code>.accordion-body</code>,
//             though the transition does limit overflow.
//           </div>
//         </div>
//       </div>
//     </div>
