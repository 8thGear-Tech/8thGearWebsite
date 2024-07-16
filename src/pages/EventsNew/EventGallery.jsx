import "./eventsNew.css";
import eventsGallery from "../../data/gallerycards.json";
import { Link } from "react-router-dom";

const EventGallery = () => {
  return (
    <div>
      <div className="container-fluid successStoryBg mt-5">
        {" "}
        <div className="row justify-content-center mt-5 mb-2 py-5 mx-lg-5 px-3">
          <div className="eventsHead d-flex justify-content-center align-items-center">
            <h3 className="pt-4">GALLERY</h3>
          </div>
          {eventsGallery.eventsGallerySection.map((items) => {
            return (
              <>
                <div
                  className="col-lg-4 col-md-6 col-sm-10 my-4 d-flex align-items-stretch "
                  key={items.id}
                >
                  <div className="card successStoryCardBg">
                    <img src={items.image} className="" alt="..." />
                    <div className="p-3">
                      <Link
                        to={items.link}
                        className="text-decoration-none text-black"
                      >
                        {" "}
                        <p className="card-text">{items.text}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {/* <div className="d-flex justify-content-center pb-4">
          <EventsViewMoreBtn />
        </div> */}
      </div>
    </div>
  );
};

export default EventGallery;
