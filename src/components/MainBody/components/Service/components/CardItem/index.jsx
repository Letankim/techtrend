import React, { useState } from "react";
import iconCard from "../../../../../../images/icon-card.png";
import arrowDropDown from "../../../../../../images/arrow_drop_down.png";
import "./style.css";

const CardItem = ({ service }) => {
  const [show, setShow] = useState(false);
  const toggleShowMore = () => {
    setShow(!show);
  };
  const removeActiveClass = () => {
    setShow(false);
  };
  return (
    <div
      className="card__item"
      onClick={toggleShowMore}
      onMouseLeave={removeActiveClass}
    >
      <div className={`card__container ${show ? "active" : ""}`}>
        <div className="card__icon">
          <img src={iconCard} alt="Icon card" />
        </div>
        <div className="card__title">{service.title}</div>
        <div className="card_spacing"></div>
        <div className="card__description">{service.description}</div>
        <div className="card-arrow__down">
          <img src={arrowDropDown} alt="arrow drop down" />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
