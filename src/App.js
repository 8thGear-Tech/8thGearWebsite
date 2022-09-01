
import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter> 
    
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>
   
  );
}

export default App;
