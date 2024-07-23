import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import visionlogo from "../About/image/Vision-logo.png";
import missionlogo from "../About/image/Mission-logo.png";
import valuelogo from "../About/image/Value-logo.png";
import '../About/aboutUs.css';

const Values = {
  vision: "To be established as one of Nigeria’s leading development and enterprise support providers by our fifth year (2024)",
  mission: [
    "To build an ecosystem of value-adding and innovative ventures",
    "To Facilitate sustainable initiative/project"
  ],
  value: [
    {
      title: "Purposeful",
      description: "We are big on the Why, rather than What' we do. We own our roles."
    },
    {
      title: "Empathy",
      description: "We seek to understand our customers' changing tastes and desires"
    },
    {
      title: "Team Building",
      description: "We are keen on contributing to the building of the team"
    },
    {
      title: "Courage",
      description: "We anticipate and embrace change"
    },
    {
      title: "Professionalism",
      description: "Excellence and Accountability shine through our deliverables"
    },
    {
      title: "Enthusiasm",
      description: "You are excited about your work because you love what we do."
    }
  ]
};

const CoreValue = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center fs-4">WHO WE ARE</h2>
      <div className="row mt-5 justify-content-center align-items-center">
        {/* Vision card */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card CoreCard">
            <div className="card-body rounded valueCard bg-white shadow">
              <img src={visionlogo} alt="Vision Logo" className="img-fluid mx-auto d-block mb-3 mt-3" style={{ maxWidth: '100px' }} />
              <h3 className="card-title text-center mt-5">Vision</h3>
              <p className="card-text text-center mt-4">{Values.vision}</p>
            </div>
          </div>
        </div>
        {/* Mission card */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card CoreCard">
            <div className="card-body rounded valueCard bg-white shadow">
              <img src={missionlogo} alt="Mission Logo" className="img-fluid mx-auto d-block mb-3 mt-3" style={{ maxWidth: '100px' }} />
              <h3 className="card-title text-center mt-5">Mission</h3>
              <ul className="card-text text-start mt-4">
                {Values.mission.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Value card */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card CoreCard">
            <div className="card-body rounded valueCard bg-white shadow">
              <img src={valuelogo} alt="Value Logo" className="img-fluid mx-auto d-block mb-3" style={{ maxWidth: '100px' }} />
              <h3 className="card-title text-center">Value</h3>
              <div className="accordion" id="accordionExample">
                {Values.value.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className={`accordion-button descriptionCard ${openIndex === index ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                      >
                        {item.title}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {item.description}
                      </div>
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
