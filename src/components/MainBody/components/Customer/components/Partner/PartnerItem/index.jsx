import React from "react";

import "./style.css";

const PartnerItem = ({ partner }) => {
  return (
    <div class="partner__item">
      <img src={partner.img} alt="Partner" />
    </div>
  );
};

export default PartnerItem;
