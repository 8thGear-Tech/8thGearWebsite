import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./css/CoWorking.css";

const OurPriceRange = () => {
  const [currentPlan, setCurrentPlan] = useState("1");

  const plans = [
    {
      id: "1",
      planTitle: "Monthly/Yearly Plan",
      cards: [
        {
          title: "VIRTUAL OFFICE",
          price: "₦150,000 Per Year",
          features: [
            "Corporate Address",
            "Mail Handling",
            "Community Events",
            "Meeting Room - 1hr Free/Month",
          ],
        },
        {
          title: "DEDICATED DESK",
          price: "₦50,000 Per Month",
          features: [
            "Fast, Reliable Internet Access",
            "Uninterrupted Power Supply",
            "Meeting Room - 3hr Free/Month",
            "Kitchenette",
            "Lounge Area",
            "Community Events",
            "5% Discount on Hub Services",
          ],
        },
      ],
    },
    {
      id: "2",
      planTitle: "Flexi Plan",
      cards: [
        {
          title: "REGULAR",
          price: "₦4,000 Per Day",
          features: [
            "Fast, Reliable Internet Access",
            "Uninterrupted Power Supply",
            "Kitchenette",
            "Community Events",
          ],
        },
        {
          title: "CLASSIC",
          price: "₦16,000 (5 Days)",
          features: [
            "Fast, Reliable Internet Access",
            "Uninterrupted Power Supply",
            "Kitchenette",
            "Community Events",
          ],
        },
        {
          title: "DELUXE",
          price: "₦30,000 (10 Days)",
          features: [
            "Fast, Reliable Internet Access",
            "Uninterrupted Power Supply",
            "Kitchenette",
            "Community Events",
          ],
        },
        {
          title: "REGULAR",
          price: "₦3,000 Per Day",
          features: [
            "Fast, Reliable Internet Access",
            "Uninterrupted Power Supply",
            "Kitchenette",
            "Community Events",
          ],
        },
        {
          title: "SATURDAYS",
          price: "₦5,000 Per Day",
          timeRange: "(10am-3pm)", // Add time range for Saturdays
          features: [
            "Fast, Reliable Internet Access",
            "Uninterrupted Power Supply",
            "Kitchenette",
            "Community Events",
          ],
        },
        {
          title: "MEETING ROOM",
          price: "₦10,000 Per Hour",
          features: [
            "Fast, Reliable Internet Access",
            "Uninterrupted Power Supply",
            "Kitchenette",
            "Community Events",
            "Sits up to 8 persons",
          ],
        },
      ],
    },
    {
      id: "3",
      planTitle: "Event/Training Hall",
      cards: [
        {
          title: "REGULAR",
          price: "₦20,000 Per Hour",
          features: [
            "Uninterrupted Power Supply",
            "Projector",
            "Good Sound System",
            "Sits up to 50 persons",
          ],
        },
        {
          title: "CLASSIC",
          price: "₦70,000 (Half Day)",
          timeRange: "(9am-1pm)/(1pm-5pm)", // Add time range for Classic
          features: [
            "Uninterrupted Power Supply",
            "Projector",
            "Good Sound System",
            "Sits up to 50 persons",
          ],
        },
        {
          title: "DELUXE",
          price: "₦100,000 Per Day",
          timeRange: "(9am-5pm)", // Add time range for Deluxe
          features: [
            "Uninterrupted Power Supply",
            "Projector",
            "Good Sound System",
            "Sits up to 50 persons",
          ],
        },
      ],
    },
  ];

  const handlePlanClick = (planId) => {
    setCurrentPlan(planId);
  };

  const currentCards = plans.find((plan) => plan.id === currentPlan).cards;

  return (
    <Container className="pricetable">
      <div className="price">
        <h3>Our Price Range</h3>
      </div>
      <div className="button-group">
        {plans.map((plan) => (
          <Button
            key={plan.id}
            className={`price-button ${
              currentPlan === plan.id ? "active" : ""
            }`}
            onClick={() => handlePlanClick(plan.id)}
          >
            {plan.planTitle}
          </Button>
        ))}
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {currentCards.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4 d-flex">
              <Card className="new-tab-card w-100 overflow-hidden">
                <Card.Body className="price-body">
                  <Card.Title>{card.title}</Card.Title>
                  {card.timeRange && (
                    <Card.Text className="time-range">
                      {card.timeRange}
                    </Card.Text>
                  )}
                  <hr className="mt-0 pt-0" />
                  <Card.Text>
                    <ul>
                      {card.features.map((feature, i) => (
                        <li key={i} className="py-1">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card.Text>
                  <Card.Subtitle className="totalprice">
                    {card.price}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="d-flex flex-wrap justify-content-between">
        {currentCards.map((card, index) => (
          <div
            key={index}
            className="d-flex flex-column flex-grow-1"
            style={{ flex: "1 0 30%", margin: "10px" }}
          >
            <Card className="new-tab-card">
              <Card.Body className="price-body">
                <Card.Title>{card.title}</Card.Title>
                <hr className="mt-0 pt-0" />
                <Card.Text>
                  <ul>
                    {card.features.map((feature, i) => (
                      <li key={i} className="py-1">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Text>
                <Card.Subtitle className="totalprice">
                  {card.price}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div> */}
      <div className="text-center mt-3">
        {" "}
        <a href="https://forms.gle/pjR1os5hN6WnbzFa9" target="_blank">
          <Button>Book a Space</Button>
        </a>
      </div>
    </Container>
  );
};

export default OurPriceRange;
