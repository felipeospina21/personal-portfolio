import React from 'react';
import { RiInstagramLine, RiLinkedinLine, RiGithubLine } from 'react-icons/ri';
import './SocialContainer.scss'

const SocialContainer = () => {
  return (
    <div className='social-wrapper'>
    <div className='social-container'>
      <RiLinkedinLine className='social-container-logo'/>
      <RiInstagramLine className='social-container-logo'/>
      <RiGithubLine className='social-container-logo'/>
    </div>
    </div>
  );
};

export default SocialContainer;