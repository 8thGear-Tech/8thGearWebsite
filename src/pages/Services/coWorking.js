import { GetToKnowUs } from "../coworkingNew/GetToKnowUs";
import { Testimonies } from "../coworkingNew/Testimonies";
import { Voucher } from "../coworkingNew/Voucher";
import { Hero } from "../coworkingNew/Hero";
import OurPriceRange from "../../components/OurPriceRange";
import Podcast from "../../components/Podcast";
import { OurNewSpaces } from "../coworkingNew/OurNewSpaces";

const CoWorking = () => {
  return (
    <div className="mw-50">
      <Hero />
      <OurNewSpaces />
      <GetToKnowUs />
      <Voucher />
      <OurPriceRange />
      <Podcast />
    </div>
  );
};

export default CoWorking;
