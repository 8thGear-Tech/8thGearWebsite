// import { OurImpactIcon } from "../../components/Icons";
// import { WhatWeDoIcon } from "../../components/Icons";
// import { StartIcon } from "../../components/Icons";
// import { BuildIcon } from "../../components/Icons";
// import { ScaleIcon } from "../../components/Icons";
// import { AdvisoryIcon } from "../../components/Icons";
// import { NetworkingIcon } from "../../components/Icons";
// import { GrowthStrategyIcon } from "../../components/Icons";
// import { DealManagementIcon } from "../../components/Icons";
import { Navbar9 } from "../../components/Navbar";
// import { BookaFreeSessionBtn } from "../../components/Buttons/ServicesBtn";
// import { GaaSHero } from "../../components/Hero/ImageandTextHero";
import "../Services/css/GaaS.css";

const GrowthAsAservice = () => {
  return (
    <>
      <Navbar9 />
      {/* <GaaSHero /> */}
      <GaaSNew />
      <WhyChooseUs />
      {/* <WhatWeDo /> */}
      <OurProcess />
      {/* <OurSuccess /> */}
      {/* <Testimonials /> */}
      <GaasReady />
      {/* <HowWeWork /> */}
    </>
  );
};

const GaaSNew = () => {
  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(135deg, #061b52, #010b23)",
        minHeight: "70vh",
      }}
    >
      <div className="row align-items-center justify-content-center text-center text-md-start">
        <div className="col-12 col-md-6 mt-5">
          <h1 className="text-white font-weight-bold ms-md-5">
            Great people building{" "}
            <span style={{ color: "#00d2ff" }}>enduring ventures.</span>
          </h1>
          <p className="text-white mt-3 ms-md-5">
            Unlock your company's potential with tailored strategies, innovative
            technologies, and expert guidance.
          </p>
          <a
            href="https://calendar.app.google/t7TiMRDyXA1Ssvxs8"
            target="_blank"
          >
            <button className="btn btn-outline-light mt-4 py-2 fs-5 rounded-pill px-lg-3 w-md-50 ms-md-5 mb-4">
              Book a Growth Session
            </button>
          </a>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <img
            src="./images/gaasImage/gaasHero.png"
            alt="Growth Image"
            className="img-fluid w-100 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const whyChooseData = [
    {
      title: "Start",
      image: "./images/gaasImage/gaasprocess.png",
      description:
        "At 8thGear Hub, we believe in laying a strong foundation for growth. Our GaaS service begins by thoroughly understanding your business needs, goals, and challenges. We work with you to create a tailored growth strategy that aligns with your vision, ensuring a successful launch and sustainable growth from the get-go.",
    },
    {
      title: "Build",
      image: "./images/gaasImage/gaasbusiness.png",
      description:
        "Building a successful business requires more than just a great idea; it requires the right strategy, resources, and execution. Our experienced team provides hands-on support in key areas such as marketing, sales, product development, and customer engagement.",
    },
    {
      title: "Scale",
      image: "./images/gaasImage/gaaspeople.png",
      description:
        "Scaling your business is where the magic happens. Our GaaS service offers the expertise and tools needed to expand your market reach, optimize operations, and drive revenue growth, ensuring your business reaches its full potential.",
    },
  ];

  return (
    <div className="container-fluid text-center py-5 mx-0">
      <h4
        className="text-center mb-5 text-uppercase"
        style={{ color: "#6E005A" }}
      >
        Why Choose Us
      </h4>
      <div className="row justify-content-center">
        {whyChooseData.map((item, index) => (
          <div
            key={index}
            className="col-lg-3 col-md-6 col-sm-10 col-12 mb-5 mx-3 d-flex justify-content-center"
          >
            <div
              className="card shadow rounded py-4 px-4 w-100 d-flex flex-column h-100"
              style={{
                backgroundColor: "#ffffff",
                border: "none",
                borderRadius: "12px",
                height: "100%", // Use 100% height for flexbox alignment
                margin: "0",
                padding: "0",
              }}
            >
              <div
                className="w-100 rounded icon-circle d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#F0E4EF",
                  padding: "20px",
                }}
              >
                <div
                  className="icon-container"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="icon-image"
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>
              </div>
              <div
                className="card-body d-flex flex-column"
                style={{ padding: "0" }}
              >
                <h5
                  className="card-title text-black fw-bold"
                  style={{
                    marginTop: "5px",
                    marginBottom: "0",
                  }}
                >
                  {item.title}
                </h5>
                <hr style={{ margin: "5px" }} />
                <p
                  className="card-text whyCardText text-muted flex-grow-1 text-start"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                    color: "#6c757d",
                    margin: "0",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const WhatWeDo = () => {
  const whatWeDoItems = [
    {
      title: "Advisory",
      description:
        "Our team of seasoned advisors provides strategic guidance and insights tailored to your unique business challenges. We help you navigate complex business environments and make informed decisions that drive growth.",
      imageUrl: "./images/team/damilolaobidairo1.png",
    },
    {
      title: "Networking",
      description:
        "We connect you with a vast network of industry experts, potential partners, and investors. Our extensive connections open doors to new opportunities and collaborations that can accelerate your business growth.",
      imageUrl: "./images/team/damilolaobidairo1.png",
    },
    {
      title: "Growth Strategy",
      description:
        "We work closely with you to develop and implement a comprehensive growth strategy. This includes market analysis, competitive positioning, product development, and customer acquisition tactics designed to drive sustainable growth.",
      imageUrl: "./images/team/damilolaobidairo1.png",
    },
    {
      title: "Deal Management",
      description:
        "Our GaaS service includes expert deal management support. We help you identify, negotiate, and close deals that align with your growth objectives, ensuring you get the best value and strategic fit for your business.",
      imageUrl: "./images/team/damilolaobidairo1.png",
    },
  ];

  return (
    <div
      className="container-fluid text-center whatBackground py-5 px-5"
      style={{ backgroundColor: "#f7f2f7" }}
    >
      <h2 className="mb-4 fs-4" style={{ color: "#6E006A" }}>
        WHAT WE DO
      </h2>
      <div className="row justify-content-center">
        {whatWeDoItems.map((item, index) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
            key={index}
          >
            {/* Added d-flex and justify-content-center for better alignment */}
            <div
              className="card d-flex flex-column h-auto border-0"
              style={{ width: "100%", maxWidth: "250px" }}
            >
              <img
                src={item.imageUrl}
                className="card-img-top"
                alt={item.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div
                className="card-body d-flex flex-column"
                style={{ padding: "15px" }}
              >
                <h5
                  className="card-title text-start fs-5"
                  style={{ marginBottom: "5px" }}
                >
                  {item.title}
                </h5>
                <hr style={{ margin: "5px 0" }} />
                <p
                  className="card-text text-start"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                    marginBottom: "0",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="https://calendar.app.google/t7TiMRDyXA1Ssvxs8" target="_blank">
        {" "}
        <button
          className="btn btn-primary mt-4 rounded-pill py-2 px-4 fs-5 whatButton"
          style={{ color: "#D3D3D3" }}
        >
          Book a Growth Session
        </button>
      </a>
    </div>
  );
};

const OurProcess = () => {
  const steps = [
    {
      id: 1,
      title: "DISCOVERY",
      icon: "./images/gaasImage/gaasicon1.png",
      description:
        "We begin with a deep dive into your business to understand your goals, challenges, and market environment. We use Discovery Calls and Discovery Forms to help us tailor our services to your specific needs.",
    },
    {
      id: 2,
      title: "STRATEGY DEVELOPMENT",
      icon: "./images/gaasImage/gaasicon2.png",
      description:
        "Our team collaborates with you to develop a customized growth strategy. We focus on actionable steps that can drive immediate and long-term results.",
    },
    {
      id: 3,
      title: "IMPLEMENTATION",
      icon: "./images/gaasImage/gaasicon3.png",
      description:
        "We support you in implementing the strategy, providing hands-on assistance in key areas such as marketing, sales, and operations. Our team ensures that the plan is executed effectively and efficiently.",
    },
    {
      id: 4,
      title: "MONITORING & OPTIMISATION",
      icon: "./images/gaasImage/gaasicon4.png",
      description:
        "We continuously monitor your progress and optimize the strategy as needed. Regular check-ins and performance reviews help us stay on track and make necessary adjustments to maximize growth.",
    },
    {
      id: 5,
      title: "SCALING UP",
      icon: "./images/gaasImage/gaasicon5.png",
      description:
        "As your business grows, we help you scale operations, enter new markets, and expand your customer base. Our goal is to ensure sustained growth and long-term success.",
    },
  ];

  return (
    <div className="container-fluid py-5 px-5">
      <div className="row text-center">
        <h2 className="mb-4 fs-4" style={{ color: "#6E006A" }}>
          OUR PROCESS
        </h2>
      </div>
      <div className="row justify-content-center px-sm-1 px-md-2 px-lg-5">
        {steps.map((step) => (
          <div
            key={step.id}
            className="col-12 col-sm-10 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch" // Responsive columns based on screen size
          >
            <div
              className="card d-flex flex-column h-100 text-center border-0 rounded-4 p-3"
              style={{ backgroundColor: "#F7F2F7" }}
            >
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="mb-3"
                  style={{ height: "50px", width: "auto" }}
                />{" "}
                {/* Center icon */}
                <h5
                  className="card-title"
                  style={{ color: "#6E006A", fontWeight: "bold" }}
                >
                  {step.title}
                </h5>
                <p
                  className="card-text text-muted"
                  style={{ fontSize: "0.9rem", width: "100%" }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const OurSuccess = () => {
  const successStories = [
    {
      id: 1,
      title: "dNetgurus - Lagos, Nigeria.",
      description: `8thGear conducted comprehensive market research and strategic analysis for dNetgurus, helping them identify growth opportunities and enhance their service offerings. By providing strategic guidance and facilitating key industry collaborations, 8thGear enabled dNetgurus to strengthen its market position and expand its reach, establishing the company as a leading provider of innovative IT solutions.
`,
      image: "./images/gaasImage/talent_fair_18.JPG",
    },
    {
      id: 2,
      title: "Numo - San Fransisco, US.",
      description: `Numo sought to expand into the Nigerian FinTech market but faced some challenges. Our team provided the necessary market research, strategic guidance, networking opportunities and support that helped Numo quickly gain traction, establish credibility, and receive positive user feedback. As a result, Numo successfully penetrated the market and with this solid foundation is now set to expand into Kenya, South Africa, Vietnam, Thailand, Malaysia, and the Philippines.`,
      image: "./images/gaasImage/foundersmeetupsix.jpg",
    },
  ];

  return (
    <div
      className="container-fluid py-5 px-1 px-md-5"
      style={{ backgroundColor: "#6E006A", color: "#fff" }}
    >
      <div className="row text-center mb-5">
        <h2 className="col-12 fs-4">OUR SUCCESS STORIES</h2>
      </div>

      {successStories.map((story, index) => (
        <div
          key={story.id}
          className="row align-items-center mb-5 px-5 mx-md-0 px-md-1 px-lg-5"
        >
          {index % 2 === 0 ? (
            <>
              {/* Description on the left, Image on the right */}
              <div className="col-md-6 col-sm-12 mb-4">
                {/* // Ensure text is responsive */}
                <h5 className="fw-bold">{story.title}</h5>{" "}
                {/* // Added Bootstrap class for bold text */}
                <p className="text-wrap pe-5">{story.description}</p>{" "}
                {/* // Added text-wrap class for responsive text */}
              </div>
              <div className="col-md-6 col-sm-12 mb-4">
                <img
                  src={story.image}
                  className="img-fluid rounded"
                  style={{ maxWidth: "100%" }}
                  alt={story.title}
                />{" "}
                {/* // Ensure image is fluid */}
              </div>
            </>
          ) : (
            <>
              {/* Image on the left, Description on the right */}
              <div className="col-md-6 col-sm-12 mb-4 order-md-2 ps-lg-5">
                <h5 className="fw-bold">{story.title}</h5>{" "}
                {/* // Added Bootstrap class for bold text */}
                <p className="text-wrap">{story.description}</p>{" "}
                {/* // Added text-wrap class for responsive text */}
              </div>
              <div className="col-md-6 col-sm-12 mb-4 order-md-1">
                <img
                  src={story.image}
                  className="img-fluid rounded"
                  style={{ maxWidth: "100%" }}
                  alt={story.title}
                />{" "}
                {/* // Ensure image is fluid */}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "8thGear Hub's GaaS service transformed our business. Their strategic guidance and hands-on support were invaluable in achieving our growth objectives.",
      author: "CEO, Company A",
      image: "./images/team/damilolaobidairo.png",
    },
    {
      id: 2,
      quote:
        "The team at 8thGear Hub helped us navigate complex market conditions and provided the tools we needed to succeed. We couldn't have done it without them.",
      author: "Founder, Company B",
      image: "./images/team/damilolaobidairo.png",
    },
    {
      id: 3,
      quote:
        "Amazing experience! The service exceeded my expectations and delivered exactly what I needed on time.",
      author: "Jane D.",
      image: "./images/team/damilolaobidairo.png",
    },
    {
      id: 4,
      quote:
        "Amazing experience! The service exceeded my expectations and delivered exactly what I needed on time.",
      author: "Jane D.",
      image: "./images/team/damilolaobidairo.png",
    },
  ];

  return (
    <div className="container my-5">
      <div className="row text-center mb-4">
        <h2 className="col-12 fs-4" style={{ color: "#6E006A" }}>
          TESTIMONIALS
        </h2>
      </div>
      <div className="row justify-content-center">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            {" "}
            {/* Adjusted column classes for responsiveness */}
            <div
              className="card px-4 py-2 border-1 rounded-4 position-relative"
              style={{ height: "auto" }}
            >
              {/* Quote symbol in the top left */}
              <span
                className="quote-icon"
                style={{
                  fontSize: "2rem", // Adjusted font size for better responsiveness
                  position: "absolute",
                  left: "15px", // Adjusted position for better alignment
                  top: "5px", // Added top positioning
                  color: "#000000",
                  fontFamily: "serif",
                }}
              >
                &ldquo;
              </span>
              <blockquote className="blockquote mt-4">
                {" "}
                {/* Adjusted margins for better spacing */}
                <p
                  className="mb-0"
                  style={{ fontSize: "15px", lineHeight: "22px" }}
                >
                  {testimonial.quote}
                </p>
              </blockquote>
              <div className="d-flex align-items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="rounded-circle" // Removed margin classes
                  style={{ width: "40px", height: "40px" }}
                />
                <div className="ms-2">
                  {" "}
                  {/* Added margin-start for spacing */}
                  <footer className="blockquote-footer mt-2 text-dark">
                    <cite title="Source Title">{testimonial.author}</cite>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const GaasReady = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#6E006A", color: "white" }}
    >
      <div className="text-center">
        {/* Heading with responsive font size */}
        <h2 className="fw-bold mb-3 fs-4 fs-md-3 fs-lg-2">
          READY TO ACCELERATE YOUR GROWTH?
        </h2>

        {/* Paragraph with responsive padding */}
        <p className="mb-4 px-md-4 mx-lg-5 text-wrap readyParagraph">
          Fill out this form and contact us today to learn more about our
          Growth-as-a-Service (GaaS) offerings and how we can help your business
          achieve its growth potential.
        </p>

        {/* Button with responsive padding */}
        <button
          className="btn btn-outline-light rounded-pill px-3 px-md-4 py-2 fs-5 readyButton"
          style={{
            borderColor: "#D3D3D3",
            color: "#D3D3D3",
          }}
        >
          Discovery Form
        </button>
      </div>
    </div>
  );
};

// const HowWeWork = () => {
//   return (
//     <div className="container pt-2 mb-1">
//       {" "}
//       <h4 className="text-center my-5">How We Work</h4>
//       <div className="row justify-content-center my-lg-5 my-sm-2">
//         <div className="col-lg-3 col-md-3 col-sm-12">
//           <div className="d-flex align-items-center">
//             <AdvisoryIcon />
//             {/* <div className="card-body ms-3"> */}
//             <p className="card-text">Advisory</p>
//             {/* </div> */}
//           </div>
//         </div>
//         <div className="col-lg-3 col-md-3 col-sm-12">
//           <div className="d-flex align-items-center">
//             <NetworkingIcon />
//             <div className="card-body">
//               <p className="card-text">Networking</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-3 col-md-3 col-sm-12">
//           <div className="d-flex align-items-center">
//             <GrowthStrategyIcon />
//             <div className="card-body">
//               <p className="card-text">Growth Strategy</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-3 col-md-3 col-sm-12">
//           <div className="d-flex align-items-center">
//             <DealManagementIcon />
//             <div className="card-body">
//               <p className="card-text">Deal Management</p>
//             </div>
//           </div>
//         </div>
//         {/* <div className="col-lg-2 col-md-6 col-sm-12">
//           <div className="d-flex align-items-center">
//             <WhatWeDoIcon />
//             <div className="card-body ms-3">
//               <p className="card-text">Data Science</p>
//             </div>
//           </div>
//         </div> */}
//         <div className="pt-5 d-flex justify-content-center">
//           {" "}
//           <BookaFreeSessionBtn />
//         </div>
//       </div>
//       {/* <div className="row justify-content-center"> */}
//       {/* <div className="col-lg-5 col-md-6 col-sm-12">
//           <div className="d-flex align-items-center">
//             <GrowthStrategyIcon />
//             <div className="card-body">
//               <p className="card-text">Growth Strategy</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-5 col-md-6 col-sm-12">
//           <div className="d-flex align-items-center">
//             <DealManagementIcon />
//             <div className="card-body">
//               <p className="card-text">Deal Management</p>
//             </div>
//           </div>
//         </div> */}
//       {/* <div className="py-5 d-flex justify-content-center">
//           <BookaFreeSessionBtn />
//         </div> */}
//       {/* </div> */}
//     </div>
//   );
// };

export default GrowthAsAservice;
