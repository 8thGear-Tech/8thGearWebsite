import PortfolioCards from "./PortfolioCards";
import Button from "./Button";

const PortfolioCompanies = () => {
  const cardDetails = [
    {
      imgLink: "/images/ventureStudio/haven.svg",
      headText: "Haven",
      subheading: "Portfolio",
      p1: "An extra-curricular educational organization providing technology, languages, and arts training for children ages 4-16.",
      ps1: "Ed-Tech",
      ps2: "Lagos",
      ps3: "2019",
    },
    {
      imgLink: "/images/ventureStudio/inKeeper.svg",
      headText: "Innkeeper",
      subheading: "Portfolio",
      p1: "A job-tech venture providing talent development and matching services, upskilling African youth with in-demand tech skills for improved employability.",
      ps1: "Ed-Tech/Job Tech",
      ps2: "Lagos",
      ps3: "2021",
    },
    {
      imgLink: "/images/digiPlus.png",
      headText: "Digiplus Connect",
      subheading: "Portfolio",
      p1: "A technology company providing innovative digital solutions and platforms to support SMEs and multinational organizations.",
      ps1: "Retail Tech",
      ps2: "Lagos",
      ps3: "2023",
    },
    {
      imgLink: "/images/trulance.png",
      headText: "Trulance",
      subheading: "Portfolio",
      p1: "A global marketplace connecting businesses with vetted freelance developers, designers, content creators, and digital marketers for quality, timely delivery.",
      ps1: "Ed-Tech / Job Tech",
      ps2: "Lagos",
      ps3: "2023",
    },
    {
      imgLink: "/images/legalmo.png",
      headText: "LegalMO",
      subheading: "Portfolio",
      p1: "A legal tech platform promoting SME legal health by providing affordable, accessible legal services for startups and small businesses.",
      ps1: "Legal Tech",
      ps2: "Lagos",
      ps3: "2023",
    },
    {
      imgLink: "/images/everythingMeat.png",
      headText: "Everything Meat",
      subheading: "Portfolio",
      p1: "An e-commerce platform connecting buyers and sellers of freshly butchered livestock, ensuring easy access to high-quality meat products.",
      ps1: "Food Tech",
      ps2: "Lagos",
      ps3: "2024",
    },
    {
      imgLink: "/images/finamo.jpg",
      headText: "FinaMo",
      subheading: "Portfolio",
      p1: "Providing affordable, professional, tech-enabled accounting and financial management services to 8thGear's community and the Nigerian market.",
      ps1: "FinTech",
      ps2: "Lagos",
      ps3: "2025",
    },
    {
      imgLink: "/images/talenmo.jpeg",
      headText: "TalenMo",
      subheading: "Portfolio",
      p1: "A professional recruitment firm focused on sourcing, screening, and placing talent across permanent, contract, temporary, and graduate positions.",
      ps1: "Recruitment",
      ps2: "Lagos",
      ps3: "2026",
    },
    {
      imgLink: "/images/aikiservices.png",
      headText: "Aiki Services",
      subheading: "Hub Member",
      p1: "A provider of air conditioning, electrical, and plumbing solutions, specializing in facility management and technical vocational training for skills empowerment.",
      ps1: "Facility Management",
      ps2: "Lagos",
      ps3: "2020",
    },
  ];
  
  return (
    <div className="d-flex flex-column text-center align-items-center justify-content-center mx-auto my-5 howWeDoIt">
      {/* Original Header */}
      <div className="mx-5 py-5 col-lg-7">
        <h3 className="purple-text">HUB MEMBERSHIP</h3>
        <p>
          A platform for collaboration and growth
        </p>
      </div>
      
      {/* Cards Grid */}
      <div className="my-3 container">
        <div className="row mx-auto row-gap-5 justify-content-center">
          {cardDetails.map((c, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
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
      
      {/* CTA Button */}
      <div className="pb-2">
        <Button buttonText={"Join Our Portfolio"} />
      </div>
    </div>
  );
};

export default PortfolioCompanies;