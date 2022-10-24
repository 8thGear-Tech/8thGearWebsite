import servicesData from "../../data/managedServices.json";
import { Navbar6 } from "../../components/Navbar";
import { ManagedServicesRequestForm } from "../../components/Forms/ServicesForms";
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
      <section className="p-5">
        {servicesData.legal.map((props) => {
          const { id, title, textLeft, textRight } = props;
          return (
            <div className="DigitalMarketingSection   managedServicesSection ">
              <div className="row py-3 ps-4">
                <h3 className="">{title}</h3>
              </div>
              <div className="row d-flex justify-content-center px-4 ">
                <div className="col-md-6 pe-4">
                  <p className="">{textLeft}</p>
                </div>
                <div className="col-md-6 ps-4">
                  <p className="">{textRight}</p>
                </div>
              </div>
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
              {/* <div className="text-center py-4 ">
                <ManagedServicesRequestForm />
              </div> */}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ManagedServicesLegal;
