import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
// import Constructionpage from "./pages/constructionpage";
// import AnimationVideoHero from "./components/Hero/VideoHero";
// import JoinTheTeamForm from "./components/Forms/EnquiresandSuggestionForm";
import { Servicehero } from "./components/Hero/BGColorandTextHero";
// import ManagedServicesHero from "./components/Hero/BGColorandTextHero";
// import { useCountdown } from "./components/AllCards/UseCountdown";
// import Teamcard from "./components/AllCards/TeamCard";
// import Eventsbutton from "./components/Buttons/EventsBtn";
// import { LetUsKnowBtn } from "./components/Buttons/EventsBtn";
// import { TeamCard } from "./components/AllCards/TeamCard";

function App() {
  return (
    <div>
      <Servicehero />
      {/* <ManagedServicesHero /> */}
      {/* <AnimationVideoHero /> */}
      {/* <JoinTheTeamForm /> */}
      <BrowserRouter>
        {/* <h1>Welcome to React Router!</h1> */}
        <Routes>
          {/* <Route path="servicehero" element={{ Servicehero }} /> */}
          {/* <Servicehero /> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="teamcard" element={<AnimationVideoHero />} /> */}
          {/* <Route path="teamcard" element={<Teamcard />} /> */}
          {/* <Route path="constructionpage" element={<Constructionpage />} /> */}
          {/* <Route path="Eventsbutton" element={<Eventsbutton />} /> */}
          {/* <Route path="LetUsKnowBtn" element={{ LetUsKnowBtn }} */}

          {/* <UnderconstructionNavbar /> */}
        </Routes>
        {/* <TeamCard /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
