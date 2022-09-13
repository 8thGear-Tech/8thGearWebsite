import * as React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
// import Portfolios from "./pages/portfolios";
import { BookNowBtn } from "./components/Buttons/ServicesBtn";
import { BookaSessionBtn } from "./components/Buttons/ServicesBtn";
import { BookaFreeSessionBtn } from "./components/Buttons/ServicesBtn";
import { OnHoverReadMoreBtn } from "./components/Buttons/ServicesBtn";
import { AllPortfoliosLogoCard } from "./components/AllCards/MediaCards";
import { ProjectDeliveryManagedServicesCard } from "./components/AllCards/MediaCards";
import Constructionpage from "./pages/constructionpage";
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
        {/* <Route path="portfolios" element={<Portfolios />} /> */}
        <Route path="button1" element={<BookNowBtn />} />
        <Route path="button3" element={<BookaFreeSessionBtn />} />
        <Route path="button4" element={<OnHoverReadMoreBtn />} />
        <Route path="button5" element={<AllPortfoliosLogoCard />} />
        <Route path="button6" element={<ProjectDeliveryManagedServicesCard />} />
        <Route path="button7" element={<ManagedServicesRequestForm />} />
        <Route path="constructionpage" element={<Constructionpage />} />
      </Routes>
        {/* <Route path="teamcard" element={<Teamcard />} /> */}
       
        {/* <Route path="LetUsKnowBtn" element={{ LetUsKnowBtn }} */}

        {/* <UnderconstructionNavbar /> */}
      {/* <TeamCard /> */}
    </BrowserRouter>
  );
}

export default App;
