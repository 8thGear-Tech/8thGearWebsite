import React, { useState } from "react";
import Hero from "./Hero";
import CoreServices from "./coreServices";
import HowWeDoIt from "./howWeDoIt";
import ImpactMetrics from "./impactMetrics";
import PortfolioCompanies from "./PortfolioCompanies";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./ventureStudio.css";


// Required setup for PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`;

const VentureStudio = () => {
  return (
    <div className="venture-studio">
      <div>
        <Hero />
      </div>

      {/* <div className="container d-flex flex-column align-items-center">
        <img
          src={IRE1}
          alt="IRE"
          className="img-fluid mb-4"
          style={{
            maxWidth: "500px",
            width: "100%",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />
        <img
          src={IRE2}
          alt="IRE"
          className="img-fluid mb-4"
          style={{
            maxWidth: "500px",
            width: "100%",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />
        <img
          src={IRE3}
          alt="IRE"
          className="img-fluid mb-4"
          style={{
            maxWidth: "500px",
            width: "100%",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />
        <img
          src={IRE4}
          alt="Portfolio Image 4"
          className="img-fluid mb-4"
          style={{
            maxWidth: "500px",
            width: "100%",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />
        <img
          src={IRE5}
          alt="IRE"
          className="img-fluid mb-4"
          style={{
            maxWidth: "500px",
            width: "100%",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />
      </div> */}
    
      {/* <div className="text-center">
        <ApplyNowBtn buttonText={"Apply Now"} />
      </div> */}

      <div className="d-flex justify-content-center my-5 pt-1 px-3">
        <div className="text-center col-lg-9">
          {/* <div className="text-center my-5 pt-2 px-3 col-lg-6"> */}
          <h3 className="purple-text">WHAT WE DO</h3>
          <p>
            At our venture studio, we create enterprises with sustainable
            business strategies. We prioritize engaging with potential clients
            from start and throughout the business lifecycle. Years of iterative
            learning have honed ability to identify the conditions that increase
            the chances of an idea’s success. Our in-house team of experts are
            ready to turn ideas into viable businesses.
          </p>
        </div>
      </div>
      <div className="mx-5">
        <CoreServices />
      </div>
      <div>
        <HowWeDoIt />
      </div>
      <div>
        <ImpactMetrics />
      </div>
      <div>
        <PortfolioCompanies />
      </div>
    </div>
  );
};

// const PDFSection = () => {
//   const [numPages, setNumPages] = useState(null);

//   return (
//     <div className="flex flex-col items-center my-10">
//       <Document
//         file="/pdfs/IRE_Curriculum&Content.pdf"
//         onLoadSuccess={({ numPages }) => setNumPages(numPages)}
//       >
//         {Array.from(new Array(numPages), (el, index) => (
//           <Page key={`page_${index + 1}`} pageNumber={index + 1} width={900} />
//         ))}
//       </Document>
//     </div>
//   );
// };

export default VentureStudio;
