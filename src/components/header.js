import React, { Component } from "react";
import Logo from "../images/logo.svg"
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'

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
        
          <div class="navbar-brand">
              <img src={Logo} alt="React Logo" />
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">            
            <ul className="nav navbar-nav ml-auto" /*style={{ display: !this.props.login ? 'inline-flex' : 'none' }}*/>
              <li className="nav-item active">
                <Link className="nav-link" to={{pathname:"/Home", state: { user: this.state.user }}}>Inicio</Link>
              </li>
              {this.state.user && this.state.user.role === "Admin" ?
                (
                  <li className="nav-item">
                    <Link className="nav-link" to={{ pathname: "/AdministrarUsuarios", state: { user: this.state.user } }}>Gestionar Usuarios</Link>
                  </li>
                ) : (<p></p>)}
              <li className="nav-item">
              {this.state.user != null ?
                (
                  <Link className="nav-link" to={{ pathname: "/"}}>Cerrar Sesión</Link>
                ) : (<p></p>)}
              </li>
            </ul>
          </div>
        
      </nav>
    );
  }
}