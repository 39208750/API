import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Home from "./components/home/home";
import Form from "./components/Validator/Validator";
import UserManaging from "./components/UserManaging/UserManaging";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'


function App() {
  return (
  <Router>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path="/Home" component={Home} />
      <Route path="/Form" component={Form} />
      <Route path="/AdministrarUsuarios" component={UserManaging} />
    </Switch>
  </Router>
  );
}

export default App;