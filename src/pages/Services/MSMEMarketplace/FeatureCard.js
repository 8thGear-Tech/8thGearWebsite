const FeatureCard = ({ feature }) => {
  const variant = feature.color === "var(--purple)" ? "purple" : "teal";

  return (
    <div className={`msm-why-card msm-why-card--${variant}`}>
      <div className="msm-why-card__icon">{feature.icon}</div>

      <h3 className="msm-why-card__title">{feature.title}</h3>

      <p className="msm-why-card__copy">{feature.desc}</p>

      <div className="msm-why-card__bar" />
    </div>
  );
};

export default FeatureCard;
