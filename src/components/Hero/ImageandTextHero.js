//GalleryPageHero
//OurModelPageHero
//ProjectDeliveryPageHero
//IndividualManagedServicesHero
// ManageServicesDigitalMarketingHero

// import images from "../../assets/images/digital marketing.jpg";

// export const ManageServicesDigitalMarketingHero = () => {
//   return (
//     <div className="position-relative">
//       <div className="imgContainer position-absolute">
//         <img src={images} className="imageStyle" alt="" />
//       </div>
//       <div className="heroTextContainer d-flex justify-content-center align-items-center">
//         <div className="container ">
//           <h2 className="DigitalMarketingHeroText ps-4 pt-5">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
//             voluptate, modi suscipit id quis mollitia architecto doloremque vero
//             quo alias.
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };
// import projectdelivery from "../../assets/images/hero/projectdeliveryhero.png";
import projectdelivery from "../../assets/images/hero/projectdelivery.jpg";
import { BookaSessionBtn } from "../Buttons/ServicesBtn";

export const ManageServicesDigitalMarketingHero = () => {
  return (
    <div className="ManageServicesDigitalMarketing text-center p-5">
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        autem corrupti vitae neque quia exercitationem voluptatibus reiciendis.
        Voluptatibus, tenetur aut!
      </h4>
    </div>
  );
};
// <div className="cool w-5">
//   <div class="container-fluid">
//     <div class="row">
//       <div class="bgtext mt-5 stop">
//         <h1>
//           Creating an enabling environment for <br />
//           job and wealth creation in <br /> Lagos State.
//         </h1>

export const HomePageHero = () => {
  return (
    <div className="px-4 container-fluid homeHeroBg d-flex pt-3 pb-4 align-items-center">
      {/* <img
        src={projectdelivery}
        class="img-fluid carouselImage d-block w-100 h-50"
        alt="..."
      /> */}
      <div className="gradientBg overlayBg"></div>
      <div className="row justify-content-start">
        <div className="col-lg-8 col-md-8 col-sm-12 px-lg-5">
          <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor homeHeroText">
            Great people building enduring ventures
          </h1>
          <h2 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor homeHeroTextTwo">
            Great people building enduring ventures
          </h2>
        </div>
      </div>
    </div>
  );
};

export const OurModelHero = () => {
  return (
    <div className="px-4 container-fluid ourModelHeroBg d-flex pt-3 pb-4 align-items-center">
      <div className="gradientBg overlayBg"></div>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12 ">
          <h2 className="d-none d-lg-block d-md-block d-sm-block d-xs-none ms-5 heroTextColor">
            As a rule, we build only default-alive ventures by doing things that
            scale so that we can have enduring ventures.
          </h2>
          {/* <h2 className="d-none d-sm-block d-md-block d-lg-none heroTextColor">
            As a rule, we build only default-alive ventures by doing things that
            don't scale so that we can have enduring ventures that scale.
          </h2> */}
          <h3 className="d-xs-block d-sm-none d-md-none d-lg-none heroTextColor">
            As a rule, we build only default-alive ventures by doing things that
            scale so that we can have enduring ventures.
          </h3>
        </div>
      </div>
    </div>
  );
};
// export const ProjectDeliveryHero = () => {
//   return (
//     <div>
//       <img src={projectdelivery} class="d-block w-100 " alt="..." />
//       <div className="row">
//         <div className="col-lg-8 col-md-8 col-sm-12">
//           <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5  ">
//             The Venture Studio model for entrepreneurship, combining comapny
//             building with venture funding Venture Studio.
//           </h2>
//           <h3 className="d-xs-block d-sm-block d-md-block d-lg-none ">
//             The Venture Studio model for entrepreneurship, combining comapny
//             building with venture funding Venture Studio.
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
export const ProjectDeliveryHero = () => {
  return (
    <div className="px-4 container-fluid projectDeliveryHeroBg d-flex pt-3 pb-3 align-items-center">
      {/* <img
        src={projectdelivery}
        class="img-fluid carouselImage d-block w-100 h-50"
        alt="..."
      /> */}
      <div className="gradientBg overlayBg"></div>
      <div className="row ">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor projectDeliveryHeroText">
            Great people building enduring ventures
          </h1>
          <h2 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor homeHeroTextTwo">
            Great people building enduring ventures
          </h2>
          {/* <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor">
            The Venture Studio model for entrepreneurship, combining comapny
            building with venture funding Venture Studio.
          </h2>
          <h3 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor">
            The Venture Studio model for entrepreneurship, combining comapny
            building with venture funding Venture Studio.
          </h3> */}
        </div>
      </div>
    </div>
  );
};
export const GaaSHero = () => {
  return (
    <div className="px-4 container-fluid GaaSHeroBg d-flex pt-3 pb-3 align-items-center">
      <div className="px-3 container-fluid GaaSHeroBgg d-flex pt-3 pb-4">
        {/* <div className="gradientBg overlayBg"></div> */}
        <div className="row justify-content-center text-center">
          <div className="col-lg-9 col-md-12 col-sm-12">
            <h2 className="d-none d-lg-block d-md-block d-sm-none d-xs-none ms-5 heroTextColor homeHeroText">
              Great people building enduring ventures
            </h2>
            <h3 className="d-xs-block d-sm-block d-md-none d-lg-none heroTextColor homeHeroTextTwo">
              Great people building enduring ventures
            </h3>
            <div className="callToAction pt-4">
              <BookaSessionBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const EventsPageHero = () => {
  return (
    <div className="px-4 container-fluid EventsHeroBg d-flex pt-3 pb-3 align-items-center">
      {/* <img
        src={projectdelivery}
        class="img-fluid carouselImage d-block w-100 h-50"
        alt="..."
      /> */}
      {/* <div className="gradientBg overlayBg"></div> */}
      <div className="row ">
        <div className="col-lg-8 col-md-8 col-sm-12">
          {/* <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor homeHeroText">
            Great people building enduring ventures
          </h1>
          <h2 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor homeHeroTextTwo">
            Great people building enduring ventures
          </h2> */}
          {/* <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor heroFontSize">
            You are setting yourself up for growth when you are a member of a
            vibrant community where people are continuously challenging and
            supporting one another.
          </h2>
          <h3 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor heroFontSize">
            You are setting yourself up for growth when you are a member of a
            vibrant community where people are continuously challenging and
            supporting one another.
          </h3> */}
        </div>
      </div>
    </div>
  );
};
export const CoworkingHero = () => {
  return (
    <div className="container-fluid CoworkingHeroBg d-flex align-items-center">
      <div className="px-4 container-fluid CoworkingHeroBgg d-flex pt-3 pb-4">
        <div className="row justify-content-center ">
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            {/* <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor ">
              The better way to work smart
            </h2>
            <h3 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor ">
              {" "}
              The better way to work smart
            </h3> */}
          </div>
        </div>
      </div>
    </div>
  );
};
// export const CoworkingHero = () => {
//   return (
//     <div className="px-4 container-fluid CoworkingHeroBg d-flex pt-3 pb-4 align-items-center">
//       <div className="row">
//         <div className="col-lg-8 col-md-8 col-sm-12">
//           <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor">
//             The Venture Studio model for entrepreneurship, combining comapny
//             building with venture funding Venture Studio.
//           </h2>
//           <h3 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor">
//             The Venture Studio model for entrepreneurship, combining comapny
//             building with venture funding Venture Studio.
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };
export const DemoDayGalleryHero = () => {
  return (
    <div className="px-4 container-fluid demoDayHeroBg d-flex pt-3 pb-4 align-items-center">
      <div className="gradientBg overlayBg"></div>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor">
            You are setting yourself up for growth when you are a member of a
            vibrant community where people are continuously challenging and
            supporting one another.
          </h2>
          <h3 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor">
            You are setting yourself up for growth when you are a member of a
            vibrant community where people are continuously challenging and
            supporting one another.
          </h3>
        </div>
      </div>
    </div>
  );
};
export const PiggeryTrainingGalleryHero = () => {
  return (
    <div className="px-4 container-fluid piggeryTrainingHeroBg d-flex pt-3 pb-4 align-items-center">
      <div className="gradientBg overlayBg"></div>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor homeHeroText">
            Great people building enduring ventures
          </h1>
          <h2 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor homeHeroTextTwo">
            Great people building enduring ventures
          </h2>
        </div>
      </div>
    </div>
  );
};
export const GIZEmployabilityGalleryHero = () => {
  return (
    <div className="px-4 container-fluid GIZHeroBg d-flex pt-3 pb-4 align-items-center">
      <div className="gradientBg overlayBg"></div>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor homeHeroText">
            Great people building enduring ventures
          </h1>
          <h2 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor homeHeroTextTwo">
            Great people building enduring ventures
          </h2>
        </div>
      </div>
    </div>
  );
};
export const LSETFGalleryHero = () => {
  return (
    <div className="px-4 container-fluid LSETFHeroBg d-flex pt-3 pb-4 align-items-center">
      <div className="gradientBg overlayBg"></div>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor homeHeroText">
            Great people building enduring ventures
          </h1>
          <h2 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor homeHeroTextTwo">
            Great people building enduring ventures
          </h2>
        </div>
      </div>
    </div>
  );
};
export const HackathonGalleryHero = () => {
  return (
    <div className="px-4 container-fluid hackathonHeroBg d-flex pt-3 pb-4 align-items-center">
      <div className="gradientBg overlayBg"></div>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor homeHeroText">
            Great people building enduring ventures
          </h1>
          <h2 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor homeHeroTextTwo">
            Great people building enduring ventures
          </h2>
        </div>
      </div>
    </div>
  );
};
export const ITFGalleryHero = () => {
  return (
    <div className="px-4 container-fluid ITFHeroBg d-flex pt-3 pb-4 align-items-center">
      <div className="gradientBg overlayBg"></div>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor homeHeroText">
            Great people building enduring ventures
          </h1>
          <h2 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor homeHeroTextTwo">
            Great people building enduring ventures
          </h2>
        </div>
      </div>
    </div>
  );
};
// export const DemoDayGalleryHero = () => {
//   return (
//     <div className="px-4 container-fluid demoDayHeroBg d-flex pt-3 pb-4 align-items-center">
//       <div className="row">
//         <div className="col-lg-8 col-md-8 col-sm-12">
//           <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor">
//             The Venture Studio model for entrepreneurship, combining comapny
//             building with venture funding Venture Studio.
//           </h2>
//           <h3 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor">
//             The Venture Studio model for entrepreneurship, combining comapny
//             building with venture funding Venture Studio.
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

export const ManagedServicesLegalHero = () => {
  return (
    <>
      <div className="container-fluid ManagedServicesLegalHeroBg d-flex align-items-center">
        <div className="px-3 container-fluid ManagedServicesLegalHeroBgg d-flex pt-3 pb-4">
          <div className="row justify-content-center ">
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor text-center">
                We at 8thGear are helpmates to your business and because we
                believe in the uniqueness of every individual and business, we
                tailor our solutions to suit your needs and aspirations.
              </h2>
              <h3 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor text-center">
                {" "}
                We at 8thGear are helpmates to your business and because we
                believe in the uniqueness of every individual and business, we
                tailor our solutions to suit your needs and aspirations.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const ManagedDigitalMarketServicesHero = () => {
  return (
    <>
      <div className="container-fluid ManagedServicesDigitalMargetingHeroBg d-flex align-items-center">
        <div className="px-3 container-fluid ManagedServicesDigitalMargetingHeroBgg d-flex pt-3 pb-4">
          <div className="row justify-content-center ">
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor text-center">
                We at 8thGear are helpmates to your business and because we
                believe in the uniqueness of every individual and business, we
                tailor our solutions to suit your needs and aspirations.
              </h2>
              <h3 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor text-center">
                {" "}
                We at 8thGear are helpmates to your business and because we
                believe in the uniqueness of every individual and business, we
                tailor our solutions to suit your needs and aspirations.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const ManagedServicesTechHero = () => {
  return (
    <>
      <div className="container-fluid ManagedServicesTechHeroBg d-flex align-items-center">
        <div className="px-3 container-fluid ManagedServicesTechHeroBgg d-flex pt-3 pb-4">
          <div className="row justify-content-center ">
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor text-center">
                We at 8thGear are helpmates to your business and because we
                believe in the uniqueness of every individual and business, we
                tailor our solutions to suit your needs and aspirations.
              </h2>
              <h3 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor text-center">
                {" "}
                We at 8thGear are helpmates to your business and because we
                believe in the uniqueness of every individual and business, we
                tailor our solutions to suit your needs and aspirations.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const ManagedServicesAccountingHero = () => {
  return (
    <>
      <div className="container-fluid ManagedServicesAccountingHeroBg d-flex align-items-center">
        <div className="px-3 container-fluid ManagedServicesAccountingHeroBgg d-flex pt-3 pb-4">
          <div className="row justify-content-center ">
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor text-center">
                We at 8thGear are helpmates to your business and because we
                believe in the uniqueness of every individual and business, we
                tailor our solutions to suit your needs and aspirations.
              </h2>
              <h3 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor text-center">
                {" "}
                We at 8thGear are helpmates to your business and because we
                believe in the uniqueness of every individual and business, we
                tailor our solutions to suit your needs and aspirations.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
