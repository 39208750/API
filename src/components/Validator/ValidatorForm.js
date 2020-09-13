

import React, { Component } from 'react';

class ValidatorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: props.question,
            answer: props.answer,
            comments: props.comments
        }
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label>Pregunta</label>
                    <input className="form-control inlineDisplay" value={this.state.question} disabled={true}/>
                </div>
                <div className="form-group">
                    <label>Respuesta</label>
                    <input className="form-control inlineDisplay" value={this.state.answer} disabled={true}/>
                </div>
                <div className="form-group">
                    <label>Comentario</label>
                    <input className="form-control inlineDisplay" value={this.state.comments} disabled={true}/>
                </div>                
            </div>

        );
    }
}


export default ValidatorForm;


