import { C, F } from "../../../Tokens.js";

const PartnerCard = ({ partner }) => (
  <img
    src={partner.logo}
    alt={partner.name}
    style={{
      maxWidth: "100%",
      maxHeight: 80,
      objectFit: "contain"
    }}
  />
);

export default PartnerCard;