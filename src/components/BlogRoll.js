import React from "react";
import PropTypes from "prop-types";
import {Link} from "gatsby";

class BlogRoll extends React.Component {
  render() {
    const colors = ["orange-st", "yellow-st", "turquoise-st", "purple-st"];
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline blog-roll">
        <input type="hidden" className="has-background-orange-st has-background-yellow-st has-background-turquoise-st has-background-purple-st"/>
        {posts &&
          posts.map(({ node: post }, index) => (
            <div className="is-parent column is-4" key={post.id}>
              <Link
                className={`blog-list-item tile is-child card is-shadowless`}
                to={post.fields.slug}
              >
                <article>
                  <header
                    className={`card-header has-text-black-invert has-background-${
                      colors[index % colors.length]
                    }`}
                  >
                    <section>
                      <h3 className="card-header-title p-5 has-text-weight-bold">
                        {post.frontmatter.title}
                      </h3>
                    </section>
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

export default BlogRoll
