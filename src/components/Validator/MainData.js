import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class MainData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            encuestaName: props.encuestaName,
            empresaName: props.empresaName
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light mainData">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <h4>Validar Encuesta</h4>
                        <ul className="navbar-nav ml-auto" style={{ flexDirection: 'column' }}>
                            <li className="nav-item">
                                <b>Encuesta:</b> {this.props.encuestaName}
                            </li>
                            <li className="nav-item">
                                <b>Empresa:</b> {this.props.empresaName}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}


export default MainData;