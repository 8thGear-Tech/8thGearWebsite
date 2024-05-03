import card from "../data/faq.json";

const FAQ = () => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="accordion accordion mx-auto w-50 mt-5"
          id="accordionExample"
        >
          <div className="accordion-item">
            <div className="accordion-item faq">
              <h5 className="accordion-header  pt-4 pb-2  mx-3" id="headingTwo">
                Managed Services
              </h5>
            </div>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>

        <div
          className="accordion accordion mx-auto w-50 mt-5"
          id="accordionExample"
        >
          <div className="accordion-item">
            <div className="accordion-item faq">
              <h5 className="accordion-header  pt-4 pb-2  mx-3" id="headingTwo">
                Co-Working Space
              </h5>
            </div>
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collaps Four"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FAQ1 = () => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="accordion accordion mx-auto w-50 mt-5"
          id="accordionExample"
        >
          <div className="accordion-item">
            <div className="accordion-item faq">
              <h5 className="accordion-header  pt-4 pb-2  mx-3" id="headingTwo">
                Growth As A Service
              </h5>
            </div>
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the first item's accordion body.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="headingEight"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the second item's accordion body. Let's imagine this being
                filled with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingNine">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseNine"
              className="accordion-collapse collapse"
              aria-labelledby="headingNine"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>

        <div
          className="accordion accordion mx-auto w-50 mt-5"
          id="accordionExample"
        >
          <div className="accordion-item">
            <div className="accordion-item faq">
              <h5 className="accordion-header  pt-4 pb-2  mx-3" id="headingTwo">
                Project Delivery
              </h5>
            </div>
            <h2 className="accordion-header" id="headingTen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseTen"
              className="accordion-collapse collapse"
              aria-labelledby="headingTen"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the first item's accordion body.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEleven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEleven"
                aria-expanded="false"
                aria-controls="collapseEleven"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseEleven"
              className="accordion-collapse collapse"
              aria-labelledby="headingEleven"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the second item's accordion body. Let's imagine this being
                filled with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwelve">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwelve"
                aria-expanded="false"
                aria-controls="collapseTwelve"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwelve"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FAQ2 = () => {
  return (
    <div classNameName="container">
      <div classNameName="row">
        <div
          className="accordion accordion mx-auto w-50 mt-5"
          id="accordionExample"
        >
          <div className="accordion-item">
            <div className="accordion-item faq">
              <h5 className="accordion-header  pt-4 pb-2  mx-3" id="headingTwo">
                Venture Studio
              </h5>
            </div>
            <h2 className="accordion-header" id="headingTwenty">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwenty"
                aria-expanded="false"
                aria-controls="collapseTwenty"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseTwenty"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwenty"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the first item's accordion body.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThirty">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThirty"
                aria-expanded="false"
                aria-controls="collapseThirty"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseThirty"
              className="accordion-collapse collapse"
              aria-labelledby="headingThirty"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the second item's accordion body. Let's imagine this being
                filled with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingForty">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseForty"
                aria-expanded="false"
                aria-controls="collapseForty"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseForty"
              className="accordion-collapse collapse"
              aria-labelledby="headingForty"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion accordion mx-auto w-50 mt-5"
          id="accordionExample"
        >
          <div className="accordion-item">
            <div className="accordion-item faq">
              <h5 className="accordion-header  pt-4 pb-2  mx-3" id="headingTwo">
                Events
              </h5>
            </div>
            <h2 className="accordion-header" id="headingFifty">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFifty"
                aria-expanded="false"
                aria-controls="collapseFifty"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseFifty"
              className="accordion-collapse collapse"
              aria-labelledby="headingFify"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the first item's accordion body.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSixty">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSixty"
                aria-expanded="false"
                aria-controls="collapseSixty"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseSixty"
              className="accordion-collapse collapse"
              aria-labelledby="headingSixty"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the second item's accordion body. Let's imagine this being
                filled with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeventy">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeventy"
                aria-expanded="false"
                aria-controls="collapseSeventy"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseSeventy"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeventy"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const FAQ1 = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         {card.information.map((heading) => {
//           return (
//             <div
//               className="col-sm-12 col-md-12 col-lg-6 mb-5 p-0 "
//               key={heading.id}
//             >
//               <FAQ {...heading}></FAQ>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// //

export default FAQ;

//  const { heading, target, collapse, tool } = props;
//   return (
//     <div className="accordion container w-75" id="accordionExample">
//       <div className="accordion-item">
//         <div className="accordion-item  faq">
//           <h2 className="h5 mt-4 mx-3 ">
//             <div>
//               <strong>{heading}</strong>
//               {/* <strong>Managed Services</strong> */}
//             </div>
//           </h2>
//         </div>

//         <h2 className="accordion-header" id={target}>
//           <button
//             className="accordion-button"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target={collapse}
//             aria-expanded="true"
//             aria-controls={tool}
//           >
//             Accordion Item #1
//           </button>
//         </h2>
//         <div
//           id={tool}
//           className="accordion-collapse collapse"
//           aria-labelledby={target}
//           // data-bs-parent="#accordionExample"
//         >
//           <div className="accordion-body">
//             <strong>This is the first item's accordion body.</strong> It is
//             shown by default, until the collapse plugin adds the appropriate
//             classNamees that we use to style each element. These classNamees control the
//             overall appearance, as well as the showing and hiding via CSS
//             transitions. You can modify any of this with custom CSS or
//             overriding our default variables. It's also worth noting that just
//             about any HTML can go within the <code>.accordion-body</code>,
//             though the transition does limit overflow.
//           </div>
//         </div>
//       </div>
//       <div className="accordion-item">
//         <h2 className="accordion-header" id={target}>
//           <button
//             className="accordion-button collapsed"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target={collapse}
//             aria-expanded="false"
//             aria-controls={tool}
//           >
//             Accordion Item #2
//           </button>
//         </h2>
//         <div
//           id={tool}
//           className="accordion-collapse collapse  "
//           aria-labelledby={target}
//           data-bs-parent="#accordionExample"
//         >
//           <div className="accordion-body">
//             <strong>This is the second item's accordion body.</strong> It is
//             hidden by default, until the collapse plugin adds the appropriate
//             classNamees that we use to style each element. These classNamees control the
//             overall appearance, as well as the showing and hiding via CSS
//             transitions. You can modify any of this with custom CSS or
//             overriding our default variables. It's also worth noting that just
//             about any HTML can go within the <code>.accordion-body</code>,
//             though the transition does limit overflow.
//           </div>
//         </div>
//       </div>
//       <div className="accordion-item">
//         <h2 className="accordion-header" id={target}>
//           <button
//             className="accordion-button collapsed"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target={collapse}
//             aria-expanded="false"
//             aria-controls={tool}
//           >
//             Accordion Item #3
//           </button>
//         </h2>
//         <div
//           id={tool}
//           className="accordion-collapse collapse "
//           aria-labelledby={target}
//           data-bs-parent="#accordionExample"
//         >
//           <div className="accordion-body">
//             <strong>This is the third item's accordion body.</strong> It is
//             hidden by default, until the collapse plugin adds the appropriate
//             classNamees that we use to style each element. These classNamees control the
//             overall appearance, as well as the showing and hiding via CSS
//             transitions. You can modify any of this with custom CSS or
//             overriding our default variables. It's also worth noting that just
//             about any HTML can go within the <code>.accordion-body</code>,
//             though the transition does limit overflow.
//           </div>
//         </div>
//       </div>
//     </div>
