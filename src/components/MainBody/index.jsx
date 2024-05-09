import React from "react";
import Slogan from "./components/Slogan";
import Service from "./components/Service";
import Introduction from "./components/Introduction";
import Customer from "./components/Customer";
import Partner from "./components/Customer/components/Partner";
import "./style.css";

const MainBody = () => {
  return (
    <>
      <div className="main-body">
        <div className="cursor-icon hide-on-mobile"></div>
        <Slogan />
        <Service />
        <Introduction />
      </div>
      <div className="about__customer">
        <Customer />
      </div>
      <div>
        <Partner />
      </div>
    </>
  );
};

export default MainBody;
