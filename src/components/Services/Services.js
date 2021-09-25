import React, { useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";
import Fade from "react-reveal/Fade";

import "./Services.scss";

const Services = () => {
  const [skills] = useState([
    "React",
    "Gatsby",
    "Javascript",
    "Html",
    "Css",
    "Sass",
    "Chakra",
    "Firebase",
    "Git",
    "Github",
    "Netlify",
    "Netlify CMS",
    "Figma",
    "Python",
    "Pandas",
    "Selenium",
  ]);

  return (
    <div className='services-container'>
      <h2>Habilidades</h2>
      <div className='services-cards-container'>
        {skills.map(skill => {
          return (
            <Fade left>
              <ServicesCard key={skill} title={skill} />
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
