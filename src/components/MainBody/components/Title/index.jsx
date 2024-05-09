import React from "react";
import "./style.css";

const Title = ({ title, desc }) => {
  return (
    <div className="title-wrapper">
      <h2 className="title__text">{title}</h2>
      <span>{desc}</span>
    </div>
  );
};

export default Title;
