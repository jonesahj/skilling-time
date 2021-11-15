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
            <h1 className="has-text-weight-bold is-size-1">Articles</h1>
            <h2 className="is-family-secondary is-size-2">
              To help you develop your career by doing good
            </h2>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
