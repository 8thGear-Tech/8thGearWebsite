import { Navbar20 } from "../../components/Navbar";

import servicesData from "../../data/managedServices.json";
import { ManagedServicesRequestForm } from "../../components/Forms/ServicesForms";
import { ManagedServicesRequestBtn } from "../../components/Buttons/ServicesBtn";
import { ManagementAccountingIcon } from "../../components/Icons";
import { InternalAuditIcon } from "../../components/Icons";
import { PublicSectorIcon } from "../../components/Icons";
import { TaxAccountingIcon } from "../../components/Icons";
import { ManagedServicesAccountingHero } from "../../components/Hero/ImageandTextHero";

const ManagedServicesAccounting = () => {
  return (
    <>
      <Navbar20 />
      <ManagedServicesAccountingHero />
      <section className="container-fluid py-4 px-4 DigitalMarketingSection managedServicesSection">
        {servicesData.accounting.map((props) => {
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
                  <ManagementAccountingIcon />
                  <p className="text-wrap">Management Accounting</p>
                </div>
                {/*  icon2*/}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                  <InternalAuditIcon />
                  <p className="text-wrap">Internal Audit</p>
                </div>
                {/* icon3 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center mt-4">
                  <PublicSectorIcon />
                  <p className="text-wrap">Public Sector</p>
                </div>
                {/* icon4 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                  <TaxAccountingIcon />
                  <p className="text-wrap">Tax Accounting</p>
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

export default ManagedServicesAccounting;
