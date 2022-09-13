import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import NavBar from "./components/Navbar";
// import { ManagedServicesPageTestimonialCard } from "../src/components/AllCards/TestimonialCards";
// import { Lad } from "./components/Forms";
// import { CoWorkingPageTestimonialCard } from "../src/components/AllCards/TestimonialCards";
// import { AboutUs } from "./components/AllCards/TestimonialCards";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <ManagedServicesPageTestimonialCard /> */}
      {/* <Lad /> */}
      {/* <CoWorkingPageTestimonialCard /> */}
      {/* <AboutUs /> */}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
