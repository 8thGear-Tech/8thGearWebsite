//ProjectDeliveryManagedServicesOnHoverCard
import hoverData from "../../data/triggeredCards.json";
import { OnHoverReadMoreBtn } from "../Buttons/ServicesBtn";
import logo from "../../assets/images/logo.png";
import link from "../../assets/images/LinkedIn_icon.png";
import { JointheTeamBtn } from "../Buttons/ContactBtn";
import { MemberOneViewBioBtn } from "../Buttons/ContactBtn";
import { MemberTwoViewBioBtn } from "../Buttons/ContactBtn";
//import img from "../../assets/images/TeamImage.jpg"
import LinkedIn_icon from "../../assets/images/Vector.png";

const SingleOnhoverCard = (props) => {
  const { id, text } = props;

  return (
    <>
      <div class="card triggered">
        <div class="card-body">
          <p class="card-text">{text}</p>
          <button>Read More</button>
        </div>
      </div>
    </>
  );
};

export const OnHoverCard = () => {
  return (
    <div className="row mx-4">
      {hoverData.onhoverData.map((item) => {
        return (
          <>
            <div
              className="col-lg-3
             col-sm-6"
              key={item.id}
            >
              <SingleOnhoverCard {...item} />
            </div>
          </>
        );
      })}
    </div>
  );
};

{
  /* <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  </div>
</div>; */
}
//ProjectDeliveryPopUpCard

//8thgeariansPopUpCard
//EIRDataPopUpCard
//AdvisoryBoardOnHoverCard

export const EightgeariansPopUpCard1 = (props) => {
  const { image, name, position, text, id } = props;
  return (
    <>
      {/* <JointheTeamBtn /> */}
      <MemberOneViewBioBtn />
      {/* <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop1"
      >
        8thgerian1
      </button> */}
      <div
        className="modal fade"
        id="staticBackdrop1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="d-flex justify-content-between mx-4 my-2">
              <img src={logo} width={40} id="staticBackdropLabel" />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="cards" key={id}>
              <img src={image} className="w-25 mb-4" alt="..." />
              <h4>{name}</h4>
              <h6 className="">{position}</h6>
              <div className="card-body">
                <p className="card-text mb-4">{text}</p>
              </div>
              <img src={link} className="mb-4" width={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const EightgeariansPopUpCard2 = (props) => {
  const { image, name, position, text, id } = props;
  return (
    <>
      <MemberTwoViewBioBtn />
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop2"
      >
        8thgerian2
      </button>
      <div
        className="modal fade"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="d-flex justify-content-between mx-4 my-2">
              <img src={logo} width={40} id="staticBackdropLabel" />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="cards" key={id}>
              <img src={image} className="w-25 mb-4" alt="..." />
              <h4>{name}</h4>
              <h6 className="">{position}</h6>
              <div className="card-body">
                <p className="card-text mb-4">{text}</p>
              </div>
              <img src={link} className="mb-4" width={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const EightgeariansPopUpCard3 = (props) => {
  const { image, name, position, text, id } = props;
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop3"
      >
        8thgerian3
      </button>
      <div
        className="modal fade"
        id="staticBackdrop3"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="d-flex justify-content-between mx-4 my-2">
              <img src={logo} width={40} id="staticBackdropLabel" />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="cards" key={id}>
              <img src={image} className="w-25 mb-4" alt="..." />
              <h4>{name}</h4>
              <h6 className="">{position}</h6>
              <div className="card-body">
                <p className="card-text mb-4">{text}</p>
              </div>
              <img src={link} className="mb-4" width={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const EightgeariansPopUpCard4 = (props) => {
  const { image, name, position, text, id } = props;
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop4"
      >
        8thgerian4
      </button>
      <div
        className="modal fade"
        id="staticBackdrop4"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="d-flex justify-content-between mx-4 my-2">
              <img src={logo} width={40} id="staticBackdropLabel" />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="cards" key={id}>
              <img src={image} className="w-25 mb-4" alt="..." />
              <h4>{name}</h4>
              <h6 className="">{position}</h6>
              <div className="card-body">
                <p className="card-text mb-4">{text}</p>
              </div>
              <img src={link} className="mb-4" width={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const EightgeariansPopUpCard5 = (props) => {
  const { image, name, position, text, id } = props;
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop5"
      >
        8thgerian5
      </button>
      <div
        className="modal fade"
        id="staticBackdrop5"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="d-flex justify-content-between mx-4 my-2">
              <img src={logo} width={40} id="staticBackdropLabel" />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="cards" key={id}>
              <img src={image} className="w-25 mb-4" alt="..." />
              <h4>{name}</h4>
              <h6 className="">{position}</h6>
              <div className="card-body">
                <p className="card-text mb-4">{text}</p>
              </div>
              <img src={link} className="mb-4" width={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const EightgeariansPopUpCard6 = (props) => {
  const { image, name, position, text, id } = props;
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop6"
      >
        8thgerian6
      </button>
      <div
        className="modal fade"
        id="staticBackdrop6"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="d-flex justify-content-between mx-4 my-2">
              <img src={logo} width={40} id="staticBackdropLabel" />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="cards" key={id}>
              <img src={image} className="w-25 mb-4" alt="..." />
              <h4>{name}</h4>
              <h6 className="">{position}</h6>
              <div className="card-body">
                <p className="card-text mb-4">{text}</p>
              </div>
              <img src={link} className="mb-4" width={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const EIRDataPopUpCard1 = (props) => {
  const { image, name, position, text, id } = props;
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop7"
        style={{ display: "block" }}
      >
        EIR1
      </button>
      <div
        className="modal fade"
        id="staticBackdrop7"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" key={id}>
            <img src={image} className="w-100 mb-4" alt="..." />
            <div className="card-img-overlay">
              <div className="d-flex justify-content-between mx-1 my-1">
                <img
                  src={logo}
                  width={40}
                  className="modal-title"
                  id="staticBackdropLabel"
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>

            <div className="cards">
              <br></br>
              <h4 className="">
                {name} <img src={link} className="" width={25} />
              </h4>
              <h6 className="">{position}</h6>
              <div className="card-body">
                <p className="card-text mb-4">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const EIRDataPopUpCard2 = (props) => {
  const { image, name, position, text, id } = props;
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop8"
        style={{ display: "block" }}
      >
        EIR2
      </button>
      <div
        className="modal fade"
        id="staticBackdrop8"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" key={id}>
            <img src={image} className="w-100 mb-4" alt="..." />
            <div className="card-img-overlay">
              <div className="d-flex justify-content-between mx-1 my-1">
                <img
                  src={logo}
                  width={40}
                  className="modal-title"
                  id="staticBackdropLabel"
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>

            <div className="cards">
              <br></br>
              <h4 className="">
                {name} <img src={link} className="" width={25} />
              </h4>
              <h6 className="">{position}</h6>
              <div className="card-body">
                <p className="card-text mb-4">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const EIRDataPopUpCard3 = (props) => {
  const { image, name, position, text, id } = props;
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop9"
        style={{ display: "block" }}
      >
        EIR3
      </button>
      <div
        className="modal fade"
        id="staticBackdrop9"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" key={id}>
            <img src={image} className="w-100 mb-4" alt="..." />
            <div className="card-img-overlay">
              <div className="d-flex justify-content-between mx-1 my-1">
                <img
                  src={logo}
                  width={40}
                  className="modal-title"
                  id="staticBackdropLabel"
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>

            <div className="cards">
              <br></br>
              <h4 className="">
                {name} <img src={link} className="" width={25} />
              </h4>
              <h6 className="">{position}</h6>
              <div className="card-body">
                <p className="card-text mb-4">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const EIRDataPopUpCard4 = (props) => {
  const { image, name, position, text, id } = props;
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop10"
        style={{ display: "block" }}
      >
        EIR4
      </button>
      <div
        className="modal fade"
        id="staticBackdrop10"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" key={id}>
            <img src={image} className="w-100 mb-4" alt="..." />
            <div className="card-img-overlay">
              <div className="d-flex justify-content-between mx-1 my-1">
                <img
                  src={logo}
                  width={40}
                  className="modal-title"
                  id="staticBackdropLabel"
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>

            <div className="cards">
              <br></br>
              <h4 className="">
                {name} <img src={link} className="" width={25} />
              </h4>
              <h6 className="">{position}</h6>
              <div className="card-body">
                <p className="card-text mb-4">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const EIRDataPopUpCard5 = (props) => {
  const { image, name, position, text, id } = props;
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop11"
        style={{ display: "block" }}
      >
        EIR5
      </button>
      <div
        className="modal fade"
        id="staticBackdrop11"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" key={id}>
            <img src={image} className="w-100 mb-4" alt="..." />
            <div className="card-img-overlay">
              <div className="d-flex justify-content-between mx-1 my-1">
                <img
                  src={logo}
                  width={40}
                  className="modal-title"
                  id="staticBackdropLabel"
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>

            <div className="cards">
              <br></br>
              <h4 className="">
                {name} <img src={link} className="" width={25} />
              </h4>
              <h6 className="">{position}</h6>
              <div className="card-body">
                <p className="card-text mb-4">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const EIRDataPopUpCard6 = (props) => {
  const { image, name, position, text, id } = props;
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop12"
        style={{ display: "block" }}
      >
        EIR6
      </button>
      <div
        className="modal fade"
        id="staticBackdrop12"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" key={id}>
            <img src={image} className="w-100 mb-4" alt="..." />
            <div className="card-img-overlay">
              <div className="d-flex justify-content-between mx-1 my-1">
                <img
                  src={logo}
                  width={40}
                  className="modal-title"
                  id="staticBackdropLabel"
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>

            <div className="cards">
              <br></br>
              <h4 className="">
                {name} <img src={link} className="" width={25} />
              </h4>
              <h6 className="">{position}</h6>
              <div className="card-body">
                <p className="card-text mb-4">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
{
  /* <div class="card col-sm-mb-1 col-md-mb-1 w-75 mx-auto">
  <img src={image} class=" img-fluid Boardimage" alt="Teamimage" />
</div>; */
}
export const AdvisoryBoardOnHoverCard = (props) => {
  const { image, name, position } = props;
  return (
    <>
      {/* <div className="containerm">
        <div className="row"> */}
      {/* <div className=""> */}
      <div className="AdvisoryImage">
        {" "}
        <img src={image} alt="" /> <div className="AdvisoryName">{name}</div>
        <div className="AdvisoryPosition">{position}</div>
        <div className="AdvisoryLink">
          <a className="btn" href="#" role="button">
            <img
              className="AdvisoryIcon"
              src={LinkedIn_icon}
              width={15}
              height={5}
            />
          </a>
        </div>
      </div>
      {/* </div> */}
      {/* </div>
      </div> */}
    </>
  );
};
