import React from "react";
import "./eventsNew.css";

const EventsPortfolio = () => {
  return (
    <div className="eventsPortfolio d-flex flex-column">
      <div className="eventsHead d-flex justify-content-center align-items-center">
        <h3 className="fw-semibold py-4">Exclusive to the Portfolio</h3>
      </div>
      <div className="container portfolio">
        <div className="row justify-content-center mb-2 px-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card text-center mb-3">
              <div className="card-body">
                <h5 className="card-title">Founders Meetup</h5>
                <img
                  src="/images/eventsNew/259.png"
                  alt="Founders Meetup"
                  className="card-img-top"
                />
                <p className="card-text py-3">
                  Entrepreneurship is more successful and fulfilling when
                  traveled with like-minded individuals, fostering synergy,
                  inspiration, motivation, and growth.
                </p>
                <a href="#" className="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card text-center mb-3">
              <div className="card-body">
                <h5 className="card-title">Demo Day</h5>
                <img
                  src="/images/eventsNew/259.png"
                  alt="Demo Day"
                  className="card-img-top"
                />
                <p className="card-text py-3">
                  Founders Meetup Entrepreneurship is more successful and
                  fulfilling when traveled with like-minded individuals,
                  fostering synergy, inspiration, motivation, and growth.
                </p>
                <a href="#" className="btn btn-primary">
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
