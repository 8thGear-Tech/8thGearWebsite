// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import visionlogo from "../About/image/Vision-logo.png";
// import missionlogo from "../About/image/Mission-logo.png";
// import valuelogo from "../About/image/Value-logo.png";
// import "../About/aboutUs.css";

// const Values = {
//   vision:
//     "An Africa where everyone with the drive to succeed has access to the resources they need to do so.",
//   mission: [
//     "8thGear creates a safe space for entrepreneurs to test their innovations, builds an ecosystem of value-adding and innovative solutions, and facilitates sustainable and impact-driven initiatives across Africa.",
//   ],
//   value: [
//     {
//       title: "Purposeful",
//       description:
//         "We are big on the Why, rather than What we do. We own our roles.",
//     },
//     {
//       title: "Empathy",
//       description:
//         "We seek to understand our customers' changing tastes and desires",
//     },
//     {
//       title: "Team Building",
//       description: "We are keen on contributing to the building of the team",
//     },
//     {
//       title: "Courage",
//       description: "We anticipate and embrace change",
//     },
//     {
//       title: "Professionalism",
//       description:
//         "Excellence and Accountability shine through our deliverables",
//     },
//     {
//       title: "Enthusiasm",
//       description:
//         "You are excited about your work because you love what we do.",
//     },
//   ],
// };

// const CoreValue = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="container mt-5">
//       <h3 className="text-center mt-3 purple-text">WHO WE ARE</h3>
//       <p className="text-center">
//         8thGear® is a brand owned by 8thGear Partners Limited and operates as
//         8thGear Hub & Venture Studio{" "}
//       </p>
//       <div className="row mt-5 d-flex justify-content-center align-items-stretch">
//         {/* Vision card */}
//         <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
//           <div className="CoreCard flex-fill">
//             <div className="card-body rounded bg-white shadow py-5 px-3">
//               <img
//                 src={visionlogo}
//                 alt="Vision Logo"
//                 className="img-fluid mx-auto d-block mb-3 mt-3"
//                 style={{ maxWidth: "100px" }}
//               />
//               <h4 className="card-title text-center mt-2">Vision</h4>
//               <p className="card-text mt-4">{Values.vision}</p>
//             </div>
//           </div>
//         </div>
//         {/* Mission card */}
//         <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
//           <div className="CoreCard flex-fill">
//             <div className="card-body rounded bg-white shadow py-5 px-3">
//               <img
//                 src={missionlogo}
//                 alt="Mission Logo"
//                 className="img-fluid mx-auto d-block mb-3 mt-3"
//                 style={{ maxWidth: "100px" }}
//               />
//               <h4 className="card-title text-center mt-2">Mission</h4>
//               <p className="card-text mt-4">{Values.mission}</p>
//             </div>
//           </div>
//         </div>
//         {/* Value card */}
//         <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
//           <div className="CoreCard flex-fill">
//             <div className="card-body rounded bg-white shadow py-5 px-3">
//               <img
//                 src={valuelogo}
//                 alt="Value Logo"
//                 className="img-fluid mx-auto d-block mb-3"
//                 style={{ maxWidth: "100px" }}
//               />
//               <h4 className="card-title text-center mb-4">Values</h4>
//               <div className="accordion" id="accordionExample">
//                 {Values.value.map((item, index) => (
//                   <div
//                     className="accordion-item mb-2 border-0 rounded shadow-sm"
//                     key={index}
//                   >
//                     <h2 className="accordion-header" id={`heading${index}`}>
//                       <button
//                         className={`accordion-button core-accordion-button ${
//                           openIndex === index ? "" : "collapsed"
//                         } text-dark bg-transparent border-0 `}
//                         type="button"
//                         onClick={() => toggleAccordion(index)}
//                       >
//                         {item.title}
//                       </button>
//                     </h2>
//                     <div
//                       id={`collapse${index}`}
//                       className={`accordion-collapse collapse ${
//                         openIndex === index ? "show" : ""
//                       }`}
//                       aria-labelledby={`heading${index}`}
//                       data-bs-parent="#accordionExample"
//                     >
//                       <div className="accordion-body">{item.description}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoreValue;


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import visionlogo from "../About/image/Vision-logo.png";
import missionlogo from "../About/image/Mission-logo.png";
import "../About/aboutUs.css";

const Data = {
  vision:
    "An Africa where everyone with the drive to succeed has access to the resources they need to do so.",
  mission:
    "8thGear creates a safe space for entrepreneurs to test their innovations, builds an ecosystem of value-adding and innovative solutions, and facilitates sustainable and impact-driven initiatives across Africa.",
  values: [
    { title: "Ownership Mindset", tagline: "This is My Company Too", description: "Think and act like owners, taking responsibility for outcomes, following through, and raising issues early with solutions, not complaints." },
    { title: "Purpose-Driven", tagline: "Why Before What", description: "We work to build Africa, not just earn a salary. We understand why we exist, connect daily tasks to bigger outcomes, and take pride in impact, not just output." },
    { title: "Professionalism & Excellence", tagline: "Do It Well or Don't Do It", description: "Excellence is care + consistency + competence. We show up on time, meet deadlines, and deliver quality work without being micromanaged." },
    { title: "Courage & Breakthrough Thinking", tagline: "We Try, We Learn, We Evolve", description: "We're pioneers who try new approaches, challenge respectfully, learn fast, and create clarity rather than freezing when things are unclear." },
    { title: "Empathy", tagline: "People First, Always Human", description: "We listen before reacting, assume positive intent, support teammates without resentment, and communicate with warmth, not coldness." },
    { title: "Team Spirit", tagline: "We Don't Work Alone Here", description: "8thGear greatness is collaborative. We share knowledge, ask for help early, help others win, and celebrate team success, not just personal wins." },
    { title: "Reliability & Trustworthiness", tagline: "Your Word is Law", description: "Trust is currency here. We do what we say, when we say it, keeping confidential things confidential, staying dependable under pressure, and delivering without emotional drama. When you speak at 8thGear, people should relax, not panic." },
    { title: "Discipline & Execution", tagline: "Ideas Are Cheap, Execution Wins", description: "8thGear celebrates doers. We execute consistently, use systems and tools, document work, track progress, and always close loops." },
  ],
};

const CoreValue = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handlePill = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mt-5 pb-5" style={{ maxWidth: "900px" }}>

      {/* Header */}
      <p className="text-center mb-1" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", color: "#7F77DD", textTransform: "uppercase" }}>
        About us
      </p>
      <h3 className="text-center purple-text mb-2">WHO WE ARE</h3>
      <p className="text-center text-muted mb-5" style={{ fontSize: "0.95rem" }}>
        8thGear® is a brand owned by 8thGear Partners Limited and operates as 8thGear Hub & Venture Studio
      </p>

      {/* Vision & Mission banners */}
<div className="row mb-4">
  <div className="col-md-6 mb-3">
    <div className="d-flex flex-column align-items-center p-4 h-100 text-center"
      style={{ background: "#f8f7ff", border: "0.5px solid #dddaf5", borderRadius: "16px" }}>
      <img
        src={visionlogo}
        alt="Vision"
        style={{ width: "56px", height: "56px", objectFit: "contain", marginBottom: "14px" }}
      />
      <h5 className="fw-bold mb-2" style={{ color: "#2d2d2d", fontSize: "1rem" }}>Vision</h5>
      <p className="mb-0 text-muted" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>{Data.vision}</p>
    </div>
  </div>
  <div className="col-md-6 mb-3">
    <div className="d-flex flex-column align-items-center p-4 h-100 text-center"
      style={{ background: "#f8f7ff", border: "0.5px solid #dddaf5", borderRadius: "16px" }}>
      <img
        src={missionlogo}
        alt="Mission"
        style={{ width: "56px", height: "56px", objectFit: "contain", marginBottom: "14px" }}
      />
      <h5 className="fw-bold mb-2" style={{ color: "#2d2d2d", fontSize: "1rem" }}>Mission</h5>
      <p className="mb-0 text-muted" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>{Data.mission}</p>
    </div>
  </div>
</div>

      {/* Values — single dark card in brand purple */}
      <div style={{ background: "#821E6B", borderRadius: "20px", overflow: "hidden" }}>
        <div className="p-4">

          {/* Values header */}
          <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
            <span className="text-white px-3 py-1 me-2"
              style={{ background: "rgba(255,255,255,0.2)", borderRadius: "999px", fontSize: "11px", fontWeight: 500, letterSpacing: "0.06em" }}>
              8 CORE VALUES
            </span>
            {/* <span style={{ fontSize: "17px", fontWeight: 500, color: "#fff" }}>The 8thGear Way</span> */}
          </div>

          {/* Summary intro */}
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.7", fontStyle: "italic", marginBottom: "20px" }}>
           We think like owners; deliver like professionals; care like humans; innovate like pioneers, and do it with joy, maturity, courage, and excellence. Select any value below to learn more.
          </p>

          {/* Pills */}
          <div className="d-flex flex-wrap gap-2">
            {Data.values.map((item, index) => (
              <button
                key={index}
                onClick={() => handlePill(index)}
                style={{
                  borderRadius: "999px",
                  padding: "7px 18px",
                  fontSize: "13px",
                  border: activeIndex === index ? "1.5px solid #fff" : "1px solid rgba(255,255,255,0.35)",
                  backgroundColor: activeIndex === index ? "#fff" : "rgba(255,255,255,0.12)",
                  color: activeIndex === index ? "#821E6B" : "#fff",
                  fontWeight: activeIndex === index ? 600 : 400,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Expanded detail */}
          {activeIndex !== null && (
            <div className="mt-3 p-3" style={{ background: "rgba(255,255,255,0.12)", borderRadius: "12px", borderLeft: "4px solid rgba(255,255,255,0.6)" }}>
              <h6 className="fw-bold mb-1" style={{ color: "#fff" }}>
                {Data.values[activeIndex].title}
              </h6>
              <small className="fst-italic d-block mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                "{Data.values[activeIndex].tagline}"
              </small>
              <p className="mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "rgba(255,255,255,0.85)" }}>
                {Data.values[activeIndex].description}
              </p>
            </div>
          )}

        </div>
      </div>

    </div>
  );
};

export default CoreValue;