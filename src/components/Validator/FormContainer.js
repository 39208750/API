import React, { Component } from 'react';

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
                    let form = renderForm(data);
                    {return(form)}
                })}
            </div>
        );
    }
}

function renderForm(data) {
    if (data.answer.EsCompleja) {
        return (
            <div className="inputForm">
                <label for="pregunta">Pregunta</label>
                <input type="text" value={data.question} name="lname" disabled className="input"/>
                <label for="respuesta">Respuesta</label>
                <input type="text" value={data.answer.label} name="lname" disabled className="input"/>
                <label for="comentario">Comentario</label>
                <input type="text" value={data.question} name="lname" disabled className="input"/>

            </div>
        );
    } else {

        return (

            <div  className="inputForm">
                <label for="pregunta">Pregunta</label>
                <input type="text" value={data.question} name="lname" disabled className="input"/>
                <label for="respuesta">Respuesta</label>
                <input type="text" value={data.answer.label} name="lname" disabled className="input"/>
                <label for="comentario">Comentario</label>
                <input type="text" value={data.question} name="lname" disabled className="input"/>

            </div>
        );
    }

}
export default FormContainer;

