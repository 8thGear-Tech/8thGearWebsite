import * as React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import { InstagramBtn } from "./components/Buttons/BlogBtn";
import { LinkedInBtn } from "./components/Buttons/BlogBtn";
import { ShareBtn } from "./components/Buttons/BlogBtn";
import { MediaCards } from "./components/AllCards/MediaCards";
import { GalleryGizCards } from "./components/AllCards/MediaCards";
import { UsadfCards } from "./components/AllCards/MediaCards";
import { FutaCards } from "./components/AllCards/MediaCards";
import { LsetfvisitCards } from "./components/AllCards/MediaCards";
import { LsetfCards } from "./components/AllCards/MediaCards";
import { FounderCards } from "./components/AllCards/MediaCards";
import { ProjectCards } from "./components/AllCards/MediaCards";
import { DemodayCards } from "./components/AllCards/MediaCards";
import { GalleryCards } from "./components/AllCards/MediaCards";
import { GalleryVideoCards } from "./components/AllCards/MediaCards";

function App() {
  return (
    <BrowserRouter>
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>{/* <Route path="/" element={<InstagramBtn />} /> */}</Routes>
      {/* <InstagramBtn /> */}
      {/* <LinkedInBtn /> */}
      {/* <ShareBtn /> */}
      {/* <MediaCards /> */}
      {/* <GalleryGizCards /> */}
      {/* <UsadfCards /> */}
      {/* <FutaCards /> */}
      {/* <LsetfvisitCards /> */}
      {/* <LsetfCards /> */}
      {/* <FounderCards /> */}
      {/* <ProjectCards /> */}
      {/* <DemodayCards /> */}
      <GalleryCards />
      <GalleryVideoCards />
    </BrowserRouter>
  );
}

export default App;
