import * as React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import TeamPage from "./pages/WhoWeAre/TeamPage";
import BlogPage from "./pages/Insights/blog";
import Home from "./pages/home";
import { LearnMoreBtn } from "./components/Buttons/ProjectDeliveryBtn";
import { RequestForProposalBtn } from "./components/Buttons/ProjectDeliveryBtn";
import { ProjectDeliveryViewMoreBtn } from "./components/Buttons/ProjectDeliveryBtn";
// import Navbar from "./components/Navbar";
// import { ManagedServicesPageTestimonialCard } from "../src/components/AllCards/TestimonialCards";
// import { Lad } from "./components/Forms";
// import { CoWorkingPageTestimonialCard } from "../src/components/AllCards/TestimonialCards";
// import { AboutUs } from "./components/AllCards/TestimonialCards";
import Constructionpage from "./pages/constructionpage";
// import ProjectDeliveryPage from "./pages/ProjectDelivery/projectDelivery";
import ManagedServicesPage from "./pages/Services/managedServices";
import OurModelPage from "./pages/Studio/ourModel";
import InnkeeperPortfolioPage from "./pages/Studio/InnkeeperPortfolio";
import HavenPortfolioPage from "./pages/Studio/HavenPortfolio";
import MindAfrikPortfolioPage from "./pages/Studio/MindAfrikPortfolio";
import EaseSoilessPortfolioPage from "./pages/Studio/EaseSoilessPortfolio";
import PortfolioPage from "./pages/Studio/portfolio";
import EventsPage from "./pages/Events/events";
import FounderMeetupPage from "./pages/Events/foundersMeetup";
import ManagedServicesDigitalMarketing from "./pages/Services/managedServicesDigitalMarketing";
import GrowthAsAservice from "./pages/Services/GaaS";
// import { Gerians } from "./components/AllCards/TeamCard";
// import { ManagedServicesRequestForm } from "./components/Forms/ServicesForms";

// import Constructionpage from "./pages/constructionpage";
import Events from "../src/pages/Events/events";
import ProjectDeliveryPage from "./pages/ProjectDelivery/projectDelivery";
// import Constructionpage from "./pages/constructionpage";
// import AnimationVideoHero from "./components/Hero/VideoHero";
// import JoinTheTeamForm from "./components/Forms/EnquiresandSuggestionForm";
// import { Servicehero } from "./components/Hero/BGColorandTextHero";
import { PortfolioHero } from "./components/Hero/BGColorandTextHero";
// import { useCountdown } from "./components/AllCards/UseCountdown";
// import Teamcard from "./components/AllCards/TeamCard";
// import Eventsbutton from "./components/Buttons/EventsBtn";
// import { LetUsKnowBtn } from "./components/Buttons/EventsBtn";
// import { TeamCard } from "./components/AllCards/TeamCard";
import Portfolios from "./pages/Studio/InnkeeperPortfolio";
// import Portfolios from "./pages/portfolios";
import { BookNowBtn } from "./components/Buttons/ServicesBtn";
import { BookaSessionBtn } from "./components/Buttons/ServicesBtn";
import { BookaFreeSessionBtn } from "./components/Buttons/ServicesBtn";
import { OnHoverReadMoreBtn } from "./components/Buttons/ServicesBtn";
// import { AllPortfoliosLogoCard } from "./components/AllCards/MediaCards";
// import { ProjectDeliveryManagedServicesCard } from "./components/AllCards/MediaCards";
import { ManagedServicesRequestForm } from "./components/Forms/ServicesForms";
// import { useCountdown } from "./components/AllCards/UseCountdown";
// import TeamCard from "./components/AllCards/TeamCard";
// import Eventsbutton from "./components/Buttons/EventsBtn";
// import { LetUsKnowBtn } from "./components/Buttons/EventsBtn";
// import { TeamCard } from "./components/AllCards/TeamCard";
import Footer from "./components/Footer";
import { InstagramBtn } from "./components/Buttons/BlogBtn";
import { LinkedInBtn } from "./components/Buttons/BlogBtn";
import { ShareBtn } from "./components/Buttons/BlogBtn";
import { MediaCards } from "./components/AllCards/MediaCards";
import { GalleryGizCards } from "./components/AllCards/MediaCards";
import { UsadfCards } from "./components/AllCards/MediaCards";
import { FutaCards } from "./components/AllCards/MediaCards";
import { LsetfvisitCards } from "./components/AllCards/MediaCards";
import { LsetfCards } from "./components/AllCards/MediaCards";
import { FounderCards } from "./components/AllCards/MediaCards";
import { ProjectCards } from "./components/AllCards/MediaCards";
import { DemodayCards } from "./components/AllCards/MediaCards";
import { GalleryCards } from "./components/AllCards/MediaCards";
import { GalleryVideoCards } from "./components/AllCards/MediaCards";

function App() {
  return (
    <BrowserRouter>
      {/* <ManagedServicesPageTestimonialCard /> */}
      {/* <Lad /> */}
      {/* <CoWorkingPageTestimonialCard /> */}
      {/* <AboutUs /> */}
      {/* <Navbr /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projectdelivery" element={<ProjectDeliveryPage />} />
        <Route path="managedservices" element={<ManagedServicesPage />} />
        <Route path="ourmodel" element={<OurModelPage />} />
        <Route path="innkeeper" element={<InnkeeperPortfolioPage />} />
        <Route path="mindafrik" element={<MindAfrikPortfolioPage />} />
        <Route path="haven" element={<HavenPortfolioPage />} />
        {/* <Route path="mindafrik" element={<MindAfrikPortfolioPage />} /> */}
        <Route path="easesoiless" element={<EaseSoilessPortfolioPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="foundersmeetup" element={<FounderMeetupPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="growth-as-a-service" element={<GrowthAsAservice />} />
        <Route path="team" element={<TeamPage />} />
        <Route
          path="digitalmarketing"
          element={<ManagedServicesDigitalMarketing />}
        />
        {/* <Route path="teamcard" element={<TeamCard />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<BlogPage />} /> */}
        {/* <Route path="/" element={<ManagedServicesPage />} /> */}
        {/* <Route path="teamcard" element={<Teamcard />} /> */}
        <Route path="constructionpage" element={<Constructionpage />} />
        {/* <Route path="team" element={<Gerians />} /> */}
        {/* <Route path="events" element={<Events />} /> */}

        {/* <Route path="teamcard" element={<Teamcard />} /> */}

        {/* <Route path="constructionpage" element={<Constructionpage />} /> */}
        {/* <Route path="constructionpage" element={<Constructionpage />} /> */}
        {/* <Route path="Eventsbutton" element={<Eventsbutton />} /> */}
        {/* <Route path="LetUsKnowBtn" element={{ LetUsKnowBtn }} */}
        <Route path="portfolios" element={<Portfolios />} />
        {/* <Route path="portfolios" element={<Portfolios />} /> */}
        <Route path="button1" element={<BookNowBtn />} />
        <Route path="button3" element={<BookaFreeSessionBtn />} />
        <Route path="button4" element={<OnHoverReadMoreBtn />} />
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
        <Route path="button8" element={<ManagedServicesPage />} />
        <Route path="button9" element={<ProjectDeliveryPage />} />
        <Route path="button10" element={<ManagedServicesRequestForm />} />

        <Route path="constructionpage" element={<Constructionpage />} />
      </Routes>
      {/* <UnderconstructionNavbar /> */}
      {/* <Route path="teamcard" element={<Teamcard />} /> */}

      {/* <Route path="LetUsKnowBtn" element={{ LetUsKnowBtn }} */}

      {/* <UnderconstructionNavbar /> */}
      {/* <TeamCard /> */}
      {/* <footer>
        <Footer />
      </footer> */}
      <Routes>{/* <Route path="/" element={<InstagramBtn />} /> */}</Routes>
      {/* <InstagramBtn /> */}
      {/* <LinkedInBtn /> */}
      {/* <ShareBtn /> */}
      {/* <MediaCards /> */}
      {/* <GalleryGizCards /> */}
      {/* <UsadfCards /> */}
      {/* <FutaCards /> */}
      {/* <LsetfvisitCards /> */}
      {/* <LsetfCards /> */}
      {/* <FounderCards /> */}
      {/* <ProjectCards /> */}
      {/* <DemodayCards /> */}
      {/* <GalleryCards />
      <GalleryVideoCards /> */}
    </BrowserRouter>
  );
}

export default App;
