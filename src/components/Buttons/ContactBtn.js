//JointheStudioBtn
//JointheTeamBtn
//SubmitFormBtn
// FormSubmitBtn

export const JointheStudioBtn = () => {
  return (
    <button
      className="JointheStudioBtn"
      type="button"
      // className="prop"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      Join the Studio
    </button>
  );
};
// export const JointheStudioBtn = () => {
//   return (
//     <button
//       type="button"
//       class="JointheStudioBtn"
//       data-bs-toggle="modal"
//       data-bs-target="#staticBackdrop1"
//     >
//       Join the Studio
//     </button>
//   );
// };
export const JointheTeamBtn = () => {
  return (
    <button
      type="button"
      className="JointheTeamBtn"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      Join the Team
    </button>
  );
};

export const MemberOneViewBioBtn = () => {
  return (
    <>
      {/* <a href="" className="text-decoration-none"> */}
      View Bio
      {/* </a> */}
    </>
  );
};

export const SubmitFormBtn = () => {
  return (
    <button className="SubmitFormBtn" type="submit">
      Submit
    </button>
  );
};
