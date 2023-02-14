import { WhatWeDoIcon } from "../../components/Icons";
import { Navbar5 } from "../../components/Navbar";
import servicesData from "../../data/managedServices.json";
import { ManagedServicesRequestBtn } from "../../components/Buttons/ServicesBtn";
import { ManagedServicesRequestForm } from "../../components/Forms/ServicesForms";
import { ContentMarketingIcon } from "../../components/Icons";
import { CopyWritingIcon } from "../../components/Icons";
import { EmailMarketingIcon } from "../../components/Icons";
import { InfluencerMarketingIcon } from "../../components/Icons";
import { SearchEngineMarketingIcon } from "../../components/Icons";
import { SearchEngineOptimizationIcon } from "../../components/Icons";
import { SocialMediaMarketingIcon } from "../../components/Icons";
import { ManagedDigitalMarketServicesHero } from "../../components/Hero/ImageandTextHero";

const managedServicesDigitalMarketing = () => {
  return (
    <>
      <Navbar5 />
      <ManagedDigitalMarketServicesHero />
      <section className="container-fluid py-4 px-4 DigitalMarketingSection managedServicesSection">
        {servicesData.digitalMarketing.map((props) => {
          const { id, title, textLeft, textRight } = props;
          return (
            <div className="">
              <div className="row py-3 justify-content-center">
                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12">
                  <h3 className="">{title}</h3> <p className="">{textLeft}</p>
                </div>
              </div>
              {/* <div className="row d-flex justify-content-center px-5">
                <div className="col-lg-12"></div>
                <div className="col-md-6 ">
                  <p className="">{textRight}</p>
                </div>
              </div> */}
              {/* icons */}
              <div className="row d-flex justify-content-center">
                {/* icon1 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center ">
                  <ContentMarketingIcon />
                  <p className="text-wrap">Content Creation</p>
                </div>
                {/*  icon2*/}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                  <CopyWritingIcon />
                  <p className="text-wrap">Copy Writing</p>
                </div>
                {/* icon3 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center ">
                  <EmailMarketingIcon />
                  <p className="text-wrap">Email Marketing</p>
                </div>
                {/* icon4 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                  <InfluencerMarketingIcon />
                  <p className="text-wrap">Influencer Marketing</p>
                </div>
                {/* icon5 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                  <SearchEngineMarketingIcon />
                  <p className="text-wrap"> Search Engine Marketing</p>
                </div>
                {/* icon6 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                  <SearchEngineOptimizationIcon />
                  <p className="text-wrap"> Search Engine Optimization</p>
                </div>
                {/* icon7 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                  <SocialMediaMarketingIcon />
                  <p className="text-wrap">Social Media Management</p>
                </div>
                {/*  icon8*/}
                {/* <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                    <i className="bi bi-people-fill" style={{ fontSize: 44 }}></i>
                    <p className="text-wrap">media Management</p>
                  </div> */}
              </div>

              {/* button */}
              <div className="text-center py-4 ">
                {/* <ManagedServicesRequestForm /> */}
                <a href="https://bit.ly/8thGearDigitalKYC" target="_blank">
                  {" "}
                  <ManagedServicesRequestBtn />
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default managedServicesDigitalMarketing;
