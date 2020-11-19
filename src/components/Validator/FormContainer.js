import React, { Component } from 'react';
import AnswerInput from './AnswerInput'
import { TextField, Container, Button, Grid, TextareaAutosize } from '@material-ui/core';
import ReactDOM from 'react-dom'
import { Redirect } from "react-router-dom";
import axios from 'axios';

let commentsAmount = 0;
class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            survey: this.props.survey,
            user: this.props.user
        }
        this.fileInput = React.createRef();
    }
    render() {
        console.log(this.props.user)
        return (
            <Container className="centerContentMainData col-md-8" style={{ maxWidth: 984 }}  >
                {this.props.survey.questions.map((question, index) => {
                    let form = this.renderForm(question, index, this.props.user);
                    { return (form) }
                })}
                {this.renderComment(this.props.user.role)}
                <Grid container direction="row" justify="flex-end" alignItems="flex-end" style={{ marginTop: 20, marginBottom: 20 }}>
                    {this.props.user.role == "Validator" || this.props.user.role == "Admin" ? (
                        <div>
                            <Button
                                variant="contained"
                                id="sendCommentsButton"
                                color="primary"
                                style={{ display: "none" }}
                                onClick={() => { this.saveData("comment") }}>
                                Enviar Comentarios
                            </Button>
                            <Button
                                variant="contained"
                                id="approveButton"
                                color="primary"
                                onClick={() => { this.saveData("approve") }}
                                style={{ marginLeft: 20 }}>
                                Aprobar
                            </Button>
                        </div>
                    ) : (<div />)}
                    {this.props.user.role == "Filler" || this.props.user.role == "Admin" ? (
                        <Button
                            variant="contained"
                            id="sendAnswers"
                            color="primary"
                            onClick={() => { this.saveData("answer") }}
                            style={{ marginLeft: 20 }}>
                            Enviar Nuevas Respuestas
                        </Button>
                    ) : (<div />)}
                </Grid>
            </Container>
        );
    }


    renderForm(data, index, user) {
        let container = [];
        return (
            <Container className="inputForm" disableGutters key={index}>
                <h4 style={{ marginTop: 8, marginLeft: 18 }}>{data.question}</h4>
                {/* <TextField style={{ marginTop: 15 }} label="Pregunta" defaultValue={data.question} InputProps={{ readOnly: true }} variant="outlined" className="textInput" /> */}

                <AnswerInput answer={data} user={user} type={data.type} />
                <Container className="row" id={index} >
                    {container}
                </Container>
                {user.role == "Validator" || user.role == "Admin" ? (
                    <Grid container direction="row" justify="flex-end" alignItems="flex-end" style={{ marginTop: 20 }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            id={"delete-" + index}
                            onClick={() => { this.prependData("delete-" + index, container) }}
                            className="formButton"
                            style={{ marginRight: 20, marginTop: -4, marginBottom: 4, display: "none" }}
                        >
                            Eliminar
                    </Button>
                        <Button
                            variant="contained"
                            id={"comment-" + index}
                            color="primary"
                            onClick={() => { this.prependData("comment-" + index, container) }}
                            className="formButton"
                            style={{ marginRight: 20, marginTop: -4, marginBottom: 4 }}
                        >
                            Comentar
                    </Button>
                    </Grid>
                ) : (<div />)}
                {(user.role == "Filler" || user.role == "Admin") ? (
                    <Grid container direction="row" justify="flex-end" alignItems="flex-end" style={{ marginTop: 20 }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            id={"deleteAnswer-" + index}
                            onClick={() => { this.prependData("deleteAnswer-" + index, container) }}
                            className="formButton"
                            style={{ marginRight: 20, marginTop: -4, marginBottom: 4, display: "none" }}
                        >
                            Eliminar
                                </Button>
                        <Button
                            variant="contained"
                            id={"addAnswer-" + index}
                            color="primary"
                            onClick={() => { this.prependData("addAnswer-" + index, container, data.type) }}
                            className="formButton"
                            style={{ marginRight: 20, marginTop: -4, marginBottom: 4 }}
                        >
                            Agregar Respuesta
                                </Button>
                    </Grid>) : (<div />)}
            </Container>
        );
    }

    saveData(type) {
        let survey = this.state.survey;

        if (type == "comment") {
            survey.questions.map((row, index) => {
                let commentValue;
                if (document.getElementById("comment" + index)) {
                    commentValue = document.getElementById("comment" + index).value;
                }
                if (commentValue) {
                    row.answer[row.answer.length - 1].comment.push(commentValue)
                }
            })

        } else if (type == "answer") {
            survey.questions.map((row, index) => {
                let answerValue;
                if (document.getElementById("answer" + index)) {
                    answerValue = document.getElementById("answer" + index).value;
                }
                if (answerValue) {
                    row.answer.push({ label: answerValue, comment: [] })
                }
            })
        } else if (type == "approve") {
            survey.status = "APPROVED";
        }



    }
    updateSurvey(body) {

        axios.post('https://api-proyect.herokuapp.com/updateSurvey',body, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',

            }
        }
        ).then(response => {
            console.log('RESPONSE', response.data.data)

        }).catch(err => alert('ERROR ACTUALIZAR ENCUESTA'))
    }
    renderComment(role) {
        if (role === "Validator") {
            return (
                <TextareaAutosize aria-label="empty textarea" placeholder="Comentario General" className="textInput col-md-12 textArea" rowsMin={4} style={{ borderRadius: 20 }} />
            )
        }
    }
    prependData(id, containerVariable, questionType) {

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
                        <TextField
                            style={{ marginTop: 15 }}
                            label="Comentario"
                            variant="outlined"
                            className="textInput"
                            id={"comment" + idValues[1]} />
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
                {
                    questionType == 3 ? (
                        containerVariable.push(

                            <Container>
                                <div>
                                    <input type='file' ref={this.fileInput} />
                                </div>
                            </Container>
                        )) : (
                            containerVariable.push(

                                <Container>
                                    <TextField
                                        style={{ marginTop: 15 }}
                                        label="Respuesta"
                                        variant="outlined"
                                        className="textInput"
                                        id={"answer" + idValues[1]}
                                    />
                                </Container>

                            ))
                }
                ReactDOM.render(containerVariable, container)
                break;
            default: break;
        }

        if (this.state.user.role === "Validator" && commentsAmount > 0) {
            document.getElementById("sendCommentsButton").style.display = "block";
            document.getElementById("approveButton").style.display = "none"
        } else if (this.state.user.role === "Validator" && commentsAmount <= 0) {
            document.getElementById("sendCommentsButton").style.display = "none";
            document.getElementById("approveButton").style.display = "block"
        }
    }
}

export default FormContainer;