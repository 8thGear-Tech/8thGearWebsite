import { Navbar16 } from "../../components/Navbar";
import { Demoday } from "../../components/Hero/BGColorandTextHero";
import demodaypictureone from "../../assets/images/events/demodaypictureone.jpg";
import demodaypicturetwo from "../../assets/images/events/demodaypicturetwo.jpg";
const DemoDayPage = () => {
  return (
    <>
      <Navbar16 />
      {/* <DemoDayHero /> */}
      <AboutDemoDay />
    </>
  );
};

const AboutDemoDay = () => {
  return (
    <div className="container p-5">
      {" "}
      {/* <h4 className="">Our Business Creation Platform</h4> */}
      <div className="">
        <h2 className="">8thGear DEMO DAY</h2>
        <p className="">
          Join upcoming Demo Day, or rewatch the ones that you've missed here:
        </p>
        <a
          href="https://www.youtube.com/watch?v=-5lGJLLBavI"
          className="textLinkColor"
          target="_blank"
        >
          {" "}
          <p>8thGear Demo Day Highlights - June 2022</p>
        </a>
      </div>
      <img
        src={demodaypictureone}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      ></img>
      <p className="pt-5">
        We believe that entrepreneurs need to participate in demo days and gain
        necessary exposure, which can lead to opportunities for funding,
        mentorship, and partnerships, all of which are critical for most
        businesses to thrive.
      </p>
      <p className="">
        The 8thGear Demo Day is a tripartite event. First, a showcase, where
        businesses in the venture studio intimate members of the community on
        the progress they have made so far. Second, it serves as an official
        entrant for new businesses into the venture studio, and thirdly, it
        serves as the first-level conversation between investors and founders
        they find interesting.
      </p>
      <p className="pb-5">
        8thGear demo day brings all the major players together: investors,
        community supporters, corporate partners, and founders to facilitate
        critical conversations and give the feedback necessary for growth.
      </p>
      <img
        src={demodaypicturetwo}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      ></img>{" "}
      <p className="pt-5">
        The entrepreneurs pitching only have a few minutes to convince the
        audience that they are onto something great. Starting with the problem
        they solve, moving on to their solution, business viability, and making
        an investment request Therefore, founders have to be very concise in
        their efforts with a strong pitch and first impression.
      </p>
      <p className="">
        Before any demo day, there is an intensive 2-week Bootcamp where
        interested entrepreneurs are groomed for the big day. Are you interested
        in being one of our Venture Studio Businesses (VSB) ? or just pitching
        to investors and other stakeholders on the 8thGear Demo Day? Do click
        here to indicate your interest.
      </p>
      <p className="">
        8thgear hub has an independent venture studio that was set up to provide
        hand-holding and support enterprise support for young people who are
        building amazing ventures in Nigeria and in Africa. At the root of what
        we want to achieve on our demo day is to encourage, motivate, and
        challenge young people to help create an Africa of value creators, not
        just value consumers, by building businesses that endure.
      </p>
      <p className="">
        Register{" "}
        <a href="" className="textLinkColor">
          here
        </a>{" "}
        to be part of our next demo day. Click{" "}
        <a
          href="https://www.youtube.com/watch?v=kEVKmygbmxo&list=PLSVm1pLRDXp36d077XMaDG_Ol9ayyrpUB"
          className="textLinkColor"
          target="_blank"
        >
          here
        </a>{" "}
        to watch the last demo day.
      </p>
    </div>
  );
};

export default DemoDayPage;
