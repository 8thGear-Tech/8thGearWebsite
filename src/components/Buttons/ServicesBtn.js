//ManagedServicesRequestBtn
//BookNowBtn
//BookaSessionBtn
//BookaFreeSessionBtn
//OnHoverReadMoreBtn

export const BookNowBtn = () => {
  return (
    <>
      <button className="BookNowBtn"> Book Now</button>
    </>
  );
};

export const BookaSessionBtn = () => {
  return (
    <>
      <button className="BookaSessionBtn"> Book a session</button>
    </>
  );
};

export const BookaFreeSessionBtn = () => {
  return (
    <>
      <button className="BookaFreeSessionBtn">
        {" "}
        Book a 30 minutes session
      </button>
    </>
  );
};

export const OnHoverReadMoreBtn = () => {
  return (
    <>
      <button className="OnHoverReadMoreBtn"> Read more</button>
    </>
  );
};

export const ManagedServicesRequestBtn = () => {
  return (
    <>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
        className="ManagedServicesRequestBtn"
      >
        Request
      </button>
    </>
  );
};
