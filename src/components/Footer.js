import React from "react";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-yellow-st has-text-blue-st content">
        <div className="is-family-secondary is-size-1  has-text-centered has-text-weight-semibold">
          Skilling Time
        </div>
        <div className="has-text-weight-semibold is-size-7 has-text-centered pb-6 is-uppercase has-text-weight-bold">
          Do good with your day job
        </div>
      </footer>
    );
  }
};

export default Footer;
