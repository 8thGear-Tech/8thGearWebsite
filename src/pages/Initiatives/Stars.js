import { Icon } from "../../components/GlobalUI";

const Stars = ({ n = 5 }) => (
  <div style={{ display: "flex", gap: 2 }}>
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i}>{Icon.star(i <= n)}</span>
    ))}
  </div>
);

export default Stars;
