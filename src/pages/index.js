import React from "react";
import Layout from "../components/Layout";
import header from "../img/header.svg";
import { Link } from "gatsby";

function Card({ title, description, boxed }) {
  return (
    <div
      className={`tile is-child ${
        boxed ? "box has-background-blue-st has-text-white p-5" : "py-5"
      } `}
    >
      <h2
        className={`has-text-yellow-st has-text-weight-bold ${
          boxed && "is-uppercase"
        }`}
      >
        {title}
      </h2>
      <p>{description}</p>
    </div>
  );
}

export default () => (
  <Layout>
    <section className="hero has-background has-background-orange-st">
      <img className="hero-background" src={header} alt="skilling time" />
    </section>
    <section className="section">
      <div className="container is-max-desktop">
        <div className="content">
          <div className="tile is-ancestor  is-vertical">
            <div className="tile">
              <div className="tile is-parent">
                <Card
                  boxed={false}
                  title="Welcome to Skilling Time"
                  description="We help professionals like you discover how to do good with
      your day job through pro bono work"
                />
              </div>
              <div className="tile is-parent">
                <Link to="/read">
                  <Card
                    boxed={true}
                    title="Read"
                    description="Action orientated articles to help you design pro bono that
                    boosts your career"
                  />
                </Link>
              </div>
            </div>
            <div className="tile">
              <div className="tile is-parent">
                <Link to="/listen">
                  <Card
                    boxed={true}
                    title="Listen"
                    description="20-minute interviews with people with pro bono know-how"
                  />
                </Link>
              </div>
              <div className="tile is-parent">
                <Link to="/meet">
                  <Card
                    boxed={true}
                    title="Meet"
                    description="Professionals like you who want to discover how to do good
                    with their day job"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
