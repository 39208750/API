import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../header'
import MainData from './MainData'
import FormContainer from './FormContainer'
class Validator extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
        </div>
      </Router >
    );
  }
}


export default Home;