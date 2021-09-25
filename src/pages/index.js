import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Hero from "../components/Hero/Hero";
import PostsFilter from "../components/PostsFilter/PostsFilter";
import ContactForm from "../components/ContactForm/ContactForm";
import Fade from "react-reveal/Fade";
import "../components/PostPreview/PostPreview.scss";
import Services from "../components/Services/Services";

const IndexPage = ({ data }) => (
  <>
    <SEO title='Home' />
    <Hero />
    <Services />
    <h2 className='blog-page-title'> Portafolio</h2>
    <PostsFilter data={data} />
    <Fade left>
      <ContactForm name='home-contact' />
    </Fade>
  </>
);

export default IndexPage;

export const PortfolioQuery = graphql`
  query {
    allMdx(
      filter: { frontmatter: { templateKey: { eq: "portfolio" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 50)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            thumbnail
            imgAltText
          }
          fields {
            slug
          }
        }
      }
    }
    contentYaml {
      categories {
        name
      }
    }
  }
`;
