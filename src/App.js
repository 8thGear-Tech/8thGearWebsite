import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Constructionpage from "./pages/constructionpage";
import ProjectDeliveryPage from "./pages/ProjectDelivery/projectDelivery";
import ManagedServicesPage from "./pages/Services/managedServices";
import OurModelPage from "./pages/Studio/ourModel";
// import { useCountdown } from "./components/AllCards/UseCountdown";
// import Teamcard from "./components/AllCards/TeamCard";
// import Eventsbutton from "./components/Buttons/EventsBtn";
// import { LetUsKnowBtn } from "./components/Buttons/EventsBtn";
// import { TeamCard } from "./components/AllCards/TeamCard";
import Portfolios from "./pages/portfolios";
import { BookNowBtn } from "./components/Buttons/ServicesBtn";
import { BookaSessionBtn } from "./components/Buttons/ServicesBtn";
import { BookaFreeSessionBtn } from "./components/Buttons/ServicesBtn";
import { OnHoverReadMoreBtn } from "./components/Buttons/ServicesBtn";
import { AllPortfoliosLogoCard } from "./components/AllCards/MediaCards";
import { ProjectDeliveryManagedServicesCard } from "./components/AllCards/MediaCards";

function App() {
  return (
    <BrowserRouter>
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projectdelivery" element={<ProjectDeliveryPage />} />
        <Route path="managedservices" element={<ManagedServicesPage />} />
        <Route path="ourmodel" element={<OurModelPage />} />
        {/* <Route path="teamcard" element={<Teamcard />} /> */}
        <Route path="constructionpage" element={<Constructionpage />} />
        {/* <Route path="Eventsbutton" element={<Eventsbutton />} /> */}
        {/* <Route path="LetUsKnowBtn" element={{ LetUsKnowBtn }} */}
        <Route path="portfolios" element={<Portfolios />} />
        <Route path="button1" element={<BookNowBtn />} />
        <Route path="button2" element={<BookaSessionBtn />} />
        <Route path="button3" element={<BookaFreeSessionBtn />} />
        <Route path="button4" element={<OnHoverReadMoreBtn />} />
        <Route path="button5" element={<AllPortfoliosLogoCard />} />
        <Route
          path="button6"
          element={<ProjectDeliveryManagedServicesCard />}
        />
      </Routes>
      {/* <UnderconstructionNavbar /> */}
      {/* <TeamCard /> */}
    </BrowserRouter>
  );
}

export default App;
