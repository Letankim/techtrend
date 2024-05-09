import React from "react";

import arrowRight from "../../../../images/arrow-right.svg";
import "./style.css";

const Slogan = () => {
  return (
    <div className="slogan">
      <div className="slogan__text">
        <span className="slogan__text-white">...Your one stop shop for</span>
        <br />
        <span className="slogan__text-green">digital identity</span>
        <span className="slogan__text-white">,</span>
        <br />
        <span className="slogan__text-green">verification</span>
        <span className="slogan__text-white"> & </span>
        <span className="slogan__text-green">
          cutting
          <br /> edge technology{" "}
        </span>
        <span className="slogan__text-white">solutions</span>
      </div>
      <div className="slogan-button">
        <button className="btn">
          <span className="btn__text">Book a Session</span>
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

export default Slogan;
