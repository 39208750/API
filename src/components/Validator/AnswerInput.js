import React, { Component } from 'react';
import { TextField, Checkbox, FormControl, FormLabel, FormGroup, FormControlLabel, Container, Button } from '@material-ui/core';

export default function AnswerInput(data) {
    let disabled = data.user == 'Validator' ? 'none' : 'visible';
    console.log("asdasdasdasdas");
    console.log(data);
    return (
        <Container>
            <Container>
                <TextField style={{ marginTop: 15 }} label="Pregunta" defaultValue={data.answer.question} InputProps={{ readOnly: true }} variant="outlined" className="textInput" />
            </Container>
            {(() => {
                switch (data.type) {
                    case 1:
                        return (renderTextType(data, disabled))
                    case 2:
                        return (renderCheckboxType(data))
                    case 3:
                        return (renderFileType(data))

                    default:
                        return null;
                }
            })()}

        </Container>
    )
}

function renderFileType(data) {
    console.log(data)
    return (
        <Container>
            <TextField style={{ marginTop: 15 }} label="Pregunta" defaultValue={data.answer.question} InputProps={{ readOnly: true }} variant="outlined" className="textInput" />
            <FormControl component="fieldset">
                <FormLabel style={{ marginTop: 15 }} component="legend">Respuesta</FormLabel>
                <FormGroup aria-label="position" row>
                    <Button style={{ marginTop: 15 }} color="secondary" variant="contained">Descargar</Button>
                </FormGroup>
            </FormControl>
            {
                data.answer.answer.map((info, index) => {
                    return (
                        info.comment.map((comment, index) => {
                            return (
                                <TextField style={{ marginTop: 15 }} label="Comentario" defaultValue={comment} InputProps={{ readOnly: true }} variant="outlined" className="textInput" />
                            )
                        })
                    )
                })
            }
        </Container>
    )
}

function renderTextType(info, disabled) {
    return (
        info.answer.answer.map((data, index) => {
            {
                return (
                    <Container>
                        <TextField style={{ marginTop: 15 }} label="Respuesta" defaultValue={data.label} InputProps={{ readOnly: true }} variant="outlined" className="textInput" />
                        {
                            data.comment.map((comment, index) => {

                                return (
                                    <TextField style={{ marginTop: 15 }} label="Comentario" defaultValue={comment} InputProps={{ readOnly: true }} variant="outlined" className="textInput" />
                                )
                            })
                        }
                    </Container>
                )
            }
        })
    )
}

function renderCheckboxType(data) {
    return (
        data.answer.answer.map((items, indexItems) => {
            return (
                <Container>
                    <TextField style={{ marginTop: 15 }} label="Pregunta" defaultValue={data.answer.question} InputProps={{ readOnly: true }} variant="outlined" className="textInput" />

                    <FormControl component="fieldset">
                        <FormLabel style={{ marginTop: 15 }} component="legend">Respuesta</FormLabel>
                        <FormGroup aria-label="position" row>
                            {(() => {
                                return (
                                    items.options.map((item, indexItem) => {
                                        if (item.selected) {
                                            return (
                                                <FormControlLabel disabled checked value={item.label} control={<Checkbox color="primary" />} label={item.label} labelPlacement="left" />
                                            )
                                        } else {
                                            return (
                                                <FormControlLabel disabled value={item.label} control={<Checkbox color="primary" />} label={item.label} labelPlacement="left" />
                                            )
                                        }
                                    })
                                )
                            })()}
                        </FormGroup>
                        {
                            items.comment.map((comment, index) => {
                                return (
                                    <TextField style={{ marginTop: 15 }} label="Comentario" defaultValue={comment} InputProps={{ readOnly: true }} variant="outlined" className="textInput" />
                                )
                            })
                        }
                    </FormControl>
                </Container>
            )
        })
    )
}



