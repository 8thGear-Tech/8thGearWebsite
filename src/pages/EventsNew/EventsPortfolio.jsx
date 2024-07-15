import React from "react";
import "./eventsNew.css";

const EventsPortfolio = () => {
  return (
    //  <div className="container-fluid text-center p-5 sectionOneBg">
    //   {" "}
    //   <h3 className="">Exclusive to the portfolio</h3>
    //   <div className="row justify-content-center mt-5">
    //     <div className="col-lg-5 col-md-6 col-sm-12 px-lg-5 d-flex align-items-stretch"></div>
    <div className="eventsPortfolio d-flex flex-column">
      <div className="eventsHead d-flex justify-content-center align-items-center">
        <h3 className="pt-5 pb-4">MAJOR EVENTS</h3>
      </div>
      <div className="container portfolio">
        <div className="row justify-content-center mb-2 px-3">
          <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card text-center mb-3 rounded">
              <div className="card-body">
                <h5 className="card-title">Founders Meetup</h5>
                <img
                  src="/images/FMU_24_Q2/foundersmeetup.jpg"
                  alt="Founders Meetup"
                  className="card-img-top"
                />
                <p className="card-text py-2">
                  A quarterly event that helps you travel the entrepreneurial
                  journey with like-minded individuals to founders collaborate,
                  synergize, spark inspiration, and motivation, and awaken the
                  drive to chase dreams.
                </p>
                {/* <a href="/founders-meetup" className="btn btn-primary">
                  Read more
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card text-center mb-3 rounded">
              <div className="card-body">
                <h5 className="card-title">Demo Day</h5>
                <img
                  src="/images/FMU_24_Q2/demoday.jpg"
                  alt="Demo Day"
                  className="card-img-top"
                />
                <p className="card-text py-2">
                  It is a value-packed day where every member of our ecosystem
                  comes together to witness the brilliance of creative minds and
                  hear pitch ideas that have the potential to scale. This
                  quarterly event is your gateway to being admitted into the
                  8thGear Venture Studio. Don't miss out!
                </p>
                {/* <a href="/demo-day" className="btn btn-primary">
                  Read more
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPortfolio;
