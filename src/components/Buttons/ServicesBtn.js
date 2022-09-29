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
      <a href="https://calendly.com/inc-consults/15min?month=2021-09">
        {" "}
        <button className="BookaFreeSessionBtn"> Book a session</button>
      </a>
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
      <a
        href="https://docs.google.com/forms/d/10E8zUGMnVJClWJLtL6uvD-AGzFUNh262k7kh2_SqyTI/edit"
        target="_blank"
      >
        <button
          // type="button"
          // data-bs-toggle="modal"
          // data-bs-target="#myModal"
          className="ManagedServicesRequestBtn"
        >
          Request
        </button>
      </a>
    </>
  );
};
