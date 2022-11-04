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
        <div className="about"></div>
      </div>
    </div>
  );
};
