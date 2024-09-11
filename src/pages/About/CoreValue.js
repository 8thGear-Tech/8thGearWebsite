import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import visionlogo from "../About/image/Vision-logo.png";
import missionlogo from "../About/image/Mission-logo.png";
import valuelogo from "../About/image/Value-logo.png";
import "../About/aboutUs.css";

const Values = {
  vision:
    "An Africa where everyone with the drive to succeed has access to the resources they need to do so.",
  mission: [
    "8thGear creates a safe space for entrepreneurs to test their innovations, builds an ecosystem of value-adding and innovative solutions, and facilitates sustainable and impact-driven initiatives across Africa.",
  ],
  value: [
    {
      title: "Purposeful",
      description:
        "We are big on the Why, rather than What' we do. We own our roles.",
    },
    {
      title: "Empathy",
      description:
        "We seek to understand our customers' changing tastes and desires",
    },
    {
      title: "Team Building",
      description: "We are keen on contributing to the building of the team",
    },
    {
      title: "Courage",
      description: "We anticipate and embrace change",
    },
    {
      title: "Professionalism",
      description:
        "Excellence and Accountability shine through our deliverables",
    },
    {
      title: "Enthusiasm",
      description:
        "You are excited about your work because you love what we do.",
    },
  ],
};

const CoreValue = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mt-3 purple-text">WHO WE ARE</h3>
      <p className="text-center">
        8thGear® is a brand owned by 8thGear Partners Limited and operates as
        8thGear Hub & Venture Studio{" "}
      </p>
      <div className="row mt-5 d-flex justify-content-center align-items-stretch">
        {/* Vision card */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
          <div className="CoreCard flex-fill">
            <div className="card-body rounded bg-white shadow py-5 px-3">
              <img
                src={visionlogo}
                alt="Vision Logo"
                className="img-fluid mx-auto d-block mb-3 mt-3"
                style={{ maxWidth: "100px" }}
              />
              <h4 className="card-title text-center mt-2">Vision</h4>
              <p className="card-text mt-4">{Values.vision}</p>
            </div>
          </div>
        </div>
        {/* Mission card */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
          <div className="CoreCard flex-fill">
            <div className="card-body rounded bg-white shadow py-5 px-3">
              <img
                src={missionlogo}
                alt="Mission Logo"
                className="img-fluid mx-auto d-block mb-3 mt-3"
                style={{ maxWidth: "100px" }}
              />
              <h4 className="card-title text-center mt-2">Mission</h4>
              <p className="card-text mt-4">{Values.mission}</p>
            </div>
          </div>
        </div>
        {/* Value card */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
          <div className="CoreCard flex-fill">
            <div className="card-body rounded bg-white shadow py-5 px-3">
              <img
                src={valuelogo}
                alt="Value Logo"
                className="img-fluid mx-auto d-block mb-3"
                style={{ maxWidth: "100px" }}
              />
              <h4 className="card-title text-center mb-4">Values</h4>
              <div className="accordion" id="accordionExample">
                {Values.value.map((item, index) => (
                  <div
                    className="accordion-item mb-2 border-0 rounded shadow-sm"
                    key={index}
                  >
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className={`accordion-button core-accordion-button ${
                          openIndex === index ? "" : "collapsed"
                        } text-dark bg-transparent border-0 `}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                      >
                        {item.title}
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
                      <div className="accordion-body">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValue;
