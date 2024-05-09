import React from "react";
import Title from "../../../Title";

import "./style.css";
import ListPartner from "./ListPartner";

import hp from "../../../../../../images/hp.png";
import cisco from "../../../../../../images/cisco.png";
import ide from "../../../../../../images/ide.png";
import lenovo from "../../../../../../images/lenovo.png";
import microsoft from "../../../../../../images/microsoft.png";
import neuro from "../../../../../../images/neuro.png";
import vertitas from "../../../../../../images/vertitas.png";
import vmware from "../../../../../../images/vmware.png";

const Partner = () => {
  const partners = [
    {
      id: 1,
      img: hp,
    },
    {
      id: 2,
      img: cisco,
    },
    {
      id: 3,
      img: ide,
    },
    {
      id: 4,
      img: microsoft,
    },
    {
      id: 5,
      img: neuro,
    },
    {
      id: 6,
      img: vertitas,
    },
    {
      id: 7,
      img: vmware,
    },
    {
      id: 8,
      img: lenovo,
    },
  ];
  const desc =
    "We bring together a team of 1st class world partners to provide our clients with top grade services in all aspects of our solutions";
  return (
    <div className="partner">
      <Title title="Our Partners" desc={desc} />
      <ListPartner partners={partners} />
    </div>
  );
};

export default Partner;
