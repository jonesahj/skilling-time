import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container container is-fluid">
          <div className="is-flex">
            <Link to="/" className="navbar-item pl-0" title="Logo">
              <h1 className="is-family-secondary is-size-4 is-blue-st has-text-weight-semibold mr-4">Skilling Time</h1>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item has-text-weight-semibold" to="/read">
                Read
              </Link>
              <Link className="navbar-item has-text-weight-semibold" to="/listen">
                Listen
              </Link>
              <Link className="navbar-item has-text-weight-semibold" to="/meet">
                Meet
              </Link>
              <Link className="navbar-item has-text-weight-semibold" to="/content/about">
                About
              </Link>
              <Link className="navbar-item has-text-weight-semibold" to="/content/services">
                Services
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
