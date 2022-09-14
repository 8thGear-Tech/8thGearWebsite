import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/home";
import { OnHoverCard } from "../src/components/AllCards/TriggeredCards";
import { JointheTeamBtn } from "../src/components/Buttons/ContactBtn";
import { SubmitFormBtn } from "../src/components/Buttons/ContactBtn";
import { JoinStudioForm } from "../src/components/Forms";

function App() {
  return (
    <BrowserRouter>
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>{/* <Route path="/" element={<OnHoverCard />} /> */}</Routes>
      <Route Paths="/" element={<JoinStudioForm />} />

      <JointheTeamBtn />
      <SubmitFormBtn />
      <OnHoverCard />
    </BrowserRouter>
  );
}

export default App;
