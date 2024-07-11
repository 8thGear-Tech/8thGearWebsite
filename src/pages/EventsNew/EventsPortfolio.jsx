import React from "react";
import "./eventsNew.css";

const EventsPortfolio = () => {
  return (
    <div className="eventsPortfolio d-flex flex-column">
      <div className="eventsHead d-flex justify-content-center align-items-center">
        <h3 className="fw-semibold py-4">Major Events</h3>
      </div>
      <div className="container portfolio">
        <div className="row justify-content-center mb-2 px-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card text-center mb-3 rounded">
              <div className="card-body">
                <h5 className="card-title">Founders Meetup</h5>
                <img
                  src="/images/FMU_24_Q2/FMU_Q2_8.PNG"
                  alt="Founders Meetup"
                  className="card-img-top"
                />
                <p className="card-text py-2">
                  Entrepreneurship is more successful and fulfilling when
                  traveled with like-minded individuals, fostering synergy,
                  inspiration, motivation, and growth.
                </p>
                <a href="/founders-meetup" className="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card text-center mb-3 rounded">
              <div className="card-body">
                <h5 className="card-title">Demo Day</h5>
                <img
                  src="/images/FMU_24_Q1/FMU_Q1_2.jpg"
                  alt="Demo Day"
                  className="card-img-top"
                />
                <p className="card-text py-2">
                  Founders Meetup Entrepreneurship is more successful and
                  fulfilling when traveled with like-minded individuals,
                  fostering synergy, inspiration, motivation, and growth.
                </p>
                <a href="/demo-day" className="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPortfolio;
