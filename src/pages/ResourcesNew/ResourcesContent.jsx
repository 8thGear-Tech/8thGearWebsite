import { useState } from "react";
import "./resourcesNew.css";
import Button from "react-bootstrap/Button";
import { FaYoutube } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const data = {
  knowledgeCenter: [
    {
      index: 1,
      videoLink: "https://www.youtube.com/embed/gdW8XHsHNoA",
      videoTitle: "Business Model Canvas",
      videoText:
        "A business model canvas is a strategic tool used to quickly and easily define and communicate a business idea or concept.",
    },
    {
      index: 2,
      videoLink: "https://www.youtube.com/embed/IAwPlkUx4_Y",
      videoTitle: "Nigerian Startup ACT",
      videoText:
        "As a Founder, how much do you know about the Startup ACT and its enormous benefits to you as a Business Owner?",
    },
  ],
  startingYourBusiness: [
    {
      index: 1,
      videoLink: "https://www.youtube.com/embed/DwuT52ANalI",
      videoTitle: "ABC of Business Accounting",
      videoText:
        "The importance of Startup Founders having their accounting books right and various source documents that every business must have.",
    },
    {
      index: 2,
      videoLink: "https://www.youtube.com/embed/wJRBSeEB3FQ",
      videoTitle: "Customer Segementation",
      videoText: "",
    },
    {
      index: 3,
      videoLink: "https://www.youtube.com/embed/UKB0m6O8ZRk",
      videoTitle: "Keeping accounting records",
      videoText:
        "You don't have to have a full-time accountant working in your business if you can't afford it yet. All you need to do is to meticulously keep the basic records, and then you can have an accountant on your retainer.",
    },
  ],
  growingYourBusiness: [
    {
      index: 1,
      videoLink: "https://www.youtube.com/embed/gdW8XHsHNoA",
      videoTitle: "Growing Your Business 1",
      videoText: "Here you go",
    },
    {
      index: 2,
      videoLink: "https://www.youtube.com/embed/gdW8XHsHNoA",
      videoTitle: "Title 2",
      videoText: "Here you go 2",
    },
  ],
};

export default function ResourcesContent() {
  const [activeSection, setActiveSection] = useState("knowledgeCenter");

  const onButtonClick = (section) => {
    setActiveSection(section);
  };

  // This renders mobile video
  const renderVideos = (videos) => {
    return videos.map((video) => (
      <div key={video.index} className="text-center">
        <div className="responsive-iframe">
          <iframe
            src={video.videoLink}
            title="here"
            frameborder="1"
            className=""
          ></iframe>
        </div>
        <div className="text-start px-2 px-md-5 py-2">
          <h4 className="fs-4 px-4 py-2">{video.videoTitle}</h4>
          <p className="fs-6 px-4 fw-normal lh-sm">{video.videoText}</p>
        </div>
      </div>
    ));
  };

  // This renders desktop video
  const renderDesktopVideos = (videos) => {
    return videos.map((video) => (
      <div key={video.index} className="text-center mx-3 mx-md-5">
        <div className="desktop-responsive-iframe">
          <iframe
            src={video.videoLink}
            title="here"
            frameborder="1"
            className=""
          ></iframe>
        </div>
        <div className="text-start  py-2">
          <h4 className="fs-4  py-2">{video.videoTitle}</h4>
          <p className="fs-6  fw-normal lh-sm">{video.videoText}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="text-center pt-3 resourcesNew">
      {/* Tablet and Mobile view  */}
      <div className="d-none">
        <h3>KNOWLEDGE CENTER</h3>
        {/* The toggle buttons */}
        <div className="container">
          <div className="row vids g-0">
            <div className="col-12 col-md-6">
              <Button
                className={`button-custom ${
                  activeSection === "knowledgeCenter" ? "button-active" : ""
                }`}
                onClick={() => onButtonClick("knowledgeCenter")}
              >
                Knowledge Center
              </Button>
            </div>
            <div className="col-12 col-md-6">
              <Button
                className={`button-custom ${
                  activeSection === "startingYourBusiness"
                    ? "button-active"
                    : ""
                }`}
                onClick={() => onButtonClick("startingYourBusiness")}
              >
                Starting Your Business
              </Button>
            </div>
            <div className="col-12 col-md-6 mx-auto">
              <Button
                className={`button-custom ${
                  activeSection === "growingYourBusiness" ? "button-active" : ""
                }`}
                onClick={() => onButtonClick("growingYourBusiness")}
              >
                Growing Your Business
              </Button>
            </div>
          </div>
        </div>
        {/* The rendered content */}
        <div className="mt-5">
          {activeSection === "knowledgeCenter" &&
            renderVideos(data.knowledgeCenter)}
          {activeSection === "startingYourBusiness" &&
            renderVideos(data.startingYourBusiness)}
          {activeSection === "growingYourBusiness" &&
            renderVideos(data.growingYourBusiness)}
        </div>
      </div>

      {/* Desktop view  */}
      <div className="d-block">
        <h3 className="py-4">KNOWLEDGE CENTER</h3>
        <div className="mx-lg-5">
          <div className="row m-0">
            {/* left  */}
            <div className="col-12 col-lg-8">
              {renderDesktopVideos(data.knowledgeCenter)}
            </div>
            {/* Right */}
            <div className="col-12 col-lg-4">
              {renderDesktopVideos(data.startingYourBusiness)}
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 px-2">
        <a
          href="https://www.youtube.com/@8thgearhub"
          target="_blank"
          rel="noreferrer"
          className="link-underline link-underline-opacity-0 text-black"
        >
          <div className="d-flex justify-content-center align-items-center">
            <FaYoutube className="text-danger fs-4 me-md-2" />
            <p className="mb-0">Visit Youtube for more videos</p>
            <GoArrowRight className="fs-4 py-1 fw-normal ms-1" />
          </div>
        </a>
      </div>
    </div>
  );
}
{
  /* <p className="fs-md-5 fs-6 ">
            {" "}
            <span>
              <FaYoutube className="text-danger fs-4 me-md-2" />
            </span>{" "}
            CLICK FOR MORE VIDEOS{" "}
            <span>
              <GoArrowRight className="fs-4 pb-1 fw-normal " />
            </span>{" "}
          </p> */
}
