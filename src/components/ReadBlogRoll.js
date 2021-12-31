import { graphql, StaticQuery } from "gatsby";
import React from "react";
import BlogRoll from "./BlogRoll";

const ReadBlogRoll = ({ tag }) => (
  <StaticQuery
    query={graphql`
      query ReadBlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: {
              templateKey: { eq: "blog-post" }
              tags: { in: "read" }
            }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
export default ReadBlogRoll;
