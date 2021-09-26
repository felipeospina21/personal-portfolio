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
      <a
        href='http://api.whatsapp.com/send?phone=573148871629'
        rel='noreferrer'
        target='_blank'
        className='hero-btn'>
        Conversemos
      </a>
    </div>
  );
};

export default Hero;
