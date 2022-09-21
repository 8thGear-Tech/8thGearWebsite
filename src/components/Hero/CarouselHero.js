//CoWorkingPageHero
//EventPageHero

import Nature1 from "../../assets/images/nature1.jpg";
import Nature2 from "../../assets/images/nature2.jpg";
import Nature3 from "../../assets/images/nature3.jpg";

export const EventPageHero = () => {
  return (
    <div
      id="carouselExampleCaptions"
      auto
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={Nature1} class="d-block w-100 h-50 " alt="..." />
          <div class="carousel-caption carouselText ">
            <h5>
              The Venture Studio model for entrepreneurship, combining comapny
              building with venture funding.The Venture Studio model for
              entrepreneurship, combining company building.
            </h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src={Nature2} class="d-block w-100 h-50" alt="..." />
          <div class="carousel-caption carouselText ">
            <h5>
              The Venture Studio model for entrepreneurship, combining comapny
              building with venture funding.The Venture Studio model for
              entrepreneurship, combining company building.
            </h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src={Nature3} class="d-block w-100 h-50 " alt="..." />
          <div class="carousel-caption carouselText ">
            <h5>
              The Venture Studio model for entrepreneurship, combining comapny
              building with venture funding.The Venture Studio model for
              entrepreneurship, combining company building.
            </h5>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
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
            src={Nature1}
            class="img-fluid carouselImage d-block w-100 h-50"
            alt="..."
          />
          <div class="carousel-caption carouselText ">
            <h1>THE BETTER WAY TO WORK-SMART</h1>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={Nature2}
            class="img-fluid carouselImage d-block w-100 h-50"
            alt="..."
          />
          <div class="carousel-caption carouselText ">
            <h1>THE BETTER WAY TO WORK-SMART</h1>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={Nature3}
            class="img-fluid carouselImage d-block w-100 h-50"
            alt="..."
          />
          <div class="carousel-caption carouselText ">
            <h1>THE BETTER WAY TO WORK-SMART</h1>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
