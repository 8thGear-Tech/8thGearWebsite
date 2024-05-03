import homepagehero from "../../assets/images/homepagehero.png";
import homepage from "../../assets/images/homepagehero.png";

export const EventPageHero = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={homepage} className="d-block w-100" alt="..." />
            <div className="carousel-caption EventPageHero d-lg-block d-md-block d-sm-none d-xs-none">
              <p>
                The Venture Studio model for entrepreneurship, combining comapny
                building with venture funding.The Venture Studio model for
                entrepreneurship, combining company building.
              </p>
            </div>

            {/* for mobile view */}
            <div className="carousel-caption d-lg-none d-md-none d-sm-block d-xs-block">
              <p className="mt-4 text-dark">
                The Venture Studio model for entrepreneurship, combining comapny
                building with venture funding.The Venture Studio model for
                entrepreneurship, combining company building.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={homepage} className="d-block w-100" alt="..." />
            <div className="carousel-caption EventPageHero">
              <p>
                The Venture Studio model for entrepreneurship, combining comapny
                building with venture funding.The Venture Studio model for
                entrepreneurship, combining company building.
              </p>
            </div>
            {/* for mobile view */}
            <div className="carousel-caption d-lg-none d-md-none d-sm-block d-xs-block">
              <p className="mt-4 text-dark">
                The Venture Studio model for entrepreneurship, combining comapny
                building with venture funding.The Venture Studio model for
                entrepreneurship, combining company building.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={homepage} className="d-block w-100" alt="..." />
            <div className="carousel-caption EventPageHero ">
              <p>
                The Venture Studio model for entrepreneurship, combining comapny
                building with venture funding.The Venture Studio model for
                entrepreneurship, combining company building.
              </p>
            </div>
            {/* for mobile view */}
            <div className="carousel-caption d-lg-none d-md-none d-sm-block d-xs-block">
              <p className="mt-4 text-dark">
                The Venture Studio model for entrepreneurship, combining comapny
                building with venture funding.The Venture Studio model for
                entrepreneurship, combining company building.
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
