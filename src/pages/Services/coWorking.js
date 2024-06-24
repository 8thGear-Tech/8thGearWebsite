import { GetToKnowUs } from "../coworkingNew/GetToKnowUs";
import { Testimonies } from "../coworkingNew/Testimonies";
import { Voucher } from "../coworkingNew/Voucher";
import { Hero } from "../coworkingNew/Hero";
import OurPriceRange from "../../components/OurPriceRange";
import Podcast from "../../components/Podcast";
import Clients from "../../components/Clients";
import { OurNewSpaces } from "../coworkingNew/OurNewSpaces";

const CoWorking = () => {
  return (
    <>
      <Hero />
      <OurNewSpaces />
      <GetToKnowUs />
      <Voucher />
      <OurPriceRange />
      <Podcast />
      <Clients />
      <Testimonies />
    </>
  );
};

export default CoWorking;
