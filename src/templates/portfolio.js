import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import DateContainer from "../components/DateContainer/DateContainer";
import TagsContainer from "../components/TagsContainer/TagsContainer";
import "./blogTemplate.scss";
import ImageBlog from "../components/ImageBlog";

export default function portfolioTemplate({ data }) {
  const { mdx } = data;
  const { frontmatter } = mdx;
  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <div className='blog-post-container'>
        <h2 className='blog-post-title'>{frontmatter.title}</h2>
        <small>
          <DateContainer date={frontmatter.date} />
          <TagsContainer tags={frontmatter.tags} />
        </small>
        <div className='blog-post-img-container'>
          <ImageBlog
            className='blog-post-img'
            src={frontmatter.thumbnail}
            alt={frontmatter.imgAltText}
          />
        </div>
        <div className='blog-post'>
          <a href={frontmatter.url} target='_blank' rel='noopener noreferrer'>
            {frontmatter.url}
          </a>
        </div>
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query PortfolioQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        thumbnail
        imgAltText
        url
      }
    }
  }
`;
