import React from "react";

import iconCheck from "../../../../../../images/Vector.png";

import "./style.css";

const DailyItem = ({ title, quantity, isCompleted }) => {
  return (
    <div className={`daily-card ${isCompleted ? "completed" : ""}`}>
      <div className="daily-card__wrapper">
        <h3 className="daily-card__title">{title}</h3>
        <ul className="daily-card__list__quantity">
          {quantity.map((quantity) => (
            <li className="daily-card__item__quantity">
              <span className="daily-card__text">{quantity.name}</span>
              <span className="daily-card__icon">
                <img src={iconCheck} alt="icon check" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DailyItem;
