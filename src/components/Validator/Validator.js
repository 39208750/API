import React, { Component } from 'react';
import Header from '../header'
import MainData from './MainData'
import FormContainer from './FormContainer'

class Validator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: this.props.location.state.survey,
            user: this.props.location.state.user
        }
    }
    render() {
        console.log(this.props.location.state.user)
        return (
            <div>
                <div>
                    <Header login={false} user={this.props.location.state.user} {...this.props}/>
                </div>
                <MainData empresaName={this.props.location.state.survey.company} encuestaName={this.props.location.state.survey.name} />
                <div>
                    <FormContainer survey={this.props.location.state.survey} user={this.props.location.state.user} {...this.props}/>
                </div>
            </div>
        );
    }
}


export default Validator;