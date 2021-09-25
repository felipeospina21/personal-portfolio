import React from "react";

import "./ServicesCard.scss";

const ServicesCard = ({ title }) => {
  return (
    <div className='services-card'>
      <h3 className='service-card-title'>{title}</h3>
    </div>
  );
};

export default ServicesCard;
