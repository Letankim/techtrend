import React from "react";

import arrowRight from "../../images/arrow-right.svg";
import fa from "../../images/facebook.png";
import lm from "../../images/in.png";
import instagram from "../../images/instagram.png";
import tw from "../../images/tw.png";
import "./style.css";
import CopyRight from "./CopyRight";

Footer.propTypes = {};

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__about-us">
        <div className="footer__container-wrapper">
          <div className="footer_item footer-with__social">
            <h3 className="footer__title">Get In Touch</h3>
            <div className="footer__container">
              <button className="btn">
                <span className="btn__text">Book a Session</span>
                <div className={`btn-wrapper__icon`}>
                  <p className="btn__icon">
                    <img src={arrowRight} alt="Contact" />
                  </p>
                </div>
              </button>
              <div className="footer__social">
                <ul className="footer-social__list">
                  <li className="footer-social__item">
                    <a href="/" className="footer-social__link">
                      <img src={fa} alt="Social" />
                    </a>
                  </li>
                  <li className="footer-social__item">
                    <a href="/" className="footer-social__link">
                      <img src={instagram} alt="Social" />
                    </a>
                  </li>
                  <li className="footer-social__item">
                    <a href="/" className="footer-social__link">
                      <img src={tw} alt="Social" />
                    </a>
                  </li>
                  <li className="footer-social__item">
                    <a href="/" className="footer-social__link">
                      <img src={lm} alt="Social" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer_item">
            <h3 className="footer__title">Tech strend</h3>
            <div className="footer__container">
              <ul className="footer__list-part">
                <li className="footer__item-part">
                  <a className="footer__link-part" href="/">
                    About Us
                  </a>
                </li>
                <li className="footer__item-part">
                  <a className="footer__link-part" href="/">
                    Carrier
                  </a>
                </li>
                <li className="footer__item-part">
                  <a className="footer__link-part" href="/">
                    We are hiring
                  </a>
                </li>
                <li className="footer__item-part">
                  <a className="footer__link-part" href="/">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_item">
            <h3 className="footer__title">Resources</h3>
            <div className="footer__container">
              <ul className="footer__list-part">
                <li className="footer__item-part">
                  <a className="footer__link-part" href="/">
                    IOS & Android
                  </a>
                </li>
                <li className="footer__item-part">
                  <a className="footer__link-part" href="/">
                    Watch a Demo
                  </a>
                </li>
                <li className="footer__item-part">
                  <a className="footer__link-part" href="/">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </footer>
  );
}

export default Footer;
