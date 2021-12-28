import { graphql, StaticQuery } from "gatsby";
import React from "react";
import BlogRoll from "./BlogRoll";

const ListenBlogRoll = ({ tag }) => (
  <StaticQuery
    query={graphql`
      query ListenBlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: {
              templateKey: { eq: "blog-post" }
              tags: { in: "listen" }
            }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
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
export default ListenBlogRoll;
