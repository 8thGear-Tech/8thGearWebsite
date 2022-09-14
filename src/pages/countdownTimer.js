import React from "react";
import UseCountdown from "../components/AllCards/UseCountdown";
import DateTimeDisplay from "../components/AllCards/DateTimeDisplay";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};
const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a href="#" rel="noopener noreferrer" className="countdown-link">
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </a>
    </div>
  );
};

{
  /* <div className="border border-2 mx-3">
          <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        </div>
        <p>:</p>
        <div className="border border-2 mx-3">
          <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        </div>
        <p>:</p>
        <div className="border border-2 mx-3">
          <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        </div>
        <p>:</p>
        <div className="border border-2 mx-3">
          <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
        </div> */
}
const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = UseCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
export default CountdownTimer;
