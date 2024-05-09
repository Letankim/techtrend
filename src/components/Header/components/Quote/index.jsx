import React from "react";
import "./style.css";

const Quote = ({ active, onCloseMobile }) => {
  return (
    <div className={`quote ${active}`}>
      <div className="quote-wrapper">
        <h3 className="quote__title">Request a Quote</h3>
        <form method="post" action="">
          <div className="quote-form__header">
            <span>Our services</span>
          </div>
          <div className="quote-form__group">
            <input className="quote-form__input" placeholder="Name" />
          </div>
          <div className="quote-form__group">
            <input className="quote-form__input" placeholder="Phone number" />
          </div>
          <div className="quote-form__group">
            <input className="quote-form__input" placeholder="Email address" />
          </div>
          <div className="quote-form__group">
            <textarea className="quote-form__textarea" placeholder="Message" />
          </div>
          <div className="quote-form__group">
            <button className="btn btn-full btn-done">
              <span className="btn__text">Done, please wait for our mail</span>
            </button>
            <p
              className="btn btn-outline btn-back-quote-mobile hide-on-laptop"
              onClick={() => onCloseMobile()}
            >
              <span className="btn__text">Back</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Quote;
