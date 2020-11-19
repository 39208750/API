import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../header'
import Dropdown from './dropdowns'
import TableData from './TableData'
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: ['Empresa', 'Encuesta'],
      rows: [],
      rowsToShow: [],
    }
  }

  selectedValueEmpresa;
  selectedValueEncuesta;
  onChangeDropDownEmpresa(data) {
    this.selectedValueEmpresa = data;
    this.filterTable(this.selectedValueEncuesta, this.selectedValueEmpresa)
  }

  onChangeDropDownEncuesta(data) {
    this.selectedValueEncuesta = data;
    this.filterTable(this.selectedValueEncuesta, this.selectedValueEmpresa)
  }

  getSurveys() {

    axios.get('https://api-proyect.herokuapp.com/getSurveys', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',

      }
    }
    ).then(response => {
      console.log('RESPONSE', response.data.data)

      this.setState({
        rows: response.data.data,
        rowsToShow: response.data.data
      })
    }).catch(err => alert('ERROR AL TRAER ENCUESTA'))
  }

  filterTable(encuestaData, empresaData) {
    this.state.rowsToShow = [];

    if (encuestaData == null && empresaData == null) {
      this.state.rowsToShow = this.state.rows;
      this.HistoricTable.updateState(this.state.rowsToShow);
      return;
    }

    for (var i = 0; i < this.state.rows.length; i++) {
      if (encuestaData != null && empresaData != null) {
        if (this.state.rows[i].Empresa == empresaData && this.state.rows[i].Encuesta == encuestaData) {
          this.state.rowsToShow.push(
            {
              Empresa: this.state.rows[i].Empresa,
              Encuesta: this.state.rows[i].Encuesta
            }
          )
        }
      } else {
        if (this.state.rows[i].Empresa == empresaData || this.state.rows[i].Encuesta == encuestaData) {
          this.state.rowsToShow.push(
            {
              Empresa: this.state.rows[i].Empresa,
              Encuesta: this.state.rows[i].Encuesta
            }
          )
        }
      }
    }
    this.HistoricTable.updateState(this.state.rowsToShow);
  }

  render() {
    const { user } = this.props.location.state
    if (this.state.rows.length == 0) {
      this.getSurveys()
    }
    return (
      <div>
        <div>
          <Header login={false} user={user} />
        </div>
        <div className="row centerContent marginTopBottom20">
          <div className="col-md-8 filter">
            <div className="row centerContent">
              <div className="col-md-4 bottomMargin5">
                <Dropdown
                  type="Empresa"
                  data={this.state.dataEmpresa}
                  label="Buscar por Empresa"
                  onChangeValue={this.onChangeDropDownEmpresa.bind(this)}
                />
              </div>
              <div className="col-md-4 bottomMargin5">
                <Dropdown
                  type="Encuesta"
                  data={this.state.dataEncuesta}
                  label="Buscar por Encuesta"
                  onChangeValue={this.onChangeDropDownEncuesta.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row centerContent">
          <TableData
            ref={(table) => { this.HistoricTable = table }}
            cols={this.state.cols}
            rows={this.state.rowsToShow}
            user={user}
            {...this.props}
          />
        </div>
      </div>
    );
  }
}

export default Home;