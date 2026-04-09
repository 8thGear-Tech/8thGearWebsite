import "../About/aboutUs.css";

export const EIRApplySection = () => (
  <section id="eir-apply" className="eir-section">
    <div className="eir-blob eir-blob--pink" />
    <div className="eir-blob eir-blob--teal" />

    <div className="eir-inner">
      {/* Left: copy */}
      <div className="eir-left">

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
          Apply to Become an EIR
          <i className="bi bi-arrow-up-right eir-cta-icon-right" />
        </a>
      </div>
    </div>
  </section>
);

export default EIRApplySection;