const PortfolioCards = ({ imgLink, headText, subheading, p1, ps1, ps2, ps3 }) => {
  return (
    <div 
      className="portfolio-card"
      style={{
        width: "100%",
        maxWidth: "380px",
        minHeight: "500px",
        background: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s ease",
        border: "1px solid rgba(0, 0, 0, 0.06)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(110, 0, 106, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
      }}
    >
      {/* Logo Section */}
      <div 
        className="d-flex align-items-center justify-content-center"
        style={{
          padding: "40px 20px 20px",
          background: "linear-gradient(180deg, #f9f9f9 0%, #ffffff 100%)",
          minHeight: "180px",
        }}
      >
        <img
          src={imgLink}
          alt={headText}
          className="img-fluid"
          style={{ 
            maxWidth: "140px", 
            maxHeight: "120px",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Content Section */}
      <div 
        className="d-flex flex-column text-start"
        style={{ 
          padding: "24px",
          flex: 1,
        }}
      >
        {/* Header */}
        <div className="mb-3">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h4 
              className="mb-0 fw-bold" 
              style={{ 
                fontSize: "1.4rem",
                color: "#1a1a1a",
              }}
            >
              {headText}
            </h4>
            <span 
              style={{
                fontSize: "0.75rem",
                color: "#6E006A",
                background: "rgba(110, 0, 106, 0.1)",
                padding: "4px 12px",
                borderRadius: "12px",
                fontWeight: "600",
                whiteSpace: "nowrap",
              }}
            >
              {subheading}
            </span>
          </div>
        </div>

        {/* Description */}
        <p 
          className="mb-4" 
          style={{
            fontSize: "0.95rem",
            color: "#666",
            lineHeight: "1.7",
            flex: 1,
            textAlign: "left",
          }}
        >
          {p1}
        </p>

        {/* Tags/Meta Information */}
        {(ps1 || ps2 || ps3) && (
          <div 
            className="d-flex flex-wrap gap-2"
            style={{
              paddingTop: "16px",
              borderTop: "1px solid rgba(0, 0, 0, 0.06)",
            }}
          >
            {ps1 && (
              <span 
                style={{
                  fontSize: "0.8rem",
                  color: "#6E006A",
                  background: "rgba(110, 0, 106, 0.08)",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontWeight: "500",
                }}
              >
                {ps1}
              </span>
            )}
            {ps2 && (
              <span 
                style={{
                  fontSize: "0.8rem",
                  color: "#555",
                  background: "#f0f0f0",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontWeight: "500",
                }}
              >
                📍 {ps2}
              </span>
            )}
            {ps3 && (
              <span 
                style={{
                  fontSize: "0.8rem",
                  color: "#555",
                  background: "#f0f0f0",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontWeight: "500",
                }}
              >
               {ps3}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioCards;