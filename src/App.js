import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BlogPage from "./pages/blog";
import ManagedServicesPage from "./pages/managedServices";
import Home from "./pages/home";
import { LearnMoreBtn } from "./components/Buttons/ProjectDeliveryBtn";
import { RequestForProposalBtn } from "./components/Buttons/ProjectDeliveryBtn";
import { ProjectDeliveryViewMoreBtn } from "./components/Buttons/ProjectDeliveryBtn";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogPage />} />
          {/* <Route path="/" element={<ManagedServicesPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
