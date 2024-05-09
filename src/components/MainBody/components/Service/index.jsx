import React from "react";
import arrowRight from "../../../../images/arrow-right.svg";
import "./style.css";
import CardService from "./components/CardService";
import HeadPart from "../HeadPart";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Identity based solutions",
      description:
        "A strong identification system relies on an integrated robust ID verification solution:...",
    },
    {
      id: 1,
      title: "Identity based solutions",
      description:
        "A strong identification system relies on an integrated robust ID verification solution:...",
    },
    {
      id: 1,
      title: "Identity based solutions",
      description:
        "A strong identification system relies on an integrated robust ID verification solutions A strong identification system relies on an integrated robust ID verification solution",
    },
    {
      id: 1,
      title: "Identity based solutions",
      description:
        "A strong identification system relies on an integrated robust ID verification solution:...",
    },
  ];
  const desc = "Our solutions are all about simplification and optimisation.";
  return (
    <div className="service">
      <HeadPart
        title="Services we offer"
        desc={desc}
        button="See Product Overview"
      />
      <div className="service-wrapper__card">
        <CardService services={services} />
      </div>
    </div>
  );
};

export default Service;
