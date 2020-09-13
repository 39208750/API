import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../header'
import Dropdown from './dropdowns'
import TableData from './TableData'
class Home extends Component {
  dataEmpresa = [
    'The Shawshank Redemption',
    'The Godfather',
    'The Godfather: Part II'
  ]
  dataEncuesta = [
    'The Shawshank Redemption',
    'The Godfather',
    'The Godfather: Part II'
  ]
  cols = ['Empresas', 'Encuesta', 'Action'];
  rows = [
    {
      val1: 'val1-1',
      val2: 'val1-2',
      val3: 'val1-3'
    },
    {
      val1: 'val2-1',
      val2: 'val2-2',
      val3: 'val2-3'
    },
    {
      val1: 'val3-1',
      val2: 'val3-2',
      val3: 'val3-3'
    }
  ]
  render() {
    return (
      <Router>
        <div>
          <Header />
        </div>
        <div className="row centerContent marginTop20">
          <div className="col-md-4">
            <Dropdown type="Empresa" data={this.dataEmpresa} label="Buscar por Empresa" />
          </div>
          <div className="col-md-4">
            <Dropdown type="Encuesta" data={this.dataEncuesta} label="Buscar por Encuesta" />
          </div>

        </div>
        <div className="row centerContent marginTop20">
          <TableData cols={this.cols} rows={this.rows} />
        </div>
      </Router >
    );
  }
}


export default Home;