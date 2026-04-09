import { useState, useEffect, useRef } from "react";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;600&display=swap";

export function injectFonts() {
  if (document.querySelector(`link[href="${FONT_HREF}"]`)) return; // already present
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = FONT_HREF;
  document.head.appendChild(link);
}

export const C = {
  white:        "#ffffff",
  teal:         "#00a495",
  tealDark:     "#007d71",
  tealLight:    "rgba(0,164,149,0.07)",
  tealBorder:   "rgba(0,164,149,0.25)",
  tealBorder2:  "rgba(0,164,149,0.20)",
  tealMid:      "rgba(0,164,149,0.13)",
  purple:       "#821e6b",
  purpleHover:  "#6b185a",
  purpleLight:  "rgba(130,30,107,0.07)",
  purpleBorder: "rgba(130,30,107,0.20)",
  dark:         "#0f172a",
  slate:        "#1e293b",
  textPri:      "#0f172a",
  textSec:      "#475569",
  textLight:    "#94a3b8",
  greyBg:       "#f4f6f8",
  greyBorder:   "#e2e8f0",
  shadow:       "0 2px 14px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.04)",
  shadowMd:     "0 6px 24px rgba(0,0,0,0.09)",
  shadowLg:     "0 16px 44px rgba(0,0,0,0.14)",
  radius:       "12px",
  radiusSm:     "8px",
};

export const F = {
  rubik: "Rubik, sans-serif",   // var(--font-rubik)
  open:  "'Open Sans', sans-serif", // var(--font-open)
};

export const bodyTxt = (light = false) => ({
  fontFamily:   F.open,
  fontSize:     "0.97rem",
  fontWeight:   300,
  lineHeight:   "1.75rem",
  color:        light ? "rgba(255,255,255,0.78)" : C.textSec,
  marginBottom: 0,
});

/** Uppercase label / eyebrow text. */
export const label = (col = C.textLight) => ({
  fontFamily:    F.open,
  fontSize:      "10px",
  fontWeight:    700,
  textTransform: "uppercase",
  letterSpacing: "0.09em",
  color:         col,
});

/** Convenience: picks teal or purple accent objects by name. */
export const accentColors = (col) => ({
  main:   col === "purple" ? C.purple  : C.teal,
  light:  col === "purple" ? C.purpleLight : C.tealLight,
  border: col === "purple" ? C.purpleBorder : C.tealBorder2,
});

// ───  Button style factories ────────────────────────────────────────────────
/** Pass `hovered` boolean to get the correct hover state inline style. */
export const Btn = {
  purple: (hovered) => ({
    display:        "inline-flex",
    alignItems:     "center",
    gap:            8,
    background:     hovered ? C.purpleHover : C.purple,
    color:          C.white,
    border:         "none",
    borderRadius:   "100px",
    padding:        "12px 28px",
    fontFamily:     F.open,
    fontSize:       14,
    fontWeight:     600,
    cursor:         "pointer",
    transition:     "background 0.2s",
    textDecoration: "none",
  }),

  whiteOutline: (hovered) => ({
    display:        "inline-flex",
    alignItems:     "center",
    gap:            8,
    background:     hovered ? "rgba(255,255,255,0.13)" : "transparent",
    color:          C.white,
    border:         "1.5px solid rgba(255,255,255,0.5)",
    borderRadius:   "100px",
    padding:        "11px 26px",
    fontFamily:     F.open,
    fontSize:       14,
    fontWeight:     600,
    cursor:         "pointer",
    transition:     "all 0.2s",
    textDecoration: "none",
  }),

  tealOutline: (hovered) => ({
    display:        "inline-flex",
    alignItems:     "center",
    gap:            8,
    background:     hovered ? C.teal : "transparent",
    color:          hovered ? C.white : C.teal,
    border:         `1.5px solid ${C.teal}`,
    borderRadius:   "100px",
    padding:        "9px 20px",
    fontFamily:     F.open,
    fontSize:       13,
    fontWeight:     600,
    cursor:         "pointer",
    transition:     "all 0.2s",
    textDecoration: "none",
  }),
};

// ─── SVG icon library ──────────────────────────────────────────────────────
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
  check: (col = "#00a495", sz = 15) => (
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
  quote: (col = "#00a495") => (
    <svg width="32" height="24" viewBox="0 0 36 28" fill="none">
      <path d="M0 28V17C0 7.5 5.5 2 16.5 0l1.8 2.8C12 4.2 8.4 7.5 7.5 12H14V28H0zm20 0V17C20 7.5 25.5 2 36.5 0L38.3 2.8C32.3 4.2 28.7 7.5 27.8 12H34V28H20z" fill={col} opacity="0.15" />
    </svg>
  ),
  pdf: (col = "#00a495", sz = 26) => (
    <svg width={sz} height={sz} viewBox="0 0 26 26" fill="none">
      <rect x="2" y="2" width="22" height="22" rx="5" fill={col} opacity="0.1" />
      <rect x="2" y="2" width="22" height="22" rx="5" stroke={col} strokeWidth="1.5" />
      <path d="M7 9h6M7 13h9M7 17h5" stroke={col} strokeWidth="1.6" strokeLinecap="round" />
      <rect x="14" y="5" width="7" height="7" rx="1.5" fill={col} opacity="0.18" />
      <text x="15" y="11" fontFamily="Rubik,sans-serif" fontSize="4.5" fontWeight="700" fill={col}>PDF</text>
    </svg>
  ),
};

// ─── Shared UI primitives ──────────────────────────────────────────────────

/**
 * Section "chip" / eyebrow label.
 * @param {string} label  – display text
 * @param {"teal"|"purple"} col – accent colour
 */
export const Chip = ({ label: lbl, col = "teal" }) => (
  <div style={{
    display:       "inline-flex",
    alignItems:    "center",
    background:    col === "teal" ? C.tealLight : C.purpleLight,
    border:        `1px solid ${col === "teal" ? C.tealBorder : C.purpleBorder}`,
    borderRadius:  "100px",
    padding:       "5px 14px",
    fontFamily:    F.open,
    fontSize:      11,
    fontWeight:    700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color:         col === "teal" ? C.teal : C.purple,
    marginBottom:  14,
  }}>
    {lbl}
  </div>
);

/**
 * Decorative horizontal accent divider.
 * @param {string} col    – colour (defaults to teal)
 * @param {boolean} center – centre-aligns for hero/centred layouts
 */
export const Div = ({ col = C.teal, center = false }) => (
  <div style={{
    width:        44,
    height:       3,
    borderRadius: "100px",
    background:   col,
    marginBottom: 18,
    ...(center ? { margin: "0 auto 18px" } : {}),
  }} />
);

export function useFadeIn() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

/**
 * Wrapper that fades + slides its children up on scroll.
 * @param {number} delay – stagger delay in ms
 */
export const FadeUp = ({ children, delay = 0 }) => {
  const [ref, vis] = useFadeIn();
  return (
    <div
      ref={ref}
      style={{
        opacity:    vis ? 1 : 0,
        transform:  vis ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.48s ease ${delay}ms, transform 0.48s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};