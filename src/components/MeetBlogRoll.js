import { graphql, StaticQuery } from "gatsby";
import React from "react";
import BlogRoll from "./BlogRoll";

const MeetBlogRoll = () => (
  <StaticQuery
    query={graphql`
      query MeetBlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: {
              templateKey: { eq: "blog-post" }
              tags: { in: "meet" }
            }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 160)
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
export default MeetBlogRoll;
