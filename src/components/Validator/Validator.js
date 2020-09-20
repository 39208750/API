import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../header'
import MainData from './MainData'
import FormContainer from './FormContainer'



class Validator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: [
                {
                    answer: {
                        EsCompleja: true,
                        label: "Testing",
                    },
                    question: "Test",
                    comment: "Test"
                },
                {
                    answer: {
                        EsCompleja: false,
                        label: "Testing",
                        options: [
                            {
                                selected: true,
                                label: "testing1"
                            },
                            {
                                selected: false,
                                label: "testing1"
                            },
                            {
                                selected: false,
                                label: "testing1"
                            }
                        ]
                    },
                    question: "Test",
                    comment: "Test"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Header login={false} />
                </div>
                <div>
                    <MainData empresaName={this.props.empresa} encuestaName={this.props.encuesta} />

                </div>
                <div>
                    <FormContainer formData={this.state.formData} />
                </div>
            </div>
        );
    }
}


export default Validator;