import React, { Component } from 'react';
import AnswerInput from './AnswerInput'

class FormContainer extends Component {
    // classes = useStyles();

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
                    let form = renderForm(data, index);
                    { return (form) }
                })}
            </div>
        );
    }
}

function renderForm(data, index) {
    return (
        <div className="inputForm">
            <label for="pregunta" className="labelForm">Pregunta</label>
            <input type="text" value={data.question} name="lname" disabled className="input" />

            <AnswerInput answer={data.answer}  user="Validator" type={data.type}/>
            <div>

                {/* {data.answer.map((data, index) => {

                    {
                        return (
                            <div key={index}>
                                <input type="text" value={data.question} name="lname" className="input" value={data} />
                            </div>
                        )
                    }
                })} */}
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <button type="submit" className="btn btn-primary validatorButton" style={{ float: "right" }} >Comentar</button>
                </div>
            </div>

        </div>
    );
}



function addComment() {

}
export default FormContainer;

