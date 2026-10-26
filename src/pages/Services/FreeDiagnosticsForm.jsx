import { FORM_URL } from "../../components/Hero/FreeDiagnosticsHero";

export default function FreeDiagnostics() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src={FORM_URL}
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="FreeDiagnostics"
      >
        Loading…
      </iframe>
    </div>
  );
}
