import { Link } from "react-router-dom";
import logos from "../../assets/images/logos.png";
import { Navbar23 } from "../../components/Navbar";
import { JointheTeamBtn } from "../../components/Buttons/ContactBtn";

const AccountantIntern = () => {
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
        <h3 className="mt-4 careerHeader">Accountant Intern</h3>
        <p className="m-0">Work type: Onsite </p>
        <p className="m-0">Contract type: Intern (Corper)</p>
        <p className="m-0">Deadline: March 1st, 2023</p>
        <p className="">
          <a
            href="https://bit.ly/8Gjoinourteam"
            className="textLinkColor careerCTAfontSize"
            target="_blank"
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
          Developing an in-depth knowledge of organizational products and
          process.
        </li>
        <li className="jd-list-items">
          Assisting in the preparation of budgets and managements activities.
        </li>
        <li className="jd-list-items">Managing records and receipts.</li>
        <li className="jd-list-items">
          Reconciling daily, monthly and yearly transactions.
        </li>
        <li className="jd-list-items">
          Ensure all expenses are within assigned project budget.
        </li>
        <li className="jd-list-items">Vat filling.</li>
        <li className="jd-list-items">Participate in financial audits.</li>
        <li className="jd-list-items">
          Track bank deposits and payments made.
        </li>
        <li className="jd-list-items">
          Ensure that financial transactions are properly updated and recorded.
        </li>
        <li className="jd-list-items">Assist with budget preparation.</li>
        <li className="jd-list-items">
          Quarterly and monthly statement of affairs for all companies.
        </li>
        <li className="jd-list-items">
          Manage the preparation of balance sheets, income statements, expense
          reports, etc.
        </li>
        <li className="jd-list-items">
          Identify and resolve invoicing issues, accounting discrepancies and
          other financial related issues.
        </li>
        <li className="jd-list-items">
          Reconciling the organizations’ bank statements.
        </li>
        <li className="jd-list-items">Preparing invoices and receipts.</li>
        <li className="jd-list-items">Proper disbursement of funds.</li>
        <li className="jd-list-items">
          Track investments and maintain relevant cash reserves by all portfolio
          companies.
        </li>
        <li className="jd-list-items">
          Resolve financial disputes raised by team.
        </li>
        <li className="jd-list-items">
          Being a key point of contact for other departments on financial and
          accounting matters.
        </li>
        <li className="jd-list-items">
          Preparing financial on relevant projects.
        </li>
        <li className="jd-list-items">
          Supporting with projects and tasks when required.
        </li>
      </ul>
      <h5 className="careerSubHeader">Competencies and Skills Required </h5>
      <ul>
        <li className="jd-list-items">
          Bachelor’s degree in finance, accounting, or relevant field.
        </li>
        <li className="jd-list-items">
          0- 2 years’ experience in a similar role.
        </li>
        <li className="jd-list-items">
          Knowledge of financial regulations and accounting processes.
        </li>
        <li className="jd-list-items">
          Outstanding analytical and time management skills.
        </li>
        <li className="jd-list-items">Strong attention to detail.</li>
        <li className="jd-list-items">
          Excellent written and verbal communication skills.
        </li>
      </ul>
      <div className="mb-4">
        {" "}
        <JointheTeamBtn />
      </div>
    </div>
  );
};

export default AccountantIntern;
