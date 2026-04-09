import { useState } from "react";
import { Icon } from "../../components/GlobalUI";

function ProgrammeCard({ data }) {
  const [cur, setCur] = useState(0);
  const hasPdf = data.report.pdf && data.report.pdf !== "#";
  const visibleHighlights = data.highlights.slice(0, 3);
  const visiblePills = data.pills.slice(0, 3);
  const isExternalReport = hasPdf && /^https?:\/\//i.test(data.report.pdf);
  const variant = data.col === "purple" ? "purple" : "teal";

  const nextSlide = () => setCur((prev) => (prev + 1) % data.images.length);
  const prevSlide = () =>
    setCur((prev) => (prev - 1 + data.images.length) % data.images.length);

  const reportClass = [
    "ig8-programme-card__report",
    hasPdf ? "ig8-programme-card__report--active" : "ig8-programme-card__report--disabled",
    data.report.isRFP ? "ig8-programme-card__report--rfp" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`ig8-programme-card ig8-programme-card--${variant}`}>
      <div className="ig8-programme-card__bar" />

      <div className="ig8-programme-card__media-wrap">
        <div className="ig8-programme-card__media">
          <img
            src={data.images[cur]}
            alt={`${data.title} slide ${cur + 1}`}
            className="ig8-programme-card__image"
          />
          <span className="ig8-programme-card__badge">{data.badge}</span>

          {data.images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                aria-label={`Previous image for ${data.title}`}
                className="ig8-programme-card__nav ig8-programme-card__nav--left"
              >
                {Icon.arrowL("currentColor", 12)}
              </button>
              <button
                onClick={nextSlide}
                aria-label={`Next image for ${data.title}`}
                className="ig8-programme-card__nav ig8-programme-card__nav--right"
              >
                {Icon.arrowR("currentColor", 12)}
              </button>
            </>
          )}
        </div>
      </div>

      <div className="ig8-programme-card__body">
        <div className="ig8-programme-card__head">
          <h3 className="ig8-programme-card__title">{data.title}</h3>
          <a
            href={hasPdf ? data.report.pdf : undefined}
            target={isExternalReport ? "_blank" : undefined}
            rel={isExternalReport ? "noopener noreferrer" : undefined}
            download={hasPdf && !isExternalReport ? true : undefined}
            onClick={!hasPdf ? (e) => e.preventDefault() : undefined}
            className={reportClass}
          >
            {hasPdf
              ? data.report.isRFP
                ? Icon.ext("currentColor", 10)
                : Icon.download("currentColor", 10)
              : Icon.pdf("var(--text-light)", 12)}
            {data.report.type}
          </a>
        </div>

        <p className="ig8-programme-card__summary">{data.body}</p>

        {data.metrics && (
          <div className="ig8-programme-card__metrics">
            {data.metrics.map((m) => (
              <div key={m.key} className="ig8-programme-card__metric">
                <span className="ig8-programme-card__metric-value">{m.val}</span>
                <span className="ig8-programme-card__metric-key">{m.key}</span>
              </div>
            ))}
          </div>
        )}

        <div className="ig8-programme-card__content">
          <div>
            <h4 className="ig8-programme-card__section-title">Impact Highlights</h4>
            <ul className="ig8-programme-card__list">
              {visibleHighlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="ig8-programme-card__pills">
              {visiblePills.map((p) => (
                <span key={p} className="ig8-programme-card__pill">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgrammeCard;
