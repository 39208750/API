import React, { Component } from 'react';
import ValidatorForm from "./ValidatorForm"
class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: props.formData,
        }
    }

    render() {
        return (
            <div>
                {this.state.formData.map((data, index) => {
                    // <div key={index}>
                    //     <h3>{data.question}</h3>
                    //     <p>{data.answer}</p>
                    //     <p>{data.comment}</p>
                    // </div>
                })}
            </div>
        );
    }
}


export default FormContainer;

