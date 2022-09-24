//CoWorkingPageHero
//EventPageHero

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
      <button
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
