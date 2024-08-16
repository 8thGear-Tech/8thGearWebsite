import { Navbar21 } from "../../components/Navbar";
import NewNavbar from "./NewNavbar";
import ResourcesContent from "./ResourcesContent";

export const ResourcesNew = () => {
  return (
    <div className="relative">
      <div>
        <Navbar21 />
        {/* <NewNavbar /> */}
      </div>
      <div style={{ height: "90px" }}></div> {/* Spacer div */}
      <div className="">
        <div
          className="hero-section relative"
          style={{
            backgroundImage: "url(/images/resourcesNew/resources_hero.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "",
          }}
        >
          <div className="container text-center align-self-center  justify-content-center position-relative top-50">
            <h1 className="text-white fw-semibold fs-1 lh-sm ">
              Accelerate Your Business{" "}
              <span className="text-warning">Growth</span>{" "}
            </h1>
            <p className="text-white fw-normal fs-5 lh-sm">
              Gain the insights and strategies needed to succeed in today’s
              market.
            </p>
          </div>
        </div>
      </div>
      <div>
        <ResourcesContent />
      </div>
    </div>
  );
};
