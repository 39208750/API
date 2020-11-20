import React, { Component } from 'react';

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
            <div className="centerContentMainData col-md-8">
                <div className="navbar navbar-expand-lg navbar-light mainData">
                    <div className="container">
                        
                            <h4 className="title">Validar Encuesta</h4>
                            <ul className="navbar-nav ml-auto" style={{ flexDirection: 'column'}}>
                                <li className="nav-item">
                                    <b>Encuesta:</b> {this.props.encuestaName}
                                </li>
                                <li className="nav-item">
                                    <b>Empresa:</b> {this.props.empresaName}
                                </li>
                            </ul>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default MainData;