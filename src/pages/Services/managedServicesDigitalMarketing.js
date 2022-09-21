<<<<<<< HEAD
import { WhatWeDoIcon } from "../../components/Icons";
import { Navbar5 } from "../../components/Navbar";
=======
import servicesData from "../../data/managedServices.json";
>>>>>>> d56505b7de245441f86962cfa02d0a0f4c4969c0

const managedServicesDigitalMarketing = () => {
  return (
<<<<<<< HEAD
    <>
      <Navbar5 />
      <DigitalMarketing />
      <OurOffers />
    </>
  );
};
const DigitalMarketing = () => {
  return (
    <div className="container-fluid p-5 SectionTwoBg">
      {" "}
      {/* <p className="">
        The next wave of venture capital is more than just investing, it's
        business creation. Our collaborative platform has three components.
      </p> */}
      <div className="row justify-content-evenly align-items-center mt-5">
        <div className="col-lg-5 col-md-4 col-sm-10 px-5">
          <h4 className="">Digital marketing</h4>
          <p className="">
            For entrepreneurship, combining company building with venture
            funding combining company building with venture funding. For
            entrepreneurship, combining company building with venture funding,
            combining company building with venture funding. FFor
            entrepreneurship, combining company building with venture funding
            combining company building with venture funding. For
            entrepreneurship, combining company building with venture funding,
            combining company building
          </p>
          {/* <div className="card mb-5 py-5 cardBg">
              <img
                src={gearupicon}
                className="p-3 mx-auto w-50"
                // width="70px"
                // height="70px"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title">GEAR UP</h4>
                <p className="card-text">
                  {" "}
                  It's business creation. Our collaborative platform has three
                  components. It's business creation.
                </p>
=======
    <section className="px-4  py-4">
      {servicesData.digitalMarketing.map((props) => {
        const { id, title, textLeft, textRight } = props;
        return (
          <div className="DigitalMarketingSection   managedServicesSection ">
            <div className="row py-3 ps-4">
              <h3 className="">{title}</h3>
            </div>
            <div className="row d-flex justify-content-center px-4 ">
              <div className="col-md-6 pe-4">
                <p className="">{textLeft}</p>
>>>>>>> d56505b7de245441f86962cfa02d0a0f4c4969c0
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
              <button
                className="btn btn-warning p-1 border "
                style={{ width: 100 }}
              >
                Request
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default managedServicesDigitalMarketing;
