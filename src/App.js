import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/homepage";
import { PrivacyAndPolicy } from "./pages/privacyandPolicy";
import { GenderPolicy } from "./pages/genderPolicy";
import { TermsAndConditions } from "./pages/TermsandConditions";
import { RefundPolicy } from "./pages/Refundpolicy";
import Error404 from "./pages/error404";
import FooterItemToTop from "./components/FooterItemToTop";

//Studio
import OurModelPage from "./pages/Studio/ourModel";
import PortfolioPage from "./pages/Studio/portfolio";
import InnkeeperPortfolioPage from "./pages/Studio/InnkeeperPortfolio";
import HavenPortfolioPage from "./pages/Studio/HavenPortfolio";
import MindAfrikPortfolioPage from "./pages/Studio/MindAfrikPortfolio";
import EaseSoilessPortfolioPage from "./pages/Studio/EaseSoilessPortfolio";
import LegalMoPortfolioPage from "./pages/Studio/LegalMoPortfolio";
import TrulancePortfolioPage from "./pages/Studio/TrulancePortfolio";
import VentureStudio from "./pages/ventureStudio/ventureStudio";

//Project Delivery
import ProjectDeliveryPage from "./pages/ProjectDelivery/projectDelivery";
import ProjectDeliveryGalleryPage from "./pages/ProjectDelivery/projectDeliveryGallery";
import GIZPage from "./pages/ProjectDelivery/employabilityGIZgallery";
import PiggeryTrainingPage from "./pages/ProjectDelivery/piggeryTrainingGallery";
import LSETFPage from "./pages/ProjectDelivery/lsetfGallery";
import InnkeeperHackathonGalleryPage from "./pages/ProjectDelivery/innkeeperHackathonGallery";
import ITFGalleryPage from "./pages/ProjectDelivery/ITFGallery";
import EnterpriseSupport from "./pages/ProjectDelivery/EnterpriseSupport";
import EcosystemEvents from "./pages/ProjectDelivery/EcosystemEvents";
import TalentDevelopment from "./components/AllCards/TalentsDevelopment";
// import LSETFGalleryPage from "./pages/Events/LSETFVisitGallery";
// import USADFGalleryPage from "./pages/Events/usadfGallery";

//Hub Services
import HubServicesPage from "./pages/Services/HubServices";
import HubServicesDigitalMarketing from "./pages/Services/HubServicesDigitalMarketing";
import HubServicesAccounting from "./pages/Services/HubServicesAccounting";
import HubServicesLegal from "./pages/Services/HubServicesLegal";
import HubServicesTech from "./pages/Services/HubServicesTech";
import GrowthAsAservice from "./pages/Services/GaaS";
import CoWorking from "./pages/Services/coWorking";
import TalentPlacement from "./pages/Services/TalentPlacement";
import HubMembership from "./pages/Services/HubMembership";
import MSMEMarketplace from "./pages/Services/MSMEMarketplace";
//Initiatives
import FUTATechpic from "./pages/Initiatives/FUTATechpic";
import DigiPlus from "./pages/DigiPlus";

//WhoWeAre
import TeamPage from "./pages/WhoWeAre/TeamPage";
import AboutUs from "./pages/WhoWeAre/aboutUs";
import BlogPage from "./pages/Insights/blog";

//Events
import EventsPage from "./pages/Events/events";
import EventsNew from "./pages/EventsNew/EventsNew";
import EventsGalleryPage from "./pages/Events/eventsGallery";
import FourthYearAnniversary from "./pages/Events/fourthYearAnniversary";
import DemoDayPage from "./pages/Events/demoDay";
import FounderMeetupPage from "./pages/Events/foundersMeetup";
import FoundersMeetupGalleryPage from "./pages/Events/foundersMeetupGallery";
import { FoundersPictureGalleryCardsTwo } from "./pages/Events/foundersMeetupGallery";
import DemoDayGalleryPage from "./pages/Events/demoDayGallery";
import GearUpExposePage from "./pages/Events/GearUp/gearUpExpose";
import GearUpShowcasePage from "./pages/Events/GearUp/gearUpShowcase";
import { Footer } from "./components/Footer";
import { FooterNew, NewFooter } from "./components/newFooter";
// import FAQ from "./pages/Insights/FAQ";
import { Popupmodal } from "./components/Footer";
import { RequestForm } from "./components/Forms/ServicesForms";
import { ScrollButton } from "./components/Buttons/scrollToTop";

// NewEvent PAge
import FMU_Q1 from "./pages/EventsNew/FMUQ1";
import FMU_Q2 from "./pages/EventsNew/FMUQ2";
import FMU_Q3 from "./pages/EventsNew/FMUQ3";

//Resources
// import Resources from "./pages/Resources/Resources";
import { ResourcesNew } from "./pages/ResourcesNew/Resources";
import { ABCBusinessAccountingReadMore } from "./pages/Resources/ArticleReadMore";
import { KeepingAccountingRecordsReadMore } from "./pages/Resources/ArticleReadMore";
import { NigerianStartupActsReadMore } from "./pages/Resources/ArticleReadMore";
import VideoReadMore from "./pages/Resources/VideoReadMore";
import VideoDetail from "./pages/Resources/VideoCategory";

//Careers
import BDandVentureStudioOfficer from "./pages/Careers/BDandVentureStudioOfficer";
import HRIntern from "./pages/Careers/HRIntern";
import AccountingIntern from "./pages/Careers/AccountingIntern";
import TalentFair24 from "./pages/EventsNew/TalentFair24";
import FAQ from "./components/FAQ";

//Insights
import { Insights } from "./pages/Insights/insights";
import { ReadMoreInsights } from "./pages/Insights/readMoreInsights";
import DBN from "./pages/ProjectDelivery/Programs/DBN";
import MIREPlus from "./pages/ProjectDelivery/Programs/MIREPlus";
import GearUp from "./pages/ProjectDelivery/Programs/GearUp";
import ESP from "./pages/ProjectDelivery/Programs/ESP";

function App() {
  return (
    <BrowserRouter>
      <FooterItemToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="our-model" element={<OurModelPage />} />
          {/* <Route path="portfolio" element={<PortfolioPage />} /> */}
          <Route path="ease-soiless" element={<EaseSoilessPortfolioPage />} />
          <Route path="innkeeper" element={<InnkeeperPortfolioPage />} />
          <Route path="mind-afrik" element={<MindAfrikPortfolioPage />} />
          <Route path="haven" element={<HavenPortfolioPage />} />
          <Route path="legalmo" element={<LegalMoPortfolioPage />} />
          <Route path="trulance" element={<TrulancePortfolioPage />} />
          <Route path="initiatives" element={<ProjectDeliveryPage />} />
          <Route path="DBN" element={<DBN />} />
          <Route path="MIREPlus" element={<MIREPlus />} />
          <Route path="GearUp" element={<GearUp />} />
          <Route path="ESP" element={<ESP />} />
          <Route
            path="project-delivery-gallery"
            element={<ProjectDeliveryGalleryPage />}
          />
          <Route path="Enterprise-Support" element={<EnterpriseSupport />} />
          <Route path="Ecosystem-Events" element={<EcosystemEvents />} />
          <Route path="Talent-Development" element={<TalentDevelopment />} />
          <Route path="GIZ-employability-gallery" element={<GIZPage />} />
          <Route path="piggery-training" element={<PiggeryTrainingPage />} />
          <Route path="LSETF-gallery" element={<LSETFPage />} />
          <Route
            path="innkeeper-hackathon-gallery"
            element={<InnkeeperHackathonGalleryPage />}
          />
          <Route path="ITF-training-gallery" element={<ITFGalleryPage />} />
          {/* <Route path="hub-services" element={<HubServicesPage />} /> */}
          <Route path="FUTA-techpic" element={<FUTATechpic />} />
          <Route path="digiplus" element={<DigiPlus />} />

          {/* New ventureStudio  */}
          <Route path="portfolio" element={<VentureStudio />} />

          <Route
            path="digitalmarketing"
            element={<HubServicesDigitalMarketing />}
          />
          <Route path="accounting" element={<HubServicesAccounting />} />
          <Route path="legal" element={<HubServicesLegal />} />
          <Route path="product-development" element={<HubServicesTech />} />
          <Route path="growth-advisory" element={<GrowthAsAservice />} />
          <Route path="coworking" element={<CoWorking />} />
          <Route path="talent-placement" element={<TalentPlacement />} />
          <Route path="hub-membership" element={<HubMembership />} />
          <Route path="msme-marketplace" element={<MSMEMarketplace />} />
          <Route path="FAQ" element={<FAQ />} />

          <Route path="about" element={<AboutUs />} />
          {/* <Route path="about" element={<About />} /> */}
          <Route path="team" element={<TeamPage />} />
          {/* <Route path="blog" element={<BlogPage />} /> */}
          {/* <Route path="faq" element={<FAQ />} /> */}
          {/* <Route path="events" element={<EventsPage />} /> */}
          <Route path="events" element={<EventsNew />} />
          <Route path="events-gallery" element={<EventsGalleryPage />} />
          <Route path="demo-day" element={<DemoDayPage />} />
          <Route path="founders-meetup" element={<FounderMeetupPage />} />
          <Route
            path="founders-meetup-gallery"
            element={<FoundersMeetupGalleryPage />}
          />
          <Route
            path="founders-meetup-gallery-2023"
            element={<FoundersPictureGalleryCardsTwo />}
          />
          <Route path="demo-day-gallery" element={<DemoDayGalleryPage />} />
          <Route
            path="4th-year-anniversary"
            element={<FourthYearAnniversary />}
          />
          {/* NewEvents Gallery  */}
          <Route path="fmu-q1-gallery" element={<FMU_Q1 />} />
          <Route path="fmu-q2-gallery" element={<FMU_Q2 />} />
          <Route path="fmu-q3-gallery" element={<FMU_Q3 />} />
          <Route path="talent-fair-gallery" element={<TalentFair24 />} />
          <Route path="gear-up-expose" element={<GearUpExposePage />} />
          <Route path="gear-up-showcase" element={<GearUpShowcasePage />} />
          <Route path="privacy-policy" element={<PrivacyAndPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="genderpolicy" element={<GenderPolicy />} />
          <Route path="*" element={<Error404 />} />
          {/* <Route path="resourcesOld" element={<Resources />} /> */}
          <Route path="resources" element={<ResourcesNew />} />
          <Route
            path="ABCBusinessAccounting"
            element={<ABCBusinessAccountingReadMore />}
          />
          <Route
            path="KeepingAccountingRecords"
            element={<KeepingAccountingRecordsReadMore />}
          />
          <Route
            path="NigerianStartupActs"
            element={<NigerianStartupActsReadMore />}
          />
          <Route path="video" element={<VideoReadMore />} />
          <Route path="business-model-canva" element={<VideoDetail />} />

          {/* Careers */}
          <Route
            path="BDandVentureStudioOfficer"
            element={<BDandVentureStudioOfficer />}
          />
          <Route path="HRIntern" element={<HRIntern />} />
          <Route path="AccountingIntern" element={<AccountingIntern />} />
          <Route path="Insights" element={<Insights />} />
          {/* <Route path="ReadMoreInsights" element={<ReadMoreInsights />} /> */}
          <Route path="/read-more/:id" element={<ReadMoreInsights />} />
        </Routes>
        {/* https://8thgearpartners.com/digital-skills-scholarship */}
        <footer>
          <NewFooter />
          {/* <Footer /> */}
          {/* <ScrollButton /> */}
        </footer>
      </FooterItemToTop>
      {/* WhatsApp icon */}
      {/* <a
        href="https://wa.me/2348094818883"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer" 
      >
        <i class="bi bi-whatsapp whatsapp-icon"></i>
      </a> */}
      {/* <footer>
        <Footer />
        <ScrollButton />
      </footer> */}
    </BrowserRouter>
  );
}

export default App;
