import "../About/aboutUs.css";

const PERKS = [
  {
    icon: "bi bi-people-fill",
    title: "Structured Journey",
    body: "A focused 6-month mentorship & accountability programme.",
  },
  {
    icon: "bi bi-graph-up-arrow",
    title: "Real Impact",
    body: "Shape high-potential entrepreneurs across all 8thGear programmes.",
  },
  {
    icon: "bi bi-lightbulb-fill",
    title: "Strategic Role",
    body: "Provide guidance, industry insight, and hands-on business support.",
  },
  {
    icon: "bi bi-globe2",
    title: "Ecosystem Builder",
    body: "Foster scalable, sustainable ventures that move Africa forward.",
  },
];

export const EIRApplySection = () => (
  <section id="eir-apply" className="eir-section">
    <div className="eir-blob eir-blob--pink" />
    <div className="eir-blob eir-blob--teal" />

    <div className="eir-inner">
      {/* Left: copy */}
      <div className="eir-left">
        {/* <span className="eir-eyebrow">
          <span className="eir-eyebrow-dot" />
          Entrepreneurs in Residence
        </span> */}

        <h3 className="eir-heading">
          Become an <span className="eir-highlight">EIR</span> at 8thGear
        </h3>

        <p className="eir-body">
          Are you an experienced professional or founder with{" "}
          <strong>at least five years of business experience</strong>? Step into
          a role where your expertise drives real impact by shaping the next
          generation of entrepreneurs.
        </p>
        <p className="eir-body">
          8thGear's EIRs are seasoned professionals passionate about supporting
          high-potential businesses. Through a structured{" "}
          <strong>6-month mentorship and accountability journey</strong>, you
          will work closely with entrepreneurs from all 8thGear Entrepreneurship
          Programmes, providing strategic guidance, industry insight, and
          hands-on support to help them grow.
        </p>
        <p className="eir-body eir-body--last">
          You will play a key role in strengthening businesses, fostering
          innovation, and contributing to the development of scalable and
          sustainable ventures.
        </p>

        <a
          href="https://forms.gle/Q8oZVjKdq5xygHUg6"
          target="_blank"
          rel="noopener noreferrer"
          className="eir-cta"
        >
          Apply to Become an EIR Mentor
          <i className="bi bi-arrow-up-right eir-cta-icon-right" />
        </a>
      </div>

      {/* Right: perk cards */}
      {/* <div className="eir-right">
        {PERKS.map((p, i) => (
          <PerkCard key={i} {...p} />
        ))}
      </div> */}
    </div>
  </section>
);

// const PerkCard = ({ icon, title, body }) => (
//   <div className="eir-card">
//     <div className="eir-card-icon">
//       <i className={`${icon} eir-card-icon-i`} />
//     </div>
//     <div>
//       <p className="eir-card-title">{title}</p>
//       <p className="eir-card-body">{body}</p>
//     </div>
//   </div>
// );

export default EIRApplySection;