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
            price: "₦200,000 Per Year",
            features: [
              "Corporate Address",
              "Mail Handling",
              "Community Events",
              "Meeting Room - 1hr Free/Month",
              "Accountability Services (Hub Membership)",
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
            price: "₦5,000 Per Day",
            features: [
              "Fast, Reliable Internet Access",
              "Uninterrupted Power Supply",
              "Kitchenette",
              "Community Events",
            ],
          },
          {
            title: "CLASSIC",
            price: "₦18,000 (5 Days)",
            features: [
              "Fast, Reliable Internet Access",
              "Uninterrupted Power Supply",
              "Kitchenette",
              "Community Events",
            ],
          },
          {
            title: "DELUXE",
            price: "₦35,000 (10 Days)",
            features: [
              "Fast, Reliable Internet Access",
              "Uninterrupted Power Supply",
              "Kitchenette",
              "Community Events",
            ],
          },
          {
            title: "SATURDAYS",
            price: "₦8,000 Per Day",
            timeRange: "(10am-3pm)",
            features: [
              "Fast, Reliable Internet Access",
              "Uninterrupted Power Supply",
              "Kitchenette",
              "Community Events",
            ],
          },
          {
            title: "NIGHT PLAN",
            price: "₦15,000 Per Day",
            timeRange: "(6pm-6am)",
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
            title: "CLASSIC - Per Hour",
            price: "₦20,000",
            features: [
              "Uninterrupted Power Supply",
              "Screen",
              "Good Sound System",
              "Sits up to 50 persons",
            ],
          },
          {
            title: "CLASSIC - Half Day",
            price: "₦60,000 ",
            timeRange: "(9am-1pm)/(1pm-5pm)",
            features: [
              "Uninterrupted Power Supply",
              "Screen",
              "Good Sound System",
              "Sits up to 50 persons",
            ],
          },
          {
            title: "CLASSIC - Per Day",
            price: "₦100,000 ",
            timeRange: "(9am-5pm)",
            features: [
              "Uninterrupted Power Supply",
              "Screen",
              "Good Sound System",
              "Sits up to 50 persons",
            ],
          },
          {
            title: "PREMIUM - Per Hour",
            price: "₦35,000",
            features: [
              "Uninterrupted Power Supply",
              "Interactive Screen & White Board",
              "Good Sound System",
              "Sits up to 35 persons",
            ],
          },
          {
            title: "PREMIUM - Half Day",
            price: "₦95,000 ",
            timeRange: "(9am-1pm)/(1pm-5pm)",
            features: [
              "Uninterrupted Power Supply",
              "Interactive Screen & White Board",
              "Good Sound System",
              "Sits up to 35 persons",
            ],
          },
          {
            title: "PREMIUM - Per Day",
            price: "₦160,000 ",
            timeRange: "(9am-5pm)",
            features: [
              "Uninterrupted Power Supply",
              "Interactive Screen & White Board",
              "Good Sound System",
              "Sits up to 35 persons",
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

      <div className="button-group text-center mb-1">
        {plans.map((plan) => (
          <Button
            key={plan.id}
            className={` ${
              currentPlan === plan.id ? "active" : ""
            } mt-4 px-2 py-2 rounded-pill fs-6 fw-semibold lh-base text-center me-2 `}
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
              <Card className="new-tab-card w-100 overflow-hidden text-center mt-5 rounded-3 shadow border-0 text-center">
                <Card.Body className="price-body flex-column d-flex justify-content-center align-items-center align-content-center">
                  <Card.Title>{card.title}</Card.Title>
                  {card.timeRange && (
                    <Card.Text className="time-range">
                      {card.timeRange}
                    </Card.Text>
                  )}
                  <hr className="mt-0 pt-0 w-50" />
                  <Card.Text>
                    <ul className="m-0 position-relative start-0 p-0">
                      {card.features.map((feature, i) => (
                        <li
                          key={i}
                          className="py-1 fw-normal mb-0 list-unstyled lh-lg text-center fs-6"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card.Text>
                  <Card.Subtitle className="totalprice text-center fs-5 fw-bold lh-base mt-2">
                    {card.price}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-3">
        <a
          href="https://forms.gle/pjR1os5hN6WnbzFa9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Book a Space</Button>
        </a>
      </div>
    </Container>
  );
};

export default OurPriceRange;
