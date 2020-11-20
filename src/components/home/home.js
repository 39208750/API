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
      company: [],
      survey: []
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
      let responseShow = []
      let companies = []
      let surveys = []
      response.data.data.map((data) => {
        if (data.status != "APPROVED") {
          if (this.props.location.state.user.role == "Filler" && data.status == "COMMENTED") {
            responseShow.push(data)
            companies.push(data.company)
            surveys.push(data.name)
          }

          if (this.props.location.state.user.role == "Validator" && data.status == "ANSWERED") {
            responseShow.push(data)
            companies.push(data.company)
            surveys.push(data.name)
          }

          if(this.props.location.state.user.role == "Admin"){
            responseShow.push(data)
            companies.push(data.company)
            surveys.push(data.name)
            
          }
        }
      })
      this.setState({
        rows: responseShow,
        rowsToShow: responseShow,
        company: companies,
        survey: surveys

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
        if (this.state.rows[i].company == empresaData && this.state.rows[i].name == encuestaData) {
          this.state.rowsToShow.push(
            this.state.rows[i]
          )
        }
      } else {
        if (this.state.rows[i].company == empresaData || this.state.rows[i].name == encuestaData) {
          this.state.rowsToShow.push(
            this.state.rows[i]

          )
        }
      }
    }
    console.log(this.state.rowsToShow)
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
          <Header login={false} user={user} {...this.props}/>
        </div>
        <div className="row centerContent marginTopBottom20 filter-container">
          <div className="col-md-8 filter">
            <div className="row centerContent">
              <div className="col-md-4 bottomMargin5">
                <Dropdown
                  type="Empresa"
                  data={this.state.company}
                  label="Buscar por Empresa"
                  onChangeValue={this.onChangeDropDownEmpresa.bind(this)}
                />
              </div>
              <div className="col-md-4 bottomMargin5">
                <Dropdown
                  type="Encuesta"
                  data={this.state.survey}
                  label="Buscar por Encuesta"
                  onChangeValue={this.onChangeDropDownEncuesta.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row centerContent encuestas-container">
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