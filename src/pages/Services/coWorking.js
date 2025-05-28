import { GetToKnowUs } from "../coworkingNew/GetToKnowUs";
import { Testimonials } from "../coworkingNew/Testimonies";
import { Voucher } from "../coworkingNew/Voucher";
import { Hero } from "../coworkingNew/Hero";
import OurPriceRange from "../../components/OurPriceRange";
import Podcast from "../../components/Podcast";
import { OurNewSpaces } from "../coworkingNew/OurNewSpaces";
import { HomepageNav } from "../../components/Navbar";

const CoWorking = () => {
  return (
    <div className="mw-50">
      <HomepageNav />
      <Hero />
      <OurNewSpaces />
      <GetToKnowUs />
      <Voucher />
      <OurPriceRange />
      <Testimonials />
      <Podcast />
    </div>
  );
};

export default CoWorking;
