import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Img from "gatsby-image";

class BlogRoll extends React.Component {
  render() {
    const colors = [
      "orange-st",
      "yellow-st",
      "turquoise-st",
      "blue-st",
      "purple-st",
      "red-st",
    ];
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }, index) => (
            <div className="is-parent column is-4" key={post.id}>
              <Link
                className={`blog-list-item tile is-child card ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
                to={post.fields.slug}
              >
                <article>
                  <header>
                    {post.frontmatter.featuredimage ? (
                      <section className="card-image featured-image">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                        <h3
                          className={`card-header-title is-overlay has-background-${
                            colors[index % colors.length]
                          }`}
                        >
                          {post.frontmatter.title}
                        </h3>
                      </section>
                    ) : (
                      <section
                        className={`card-header has-text-black-invert has-background-${
                          colors[index % colors.length]
                        }`}
                      >
                        <h3 className="card-header-title p-5">
                          {post.frontmatter.title}
                        </h3>
                      </section>
                    )}
                  </header>
                  <section className="card-content">
                    {post.frontmatter.description && (
                      <div className="has-text-weight-semibold">
                        {post.frontmatter.description}
                      </div>
                    )}
                    <div className="mt-5">{post.excerpt}</div>
                  </section>
                </article>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
