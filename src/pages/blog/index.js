import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import header from "../../img/header.svg";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="hero has-background has-background-blue-st has-text-white">
          <div className="hero-body">
            <h1 className="has-text-weight-bold is-size-1">Read</h1>
            <h2 className="is-family-secondary is-size-2">
              Action orientated articles to help you design pro bono that boosts your career
            </h2>
          </div>
        </section>
        <section className="section">
          <div className="container is-max-widescreen">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
