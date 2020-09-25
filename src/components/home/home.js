import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../header'
import Dropdown from './dropdowns'
import TableData from './TableData'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: ['Empresa', 'Encuesta'],
      rows: [
        {
          val1: 'val1-1',
          val2: 'val1-2',
        },
        {
          val1: 'val2-1',
          val2: 'val2-2',
        },
        {
          val1: 'val3-1',
          val2: 'val3-2',
        }
      ],
      dataEmpresa: [

      ],
      dataEncuesta: [
      ],
      rowsToShow: [
        {
          val1: 'val1-1',
          val2: 'val1-2',
        },
        {
          val1: 'val2-1',
          val2: 'val2-2',
        },
        {
          val1: 'val3-1',
          val2: 'val3-2',
        }
      ]
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

  filterTable(encuestaData, empresaData) {
    this.state.rowsToShow = [];

    if(encuestaData == null && empresaData == null) {
      this.state.rowsToShow = this.state.rows;
      this.HistoricTable.updateState(this.state.rowsToShow);
      return;
    }

    for (var i = 0; i < this.state.rows.length; i++) {

      if (encuestaData != null && empresaData != null) {
        if (this.state.rows[i].val1 == empresaData && this.state.rows[i].val2 == encuestaData) {
          this.state.rowsToShow.push(
            {
              val1: this.state.rows[i].val1,
              val2: this.state.rows[i].val2
            }
          )
        }
      } else {
        if (this.state.rows[i].val1 == empresaData || this.state.rows[i].val2 == encuestaData) {
          this.state.rowsToShow.push(
            {
              val1: this.state.rows[i].val1,
              val2: this.state.rows[i].val2
            }
          )
        }
      }
    }
    this.HistoricTable.updateState(this.state.rowsToShow);
  }

  render() {

    for (var i = 0; i < this.state.rows.length; i++) {
      this.state.dataEmpresa.push(this.state.rows[i].val1)
      this.state.dataEncuesta.push(this.state.rows[i].val2);
    }

    return (
      <div>
        <div>
          <Header
            login={false}
          />
        </div>
        <div className="row centerContent marginTopBottom20">
          <div className="col-md-4">
            <Dropdown
              type="Empresa"
              data={this.state.dataEmpresa}
              label="Buscar por Empresa"
              onChangeValue={this.onChangeDropDownEmpresa.bind(this)}
            />
          </div>
          <div className="col-md-4">
            <Dropdown
              type="Encuesta"
              data={this.state.dataEncuesta}
              label="Buscar por Encuesta"
              onChangeValue={this.onChangeDropDownEncuesta.bind(this)}

            />
          </div>

        </div>
        <div className="row centerContent">
          <TableData
            ref={(table) => { this.HistoricTable = table }}
            cols={this.state.cols}
            rows={this.state.rowsToShow}
          />
        </div>
      </div>
    );
  }
}


export default Home;