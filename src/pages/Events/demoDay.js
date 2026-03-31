import { HomepageNav } from "../../components/Navbar";
import "./demoDay.css";
import demoimgone from "../Events/image/demo1.png";
import demoimgtwo from "../Events/image/demo2.png";


const DemoDayPage = () => {
  return (
    <>
      <HomepageNav/>
      <div className="demoDay-background">
        <div className="demoDay-layout w-100 start-0 d-flex justify-content-center align-items-center">
          <DemoHero />
        </div>
      </div>
      <EventsSection />
      <DemoSection />
    </>
  );
};

// const DemoHero = () => {
//   return (
//     <div className="container-fluid px-0">
//       <div className="w-100 start-0 d-flex justify-content-center align-items-center flex-column text-center text-white py-5">
//         <h2 className="mb-3">Demo Day</h2>
//         <h3 className="fw-bold fs-4 mb-4 text-white">
//           Showcasing Innovation and Excellence
//         </h3>
//         <p className=" mb-4 mx-3 mx-md-5">
//           From time to time 8thGear Hub hosts Demo days for all its portfolio
//           and select companies
//         </p>
//         {/* <div className="d-lg-flex d-md-flex">
//           {" "}
//           <p className="mx-2 fs-5">
//             {" "}
//             <i
//               className="bi bi-calendar demoLogo me-2"
//               aria-hidden="true"
//             ></i>{" "}
//             TBD
//           </p>
//           <p className="mx-2 fs-5">
//             <i className="bi bi-geo-alt demoLogo me-2" aria-hidden="true"></i>{" "}
//             8thGear Hub, CMD road, Magodo/Secretariat, Lagos state
//           </p>
//           <p className="mx-2 fs-5">
//             {" "}
//             <i className="bi bi-clock demoLogo me-2" aria-hidden="true"></i> TBD
//           </p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

const DemoHero = () => {
  const handleScrollToEvents = () => {
    const eventsSection = document.getElementById("events-section");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container-fluid px-0">
      <div className="w-100 start-0 d-flex justify-content-center align-items-center flex-column text-center text-white py-4">
        <h2 className="mb-2">Demo Day</h2>
        <h3 className="fw-bold fs-4 mb-3 text-white">
          Showcasing Innovation and Excellence
        </h3>
        <p className="mb-4 mx-3 mx-md-5">
          From time to time 8thGear Hub hosts Demo days for all its portfolio
          and select companies
        </p>
        <button
          className="btn demoScrollBtn"
          onClick={handleScrollToEvents}
          aria-label="Scroll to upcoming demo days"
        >
          <span>View Upcoming Demo Days</span>
          <i className="bi bi-chevron-down ms-2 demoScrollIcon"></i>
        </button>
      </div>
    </div>
  );
};

const EventsSection = () => {
  const events = [
    {
      id: 1,
      name: "Meristem/MIRE Demo Day",
      date: "April 1, 2026",
      time: "11 AM WAT",
      registrationLink: "https://forms.gle/pbQJkS2beDCE4HtW7",
      icon: "bi-star",
    },
    {
      id: 2,
      name: "Connecta Africa/MIRE Demo Day",
      date: "April 9, 2026",
      time: "11 AM WAT",
      registrationLink: "https://forms.gle/pbQJkS2beDCE4HtW7",
      icon: "bi-rocket",
    },
  ];

  return (
    <section className="events-section" id="events-section">
      <div className="container">
        <div className="events-header">
          <h3 className="">Upcoming Demo Days</h3>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-item">
              <div className="event-info">
                <div className="event-icon-box">
                  <i className={`bi ${event.icon}`}></i>
                </div>
                <h3 className="event-name">{event.name}</h3>
                <div className="event-meta">
                  <span className="meta-item">
                    <i className="bi bi-calendar3"></i>
                    {event.date}
                  </span>
                  <span className="meta-item">
                    <i className="bi bi-clock"></i>
                    {event.time}
                  </span>
                </div>
              </div>
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="event-link"
              >
                Register Interest
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>

        <div className="programs-note">
          <p>
            <strong>To pitch at Demo Day:</strong> You must have completed any of 8thGear's Programs (MIRE, DSE, or DBN Workshop)
          </p>
        </div>
      </div>
    </section>
  );
};

const DemoSection = () => {
  return (
    <div className="container mt-5 mb-5">
      {/* Heading and Paragraph */}
      <div className="text-center mb-5">
        <h3 className="">8thGear Hub Demo Day</h3>
        <p className="section-description">
          It is a value-packed day where every member of our ecosystem comes
          together to witness the brilliance of creative minds and hear pitch
          ideas that have the potential to scale.
        </p>
      </div>

      {/* Text and Image Row */}
      <div className="row mb-5 mt-4 align-items-center">
        {/* Left Section */}
        <div className="col-lg-6 d-flex flex-column">
          <h3 className="content-title">What is Demo Day?</h3>
          <div className="content-text">
            <p className="mb-3">
              On Demo Day, 8thGear Hub offers startups an opportunity to pitch
              their ideas and meet with possible investors.
            </p>
            <p className="mb-3">
              Demo Day is open to all startups who are looking for investors and
              are willing to take their business to the next level!!
            </p>
            <p className="mb-3">
              We have a couple of investors who are willing and looking for
              startups to invest in.
            </p>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center">
          <img
            src={demoimgone}
            alt="Demo Day"
            className="img-fluid rounded-4 shadow-lg"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="row align-items-center mt-5">
        {/* Image First on Desktop, Last on Mobile */}
        <div className="col-lg-6 d-flex align-items-center order-lg-1 order-2 mb-4 mb-lg-0">
          <img
            src={demoimgtwo}
            alt="Join Demo Day"
            className="img-fluid rounded-4 shadow-lg"
          />
        </div>

        {/* Heading and Paragraph First on Mobile, Second on Desktop */}
        <div className="col-lg-6 d-flex flex-column order-lg-2 order-1 ps-lg-4">
          <h3 className="content-title">Want to be a part of demo day?</h3>
          <div className="content-text">
            <p className="mb-3">1. Must have completed any 8thGear Program (MIRE, DSE, DBN)</p>
            <p className="mb-3">2. Confident speaking in English</p>
            <p className="mb-3">3. Must have a business plan</p>
            <p className="mb-3">4. Should have a good portfolio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoDayPage;