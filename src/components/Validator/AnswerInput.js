import React, { Component } from 'react';
import { TextField, Checkbox, FormControl, FormLabel, FormGroup, FormControlLabel, Container } from '@material-ui/core';

export default function AnswerInput(data) {
    let disabled = data.user == 'Validator' ? 'none' : 'visible';
    console.log("asdasdasdasdas");
    console.log(data);
    return (
        <div>
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

        </div>
    )
}

function renderFileType(data) {
    return (
        <div>
            <form method="get" action={data.answer.path}>
                <button type="submit">Download!</button>
            </form>
        </div>
    )
}

function renderTextType(info, disabled) {
    return (
        info.answer.answer.map((data, index) => {
            {
                return (
                    <Container>
                        <TextField label="Pregunta" defaultValue={info.question} InputProps={{ readOnly: true }} variant="outlined" className="textInput" />
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
            )
        })
    )
}



