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
                    type: 1,
                    answer: [
                        {
                            label: "Testing",
                            comment: ["Test", "Test2"]
                        },
                        {
                            label: "Testing 2",
                            comment: ["Test"]
                        }
                    ],
                    question: "Test",

                },
                {
                    type: 2,
                    answer: [
                        {
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
                            ],
                            comment: "Test"

                        }
                    ],
                    question: "Test",
                },
                {
                    type: 3,
                    answer: [
                        {
                            path: "/hola",
                            comment: ["Test"]

                        }
                    ],
                    question: "Test",
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