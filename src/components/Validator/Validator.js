import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../header'
import MainData from './MainData'
import FormContainer from './FormContainer'



class Validator extends Component {
    empresaName = 'UADE'
    encuestaName = 'La Profe'
    formData = [
        {
            quetion: 'Pregunta1',
            answer: 'Respuesta1',
            comment: 'Comentario1'
        },
        {
            quetion: 'Pregunta2',
            answer: 'Respuesta2',
            comment: 'Comentario2'
        }
    ]
    render() {
        return (
            <Router>
                <div>
                    <Header />
                </div>
                <div>
                    <MainData empresaName={this.empresaName} encuestaName={this.encuestaName} />
                    <FormContainer formData= {this.formData}/>
                </div>
            </Router >
        );
    }
}


export default Validator;