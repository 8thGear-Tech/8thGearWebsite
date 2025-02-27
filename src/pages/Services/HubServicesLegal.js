import servicesData from "../../data/managedServices.json";
import { Navbar6 } from "../../components/Navbar";
import { ManagedServicesRequestForm } from "../../components/Forms/ServicesForms";
import { ManagedServicesRequestBtn } from "../../components/Buttons/ServicesBtn";
import { ArbitrationIcon } from "../../components/Icons";
import { MediationIcon } from "../../components/Icons";
import { ConsultationIcon } from "../../components/Icons";
import { RepresentationIcon } from "../../components/Icons";
import { LegalDocumentsIcon } from "../../components/Icons";
import { ManagedServicesLegalHero } from "../../components/Hero/ImageandTextHero";

const ManagedServicesLegal = () => {
  return (
    <>
      <Navbar6 />
      <ManagedServicesLegalHero />
      <section className="container-fluid py-4 px-4 DigitalMarketingSection managedServicesSection">
        {servicesData.legal.map((props) => {
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
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center mt-4">
                  <ArbitrationIcon />
                  <p className="text-wrap">Arbitration</p>
                </div>
                {/*  icon2*/}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                  <MediationIcon />
                  <p className="text-wrap">Mediation</p>
                </div>
                {/* icon3 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center mt-4">
                  <ConsultationIcon />
                  <p className="text-wrap">Consultation</p>
                </div>
                {/* icon4 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                  <RepresentationIcon />
                  <p className="text-wrap">
                    Representation of clients in negotiations
                  </p>
                </div>
                {/* icon5 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center mt-4">
                  <LegalDocumentsIcon />
                  <p className="text-wrap">Preparation of legal documents</p>
                </div>
              </div>

              {/* button */}
              <div className="text-center py-4 ">
                {/* <ManagedServicesRequestForm /> */}
                <a
                  href="https://docs.google.com/forms/d/10E8zUGMnVJClWJLtL6uvD-AGzFUNh262k7kh2_SqyTI/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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

export default ManagedServicesLegal;
