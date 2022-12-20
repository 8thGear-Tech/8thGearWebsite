//image
import resourceimageone from "../../assets/images/resources/resourceimageone.png";

import { ResourcesTitleBtn } from "../Buttons/PortfolioBtn";
import { ResourcesReadMoreLink } from "../Buttons/PortfolioBtn";

export const ResourcesCard = () => {
  return (
    <>
      {" "}
      <div class="" style={{ width: "18rem" }}>
        <img src={resourceimageone} class="card-img-top" alt="..." />
        <div className="d-flex justify-content-between py-2">
          <ResourcesTitleBtn />
          <p class="card-text" style={{ fontSize: "0.8rem" }}>
            63 MIN READ
          </p>
        </div>
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor</h5>
          <p class="card-text my-2">
            Lorem ipsum dolor sit amet consectetur. Scelerisque varius ac id
            auctor. Maecenas sapien felis luctus purus fusce congue at cursus.
          </p>
          <ResourcesReadMoreLink />
        </div>
      </div>
    </>
  );
};
