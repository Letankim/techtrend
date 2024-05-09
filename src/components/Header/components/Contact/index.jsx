import React, { useEffect, useState } from "react";
import arrowRight from "../../../../images/arrow-right.svg";
import Quote from "../Quote";
import "./style.css";

const Contact = ({ menu }) => {
  const [showChild, setShowChild] = useState(false);

  const toggleChild = () => {
    setShowChild(!showChild);
  };

  useEffect(() => {
    setShowChild(false);
  }, [menu]);

  return (
    <div className="header__contact">
      <button className="btn btn-outline" onClick={toggleChild}>
        <span className="btn__text">Contact Us</span>
        <div className={`btn-wrapper__icon ${showChild && "active"}`}>
          <p className="btn__icon">
            <img src={arrowRight} alt="Contact" />
          </p>
        </div>
      </button>
      {showChild && <Quote active="active" onCloseMobile={toggleChild} />}
    </div>
  );
};

export default Contact;
