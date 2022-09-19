import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import TeamsPage from "./pages/TeamPage";
import Events from "./pages/events";
import Constructionpage from "./pages/constructionpage";
import CoWorking from "./pages/coWorking";

function App() {
  return (
    <BrowserRouter>
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="teampage" element={<TeamsPage />} />
        <Route path="events" element={<Events />} />
        <Route path="constructionpage" element={<Constructionpage />} />
        <Route path="coworking" element={<CoWorking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
