import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Constructionpage from "./pages/constructionpage";
import { ManagedServicesRequestBtn } from "./components/Buttons/ServicesBtn";
import { PreviousBtn } from "./components/Buttons/PortfolioBtn";
import { NextBtn } from "./components/Buttons/PortfolioBtn";

import Request from "./components/Forms/ServicesForms";
import { BlogPost } from "./components/BlogPost";

//Studio
import OurModelPage from "./pages/Studio/ourModel";
import PortfolioPage from "./pages/Studio/portfolio";
import InnkeeperPortfolioPage from "./pages/Studio/InnkeeperPortfolio";
import HavenPortfolioPage from "./pages/Studio/HavenPortfolio";
import MindAfrikPortfolioPage from "./pages/Studio/MindAfrikPortfolio";
import EaseSoilessPortfolioPage from "./pages/Studio/EaseSoilessPortfolio";

//Project Delivery
import ProjectDeliveryPage from "./pages/ProjectDelivery/projectDelivery";
import ProjectDeliveryGalleryPage from "./pages/ProjectDelivery/projectDeliveryGallery";
import GIZPage from "./pages/ProjectDelivery/employabilityGIZgallery";
import PiggeryTrainingPage from "./pages/ProjectDelivery/piggeryTrainingGallery";
import LSETFPage from "./pages/ProjectDelivery/lsetfGallery";
import InnkeeperHackathonGalleryPage from "./pages/ProjectDelivery/innkeeperHackathonGallery";
import ITFGalleryPage from "./pages/ProjectDelivery/ITFGallery";
// import LSETFGalleryPage from "./pages/Events/LSETFVisitGallery";
// import USADFGalleryPage from "./pages/Events/usadfGallery";

//Managed Services
import ManagedServicesPage from "./pages/Services/managedServices";
import ManagedServicesDigitalMarketing from "./pages/Services/managedServicesDigitalMarketing";
import ManagedServicesAccounting from "./pages/Services/managedServicesAccounting";
import ManagedServicesLegal from "./pages/Services/managedServicesLegal";
import ManagedServicesTech from "./pages/Services/managedServicesTech";
import GrowthAsAservice from "./pages/Services/GaaS";
import CoWorking from "./pages/Services/coWorking";

//WhoWeAre
import TeamPage from "./pages/WhoWeAre/TeamPage";
import AboutUs from "./pages/WhoWeAre/aboutUs";
import BlogPage from "./pages/Insights/blog";

//Events
import EventsPage from "./pages/Events/events";
import EventsGalleryPage from "./pages/Events/eventsGallery";
import DemoDayPage from "./pages/Events/demoDay";
import FounderMeetupPage from "./pages/Events/foundersMeetup";
import FoundersMeetupGalleryPage from "./pages/Events/foundersMeetupGallery";
import DemoDayGalleryPage from "./pages/Events/demoDayGallery";
import { Footer } from "./components/Footer";
import FAQ from "./pages/Insights/FAQ";
// import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="our-model" element={<OurModelPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="ease-soiless" element={<EaseSoilessPortfolioPage />} />
        <Route path="innkeeper" element={<InnkeeperPortfolioPage />} />
        <Route path="mind-afrik" element={<MindAfrikPortfolioPage />} />
        <Route path="haven" element={<HavenPortfolioPage />} />
        <Route path="project-delivery" element={<ProjectDeliveryPage />} />
        <Route
          path="project-delivery-gallery"
          element={<ProjectDeliveryGalleryPage />}
        />
        <Route path="GIZ-employability-gallery" element={<GIZPage />} />
        <Route path="piggery-training" element={<PiggeryTrainingPage />} />
        <Route path="LSETF-gallery" element={<LSETFPage />} />
        <Route
          path="innkeeper-hackathon-gallery"
          element={<InnkeeperHackathonGalleryPage />}
        />
        <Route path="ITF-training-gallery" element={<ITFGalleryPage />} />
        <Route path="managed-services" element={<ManagedServicesPage />} />
        <Route
          path="digitalmarketing"
          element={<ManagedServicesDigitalMarketing />}
        />
        <Route path="accounting" element={<ManagedServicesAccounting />} />
        <Route path="legal" element={<ManagedServicesLegal />} />
        <Route path="tech" element={<ManagedServicesTech />} />
        <Route path="growth-as-a-service" element={<GrowthAsAservice />} />
        {/* <Route path="coworking" element={<CoWorking />} /> */}

        <Route path="about" element={<AboutUs />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="blog" element={<BlogPage />} />
        {/* <Route path="faq" element={<FAQ />} /> */}
        <Route path="events" element={<EventsPage />} />
        <Route path="events-gallery" element={<EventsGalleryPage />} />
        <Route path="demo-day" element={<DemoDayPage />} />
        <Route path="founders-meetup" element={<FounderMeetupPage />} />
        <Route
          path="founders-meetup-gallery"
          element={<FoundersMeetupGalleryPage />}
        />
        <Route path="demo-day-gallery" element={<DemoDayGalleryPage />} />
        {/* <Route path="LSETF-visit-gallery" element={<LSETFGalleryPage />} /> */}
        {/* <Route path="USADF-gallery" element={<USADFGalleryPage />} /> */}
        {/* <Route path="pop-up" element={<EightgeariansPopUpCard1 />} /> */}
        {/* <Route path="media" element={<GalleryCards />} /> */}
        {/* <Route path="abt" element={<AboutUs />} />
        <Route path="blogpost" element={<BlogPost />} /> */}

        {/* <Route path="constructionpage" element={<Constructionpage />} />
         */}

        {/* <Route path="events" element={<Events />} /> */}

        {/* <Route path="constructionpage" element={<Constructionpage />} /> */}
        {/* <Route path="button1" element={<BookNowBtn />} />
        <Route path="button3" element={<BookaFreeSessionBtn />} />
        <Route path="button4" element={<OnHoverReadMoreBtn />} /> */}
        {/* <Route path="button5" element={<AllPortfoliosLogoCard />} />
        <Route
          path="button6"
          element={<ProjectDeliveryManagedServicesCard />}
        /> */}
        {/* <Route path="button7" element={<ManagedServicesRequestForm />} /> */}
        {/* <Route path="button5" element={<AllPortfoliosLogoCard />} /> */}
        {/* <Route path="button6" element={<PortfolioPage />} /> */}
        {/* <Route
          path="button7"
          element={<ProjectDeliveryManagedServicesCard />}
        /> */}
        {/* <Route path="button8" element={<ManagedServicesPage />} />
        <Route path="button9" element={<ProjectDeliveryPage />} /> */}
        {/* <Route path="button10" element={<ManagedServicesRequestForm />} /> */}

        {/* <Route path="constructionpage" element={<Constructionpage />} /> */}
      </Routes>
      {/* <OnHoverCard /> */}
      {/* <UnderconstructionNavbar /> */}

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
