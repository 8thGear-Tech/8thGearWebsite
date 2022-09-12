//IndividualManagedServicesCard
import cardData from "../../data/blog.json";

export const ManagedServiceSingle = (items) => {
  const { image, title } = items;
  return (
    <>
      <div className=" manageSvcard ">
        <img src={image} className="img-fluid" alt="..." />
        <div className="">
          <h4 className="manageCardText">{title}</h4>
        </div>
      </div>
    </>
  );
};

export const ManagedServiceCard = () => {
  return (
    <>
      <div className="row">
        {cardData.manageServiceData.map((items) => {
          return (
            <div
              className="   manageSvcard  col-lg-3 col-md-6 col-sm-12 my-1"
              key={items.id}
            >
              <ManagedServiceSingle {...items} />
            </div>
          );
        })}
      </div>
    </>
  );
};
