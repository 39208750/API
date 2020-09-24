import React, { Component } from 'react';
import AnswerInput from './AnswerInput'
import { TextField, Container, Button, Grid } from '@material-ui/core';

class FormContainer extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            formData: props.formData,

        }
    }
    render() {
        return (
            <Container className="centerContentMainData col-md-8">
                {this.state.formData.map((data, index) => {
                    let form = renderForm(data, index);
                    { return (form) }
                })}
                <TextField id="filled-basic" label="Filled" variant="filled" className="inputText" />

            </Container>
        );
    }
}

function renderForm(data, index) {
    return (
        <Container className="inputForm">
            <Container className="inputContainer">
                <AnswerInput answer={data} user="Validator" type={data.type} />
                <Container className="row" >
                    
                    <Grid container direction="row" justify="flex-end" alignItems="flex-end" style={{ marginTop: 20 }}>
                        <Button variant="contained" color="primary" onClick={() => { prependData(this) }}>Comentar</Button>
                    </Grid>
                </Container>
            </Container>
        </Container>
    );
}

function prependData(index) {
    console.log(index.myRef.current)
    // $("#"+index).append(<TextField style={{ marginTop: 15 }} label="Comentario"  InputProps={{ readOnly: true }} variant="outlined" className="textInput" />)
}


export default FormContainer;

