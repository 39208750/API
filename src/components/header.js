import React, { Component } from "react";
import Logo from "../images/logo.svg"

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
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                  </li>
                </ul>
              </div>
            </div>
          </nav>            
        );
    }
}