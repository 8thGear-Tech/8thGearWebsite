//GalleryPageHero
//OurModelPageHero
//ProjectDeliveryPageHero
//IndividualManagedServicesHero
// ManageServicesDigitalMarketingHero

import projectdelivery from "../../assets/images/hero/projectdelivery.jpg";
import futatechpichero from "../../assets/images/initiatives/futatechpic/futatechpichero.png";
import { BookaSessionBtn } from "../Buttons/ServicesBtn";
import { RegisterBtn } from "../Buttons/ProjectDeliveryBtn";
import { BookNowBtn } from "../Buttons/ServicesBtn";
import { DigiPlusRequestBtn } from "../Buttons/ContactBtn";

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

export const HomePageHero = () => {
  return (
    <div className="px-4 container-fluid homeHeroBg d-flex pt-3 pb-4 align-items-center">
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
//       <img src={projectdelivery} className="d-block w-100 " alt="..." />
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
        className="img-fluid carouselImage d-block w-100 h-50"
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
        className="img-fluid carouselImage d-block w-100 h-50"
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
            <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor text-center">
              Where work meets community - discover the perfect coworking space.
            </h1>
            <h3 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor text-center">
              {" "}
              Where work meets community - discover the perfect coworking space.
            </h3>
            <div className="text-center mt-3 BookNow">
              {" "}
              <BookNowBtn />
            </div>
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
    <div className="container-fluid DemoDayGalleryHeroBg d-flex align-items-center">
      <div className="px-3 container-fluid DemoDayGalleryHeroBgg d-flex pt-3 pb-4">
        <div className="row justify-content-center ">
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor text-center">
              You are setting yourself up for growth when you are a member of a
              vibrant community where people are continuously challenging and
              supporting one another.
            </h2>
            <h3 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor text-center">
              {" "}
              You are setting yourself up for growth when you are a member of a
              vibrant community where people are continuously challenging and
              supporting one another.
            </h3>
          </div>
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
    <div className="container-fluid GIZHeroBg d-flex align-items-center">
      <div className="px-3 container-fluid GIZHeroBgg d-flex pt-3 pb-4">
        <div className="row justify-content-center ">
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            {/* <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor text-center">
              We at 8thGear are helpmates to your business and because we
              believe in the uniqueness of every individual and business, we
              tailor our solutions to suit your needs and aspirations.
            </h2>
            <h3 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor text-center">
              {" "}
              We at 8thGear are helpmates to your business and because we
              believe in the uniqueness of every individual and business, we
              tailor our solutions to suit your needs and aspirations.
            </h3> */}
          </div>
        </div>
      </div>
    </div>
    // <div className="px-4 container-fluid GIZHeroBg d-flex pt-3 pb-4 align-items-center">
    //   <div className="gradientBg overlayBg"></div>
    //   <div className="row">
    //     <div className="col-lg-8 col-md-8 col-sm-12">
    //       <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor homeHeroText">
    //         Great people building enduring ventures
    //       </h1>
    //       <h2 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor homeHeroTextTwo">
    //         Great people building enduring ventures
    //       </h2>
    //     </div>
    //   </div>
    // </div>
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

export const DemodayHero = () => {
  return (
    <>
      <div className="px-4 container-fluid Herodemoday d-flex align-items-center pt-5 pb-2">
        <div className="px-3 container-fluid Herodemodayy d-flex pt-3 pb-4">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9 col-md-12 col-sm-12">
              <h2 className="d-none d-lg-block d-md-block d-sm-none d-xs-none heroTextColor text-center mt-5 ms-5">
                It is important to travel the lonely path of entrepreneurship
                with like-minded individuals. Synergy is created when founders
                collaborate, and individuals are inspired, motivated, and
                challenged to pursue their dreams.
              </h2>
              <h3 className="d-xs-block d-sm-block d-md-none d-lg-none heroTextColor homeHeroTextTwo">
                It is important to travel the lonely path of entrepreneurship
                with like-minded individuals. Synergy is created when founders
                collaborate, and individuals are inspired, motivated, and
                challenged to pursue their dreams.
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="">
        <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none">
          <div className="ManagedServicesAccountingHero d-flex align-items-center">
            <div className="container-fluid">
              <h2 className="text-center heroTextColor">
                The Venture Studio model for entrepreneurship, combining comapny
                building with venture funding Venture Studio.
              </h2>
            </div>
          </div>
        </div> */}
      {/*ManagedServicesAccountingHero mobile view start */}

      {/* <div className="d-lg-none d-md-none d-sm-block d-xs-block">
          <div className="ManagedServicesAccountingHeroMobileView d-flex align-items-center">
            <div className="container-fluid ">
              <h4 className="text-center heroTextColor">
                The Venture Studio model for entrepreneurship, combining comapny
                building with venture funding Venture Studi.
              </h4>
            </div>
          </div>
        </div> */}

      {/* ManagedServicesAccountingHero mobile view start end */}
      {/* </div> */}
    </>
  );
};
// export const GaaSHero = () => {
//   return (
//     <div className="px-4 container-fluid GaaSHeroBg d-flex pt-3 pb-3 align-items-center">
//       <div className="px-3 container-fluid GaaSHeroBgg d-flex pt-3 pb-4">
//         {/* <div className="gradientBg overlayBg"></div> */}
//         <div className="row justify-content-center text-center">
//           <div className="col-lg-9 col-md-12 col-sm-12">
//             <h2 className="d-none d-lg-block d-md-block d-sm-none d-xs-none ms-5 heroTextColor homeHeroText">
//               Great people building enduring ventures
//             </h2>
//             <h3 className="d-xs-block d-sm-block d-md-none d-lg-none heroTextColor homeHeroTextTwo">
//               Great people building enduring ventures
//             </h3>
//             <div className="callToAction pt-4">
//               <BookaSessionBtn />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const ResourcesHero = () => {
  return (
    <>
      <div className="container-fluid ResourcesHeroBg d-flex align-items-center">
        <div className="px-3 container-fluid ResourcesHeroBgg d-flex pt-3 pb-4">
          <div className="row justify-content-center ">
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 heroTextColor text-center"></h2>
              <h3 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor text-center">
                {" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const VideoResourceHero = () => {
  return (
    <>
      <div className="container-fluid VideoResourceHeroBg d-flex align-items-center">
        <div className="px-3 container-fluid VideoResourceHeroBgg d-flex pt-3 pb-4">
          <div className="row justify-content-center ">
            <div className="col-lg-8 col-md-12 col-sm-12 ">
              <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none ms-5 text-center">
                Lörem ipsum startup teotris fysisk cd. Tukrogåligen transparens.
                Innovationskontor biojäd, samt gamification.{" "}
              </h2>
              <h3 className="d-xs-block d-sm-block d-md-block d-lg-none text-center">
                Lörem ipsum startup teotris fysisk cd. Tukrogåligen transparens.
                Innovationskontor biojäd, samt gamification.{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const FUTATechpicHero = () => {
  return (
    <div className="container-fluid FUTAHeroBg">
      <div className="row align-items-center justify-content-center px-4 py-5">
        <div className="col-lg-6 col-md-7 col-sm-12 pt-3">
          <h2 className=" d-none d-lg-block d-md-none d-sm-none d-xs-none">
            Employability Skills Training
            <br />
          </h2>
          <h3 className=" d-xs-block d-sm-block d-md-block d-lg-none">
            Employability Skills Training
            <br />
          </h3>
          <p className="mt-4">
            Are you looking to enhance your employability, gain the necessary
            skills to pursue your dream job, and stand out after graduation? You
            should attend the 8thGear FUTA Techpic Employability Training
          </p>
          <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4">
            <RegisterBtn />
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={futatechpichero}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
          <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-4 text-center">
            <RegisterBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export const DigiPlusPageHero = () => {
  return (
    <div className="container-fluid DigiPlusPageHeroBg d-flex align-items-center">
      <div className="container-fluid DigiPlusPageHeroBgg d-flex pt-3 pb-4">
        <div className="row justify-content-start">
          <div className="col-lg-10 col-md-8 col-sm-12 px-lg-5 ms-2">
            <h1
              className="d-none d-lg-block d-md-none d-sm-none d-xs-none text-white"
              style={{ fontSize: "3rem" }}
            >
              Digital Innovation Hub
            </h1>
            <h2 className="d-xs-block d-sm-block d-md-block d-lg-none text-white">
              Digital Innovation Hub
            </h2>
            <p className="mt-2 text-white">
              Empowering MSMEs: Your One-Stop shop for Digital Transformation
              and Business Growth!
            </p>
          </div>
          {/* <div className="ms-lg-5">
            <DigiPlusRequestBtn />
          </div> */}
        </div>
      </div>
    </div>
  );
};
