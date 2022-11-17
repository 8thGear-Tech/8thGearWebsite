//ManagedServicesRequestBtn
//BookNowBtn
//BookaSessionBtn
//BookaFreeSessionBtn
//OnHoverReadMoreBtn

export const BookNowBtn = () => {
  return (
    <>
      <a
        href="https://docs.google.com/forms/d/1OT6Pi7aLTIJY6CRUTrcDldtpY0QgaenAHbWJ6kP-sHg/viewform?edit_requested=true"
        target="_blank"
      >
        {" "}
        <button className="BookNowBtn"> Book Now</button>
      </a>
    </>
  );
};

export const BookaSessionBtn = () => {
  return (
    <>
      <a href="https://calendly.com/inc-consults/15min?month=2021-09">
        {" "}
        <button className="BookaSessionBtn" target="_blank">
          {" "}
          Book a session
        </button>
      </a>
    </>
  );
};

export const BookaFreeSessionBtn = () => {
  return (
    <>
      <a href="https://calendly.com/inc-consults/15min?month=2021-09">
        {" "}
        <button className="BookaFreeSessionBtn" target="_blank">
          {" "}
          Book a session
        </button>
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
export const DailyandWeekendBundleBtn = () => {
  return (
    <>
      <button
        // type="button"
        // data-bs-toggle="modal"
        // data-bs-target="#myModal"
        className="DailyandWeekendBundleBtn"
      >
        Daily and Weekend Bundle
      </button>
    </>
  );
};
export const MeetingRoomBundleBtn = () => {
  return (
    <>
      <button
        // type="button"
        // data-bs-toggle="modal"
        // data-bs-target="#myModal"
        className="MeetingRoomBundleBtn"
      >
        Meeting Room Bundle
      </button>
    </>
  );
};

{
  /* <button className="Hunt" onClick={() => setActive("firstButton")}>
            Daily and Weekend Bundle
          </button>
          <button className="Hint" onClick={() => setActive("secondButton")}>
            Meeting Room Bundle
          </button> */
}
