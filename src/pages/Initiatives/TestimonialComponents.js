import { useState } from "react";
import { Icon } from "../../components/GlobalUI";
import Stars from "./Stars";

function TestiCard({ data }) {
  const hasArrowIcon = data.id === 3 || data.id === 4;

  return (
    <div className="ig8-testimonial-card">
      <div className="ig8-testimonial-card__quote-row">
        {Icon.quote("var(--teal)")}
        {hasArrowIcon && Icon.arrowR("var(--teal)", 12)}
      </div>
      <p className="ig8-testimonial-card__copy">"{data.text}"</p>
      <div className="ig8-testimonial-card__footer">
        <div>
          {data.name && <div className="ig8-testimonial-card__name">{data.name}</div>}
          <div className="ig8-testimonial-card__role">{data.role}</div>
        </div>
        <Stars n={data.rating} />
      </div>
    </div>
  );
}

function TestimonialLink({ lnk }) {
  const [h, setH] = useState(false);
  const variantClass = h ? "ig8-link-btn ig8-link-btn--hover" : "ig8-link-btn";

  return (
    <a
      href={lnk.href}
      target={lnk.href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={variantClass}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {lnk.label} {Icon.ext("currentColor")}
    </a>
  );
}

export { TestiCard, TestimonialLink };
