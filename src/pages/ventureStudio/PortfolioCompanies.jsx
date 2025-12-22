import React from "react";
import PortfolioCards from "./PortfolioCards";
import Button from "./Button";

const PortfolioCompanies = () => {
  const cardDetails = [
    {
      imgLink: "/images/ventureStudio/haven.svg",
      headText: "Haven",
      subheading: "Portfolio",
      p1: "Haven Edu-Services is an extra-curricular childhood educational organization focused on providing training content related to Technology, Languages, and Arts for children/Pre-teenagers ages 4-16.",
      ps1: "Ed-Tech",
      ps2: "Lagos",
      ps3: "2019",
    },
    {
      imgLink: "/images/ventureStudio/inKeeper.svg",
      headText: "Innkeeper",
      subheading: "Portfolio",
      p1: "Innkeeper is a job-tech venture that provides talent development and matching services to corporations and startups in other to support them with top African talents for tech and tech-related roles. Innkeeper focuses on upskilling youths with in-demand tech skills for improved employability and to close talent skill gaps",
      ps1: "Ed-Tech/Job Tech",
      ps2: "",
      ps3: "2021",
    },
    {
      imgLink: "/images/digiPlus.png",
      headText: "Digiplus Connect",
      subheading: "Portfolio",
      p1: "DigiPlus is a technology company with a mission to provide innovative technology solutions and digital platforms to support small and medium enterprises (SMES) and multinational organisations.",
      ps1: "Retail Tech",
      ps2: "Lagos",
      ps3: "2023",
    },
    {
      imgLink: "/images/trulance.png",
      headText: "Trulance",
      subheading: "Portfolio",
      p1: "TruLance is a global marketplace that provides credible technology solutions to businesses and startups, by leveraging on its affiliate communities of vetted freelance developers, designers, content creators and digital marketers. TruLance ensures value is served by taking full responsibility for the quality and timely delivery of agreed outputs.",
      ps1: "Ed-Tech / Job  Tech",
      ps2: "Lagos",
      ps3: "2023",
    },
    {
      imgLink: "/images/legalmo.png",
      headText: "LegalMO",
      subheading: "Portfolio",
      p1: "LegalMO is a legal tech venture, promoting the legal health and promotion of SMEs and Startups by creating a platform where Startups and SMEs can access affordable legal services.",
      ps1: "Legal Tech",
      ps2: "Lagos",
      ps3: "2023",
    },
    {
      imgLink: "/images/everythingMeat.png",
      headText: "Everything Meat",
      subheading: "Portfolio",
      p1: "Everything Meat is an e-commerce platform that connects buyers and sellers of freshly butchered livestock. It provides a seamless marketplace for smooth transactions, ensuring easy access to high-quality meat products.",
      ps1: "Food Tech",
      ps2: "Lagos",
      ps3: "2024",
    },
    {
      imgLink: "/images/finamo.jpg",
      headText: "FinaMo",
      subheading: "Portfolio",
      p1: "A specialised venture providing affordable, professional, tech-enabled accounting and financial management services to 8thGear’s community and the wider Nigerian market.",
      ps1: "FinTech",
      ps2: "Lagos",
      ps3: "2025",
    },
    {
      imgLink: "/images/aikiservices.png",
      headText: "Aiki Services",
      subheading: "Hub Member",
      p1: "Aiki Services is a prominent provider of air conditioning electrical and plumbing solutions, specializing in professional facility management and home repair installation and maintenance services. Aiki Services is a dealer and bulk supplier of air conditioners. Additionally, we are dedicated to skills empowerment and job creation by offering technical vocational education and training.",  
    },
  ];
  return (
    <div className="d-flex flex-column text-center align-items-center justify-content-center mx-auto my-5 howWeDoIt">
      <div className="mx-5 py-5 col-lg-7">
        <h3 className="purple-text">HUB MEMBERSHIP</h3>
        <p>
        A platform for collaboration and growth
        </p>
      </div>
      <div className="my-3 container">
        <div className="row mx-auto row-gap-5 justify-content-center">
          {cardDetails.map((c) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <PortfolioCards
                imgLink={c.imgLink}
                headText={c.headText}
                subheading={c.subheading}
                p1={c.p1}
                ps1={c.ps1}
                ps2={c.ps2}
                ps3={c.ps3}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pb-2">
        <Button buttonText={"Join Our Portfolio"} />
      </div>
    </div>
  );
};

export default PortfolioCompanies;
