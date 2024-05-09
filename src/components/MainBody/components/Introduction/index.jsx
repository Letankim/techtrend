import React from "react";
import HeadPart from "../HeadPart";
import "./style.css";
import DailyCard from "./components/DailyCard";

const Introduction = () => {
  const daily = [
    {
      title: "Quality Solutions",
      isCompleted: false,
      quantity: [
        {
          name: "Reliability",
        },
        {
          name: "Availability",
        },
        {
          name: "Serviceability",
        },
        {
          name: "Durability",
        },
      ],
    },
    {
      title: "Quality Delivery",
      isCompleted: true,
      quantity: [
        {
          name: "On-time Delivery",
        },
        {
          name: "Seamless",
        },
        {
          name: "Secure",
        },
        {
          name: "Extensive Support",
        },
      ],
    },
    {
      title: "Quality Results",
      isCompleted: false,
      quantity: [
        {
          name: "Measurable Results",
        },
        {
          name: "Optimization",
        },
        {
          name: "Satisfaction",
        },
        {
          name: "Innovation",
        },
      ],
    },
  ];
  const desc =
    "Tech strend is a leading player in the Information and Communications Technology space. We have in depth experience in the design, development, implementation and management of Identity management systems and have developed deep partnerships with the best of class companies in the world including NEC, Veridos, Microsoft, Oracle, EMC, IBM, HP and others. We bring together all this experience to create world class solutions that meet the needs of our clients today and enable them to lead in the emerging knowledge driven society of tomorrow";
  return (
    <div className="introduction">
      <HeadPart
        title="Who Are We"
        desc={desc}
        button="Read more"
        styleText="grey"
      />
      <DailyCard daily={daily} />
    </div>
  );
};

export default Introduction;
