import React from "react";
import "./Portfolio.css";
import nike from "../../assets/nike.png";
import perfume from "../../assets/perfume.png";
import lady from "../../assets/lady.png";
import face from "../../assets/face.png";
import spiral from "../../assets/spiral.png";
import food from "../../assets/food.png";
import car from "../../assets/car.png";
import juice from "../../assets/juice.png";
import man from "../../assets/man.png";

export const Portfolio = () => {
  return (
    <div className="container">
      <div className="portfolio-container">
        <div className="ports">
          <ul className="port-1">
            <li style={{ fontSize: 36, fontWeight: 600 }}>Portfolio</li>
            <li>
              <img src={nike} alt="nike" />
            </li>
            <li>
              <img src={perfume} alt="perfume" />
            </li>
            <li>
              <img src={lady} alt="lady" />
            </li>
          </ul>
          <ul className="port-2">
            <li>
              <img src={face} alt="face" />
            </li>
            <li>
              <img src={spiral} alt="spiral" />
            </li>
          </ul>
          <ul className="port-3">
            <li>
              <img src={food} alt="food" />
            </li>
            <li>
              <img src={car} alt="car" />
            </li>
            <li>
              <img src={juice} alt="juice" />
            </li>
          </ul>
        </div>
        <div className="about">
          <h4>About Me</h4>
          <div style={{ display: "flex" }}>
            <div>
              <img src={man} alt="man" />
              <p style={{ width: "26rem" }}>
                Joseph Kalu is an international award winning Nigerian
                Photographer. He does wedding, portraits, fashion, events and
                travel Photography
              </p>
            </div>
            <div>
              <ul style={{ display: "flex", flexDirection: "column" }}>
                <li>
                  <h5>Photographer</h5>
                  <span>
                    <svg
                      width="494"
                      height="4"
                      viewBox="0 0 494 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="-4.37114e-08"
                        y1="2.7854"
                        x2="494"
                        y2="2.78536"
                        stroke="#C4C4C4"
                      />
                      <line
                        x1="-1.31134e-07"
                        y1="1.7854"
                        x2="439"
                        y2="1.78536"
                        stroke="#FEFEFE"
                        stroke-width="3"
                      />
                    </svg>
                  </span>
                </li>
                <li>
                  <h5>Product</h5>
                  <span>
                    <svg
                      width="494"
                      height="4"
                      viewBox="0 0 494 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="-4.37114e-08"
                        y1="3.44702"
                        x2="494"
                        y2="3.44698"
                        stroke="#C4C4C4"
                      />
                      <line
                        x1="-1.31134e-07"
                        y1="2.44702"
                        x2="360"
                        y2="2.44699"
                        stroke="#FEFEFE"
                        stroke-width="3"
                      />
                    </svg>
                  </span>
                </li>
                <li>
                  <h5>Conferences</h5>
                  <span>
                    <svg
                      width="494"
                      height="4"
                      viewBox="0 0 494 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="-4.37114e-08"
                        y1="3.47363"
                        x2="494"
                        y2="3.47359"
                        stroke="#C4C4C4"
                      />
                      <line
                        x1="-1.31134e-07"
                        y1="2.47363"
                        x2="408"
                        y2="2.4736"
                        stroke="#FEFEFE"
                        stroke-width="3"
                      />
                    </svg>
                  </span>
                </li>
                <li>
                  <h5>Events</h5>
                  <span>
                    <svg
                      width="494"
                      height="3"
                      viewBox="0 0 494 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="-4.37114e-08"
                        y1="2.5"
                        x2="494"
                        y2="2.49996"
                        stroke="#C4C4C4"
                      />
                      <line
                        x1="-1.31134e-07"
                        y1="1.5"
                        x2="366"
                        y2="1.49997"
                        stroke="#FEFEFE"
                        stroke-width="3"
                      />
                    </svg>
                  </span>
                </li>
                <li>
                  <button className="btn text-black">Download Portfolio</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
