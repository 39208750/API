import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "./images/logo.svg"
import Login from "./components/login";
import SignUp from "./components/signup";

function App() {
  return (<Router>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div>
            <img src={Logo} alt="React Logo" />
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-in"}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="centerComponent">
      <div>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        </div>
      </div>
    </div></Router>
  );
}

export default App;