import { Link } from "react-router-dom";
import logos from "../../assets/images/logos.png";
import { Navbar23 } from "../../components/Navbar";
import { JointheTeamBtn } from "../../components/Buttons/ContactBtn";

const BDandSalesPerson = () => {
  return (
    <>
      <Navbar23 />
      <JobDescription />
    </>
  );
};

const JobDescription = () => {
  return (
    <div className="container pt-5 pb-5 px-5">
      {" "}
      {/* <h4 className="">Our Business Creation Platform</h4> */}
      <div className="">
        <Link to="/">
          <img src={logos} alt="" width={90} height={110} className="" />
        </Link>
        <h3 className="mt-4 careerHeader">BD/Sales Person</h3>
        <p className="m-0">Work type (hybrid, remote, onsite): Onsite </p>
        <p className="m-0">Contract type: Entry level</p>
        <p className="m-0">Deadline: 28 of February, 2023</p>
        <p className="">
          <a
            href="https://bit.ly/8Gjoinourteam"
            className="textLinkColor careerCTAfontSize"
            target="_blank"
          >
            {" "}
            Apply here
          </a>
        </p>
      </div>
      {/* <div className="float-start float-end"></div>{" "} */}
      <h5 className="careerSubHeader">Job Roles and Responsibilities</h5>
      <p className="">Core responsibilities include:</p>
      <ul>
        <li className="jd-list-items">
          Negotiation meetings, Pitches & Presentations for 8thGear Hub.
        </li>
        <li className="jd-list-items">
          Response to RFPs, BIDs, Online Applications for 8thGear Hub.
        </li>
        <li className="jd-list-items">
          Preparation of concept notes, business proposals, pitch decks and
          other communication materials for 8thGear Hub and external clients.
        </li>
        <li className="jd-list-items">
          Business Strategy support to Portfolio companies and Hub customers.
        </li>
        <li className="jd-list-items">
          Customer retention for our Hub services clients.
        </li>
        <li className="jd-list-items">8thGear Hub Services Sales.</li>
        <li className="jd-list-items">
          Build rapport with new and existing customers.
        </li>
        <li className="jd-list-items">
          Develop and implement an active growth strategy for 8thGear.
        </li>
        <li className="jd-list-items">
          Ability to meet up with KPI’s set for the year.
        </li>
        <li className="jd-list-items">
          Upselling and cross-selling current customers.
        </li>
        <li className="jd-list-items">
          Coordinating with the Marketing & Comms team on leads generation for
          8thGear
        </li>
        <li className="jd-list-items">
          Overseeing the activities and performance of the sales analysts and
          interns.
        </li>
        <li className="jd-list-items">
          Conduct research to identify new markets and customer needs.
        </li>
        <li className="jd-list-items">
          Having in-depth knowledge of the services rendered and value
          proposition.
        </li>
        <li className="jd-list-items">
          Reporting on successes and areas that need improving.
        </li>
        <li className="jd-list-items">
          Provide after sales support to clients and collate feedback via
          customer satisfaction surveys.
        </li>
        <li className="jd-list-items">
          Promote the company’s services addressing or predicting clients
          objectives and handling objections.
        </li>
        <li className="jd-list-items">Promoting sales on all hub services. </li>
      </ul>
      <h5 className="careerSubHeader">Competencies and Skills Required </h5>
      <ul>
        <li className="jd-list-items">Bachelor's degree or equivalent.</li>
        <li className="jd-list-items">
          Working Knowledge of the Tech Start-up/Growth Strategy/ Talent
          Development/Edu-Tech space.
        </li>
        <li className="jd-list-items">
          1-2 years of Business Development experience.
        </li>
        <li className="jd-list-items">
          Ability to take initiative and manage critical relationships.
        </li>

        <li className="jd-list-items">
          Excellent written and verbal communication skills.
        </li>
        <li className="jd-list-items">
          Requires reasoning ability and good independent judgment.
        </li>
        <li className="jd-list-items">
          A deep understanding of the trends in the industry.
        </li>
        <li className="jd-list-items">
          Ability to operate in a fast-paced, flat-structured environment.
        </li>
      </ul>
      <div className="mb-4">
        {" "}
        <JointheTeamBtn />
      </div>
    </div>
  );
};

export default BDandSalesPerson;
