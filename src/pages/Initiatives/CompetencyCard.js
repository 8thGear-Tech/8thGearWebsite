function CompetencyCard({ item }) {
  return (
    <div className="ig8-competency-card">
      <div className="ig8-competency-card__accent" />

      <div className="ig8-competency-card__body">
        <div className="ig8-competency-card__icon-wrap">
          <div className="ig8-competency-card__icon">{item.icon()}</div>
        </div>

        <h3 className="ig8-competency-card__title">{item.title}</h3>

        <p className="ig8-competency-card__copy">{item.desc}</p>

        <div className="ig8-competency-card__tags">
          {item.tags.map((t) => (
            <span key={t} className="ig8-competency-card__tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompetencyCard;
