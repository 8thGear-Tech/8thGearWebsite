
import * as React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Portfolios from "./pages/portfolios";
import { BookNowBtn } from "./components/Buttons/ServicesBtn";
import { BookaSessionBtn } from "./components/Buttons/ServicesBtn";
import { BookaFreeSessionBtn } from "./components/Buttons/ServicesBtn";
import { OnHoverReadMoreBtn } from "./components/Buttons/ServicesBtn";
import { AllPortfoliosLogoCard } from "./components/AllCards/MediaCards";
import { ProjectDeliveryManagedServicesCard } from "./components/AllCards/MediaCards";

function App() {
  return (
    <BrowserRouter> 
    
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolios" element={<Portfolios />} />
        <Route path="button1" element={<BookNowBtn />} />
        <Route path="button2" element={<BookaSessionBtn />} />
        <Route path="button3" element={<BookaFreeSessionBtn />} />
        <Route path="button4" element={<OnHoverReadMoreBtn />} />
        <Route path="button5" element={<AllPortfoliosLogoCard />} />
        <Route path="button6" element={<ProjectDeliveryManagedServicesCard />} />
      </Routes>

    </BrowserRouter>
   
  );
}

export default App;
