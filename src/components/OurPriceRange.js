import React from "react";
import { Button, Container } from "react-bootstrap";
import "./css/CoWorking.css";
import "../sassfiles/components/_ourPriceRange.scss";

// Mirrors the "8thGear Co-Working Rate Card" flyer: six standalone cards, no tabs.
const officePerks = [
  "Fast, Reliable Internet Access",
  "Uninterrupted Power Supply",
  "Meeting Room 3hrs Free Per Month",
  "Kitchenette",
  "Tea / Coffee",
  "Community Events",
  "5% Discount on Hub Services",
  "2 pages free printing service daily",
  "Table water daily",
  "Lounge Area",
];

const rateCards = [
  {
    title: "Meeting Room",
    prices: [{ amount: "₦15,000", label: "Per Hour" }],
    perks: [
      "Fast, Reliable Internet Access",
      "Uninterrupted Power Supply",
      "Kitchenette",
      "Community events",
      "Sits up to 8 persons",
      "Coffee and Tea",
      "Table water for 8",
    ],
  },
  {
    title: "Event/Training Hall",
    pink: true,
    ratesLabel: "Rates",
    prices: [
      { amount: "₦180,000", label: "Per Day" },
      { amount: "₦100,000", label: "Half Day", note: "(9am-1pm / 1pm-5pm)" },
      { amount: "₦240,000", label: "Per day with Rollup Banner" },
    ],
    perks: [
      "Uninterrupted Power Supply",
      "Good Sound System",
      "Sits up to 50 persons",
      "Interactive Screens",
      "White Board & Marker",
      "3 Stick note of different colours",
      "Banner printing (Event planning services available on request)",
    ],
  },
  {
    title: "Private Office",
    prices: [{ amount: "₦350,000", label: "Per Month" }],
    perks: officePerks,
  },
  {
    title: "Virtual Office",
    pink: true,
    prices: [{ amount: "₦150,000", label: "Per Quarter" }],
    perks: ["Corporate Address", "Mail Handling", "Community Events", "In-Room Signage (Logo in Hub)"],
  },
  {
    title: "Flexi Plan",
    badge: "Weekdays 9am-5pm",
    prices: [
      { amount: "₦12,000", label: "1 Day" },
      { amount: "₦55,000", label: "5 Days" },
      { amount: "₦105,000", label: "10 Days" },
      { amount: "₦15,000", label: "Saturdays", note: "(10:00am-3:00pm)" },
      { amount: "₦25,000", label: "Night Plan", note: "(6:00pm-6:00am)" },
    ],
    perks: [
      "Fast, Reliable Internet Access",
      "Uninterrupted Power Supply",
      "Kitchenette",
      "Water (bottle water) per day",
      "Lunch (Rice + Chicken)",
      "Coffee & Tea per day",
    ],
  },
  {
    title: "Dedicated Desk",
    pink: true,
    prices: [{ amount: "₦100,000", label: "Per Month" }],
    perks: officePerks,
  },
];

const RateCard = ({ card }) => (
  <div className={`rateCard ${card.pink ? "rateCard--pink" : ""}`}>
    <h5 className="rateCardTitle">{card.title}</h5>

    {card.badge && <span className="ratePill rateBadge">{card.badge}</span>}
    {card.ratesLabel && <p className="rateLabel">{card.ratesLabel}</p>}

    <div className="ratePrices">
      {card.prices.length === 1 ? (
        <span className="ratePill">
          {card.prices[0].amount} {card.prices[0].label}
        </span>
      ) : (
        card.prices.map((p) => (
          <p key={p.label} className="ratePriceLine">
            {p.amount}
            <span className="ratePriceLabel"> - {p.label}</span>
            {p.note && <span className="ratePriceNote">{p.note}</span>}
          </p>
        ))
      )}
    </div>

    <p className="ratePerksLabel">Perks</p>
    <ul className="ratePerks">
      {card.perks.map((perk) => (
        <li key={perk}>
          <span aria-hidden="true" className="ratePerkCheck">
            ✓
          </span>
          {perk}
        </li>
      ))}
    </ul>
  </div>
);

const OurPriceRange = () => (
  <Container className="ourPriceRange mt-5">
    <div className="text-center mb-5">
      <h3 className="text-uppercase">8thGear Co-Working Rate Card</h3>
      <p className="rateLocation">8thGear Hub HQ: 41 CMD Road, Secretariat/Magodo, Lagos</p>
    </div>

    <div className="row g-4">
      {rateCards.map((card) => (
        <div key={card.title} className="col-lg-4 col-sm-6 d-flex">
          <RateCard card={card} />
        </div>
      ))}
    </div>

    <div className="text-center mt-5">
      <p className="rateEnquiries">
        For more inquiries: 0913 246 2410 | 0809 481 8883 |{" "}
        <a href="mailto:info@8thgearpartners.com">info@8thgearpartners.com</a>
      </p>
      <a href="https://forms.gle/pjR1os5hN6WnbzFa9" target="_blank" rel="noopener noreferrer">
        <Button>Book a Space</Button>
      </a>
    </div>
  </Container>
);

export default OurPriceRange;
