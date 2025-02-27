import { Link } from "react-router-dom";
import logos from "../../assets/images/logos.png";
import { Navbar23 } from "../../components/Navbar";
import { JointheTeamBtn } from "../../components/Buttons/ContactBtn";

const HRIntern = () => {
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
        <h3 className="mt-4 careerHeader">HR Intern</h3>
        <p className="m-0">Work type: Onsite </p>
        <p className="m-0">Contract type: Intern (Corper)</p>
        <p className="m-0">Deadline: March 1st, 2023</p>
        <p className="">
          <a
            href="https://bit.ly/8Gjoinourteam"
            className="textLinkColor careerCTAfontSize"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Join the team
          </a>
        </p>
      </div>
      {/* <div className="float-start float-end"></div>{" "} */}
      <h5 className="careerSubHeader">Job Roles and Responsibilities</h5>
      <p className="">Core responsibilities include:</p>
      <ul>
        <li className="jd-list-items">
          Support talent acquisition activities such as CV screening, interview
          scheduling, reference checks and onboarding etc.
        </li>
        <li className="jd-list-items">
          Assist with performance management process
        </li>
        <li className="jd-list-items">
          Supports in the implementation of all HR initiatives across the
          organization
        </li>
        <li className="jd-list-items">
          Maintains and updates relevant databases (recruitment, performance
          history, employee database, organization structures, training, etc.)
          may be required by the management to conduct various analysis and
          prepare relevant reports to support decision making by the leadership.
        </li>
        <li className="jd-list-items">
          Tracks organization compliance with set deadlines for various
          activities such as performance management etc.
        </li>
        <li className="jd-list-items">
          Provides daily support and resolves employee issues; escalates to
          management if unable to resolve.
        </li>
        <li className="jd-list-items">
          Provides logistics support, where required for various
          events/activities for the Department (interviews, training,
          team-building, meetings etc.)
        </li>
        <li className="jd-list-items">Prepares letters as may be required.</li>
        <li className="jd-list-items">
          Responsible for maintaining staff records and also for ensuring that
          all documents are appropriately filed in a timely manner
        </li>
        <li className="jd-list-items">
          Serve as point of contact with benefit vendors and administrators such
          as HMO, Group Life Insurance etc.
        </li>
        <li className="jd-list-items">
          Assists periodic unit planning and budgeting activities.
        </li>
        <li className="jd-list-items">
          Complete exit documentation and schedule exit interviews
        </li>
        <li className="jd-list-items">Performs other duties as assigned.</li>
      </ul>
      <h5 className="careerSubHeader">Competencies and Skills Required </h5>
      <ul>
        <li className="jd-list-items">
          Bachelor’s degree in any relevant field
        </li>
        <li className="jd-list-items">
          0-2 years of experience in HR Operations
        </li>
        <li className="jd-list-items">
          Organizational and time management skills
        </li>
        <li className="jd-list-items">
          Excellent interpersonal relationship skills
        </li>

        <li className="jd-list-items">
          Must be team oriented and results focused
        </li>
        <li className="jd-list-items">Exemplary communication skills</li>
      </ul>
      <div className="mb-4">
        {" "}
        <JointheTeamBtn />
      </div>
    </div>
  );
};

export default HRIntern;
