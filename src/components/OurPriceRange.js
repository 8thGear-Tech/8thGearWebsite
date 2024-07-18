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
          price: "Total- N150,000 Per Year",
          features: [
            "Corporate Address",
            "Community Events",
            "Meeting Room (free per Month) for 1 Hour",
            "Mail Heading",
          ],
        },
        {
          title: "DEDICATED DESK",
          price: "Total- N50,000 Per Month",
          features: [
            "Kitchenette",
            "Lounge Area",
            "Community Events",
            "Meeting Room (free per Month) for 2 Hour",
            "5% Discount on Hub Services",
            "Internet Access",
            "Uninterrupted Power Supply",
          ],
        },
        {
          title: "PRIVATE OFFICE",
          price: "Total- N200,000 Per Month",
          features: [
            "Kitchenette",
            "Lounge Area",
            "Community Events",
            "Signage Space",
            "Meeting Room (free per Month) for 5 Hour",
            "10% Discount on Hub Services",
            "Internet Access",
            "Uninterrupted Power Supply",
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
          price: "Amount- N3,000 Per Day",
          features: [
            "Uninterrupted Power Supply",
            "Internet Access",
            "Community Events",
            "Kitchenette",
          ],
        },
        {
          title: "REGULAR",
          price: "Amount- N13,000 Five Day",
          features: [
            "Uninterrupted Power Supply",
            "Internet Access",
            "Community Events",
            "Kitchenette",
          ],
        },
        {
          title: "REGULAR",
          price: "Amount- N26,000 Ten Day",
          features: [
            "Uninterrupted Power Supply",
            "Internet Access",
            "Community Events",
            "Kitchenette",
          ],
        },
        {
          title: "REGULAR",
          price: "Amount- N3,000 Per Day",
          features: [
            "Uninterrupted Power Supply",
            "Internet Access",
            "Community Events",
            "Kitchenette",
          ],
        },
        {
          title: "SATURDAYS (10am-5pm)",
          price: "Amount- N3,500",
          features: [
            "Uninterrupted Power Supply",
            "Internet Access",
            "Community Events",
            "Kitchenette",
          ],
        },
        {
          title: "MEETING ROOM (up to 8 persons)",
          price: "Amount- N5,000 Per Hour",
          features: [
            "Uninterrupted Power Supply",
            "Internet Access",
            "Community Events",
            "Kitchenette",
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
          price: "Amount- N20,000 Per Hour",
          features: [
            "Uninterrupted Power Supply",
            "Projector",
            "Good Sound System",
            "Sits up to 50 persons",
          ],
        },
        {
          title: "CLASSIC (1am-1pm)(1pm-5pm)",
          price: "Amount- N50,000 Half Day",
          features: [
            "Uninterrupted Power Supply",
            "Projector",
            "Good Sound System",
            "Sits up to 50 persons",
          ],
        },
        {
          title: "DELUXE (1pm-5pm)",
          price: "Amount- N100,000 1 Day",
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
    <Container className="mt-5">
      <div className="text-center mb-4 text-uppercase">
        <h3>Our Price Range</h3>
      </div>
      <div className="button-group text-center mb-4">
        {plans.map((plan) => (
          <Button
            key={plan.id}
            className={`btn btn-primary p-2 px-3 rounded-pill fs-6 fw-semibold text-center me-2 text-white ${
              currentPlan === plan.id ? "active" : ""
            }`}
            onClick={() => handlePlanClick(plan.id)}
          >
            {plan.planTitle}
          </Button>
        ))}
      </div>
      <div className="d-flex flex-wrap justify-content-between">
        {currentCards.map((card, index) => (
          <div
            key={index}
            className="d-flex flex-column flex-grow-1"
            style={{ flex: "1 0 30%", margin: "10px" }}
          >
            <Card className="tab-card text-center mt-3 rounded-3 shadow w-100 d-flex justify-content-between">
              <Card.Body className="price-body rounded-3 d-flex flex-column justify-content-center align-items-center text-center gap-3 shadow border-0 align-content-center m-auto w-100 justify-content-between">
                <Card.Title className="price-heading justify-content-center fw-bold fs-5 lh-base text-center mt-2">{card.title}</Card.Title>
                <hr />
                <Card.Text>
                  <ul className='m-0 position-relative start-0 p-0'>
                    {card.features.map((feature, i) => (
                      <li key={i} className='list-unstyled mb-0 fs-6 fw-normal lh-lg text-center'>{feature}</li>
                    ))}
                  </ul>
                </Card.Text>
                <Card.Subtitle className="totalprice fw-bold mt-2 fs-5">
                  {card.price}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OurPriceRange;
