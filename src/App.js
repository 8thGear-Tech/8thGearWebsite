import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
// import Constructionpage from "./pages/constructionpage";
import Events from "../src/pages/Events/events";
import ProjectDelivery from "./pages/Project Delivery/projectDelivery";
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
        {/* <Route path="events" element={<Events />} /> */}

        {/* <Route path="teamcard" element={<Teamcard />} /> */}

        {/* <Route path="constructionpage" element={<Constructionpage />} /> */}
        {/* <Route path="constructionpage" element={<Constructionpage />} /> */}
        {/* <Route path="Eventsbutton" element={<Eventsbutton />} /> */}
        {/* <Route path="LetUsKnowBtn" element={{ LetUsKnowBtn }} */}

        {/* <UnderconstructionNavbar /> */}
      </Routes>
      {/* <TeamCard /> */}
      <ProjectDelivery />
    </BrowserRouter>
  );
}

export default App;
