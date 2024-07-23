import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "./css/CoWorking.css";

const OurPriceRange = () => {
  const [currentPlan, setCurrentPlan] = useState("1");
  const [currentPackage, setCurrentPackage] = useState("Monthly/Yearly Plan"); // Default package for 8thG

  const plans = [
    {
      id: "1",
      planTitle: "Location 1, CMD Road",
      packages: {
        "Monthly/Yearly Plan": [
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
        "Flexi Plan": [
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
            title: "SATURDAYS",
            price: "₦5,000 Per Day",
            timeRange: "(10am-3pm)",
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
        "Event/Training Hall": [
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
            timeRange: "(9am-1pm)/(1pm-5pm)",
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
            timeRange: "(9am-5pm)",
            features: [
              "Uninterrupted Power Supply",
              "Projector",
              "Good Sound System",
              "Sits up to 50 persons",
            ],
          },
        ],
      },
    },
    {
      id: "2",
      planTitle: "Location 2, Yaba",
      packages: {
        "Flexi Plan": [
          {
            title: "DAILY PLAN",
            price: "₦4,500 Per Day",
            features: [
              "Fast, Reliable Internet Access",
              "Uninterrupted Power Supply",
              "Kitchenette & Lounge Area",
            ],
          },
          {
            title: "WEEKLY PLAN",
            price: "₦15,000 (5 Days)",
            features: [
              "Fast, Reliable Internet Access",
              "Uninterrupted Power Supply",
              "Kitchenette, Print & Lounge Area",
              "Meeting Room (Free for 1 hour)",
            ],
          },
          {
            title: "MEETING ROOM",
            price: "₦5,500 (Per Hour)",
            features: [
              "Fast, Reliable Internet Access",
              "Uninterrupted Power Supply",
              "Projectors & Sound System ",
              "Kitchenette, Printer",
            ],
          },
          {
            title: "EVENT/TRAINING HALL",
            price: "₦16,000 Per Hour",

            features: [
              "Fast, Reliable Internet Access",
              "Uninterrupted Power Supply",
              "Projectors & Sound System",
            ],
          },
        ],
        "Monthly/Yearly Plan": [
          {
            title: "FLEXI PLAN",
            price: "₦33,500 (12 days)",
            features: [
              "Fast, Reliable Internet Access",
              "Uninterrupted Power Supply",
              "Kitchenette, printer, locker & Lounge",
              "Meeting Room (Free for 2 Hours)",
              "Lounge Area",
              "Community Events",
            ],
          },
          {
            title: "DEDICATED DESK",
            price: "₦45,000 (20 days)",
            features: [
              "Fast, Reliable Internet Access",
              "Uninterrupted Power Supply",
              "Kitchenette, printer, locker & Lounge",
              "Meeting Room (Free for 2 Hours)",
              "Lounge Area",
              "Community Events",
            ],
          },
          {
            title: "VIRTUAL LITE",
            price: "₦65,000 Per Year",
            timeRange: "(9am-5pm)",
            features: [
              "Corporate Address",
              "Mail Handling",
              "Community Events",
              "Meeting Room (50 hours per year / 4 hours per month)",
            ],
          },
          {
            title: "VIRTUAL OFFICE",
            price: "₦150,000 Per Year",
            features: [
              "Corporate Address",
              "Mail Handling",
              "Community Events",
              "Meeting Room (4 hours free / month)",
            ],
          },
        ],
      },
    },
    {
      id: "3",
      planTitle: "Location 3, Magodo",
      packages: {
        "Event/Training Hall": [
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
            timeRange: "(9am-1pm)/(1pm-5pm)",
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
            timeRange: "(9am-5pm)",
            features: [
              "Uninterrupted Power Supply",
              "Projector",
              "Good Sound System",
              "Sits up to 50 persons",
            ],
          },
        ],
      },
    },
  ];

  const handlePlanClick = (planId) => {
    setCurrentPlan(planId);
    const defaultPackage = Object.keys(
      plans.find((plan) => plan.id === planId).packages
    )[0];
    setCurrentPackage(defaultPackage);
  };

  const handlePackageChange = (packageType) => {
    setCurrentPackage(packageType);
  };

  const currentPackages = plans.find(
    (plan) => plan.id === currentPlan
  ).packages;
  const currentCards = currentPackages[currentPackage];

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
      {Object.keys(currentPackages).length > 1 && (
        <div className="d-flex justify-content-center my-3">
          {" "}
          <DropdownButton
            id="dropdown-basic-button"
            title={currentPackage}
            onSelect={handlePackageChange}

            // style={{
            //   color: "#000000",
            //   backgroundColor: "#ffffff",
            //   border: "1px solid #6e006a",
            // }}
          >
            {Object.keys(currentPackages).map((packageType, index) => (
              <Dropdown.Item key={index} eventKey={packageType}>
                {packageType}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
      )}
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
      <div className="text-center mt-3">
        <a href="https://forms.gle/pjR1os5hN6WnbzFa9" target="_blank">
          <Button>Book a Space</Button>
        </a>
      </div>
    </Container>
  );
};

export default OurPriceRange;
