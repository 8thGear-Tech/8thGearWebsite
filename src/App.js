import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import TeamsPage from "./pages/TeamPage";
import Constructionpage from "./pages/constructionpage";
// import { useCountdown } from "./components/AllCards/UseCountdown";
// import TeamCard from "./components/AllCards/TeamCard";
// import Eventsbutton from "./components/Buttons/EventsBtn";
// import { LetUsKnowBtn } from "./components/Buttons/EventsBtn";
// import { TeamCard } from "./components/AllCards/TeamCard";

function App() {
  return (
    <BrowserRouter>
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="teampage" element={<TeamsPage />} />
        {/* <Route path="constructionpage" element={<Constructionpage />} /> */}
        {/* <Route path="Eventsbutton" element={<Eventsbutton />} /> */}
        {/* <Route path="LetUsKnowBtn" element={{ LetUsKnowBtn }} */}

        {/* <UnderconstructionNavbar /> */}
      </Routes>
      {/* <TeamCard /> */}
    </BrowserRouter>
  );
}

export default App;
