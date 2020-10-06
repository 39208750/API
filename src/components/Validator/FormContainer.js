import React, { Component } from 'react';
import AnswerInput from './AnswerInput'
import { TextField, Container, Button, Grid, TextareaAutosize } from '@material-ui/core';
import ReactDOM from 'react-dom'
import { Redirect } from "react-router-dom";

let commentsAmount = 0;
class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            formData: props.formData,
            user: props.user
        }
    }

    render() {
        if (!this.state.user) {
            return (<Redirect to="/" />);
        }
        return (
            <Container className="centerContentMainData col-md-8" style={{ maxWidth: 984 }}  >
                {this.state.formData.map((data, index) => {
                    let form = this.renderForm(data, index, this.state.user);
                    { return (form) }
                })}
                {this.renderComment(this.state.user.rol)}
                <Grid container direction="row" justify="flex-end" alignItems="flex-end" style={{ marginTop: 20, marginBottom: 20 }}>
                    <Button
                        variant="contained"
                        id="sendCommentsButton"
                        color="primary"
                        style={{ display: "none" }}
                        onClick={() => { prependData(this) }}>
                        Enviar Comentarios
                    </Button>
                    <Button
                        variant="contained"
                        id="approveButton"
                        color="primary"
                        onClick={() => { prependData(this) }}
                        style={{ marginLeft: 20 }}>
                        Aprobar
                    </Button>
                </Grid>
            </Container>
        );
    }

    renderForm(data, index, user) {
        let container = [];
        return (
            <Container className="inputForm" disableGutters key={index}>
                <TextField style={{ marginTop: 15 }} label="Pregunta" defaultValue={data.question} InputProps={{ readOnly: true }} variant="outlined" className="textInput" />
                <AnswerInput answer={data} user={user} type={data.type} />
                <Container className="row" id={index} >
                    {container}
                </Container>
                {user.rol == "Validator" ? (
                    <Grid container direction="row" justify="flex-end" alignItems="flex-end" style={{ marginTop: 20 }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            id={"delete-" + index}
                            onClick={() => { prependData("delete-" + index, container) }}
                            className="formButton"
                            style={{ marginRight: 20, marginTop: -4, marginBottom: 4, display: "none" }}
                        >
                            Eliminar
                    </Button>
                        <Button
                            variant="contained"
                            id={"comment-" + index}
                            color="primary"
                            onClick={() => { prependData("comment-" + index, container) }}
                            className="formButton"
                            style={{ marginRight: 20, marginTop: -4, marginBottom: 4 }}
                        >
                            Comentar
                    </Button>
                    </Grid>
                ) : (
                        user.rol == "Filler" ? (
                            <Grid container direction="row" justify="flex-end" alignItems="flex-end" style={{ marginTop: 20 }}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    id={"deleteAnswer-" + index}
                                    onClick={() => { prependData("deleteAnswer-" + index, container) }}
                                    className="formButton"
                                    style={{ marginRight: 20, marginTop: -4, marginBottom: 4, display: "none" }}
                                >
                                    Eliminar
                                </Button>
                                <Button
                                    variant="contained"
                                    id={"addAnswer-" + index}
                                    color="primary"
                                    onClick={() => { prependData("addAnswer-" + index, container) }}
                                    className="formButton"
                                    style={{ marginRight: 20, marginTop: -4, marginBottom: 4 }}
                                >
                                    Agregar Respuesta
                                </Button>
                            </Grid>) : (<div><h2>No posee permisos</h2></div>))}
            </Container>
        );
    }

    renderComment(rol) {
        if (rol === "Validator") {
            return (
                <TextareaAutosize aria-label="empty textarea" placeholder="Comentario General" className="textInput col-md-12 textArea" rowsMin={4} style={{ borderRadius: 20 }} />
            )
        }
    }
}

function prependData(id, containerVariable) {

    containerVariable = [];
    let idValues = id.split('-');
    let container = document.getElementById(idValues[1])

    switch (idValues[0]) {
        case "delete":
            commentsAmount--;
            document.getElementById(id).style.display = "none";
            document.getElementById('comment-' + idValues[1]).style.display = "block"
            ReactDOM.render("", container)
            break;
        case "comment":
            commentsAmount++;
            document.getElementById(id).style.display = "none";
            document.getElementById('delete-' + idValues[1]).style.display = "block"

            containerVariable.push(
                <Container>
                    <TextField style={{ marginTop: 15 }} label="Comentario" variant="outlined" className="textInput" />
                </Container>
            )
            ReactDOM.render(containerVariable, container)
            break;
        case "deleteAnswer":
            commentsAmount--;
            document.getElementById(id).style.display = "none";
            document.getElementById('addAnswer-' + idValues[1]).style.display = "block";
            ReactDOM.render("", container);
            break;
        case "addAnswer":
            commentsAmount++;
            document.getElementById(id).style.display = "none";
            document.getElementById('deleteAnswer-' + idValues[1]).style.display = "block";

            containerVariable.push(
                <Container>
                    <TextField style={{ marginTop: 15 }} label="Respuesta" variant="outlined" className="textInput" />
                </Container>
            )
            ReactDOM.render(containerVariable, container)
            break;
        default: break;
    }

    if (commentsAmount > 0) {
        document.getElementById("sendCommentsButton").style.display = "block";
        document.getElementById("approveButton").style.display = "none"
    } else {
        document.getElementById("sendCommentsButton").style.display = "none";
        document.getElementById("approveButton").style.display = "block"
    }
}

export default FormContainer;