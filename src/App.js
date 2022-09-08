import * as React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import { InstagramBtn } from "./components/Buttons/BlogBtn";
import { LinkedInBtn } from "./components/Buttons/BlogBtn";
import { ShareBtn } from "./components/Buttons/BlogBtn";
import { MediaCards } from "./components/AllCards/MediaCards";
import { GalleryGizCards } from "./components/AllCards/MediaCards";
import { galleryusadf } from "./components/AllCards/MediaCards";

function App() {
  return (
    <BrowserRouter>
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>{/* <Route path="/" element={<InstagramBtn />} /> */}</Routes>
      <InstagramBtn />
      <LinkedInBtn />
      <ShareBtn />
      <MediaCards />
      <GalleryGizCards />
      <galleryusadf />
    </BrowserRouter>
  );
}

export default App;
