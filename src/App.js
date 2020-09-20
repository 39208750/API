import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Home from "./components/home/home";
import Form from "./components/Validator/Validator";


function App() {
  return (<Router>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/Home" component={Home} />
      <Route path="/Form" component={Form} />
    </Switch>
  </Router>
  );
}

export default App;