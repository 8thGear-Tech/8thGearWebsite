import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BlogPage from "./pages/blog";
import ManagedServicesPage from "./pages/managedServices";
import Home from "./pages/home";
import { LearnMoreBtn } from "./components/Buttons/ProjectDeliveryBtn";
import { RequestForProposalBtn } from "./components/Buttons/ProjectDeliveryBtn";
import { ProjectDeliveryViewMoreBtn } from "./components/Buttons/ProjectDeliveryBtn";
import Constructionpage from "./pages/constructionpage";
// import { useCountdown } from "./components/AllCards/UseCountdown";
// import Teamcard from "./components/AllCards/TeamCard";
// import Eventsbutton from "./components/Buttons/EventsBtn";
// import { LetUsKnowBtn } from "./components/Buttons/EventsBtn";
// import { TeamCard } from "./components/AllCards/TeamCard";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<BlogPage />} /> */}
        {/* <Route path="/" element={<ManagedServicesPage />} /> */}
        {/* <Route path="teamcard" element={<Teamcard />} /> */}
        <Route path="constructionpage" element={<Constructionpage />} />
        {/* <Route path="Eventsbutton" element={<Eventsbutton />} /> */}
        {/* <Route path="LetUsKnowBtn" element={{ LetUsKnowBtn }} */}

        {/* <UnderconstructionNavbar /> */}
      </Routes>
      {/* <TeamCard /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
