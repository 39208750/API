import React, { Component } from 'react';
import Header from '../header'
import MainData from './MainData'
import FormContainer from './FormContainer'

class Validator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: [/*Aca va los datos de la encuesta a mostrar, luego de que aprietan el boton visualizar*/]            
        }
    }

    render() {
        const { user,encuesta,empresa } = this.props.location
        return (
            <div>
                <div>
                    <Header login={false} user={user} />
                </div>
                <MainData empresaName={empresa} encuestaName={encuesta} />
                <div>
                    <FormContainer formData={this.state.formData} user={user} />
                </div>
            </div>
        );
    }
}


export default Validator;