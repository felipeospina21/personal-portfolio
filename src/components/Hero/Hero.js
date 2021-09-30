import { motion } from "framer-motion";
import React from "react";
import Image from "../image";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <div className='hero-container'>
        <AnimatedDiv>
          <VisibilityTransition>
            <h1>Felipe Ospina</h1>
          </VisibilityTransition>
          <VisibilityTransition>
            <h3>Front-End Dev</h3>
          </VisibilityTransition>
        </AnimatedDiv>
      </div>

      <div className='hero-container'>
        <VisibilityTransition>
          <a
            href='http://api.whatsapp.com/send?phone=573148871629'
            rel='noreferrer'
            target='_blank'
            // className='hero-btn'
          >
            Conversemos
          </a>
        </VisibilityTransition>
      </div>
    </div>
  );
};

export default Hero;

export const AnimatedDiv = ({ children }) => {
  const variants = {
    visible: {
      transition: {
        delay: 0.1,
      },
    },
    hidden: {
      backgroundColor: "#e3a83b00",
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    },
  };
  return (
    <motion.div
      variants={variants}
      initial='visible'
      animate='hidden'
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeatDelay: 1,
      }}>
      {children}
    </motion.div>
  );
};

const VisibilityTransition = ({ children }) => {
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        delay: 2.2,
      },
    },
    hidden: { opacity: 0 },
  };

  return (
    <motion.span variants={variants} initial='hidden' animate='visible'>
      {children}
    </motion.span>
  );
};
