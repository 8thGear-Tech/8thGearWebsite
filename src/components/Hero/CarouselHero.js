//CoWorkingPageHero
//EventPageHero

<<<<<<< HEAD
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
=======
import demoday1 from "../../assets/images/hero/demoday1.JPG";
import demoday2 from "../../assets/images/hero/demoday2.JPG";
import demoday3 from "../../assets/images/hero/demoday3.jpg";

export const EventPageHero = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={demoday1} class="d-block w-100 " alt="..." />
        </div>
        <div class="carousel-item">
          <img src={demoday2} class="d-block w-100 " alt="..." />
        </div>
        <div class="carousel-item">
          <img src={demoday3} class="d-block w-100 h-25" alt="..." />
        </div>
      </div>
      {/* <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon  bg-dark"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button> */}
    </div>
  );
};
export const CoWorkingPageHero = () => {
  return (
    <div
      id="carouselExampleCaptions"
      auto
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            // src={homepagehero}
            class="img-fluid carouselImage d-block w-100 h-50"
            alt="..."
          />
          <div class="carousel-caption carouselText ">
            <h1>THE BETTER WAY TO WORK-SMART</h1>
          </div>
        </div>
        <div class="carousel-item">
          <img
            // src={homepagehero}
            class="img-fluid carouselImage d-block w-100 h-50"
            alt="..."
          />
          <div class="carousel-caption carouselText ">
            <h1>THE BETTER WAY TO WORK-SMART</h1>
          </div>
        </div>
        <div class="carousel-item">
          <img
            // src={homepagehero}
            class="img-fluid carouselImage d-block w-100 h-50"
            alt="..."
          />
          <div class="carousel-caption carouselText ">
            <h1>THE BETTER WAY TO WORK-SMART</h1>
>>>>>>> 215cacbd5f0d121780c881d5890ea5203d903610
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
