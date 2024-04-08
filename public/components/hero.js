import React from "react";
import { Link } from "react-router";
import Auth0Logo from "./auth0-logo";

class Hero extends React.Component {
  constructor() {
    super();

    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.state = {};
    this.state.navMobileOpen = false;
  }

  toggleMobileNav() {
    this.setState({
      navMobileOpen: !this.state.navMobileOpen,
    });
  }

  render() {
    return (
      <header className="main-header">
        <nav
          className={`main-navigation ${
            this.state.navMobileOpen ? "mobile-open" : ""
          }`}
        >
          <div className="container">
            <a href="" className="openid-logo">
              <h1 className="logo-text">OpenID</h1>
            </a>
            <ul className="navigation">
              <li className="navigation-item">
                <Link to="/">Debugger</Link>
              </li>
              <li className="navigation-item">
                <Link to="/introduction">Introduction</Link>
              </li>
            </ul>
            <div className="trigger-nav" onClick={this.toggleMobileNav}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          <div className="mobile-navigation">
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                <Link to="/" onClick={this.toggleMobileNav}>
                  Debugger
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link to="/introduction" onClick={this.toggleMobileNav}>
                  Introduction
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">OpenID Connect Playground</h1>
            <h2 className="hero-subtitle">
              Helping developers peek behind the curtain of OIDC by testing calls step-by-step.
            </h2>
          </div>
        </section>
      </header>
    );
  }
}

export default Hero;
