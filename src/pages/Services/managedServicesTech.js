import { Navbar7 } from "../../components/Navbar";
import servicesData from "../../data/managedServices.json";
import { ManagedServicesRequestForm } from "../../components/Forms/ServicesForms";
import { UIUXIcon } from "../../components/Icons";
import { WebDevIcon } from "../../components/Icons";
import { AppDevIcon } from "../../components/Icons";
import { DevOpsIcon } from "../../components/Icons";
import { ProductDevIcon } from "../../components/Icons";
import { ManagedServicesTechHero } from "../../components/Hero/ImageandTextHero";

const ManagedServicesTech = () => {
  return (
    <>
      <Navbar7 />
      <ManagedServicesTechHero />
      <section className="p-5">
        {servicesData.tech.map((props) => {
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
                  <UIUXIcon />
                  <p className="text-wrap">UI/UX Design</p>
                </div>
                {/*  icon2*/}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                  <WebDevIcon />
                  <p className="text-wrap">Web Development</p>
                </div>
                {/* icon3 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center mt-4">
                  <DevOpsIcon />
                  <p className="text-wrap">DevOps</p>
                </div>
                {/* icon4 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center">
                  <ProductDevIcon />
                  <p className="text-wrap">Product Development</p>
                </div>
                {/* icon5 */}
                <div className="col-lg-3 col-md-4 col-sm-6  col-xs-6 text-center mt-4">
                  <AppDevIcon />
                  <p className="text-wrap">App Development</p>
                </div>
              </div>

              {/* button */}
              <div className="text-center py-4 ">
                {/* <ManagedServicesRequestForm /> */}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ManagedServicesTech;
