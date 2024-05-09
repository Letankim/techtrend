import React from "react";
import arrowRight from "../../../../images/arrow-right.svg";
import "./style.css";

const HeadPart = ({ title, desc, button, styleText }) => {
  return (
    <div className="service-head">
      <h3 className="service-head__title">{title}</h3>
      <span className={`service-head__text ${styleText ? styleText : ""}`}>
        {desc}
      </span>
      <div className="service-button">
        <button className="btn">
          <span className={`btn__text`}>{button}</span>
          <div className={`btn-wrapper__icon`}>
            <p className="btn__icon">
              <img src={arrowRight} alt="Contact" />
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeadPart;
