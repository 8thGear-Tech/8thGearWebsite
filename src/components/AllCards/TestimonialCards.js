//ManagedServicesPageTestimonialCard
//CoWorkingPageTestimonialCard

import { useEffect, useState } from "react";

// import testimonial from "../../data/testimonialcards.json";
import data from "../../data/coworkingPageTestimonialCard.json";
import circle2 from "../../assets/images/circle2.png";
import ijeoma from "../../assets/images/ijeoma.jpg";

// export function ManagedServicesPageTestimonialCard() {
//   const [card, setCard] = useState(testimonial);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const lastIndex = card.length - 1;
//     if (index < 0) {
//       setIndex(lastIndex);
//     }
//     if (index > lastIndex) {
//       setIndex(0);
//     }
//   }, [index, card]);

//   useEffect(() => {
//     let slider = setInterval(() => {
//       setIndex(index + 1);
//     }, 3000);
//     return () => clearInterval(slider);
//   }, [index]);
//   return (
//     <section className="section">
//       <div className="section-center">
//         {testimonial.card.map((data, dataIndex) => {
//           const { Images, Name, Position, Text } = data;

//           let position = "nextSlide";
//           if (index === dataIndex) {
//             position = "lastSlide";
//           }

//           if (
//             dataIndex === index - 1 ||
//             (index === 0 && dataIndex === card.length - 1)
//           ) {
//             position = "activeSlide";
//           }
//           return (
//             <div className="card mb-3">
//               <div className="row g-0">
//                 <div className="col-lg-6 bg-dark">
//                   <img
//                     src={Images}
//                     className="img-fluid rounded-start- "
//                     alt="..."
//                   />

//                   <br />
//                   <br />
//                   <br />

//                   <h1 className="h5 text-white mx-3 ">{Name}</h1>
//                   <h1 className="h5 text-white mx-3 mb-3">{Position}</h1>
//                 </div>
//                 <div className="ManagedServicesPageTestimonialCard col-lg-6">
//                   <div className="card-body  ">
//                     <p className="card-text text-white ">{Text}</p>
//                   </div>

//                   <br />
//                   <br />
//                   <br />
//                   <br />
//                   <br />
//                   <br />

//                   <div>
//                     <p className="mx-3">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         fill="currentColor"
//                         class="bi bi-linkedin"
//                         viewBox="0 0 16 16"
//                       >
//                         <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
//                       </svg>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//         <button
//           class="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleInterval"
//           data-bs-slide="prev"
//         >
//           <span
//             class="carousel-control-prev-icon bg-dark"
//             aria-hidden="true"
//           ></span>
//           <span class="visually-hidden">Previous</span>
//         </button>
//         <button
//           class="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleInterval"
//           data-bs-slide="next"
//         >
//           <span
//             class="carousel-control-next-icon bg-dark"
//             aria-hidden="true"
//           ></span>
//           <span class="visually-hidden">Next</span>
//         </button>
//       </div>
//     </section>
// );
// }

export const ManagedServicesPageTestimonialCard = () => {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide  "
      data-bs-ride="carousel"
    >
      <h1 className="text-center h4 mt-5">Testimonials</h1>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="4000">
          <div class="card mb-3 mt-5 cardss  ">
            <div
              class="row g-0 mx-auto w-25
             "
            >
              <div class="col-md-6 ManagedServicesPageTestimonialCard cardsss ">
                <div className="text-center ">
                  <img
                    src={circle2}
                    style={{ maxHeight: "200px" }}
                    class="img-fluid rounded-start "
                    alt="..."
                  />
                </div>

                <div className="d-flex py-5  cardsss">
                  <img
                    src={ijeoma}
                    className="rounded-circle testimonialImage mx-4"
                    alt=""
                  />

                  <p className="text-white ">
                    Olasunkanmi Olarewaju <br />
                    CEO Innkeeper
                  </p>
                </div>
              </div>
              <div class="col-md-6 ">
                <div class="card-body bg-dark cardsss">
                  <p class="text-white mt-5 my-4 px-3 pb-5  text-center">
                    We at 8thGear are helpmates to your business and because we
                    believe in the uniqueness of every individual and business,
                    we tailor our solutions to suit.
                  </p>
                  <p className="mx-3 text-white  mb-5 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16
                        1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487
                        0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554
                        1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248
                        1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662
                        1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0
                        1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <div class="card mb-3 mt-5 cardss">
            <div class="row g-0 mx-auto w-50">
              <div class="col-md-6 ManagedServicesPageTestimonialCard cardsss ">
                <div className="text-center ">
                  <img
                    src={circle2}
                    style={{ maxHeight: "200px" }}
                    class="img-fluid rounded-start "
                    alt="..."
                  />
                </div>
                <div className="d-flex py-5">
                  <img
                    src={ijeoma}
                    className="rounded-circle testimonialImage mx-4"
                    alt=""
                  />

                  <p className="text-white ">
                    Olasunkanmi Olarewaju <br />
                    CEO Innkeeper
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card-body bg-dark cardsss">
                  <p class="text-white mt-5 my-4 px-3 pb-5   text-center">
                    We at 8thGear are helpmates to your business and because we
                    believe in the uniqueness of every individual and business,
                    we tailor our solutions to suit.
                  </p>
                  <p className="mx-3 text-white mb-5 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16
              1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487
              0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554
              1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248
              1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662
              1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0
              1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <div class="card mb-3 mt-5 cardss">
            <div class="row g-0 mx-auto w-50">
              <div class="col-md-6 ManagedServicesPageTestimonialCard cardsss">
                <div className="text-center ">
                  <img
                    src={circle2}
                    style={{ maxHeight: "200px" }}
                    class="img-fluid rounded-start "
                    alt="..."
                  />
                </div>
                <div className="d-flex py-5">
                  <img
                    src={ijeoma}
                    className="rounded-circle testimonialImage mx-4"
                    alt=""
                  />

                  <p className="text-white ">
                    Olasunkanmi Olarewaju <br />
                    CEO Innkeeper
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card-body bg-dark cardsss">
                  <p class="text-white mt-5 my-4 px-3 pb-5 text-center  ">
                    We at 8thGear are helpmates to your business and because we
                    believe in the uniqueness of every individual and business,
                    we tailor our solutions to suit.
                  </p>
                  <p className="mx-3 text-white mb-5  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16
              1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487
              0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554
              1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248
              1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662
              1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0
              1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card mb-3 mt-5 cardss ">
            <div class="row g-0 mx-auto w-50 ">
              <div class="col-md-6 ManagedServicesPageTestimonialCard  cardsss">
                <div className="text-center ">
                  <img
                    src={circle2}
                    style={{ maxHeight: "200px" }}
                    class="img-fluid rounded-start "
                    alt="..."
                  />
                </div>
                <div className="d-flex py-5">
                  <img
                    src={ijeoma}
                    className="rounded-circle testimonialImage mx-4"
                    alt=""
                  />

                  <p className="text-white ">
                    Olasunkanmi Olarewaju <br />
                    CEO Innkeeper
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card-body bg-dark cardsss">
                  <p class="text-white mt-5 my-4 px-3 pb-5  text-center">
                    We at 8thGear are helpmates to your business and because we
                    believe in the uniqueness of every individual and business,
                    we tailor our solutions to suit.
                  </p>
                  <p className="mx-3 text-white mb-5 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16
              1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487
              0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554
              1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248
              1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662
              1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0
              1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev "
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev "
      >
        <span
          class="carousel-control-prev-icon "
          style={{
            backgroundColor: "#000000",
            borderRadius: "0.5rem",
          }}
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon "
          aria-hidden="true"
          style={{
            backgroundColor: "#000000",
            borderRadius: "0.5rem",
          }}
        ></span>

        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
// export const ManagedServicesPageTestimonialCard = (props) => {
//   const { Images, Name, Position, Text } = props;
//   return (
//     <div className="card mb-3">
//       <div className="row g-0">
//         <div className="col-lg-6 bg-dark">
//           <img src={Images} className="img-fluid rounded-start " alt="..." />

//           <br />
//           <br />
//           <br />

//           <h1 className="h5 text-white mx-3 ">{Name}</h1>
//           <h1 className="h5 text-white mx-3 mb-3">{Position}</h1>
//         </div>
//         <div className="ManagedServicesPageTestimonialCard col-lg-6">
//           <div className="card-body  ">
//             <p className="card-text text-white ">{Text}</p>
//           </div>

//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />

//           <div>
//             <p className="mx-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="currentColor"
//                 class="bi bi-linkedin"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
//               </svg>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const About = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         {testimonial.card.map((card) => {
//           return (
//             <div className="col-sm-12 col-md-12 col-lg-6" key={card.id}>
//               <ManagedServicesPageTestimonialCard
//                 {...card}
//               ></ManagedServicesPageTestimonialCard>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

export const CoWorkingPageTestimonialCard = (props) => {
  const { image, name, position, text } = props;
  return (
    <div className="card w-100 mt-5">
      <div className="card-body">
        {/* <div className="row"> */}
        {/* <div className=" d-flex"> */}
        {/* <img src={image} className="img-fluid rounded-circle w-25" alt="" /> */}
        <h6 className="">
          <b>{name}</b>
        </h6>
        <p>{position}</p>
        {/* </div> */}
        <hr className="line"></hr>
        <p className="card-text">{text}</p>
        {/* </div> */}
      </div>
    </div>
  );
};

export const CoworkingTestimonial = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <h3 className="text-center ">FROM OUR USERS</h3>
        {data.cardData.map((card) => {
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch"
              key={card.id}
            >
              <CoWorkingPageTestimonialCard
                {...card}
              ></CoWorkingPageTestimonialCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};
