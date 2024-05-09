import React from "react";

import "./style.css";

const CardCustomer = ({ card }) => {
  return (
    <div className="card-customer">
      <div className="card-customer__wrapper">
        <h4 className="card-customer__title">{card.title}</h4>
        <div className="card-customer__desc">
          <p>{card.desc}</p>
        </div>
      </div>
      <div className="card-customer__auth">
        <div className="card-customer__avatar">
          <img src={card.auth.avatar} alt="Customer avatar" />
        </div>
        <div className="card-customer__info">
          <p className="card-customer__name">{card.auth.name}</p>
          <span className="card-customer__position">{card.auth.position}</span>
          <a href="#" className="card-customer__company">
            {card.auth.company}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardCustomer;
