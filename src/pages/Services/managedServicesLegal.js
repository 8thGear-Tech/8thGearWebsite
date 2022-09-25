import servicesData from "../../data/managedServices.json";
import { Navbar6 } from "../../components/Navbar";
import { ManagedServicesRequestForm } from "../../components/Forms/ServicesForms";

const ManagedServicesLegal = () => {
  return (
    <>
      <Navbar6 />
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
              <div className="row d-flex  ">
                {/* icon1 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center mt-4">
                  <i class="bi bi-people-fill" style={{ fontSize: 44 }}></i>
                  <p className="text-wrap">media Management</p>
                </div>
                {/*  icon2*/}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                  <i class="bi bi-people-fill" style={{ fontSize: 44 }}></i>
                  <p className="text-wrap">media Management</p>
                </div>
                {/* icon3 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center mt-4">
                  <i class="bi bi-people-fill" style={{ fontSize: 44 }}></i>
                  <p className="text-wrap">media Management</p>
                </div>
                {/* icon4 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                  <i class="bi bi-people-fill" style={{ fontSize: 44 }}></i>
                  <p className="text-wrap">media Management</p>
                </div>
                {/* icon5 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center mt-4">
                  <i class="bi bi-people-fill" style={{ fontSize: 44 }}></i>
                  <p className="text-wrap">media Management</p>
                </div>
                {/* icon6 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                  <i class="bi bi-people-fill" style={{ fontSize: 44 }}></i>
                  <p className="text-wrap">media Management</p>
                </div>
                {/* icon7 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center mt-4">
                  <i class="bi bi-people-fill" style={{ fontSize: 44 }}></i>
                  <p className="text-wrap">media Management</p>
                </div>
                {/*  icon8*/}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                  <i class="bi bi-people-fill" style={{ fontSize: 44 }}></i>
                  <p className="text-wrap">media Management</p>
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

export default ManagedServicesLegal;
