//ProjectDeliveryManagedServicesOnHoverCard
import hoverData from "../../data/triggeredCards.json";
export const SingleOnhoverCard = (props) => {
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
