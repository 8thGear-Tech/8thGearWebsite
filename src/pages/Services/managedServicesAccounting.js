import { Navbar20 } from "../../components/Navbar";

import servicesData from "../../data/managedServices.json";
import { ManagedServicesRequestForm } from "../../components/Forms/ServicesForms";
import { ManagementAccountingIcon } from "../../components/Icons";
import { InternalAuditIcon } from "../../components/Icons";
import { PublicSectorIcon } from "../../components/Icons";
import { TaxAccountingIcon } from "../../components/Icons";

const ManagedServicesAccounting = () => {
  return (
    <>
      <Navbar20 />
      <section className="p-5">
        {servicesData.accounting.map((props) => {
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
                <ManagedServicesRequestForm />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ManagedServicesAccounting;
