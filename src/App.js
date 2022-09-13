import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Constructionpage from "./pages/constructionpage";
import ProjectDeliveryPage from "./pages/ProjectDelivery/projectDelivery";
import ManagedServicesPage from "./pages/Services/managedServices";
import OurModelPage from "./pages/Studio/ourModel";
import IndividualPortfolioPage from "./pages/Studio/individualPortfolio";
// import { useCountdown } from "./components/AllCards/UseCountdown";
// import Teamcard from "./components/AllCards/TeamCard";
// import Eventsbutton from "./components/Buttons/EventsBtn";
// import { LetUsKnowBtn } from "./components/Buttons/EventsBtn";
// import { TeamCard } from "./components/AllCards/TeamCard";
import Portfolios from "./pages/Studio/individualPortfolio";
// import Portfolios from "./pages/portfolios";
import { BookNowBtn } from "./components/Buttons/ServicesBtn";
import { BookaSessionBtn } from "./components/Buttons/ServicesBtn";
import { BookaFreeSessionBtn } from "./components/Buttons/ServicesBtn";
import { OnHoverReadMoreBtn } from "./components/Buttons/ServicesBtn";
import { AllPortfoliosLogoCard } from "./components/AllCards/MediaCards";
import { ProjectDeliveryManagedServicesCard } from "./components/AllCards/MediaCards";
import { ManagedServicesRequestForm } from "./components/Forms/ServicesForms";
// import { useCountdown } from "./components/AllCards/UseCountdown";
// import Teamcard from "./components/AllCards/TeamCard";
// import Eventsbutton from "./components/Buttons/EventsBtn";
// import { LetUsKnowBtn } from "./components/Buttons/EventsBtn";
// import { TeamCard } from "./components/AllCards/TeamCard";

function App() {
  return (
    <BrowserRouter>
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projectdelivery" element={<ProjectDeliveryPage />} />
        <Route path="managedservices" element={<ManagedServicesPage />} />
        <Route path="ourmodel" element={<OurModelPage />} />
        <Route path="portfolios" element={<IndividualPortfolioPage />} />
        {/* <Route path="teamcard" element={<Teamcard />} /> */}
        <Route path="constructionpage" element={<Constructionpage />} />
        {/* <Route path="Eventsbutton" element={<Eventsbutton />} /> */}
        {/* <Route path="LetUsKnowBtn" element={{ LetUsKnowBtn }} */}
        <Route path="portfolios" element={<Portfolios />} />
        {/* <Route path="portfolios" element={<Portfolios />} /> */}
        <Route path="button1" element={<BookNowBtn />} />
        <Route path="button3" element={<BookaFreeSessionBtn />} />
        <Route path="button4" element={<OnHoverReadMoreBtn />} />
        <Route path="button5" element={<AllPortfoliosLogoCard />} />
        <Route
          path="button6"
          element={<ProjectDeliveryManagedServicesCard />}
        />
        <Route path="button7" element={<ManagedServicesRequestForm />} />
      </Routes>
      {/* <UnderconstructionNavbar /> */}
      {/* <Route path="teamcard" element={<Teamcard />} /> */}

      {/* <Route path="LetUsKnowBtn" element={{ LetUsKnowBtn }} */}

      {/* <UnderconstructionNavbar /> */}
      {/* <TeamCard /> */}
    </BrowserRouter>
  );
}

export default App;
