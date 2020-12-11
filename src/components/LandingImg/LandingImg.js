import React from 'react';
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"

import './LandingImg.scss'

const LandingImg = () => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
    <Img className='landing-page-img' fluid={data.placeholderImage.childImageSharp.fluid} alt='Landing page image'/>
  );
};

export default LandingImg;