import { Link } from "react-router-dom";
import { Icon } from "../../../components/GlobalUI";

const SolutionCard = ({ img, title, desc, link, btnText, accent = "var(--teal)", internal = false, alignRight = false }) => {
  const variant = accent === "var(--purple)" ? "purple" : "teal";
  const bodyClass = `msm-sol-card__body msm-sol-card__body--${variant}`;
  const btnClass = `msm-sol-card__btn msm-sol-card__btn--${variant}`;
  const dotClass = `msm-sol-card__dot msm-sol-card__dot--${variant}`;
  const cardClass = `msm-sol-card${alignRight ? " msm-sol-card--right" : ""}`;

  return (
    <div className={cardClass}>
      <div className="msm-sol-card__media">
        <img src={img} alt={title} className="msm-sol-card__img" />
      </div>

      <div className={bodyClass}>
        <div className="msm-sol-card__head">
          <h5 className="msm-sol-card__title">{title}</h5>
          <span className={dotClass} />
        </div>

        <p className="msm-sol-card__copy">{desc}</p>

        {internal ? (
          <Link to={link} className={btnClass}>
            {btnText} {Icon.arrowR("currentColor")}
          </Link>
        ) : (
          <a href={link} target="_blank" rel="noopener noreferrer" className={btnClass}>
            {btnText} {Icon.arrowR("currentColor")}
          </a>
        )}
      </div>
    </div>
  );
};

export default SolutionCard;
