import React from "react";
import HowWeDoItSection from "./HowWeDoItSection";
import "./ventureStudio.css";

const HowWeDoIt = () => {
  const content = [
    {
      imgLink: "/images/ventureStudio/Ideation.png",
      text1: "Ideation",
      text2:
        "We explore intriguing and significant problems, diving in to find long-term solutions. Whether the idea originates from us or an external source, when we see potential, we act.",
    },
    {
      imgLink: "/images/ventureStudio/Validation.png",
      text1: "Validation",
      text2:
        "We test and validate assumptions by engaging with potential customers to ensure the problem is real and understand their desired solutions.",
    },
    {
      imgLink: "/images/ventureStudio/Creation.png",
      text1: "Creation",
      text2:
        "We deploy minimum variable products (MVP’s) quickly, learning from the market in real time and adjusting as needed. We continually refine the idea with customer feedback at the center of our decisions.",
    },
    {
      imgLink: "/images/ventureStudio/Spinout.png",
      text1: "Spinout",
      text2:
        "Upon achieving proof of concept with enthusiastic paying customers, we spin off the venture into a standalone enterprise. Our legal branding and HR experts create a robust commercial framework for new businesses.",
    },
    {
      imgLink: "/images/ventureStudio/Scaleup.png",
      text1: "Scaleup",
      text2:
        "We allow founders to focus on their core value offerings, ensure the businesses scales while maintaining focus on fundamentals and operational efficiency",
    },
  ];

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mx-auto my-5 howWeDoIt">
      <h3 className="purple-text pt-3 py-lg-5 py-md-4">HOW WE DO IT</h3>
      {/* The whole  */}
      <div className="mx-5">
        <div className="row">
          {content.map((d, index) => (
            <div key={index} className="col-6 mb-4">
              <HowWeDoItSection
                imgLink={d.imgLink}
                text1={d.text1}
                text2={d.text2}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeDoIt;
