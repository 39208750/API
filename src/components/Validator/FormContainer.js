import React, { Component } from 'react';
import AnswerInput from './AnswerInput'
import { TextField, Container, Button, Grid } from '@material-ui/core';

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
            <div className="centerContentMainData col-md-8">
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
        <Container className="inputForm">
            <Container className="inputContainer">
                <AnswerInput answer={data} user="Validator" type={data.type} />
                <Container className="row">
                    <Grid container direction="row" justify="flex-end" alignItems="flex-end" style={{marginTop: 20}}>
                        <Button variant="contained" color="primary">Comentar</Button>
                    </Grid>
                </Container>
            </Container>
        </Container>
    );
}



function addComment() {

}
export default FormContainer;

