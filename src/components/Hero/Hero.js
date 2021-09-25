import React from "react";
import Image from "../image";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <Image className='hero-img' src='background3.jpg' alt='imagen abstracta de fondo' />
      <div className='hero-container'>
        <h1>Hola, soy Felipe</h1>
        <h3>Me especializo en desarrollo web y automatización de procesos.</h3>
      </div>
      <button className='hero-btn'>Conversemos</button>
    </div>
  );
};

export default Hero;
