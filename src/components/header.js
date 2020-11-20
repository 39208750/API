import React, { Component } from "react";
import Logo from "../images/logo.svg"
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default class home extends Component {
  user = "login.user.name"
  constructor(props) {
    super(props);
    this.state = {
      login: props.login,
      user: props.user
    };
  }
  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div>
              <img src={Logo} alt="React Logo" />
            </div>
            <ul className="navbar-nav ml-auto" style={{ display: !this.props.login ? 'inline-flex' : 'none' }}>
              <li className="nav-item">
                <Link className="nav-link" to={{ pathname: "/Home", state: { user: this.state.user } }}>Inicio</Link>
              </li>
              {this.state.user && this.state.user.role === "Admin" ?
                (
                  <li className="nav-item">
                    <Link className="nav-link" to={{ pathname: "/AdministrarUsuarios", state: { user: this.state.user } }}>Gestionar Usuarios</Link>
                  </li>
                ) : (<p></p>)}
              <li className="nav-item">
                <Link className="nav-link" to={{ pathname: "/"}}>Cerrar Sesion</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}