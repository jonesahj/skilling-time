import React from "react";

import Layout from "../components/Layout";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import MeetBlogRoll from "../components/MeetBlogRoll";
import ReadBlogRoll from "../components/ReadBlogRoll";
import ListenBlogRoll from "../components/ListenBlogRoll";

export const BlogRollPage = ({ title, description, tag, helmet }) => {
  return (
    <Layout>
      <section className={`blog-page theme-${tag}`}>
        <section className={`hero has-background`}>
          {helmet || ""}
          <div className="hero-body container is-fluid">
            <h1 className="has-text-weight-bold is-size-1">{title}</h1>
            <h2 className="is-family-secondary is-size-2">{description}</h2>
          </div>
          <section className="balls" />
        </section>
        <section className="section">
          <div className="container is-max-desktop">
            <div className="content">
              {tag === "read" && <ReadBlogRoll />}
              {tag === "meet" && <MeetBlogRoll />}
              {tag === "listen" && <ListenBlogRoll />}
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

BlogRollPage.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  tag: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogRollTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogRollPage
      description={post.frontmatter.description}
      helmet={
        <Helmet titleTemplate={post.frontmatter.title}>
          <title>{`${post.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${post.frontmatter.description}`}
          />
        </Helmet>
      }
      tag={post.frontmatter.tag}
      title={post.frontmatter.title}
    />
  );
};

BlogRollTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogRollTemplate;

export const pageQuery = graphql`
  query BlogRollByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        tag
      }
    }
  }
`;
