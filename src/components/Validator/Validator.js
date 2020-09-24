import React, { Component } from 'react';
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
                                    label: "option 1"
                                },
                                {
                                    selected: false,
                                    label: "option 2"
                                },
                                {
                                    selected: false,
                                    label: "option 3"
                                }
                            ],
                            comment: ["Comment 1", "Comment 2"]
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
        console.log(this.props.match.params.empresa)
        return (
            <div>
                <div>
                    <Header login={false} />
                </div>
                    <MainData empresaName={this.props.empresa} encuestaName={this.props.encuesta} />
                <div>
                    <FormContainer formData={this.state.formData} />
                </div>
            </div>
        );
    }
}


export default Validator;