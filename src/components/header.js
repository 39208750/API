import React, { Component } from "react";
import Logo from "../images/logo.svg"
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";

export default class home extends Component {
  user = "login.user.name"
  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div>
              <img src={Logo} alt="React Logo" />
            </div>
            <ul className="navbar-nav ml-auto" style={{ display: this.props.login ? 'inline-flex' : 'none' }}>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto" style={{ display: !this.props.login ? 'inline-flex' : 'none' }}>
              <li className="nav-item">
                <Link className="nav-link" to={"/Home"}>Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}