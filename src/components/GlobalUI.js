import { useEffect, useRef, useState } from "react";

export const Icon = {
  arrowR: (col = "currentColor", sz = 15) => (
    <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke={col} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  arrowL: (col = "currentColor", sz = 15) => (
    <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none">
      <path d="M13 8H3M7 4L3 8l4 4" stroke={col} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ext: (col = "currentColor", sz = 14) => (
    <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none">
      <path d="M10 2h4v4M14 2L8 8M6 4H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3" stroke={col} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  download: (col = "currentColor", sz = 15) => (
    <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none">
      <path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke={col} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  check: (col = "var(--teal)", sz = 15) => (
    <svg width={sz} height={sz} viewBox="0 0 16 16" fill="none">
      <path d="M3 8l3.5 3.5L13 5" stroke={col} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  close: (col = "currentColor", sz = 18) => (
    <svg width={sz} height={sz} viewBox="0 0 18 18" fill="none">
      <path d="M2 2l14 14M16 2L2 16" stroke={col} strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  star: (filled = true, sz = 14) => (
    <svg width={sz} height={sz} viewBox="0 0 16 16" fill={filled ? "#f59e0b" : "none"} stroke={filled ? "none" : "#f59e0b"} strokeWidth="1.2">
      <path d="M8 1l2.09 4.26L15 6.27l-3.5 3.41.83 4.82L8 12.27l-4.33 2.23.83-4.82L1 6.27l4.91-.71L8 1z" strokeLinejoin="round" />
    </svg>
  ),
  quote: (col = "var(--teal)") => (
    <svg width="32" height="24" viewBox="0 0 36 28" fill="none">
      <path d="M0 28V17C0 7.5 5.5 2 16.5 0l1.8 2.8C12 4.2 8.4 7.5 7.5 12H14V28H0zm20 0V17C20 7.5 25.5 2 36.5 0L38.3 2.8C32.3 4.2 28.7 7.5 27.8 12H34V28H20z" fill={col} opacity="0.15" />
    </svg>
  ),
  pdf: (col = "var(--teal)", sz = 26) => (
    <svg width={sz} height={sz} viewBox="0 0 26 26" fill="none">
      <rect x="2" y="2" width="22" height="22" rx="5" fill={col} opacity="0.1" />
      <rect x="2" y="2" width="22" height="22" rx="5" stroke={col} strokeWidth="1.5" />
      <path d="M7 9h6M7 13h9M7 17h5" stroke={col} strokeWidth="1.6" strokeLinecap="round" />
      <rect x="14" y="5" width="7" height="7" rx="1.5" fill={col} opacity="0.18" />
      <text x="15" y="11" style={{ fontFamily: "var(--font-heading)" }} fontSize="4.5" fontWeight="700" fill={col}>PDF</text>
    </svg>
  ),
};

export const bodyTxt = (light = false) => ({
  fontFamily: "var(--font-body)",
  fontSize: "0.97rem",
  fontWeight: 300,
  lineHeight: "1.75rem",
  color: light ? "rgba(255,255,255,0.78)" : "var(--text-sec)",
  marginBottom: 0,
});

export const label = (col = "var(--text-light)") => ({
  fontFamily: "var(--font-body)",
  fontSize: "10px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.09em",
  color: col,
});

export const Btn = {
  purple: (hovered) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: hovered ? "var(--purple-hover)" : "var(--purple)",
    color: "var(--white)",
    border: "none",
    borderRadius: "100px",
    padding: "12px 28px",
    fontFamily: "var(--font-body)",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background 0.2s",
    textDecoration: "none",
  }),
  whiteOutline: (hovered) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: hovered ? "rgba(255,255,255,0.13)" : "transparent",
    color: "var(--white)",
    border: "1.5px solid rgba(255,255,255,0.5)",
    borderRadius: "100px",
    padding: "11px 26px",
    fontFamily: "var(--font-body)",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
    textDecoration: "none",
  }),
  tealOutline: (hovered) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: hovered ? "var(--teal)" : "transparent",
    color: hovered ? "var(--white)" : "var(--teal)",
    border: `1.5px solid ${"var(--teal)"}`,
    borderRadius: "100px",
    padding: "9px 20px",
    fontFamily: "var(--font-body)",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
    textDecoration: "none",
  }),
};

export const Chip = ({ label: lbl, col = "teal" }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      background: col === "teal" ? "var(--teal-light)" : "var(--purple-light)",
      border: `1px solid ${col === "teal" ? "var(--teal-border)" : "var(--purple-border)"}`,
      borderRadius: "100px",
      padding: "5px 14px",
      fontFamily: "var(--font-body)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: col === "teal" ? "var(--teal)" : "var(--purple)",
      marginBottom: 14,
    }}
  >
    {lbl}
  </div>
);

export const Div = ({ col = "var(--teal)", center = false }) => (
  <div
    style={{
      width: 44,
      height: 3,
      borderRadius: "100px",
      background: col,
      marginBottom: 18,
      ...(center ? { margin: "0 auto 18px" } : {}),
    }}
  />
);

function useFadeIn() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, vis];
}

export const FadeUp = ({ children, delay = 0 }) => {
  const [ref, vis] = useFadeIn();

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.48s ease ${delay}ms, transform 0.48s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
