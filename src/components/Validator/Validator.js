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
                    question: "En que año estamos?",
                    answer: [
                        {
                            label: "2020",
                            comment: []

                        }
                    ],
                },
                {
                    type: 1,
                    question: "En que mes estamos?",
                    answer: [
                        {
                            label: "Diciembre",
                            comment: []

                        }
                    ],
                },
                {
                    type: 1,
                    question: "Qué año fue el año pasado?",
                    answer: [
                        {
                            label: "2020",
                            comment: ["La respuesta no es correcta, revisar"]
                        }
                    ],
                },
                {
                    type: 1,
                    question: "Qué año será el año que viene?",
                    answer: [
                        {
                            label: "2020",
                            comment: ["La respuesta no es correcta, revisar", "Preste atención."]
                        }
                    ],
                },
                {
                    type: 1,
                    question: "Qué mes será el próximo mes?",
                    answer: [
                        {
                            label: "Noviembre",
                            comment: ["La respuesta no es correcta, revisar"]
                        },
                        {
                            label: "Octubre",
                            comment: []
                        }
                    ],
                },
                {
                    type: 1,
                    question: "Qué mes será el próximo mes?",
                    answer: [
                        {
                            label: "Noviembre",
                            comment: ["La respuesta no es correcta, revisar", "Preste atención."]
                        },
                        {
                            label: "Octubre",
                            comment: []
                        }
                    ],
                },
                {
                    type: 1,
                    question: "Qué mes será el próximo mes?",
                    answer: [
                        {
                            label: "Noviembre",
                            comment: ["La respuesta no es correcta, revisar", "Preste atención."]
                        },
                        {
                            label: "Diciembre",
                            comment: ["Tampoco es correcta esa respuesta"]
                        },
                        {
                            label: "Octubre",
                            comment: ["Tampoco es correcta esa respuesta"]
                        }
                    ],
                },
                {
                    type: 2,
                    question: "De que color es el caballo blanco de San Martín?",
                    answer: [
                        {
                            options: [
                                {
                                    selected: true,
                                    label: "Blanco"
                                },
                                {
                                    selected: false,
                                    label: "Negro"
                                },
                                {
                                    selected: false,
                                    label: "Marrón"
                                }
                            ],
                            comment: []
                        }
                    ],
                },
                {
                    type: 2,
                    question: "De que color es el caballo blanco de San Martín?",
                    answer: [
                        {
                            options: [
                                {
                                    selected: false,
                                    label: "Blanco"
                                },
                                {
                                    selected: true,
                                    label: "Negro"
                                },
                                {
                                    selected: false,
                                    label: "Marrón"
                                }
                            ],
                            comment: ["El caballo no es Negro"]
                        }
                    ],
                },
                {
                    type: 2,
                    question: "De que color es el caballo blanco de San Martín?",
                    answer: [
                        {
                            options: [
                                {
                                    selected: true,
                                    label: "Blanco"
                                },
                                {
                                    selected: true,
                                    label: "Negro"
                                },
                                {
                                    selected: false,
                                    label: "Marrón"
                                }
                            ],
                            comment: ["El caballo no es Negro", "El caballo solo tiene un color"]
                        }
                    ],
                },
                {
                    type: 2,
                    question: "De que color es el caballo blanco de San Martín?",
                    answer: [
                        {
                            options: [
                                {
                                    selected: true,
                                    label: "Blanco"
                                },
                                {
                                    selected: true,
                                    label: "Negro"
                                },
                                {
                                    selected: false,
                                    label: "Marrón"
                                }
                            ],
                            comment: ["El caballo no es Negro", "El caballo solo tiene un color"]
                        },
                        {
                            options: [
                                {
                                    selected: true,
                                    label: "Blanco"
                                },
                                {
                                    selected: false,
                                    label: "Negro"
                                },
                                {
                                    selected: false,
                                    label: "Marrón"
                                }
                            ],
                            comment: []
                        }
                    ],
                },
                {
                    type: 3,
                    question: "Dibuje a San Martín.",
                    answer: [
                        {
                            path: "www.google.com",
                            comment: []
                        }
                    ],

                },
                {
                    type: 3,
                    question: "Dibuje a San Martín.",
                    answer: [
                        {
                            path: "wqw.google.com",
                            comment: ["La ruta es incorrecta"]
                        },
                        {
                            path: "www.google.com",
                            comment: ["a comment"]
                        }
                    ],
                }
            ]            
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