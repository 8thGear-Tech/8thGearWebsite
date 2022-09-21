import { WhatWeDoIcon } from "../../components/Icons";
import { Navbar5 } from "../../components/Navbar";
import servicesData from "../../data/managedServices.json";
import { ManagedServicesRequestForm } from "../../components/Forms/ServicesForms";
import { ContentMarketingIcon } from "../../components/Icons";
import { CopyWritingIcon } from "../../components/Icons";
import { EmailMarketingIcon } from "../../components/Icons";
import { InfluencerMarketingIcon } from "../../components/Icons";
import { SearchEngineMarketingIcon } from "../../components/Icons";
import { SearchEngineOptimizationIcon } from "../../components/Icons";
import { SocialMediaMarketingIcon } from "../../components/Icons";

const managedServicesDigitalMarketing = () => {
  return (
    <>
      <Navbar5 />
      <section className="p-5">
        {servicesData.digitalMarketing.map((props) => {
          const { id, title, textLeft, textRight } = props;
          return (
            <div className="DigitalMarketingSection managedServicesSection ">
              <div className="row py-3 ps-4">
                <h3 className="">{title}</h3>
              </div>
              <div className="row d-flex justify-content-center px-4 ">
                <div className="col-md-6 pe-4">
                  <p className="">{textLeft}</p>
                </div>
                <div className="col-md-6 ">
                  <p className="">{textRight}</p>
                </div>
              </div>
              {/* icons */}
              <div className="row d-flex  ">
                {/* icon1 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center mt-4">
                  <ContentMarketingIcon />
                  <p className="text-wrap">Content Marketing</p>
                </div>
                {/*  icon2*/}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                  <CopyWritingIcon />
                  <p className="text-wrap">Copy Writing</p>
                </div>
                {/* icon3 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center mt-4">
                  <EmailMarketingIcon />
                  <p className="text-wrap">Email Marketing</p>
                </div>
                {/* icon4 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                  <InfluencerMarketingIcon />
                  <p className="text-wrap">Influencer Marketing</p>
                </div>
                {/* icon5 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center mt-4">
                  <SearchEngineMarketingIcon />
                  <p className="text-wrap"> Search Engine Marketing</p>
                </div>
                {/* icon6 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                  <SearchEngineOptimizationIcon />
                  <p className="text-wrap"> Search Engine Optimization</p>
                </div>
                {/* icon7 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center mt-4">
                  <SocialMediaMarketingIcon />
                  <p className="text-wrap">Social Media Marketing</p>
                </div>
                {/*  icon8*/}
                {/* <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                    <i class="bi bi-people-fill" style={{ fontSize: 44 }}></i>
                    <p className="text-wrap">media Management</p>
                  </div> */}
              </div>

              {/* button */}
              <div className="text-center py-4 ">
                <ManagedServicesRequestForm />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default managedServicesDigitalMarketing;
