import React from "react";
import { Navbar13 } from "../././../components/Navbar";
import { FAQ2 } from "../../components/FAQ";
import FAQ from "../../components/FAQ";
import { FAQ1 } from "../../components/FAQ";
// import Footer from "../../components/Footer";

const FAQS = () => {
  return (
    <>
      <Navbar13 />
      <h1 className="h2 mt-5 text-center">FAQ SESSION</h1>
      <br />
      <br />
      <FAQ />
      <FAQ1 />
      <FAQ2 />
      <br />
      <br />
      {/* <Footer /> */}
    </>
  );
};

export default FAQS;
