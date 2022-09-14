import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Constructionpage from "./pages/constructionpage";
import {ManagedServicesRequestBtn} from "./components/Buttons/ServicesBtn"
import {PreviousBtn} from "./components/Buttons/PortfolioBtn"
import {NextBtn} from "./components/Buttons/PortfolioBtn"
import {EightgeariansPopUpCard} from "./components/AllCards/TriggeredCards"
//import {EIRDataPopUpCard} from "./components/AllCards/TriggeredCards"
//import {AdvisoryBoardOnHoverCard} from "./components/AllCards/TriggeredCards"
import Request from "./components/Forms/ServicesForms";
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
        {/* <Route path="teamcard" element={<Teamcard />} /> */}
        <Route path="constructionpage" element={<Constructionpage />} />
        <Route path="request" element={<ManagedServicesRequestBtn />} />
        <Route path="prev" element={<PreviousBtn />} />
        <Route path="next" element={<NextBtn />} />
        <Route path="8thcard" element={<EightgeariansPopUpCard/>} />
        {/* <Route path="Eir" element={<EIRDataPopUpCard />} /> */}
        {/* <Route path="Advi" element={<AdvisoryBoardOnHoverCard />} /> */}
        <Route path="req" element={<Request />} />
        {/* <Route path="Eventsbutton" element={<Eventsbutton />} /> */}
        {/* <Route path="LetUsKnowBtn" element={{ LetUsKnowBtn }} */}

        {/* <UnderconstructionNavbar /> */}
      </Routes>
      {/* <TeamCard /> */}
    </BrowserRouter>
  );
}

export default App;
