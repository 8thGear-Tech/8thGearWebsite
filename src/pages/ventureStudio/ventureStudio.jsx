import React, { useState } from "react";
import Hero from "./Hero";
import CoreServices from "./coreServices";
import HowWeDoIt from "./howWeDoIt";
import ImpactMetrics from "./impactMetrics";
import PortfolioCompanies from "./PortfolioCompanies";
import { ApplyNowBtn } from "./Button";
import { Document, Page, pdfjs } from 'react-pdf';
import { EmbedPDF } from '@simplepdf/react-embed-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';



// Required setup for PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`;

const VentureStudio = () => {
  return (
    <div className="venture-studio">
      <div>
        <Hero />
      </div>
      <div className="w-full px-0 my-5">
      {/* <iframe
          src="/pdfs/IRE_Curriculum&Content.pdf#toolbar=0&navpanes=0&scrollbar=0" 
          className="w-full lg:w-4/5 mx-auto h-screen"
          style={{ minHeight: "800px" }}
          title="PDF Document"
        ></iframe> */}
         <div className="relative w-full center">
        <div className="absolute left-0 right-0" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
          <object
            data="/pdfs/IRE_Curriculum&Content.pdf#toolbar=0"
            type="application/pdf"
            className="w-full"
            style={{ height: "90vh", minHeight: "700px" }}
          >
            <p>Your browser doesn't support embedded PDFs.</p>
          </object>
        </div>
      </div>
         {/* <object
          data="/pdfs/IRE_Curriculum&Content.pdf"
          type="application/pdf"
          className="w-full md:w-4/5 mx-auto"
          style={{ height: "90vh", minHeight: "600px" }}
        ></object> */}
         {/* <embed 
          src="/pdfs/IRE_Curriculum&Content.pdf" 
          type="application/pdf"
          className="w-full h-screen" 
          style={{ minHeight: "800px" }}
        /> */}
      {/* <Document file="/pdfs/IRE_Curriculum&Content.pdf">
          <Page pageNumber={1} />
        </Document> */}
        {/* <PDFSection/> */}
      </div>
      <div className="text-center">
        <ApplyNowBtn buttonText={"Apply Now"} />
      </div>

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

const PDFSection = () => {
  const [numPages, setNumPages] = useState(null);

  return (
    <div className="flex flex-col items-center my-10">
      <Document
        file="/pdfs/IRE_Curriculum&Content.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} width={900} />
        ))}
      </Document>
    </div>
  );
};


export default VentureStudio;
