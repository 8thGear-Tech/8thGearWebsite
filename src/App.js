import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import NavBar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
