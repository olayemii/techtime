import React from "react";
import { Col, Row } from "reactstrap";

const Heroes = () => {
  return (
    <div className="heroes">
      <Row>
        <Col md={6}>
          <div className="heroes-left text-center text-md-start ">
            <div
              className="text-white fw-bold clash-d-f big-t"
              style={{ fontSize: 54, lineHeight: "72px" }}
            >
              Grow your skills to advance your career path
            </div>
            <div className="">
              <div className="pe-md-5 me-md-5">
                <small className="text-white">
                  Build Your Future With Our Quality Education. The Best And
                  Largest All-In-One Online Tutoring Platform In The World
                </small>
              </div>
            </div>

            <div className="d-flex justify-content-center justify-content-md-start mt-4 mt-md-3">
              <div className="px-3 py-2 border border-white text-white cursor-pointer ">
                <span className="me-2">Get Started Now</span>{" "}
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.33341 11L0.166748 9.83329L8.16675 1.83329H1.00008V0.166626H11.0001V10.1666H9.33341V2.99996L1.33341 11Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div
                className="cursor-pointer px-3 py-2 border bg-white ms-3 fw-bold rounded"
                style={{ color: "#004DB3" }}
              >
                Enroll Now
              </div>
            </div>
            <div className="d-flex justify-content-center justify-content-md-start mt-4 mt-md-3">
              <div className="ms-2 mt-2">
                {Array.from({ length: 5 }).map((item, index) => (
                  <img
                    alt="avater"
                    src={`/images/avater${index + 1}.png`}
                    height="44px"
                    width="44px"
                    style={{ marginLeft: -15 }}
                  />
                ))}
              </div>
              <div>
                gkoslgn
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="mt-5 mt-md-0">
            <img
              alt="heroes img"
              src="images/heroes-right.png"
              height={"588"}
              width={"100%"}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Heroes;
