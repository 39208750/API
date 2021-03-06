import React from 'react';
import { TextField, Checkbox, FormControl, FormLabel, FormGroup, FormControlLabel, Container, Button, Grid } from '@material-ui/core';

export default function AnswerInput(data) {
    return (
        <Container>
            {(() => {
                switch (data.type) {
                    case 1: return (renderTextType(data))
                    case 2: return (renderCheckboxType(data))
                    case 3: return (renderFileType(data))
                    case 4: return (renderTextType(data))
                    case 5: return (renderGroupedType(data))
                    default: return null;
                }
            })()}

        </Container>
    )
}

function renderFileType(data) {

    return (
        <Container key={data}>
            <FormControl component="fieldset" style={{ marginTop: 11 }}>
                <FormLabel component="legend">Respuesta</FormLabel>
                <FormGroup aria-label="position" row>
                    <Button style={{ marginBottom: 4 }} color="secondary" variant="contained">Descargar</Button>
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

function renderTextType(info) {
    return (
        info.answer.answer.map((data, index) => {
            {
                return (
                    <Container key={index}>
                        <TextField style={{ marginTop: 15 }} label="Respuesta" defaultValue={data.label} InputProps={{ readOnly: true }} variant="outlined" className="textInput" />
                        {
                            data.comment.map((comment, index) => {
                                return (
                                    <TextField key={index} style={{ marginTop: 15 }} label="Comentario" defaultValue={comment} InputProps={{ readOnly: true }} variant="outlined" className="textInput" />
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
                <Container key={indexItems}>
                    <FormControl component="fieldset" style={{ marginTop: 11, marginBottom: -13 }}>
                        <FormLabel component="legend">Respuesta</FormLabel>
                        <FormGroup aria-label="position" row>
                            {(() => {
                                return (
                                    items.options.map((item, indexItem) => {
                                        if (item.selected) {
                                            return (
                                                <FormControlLabel key={indexItem} disabled checked value={item.label} control={<Checkbox color="primary" />} label={item.label} labelPlacement="end" />
                                            )
                                        } else {
                                            return (
                                                <FormControlLabel key={indexItem} disabled value={item.label} control={<Checkbox color="primary" />} label={item.label} labelPlacement="end" />
                                            )
                                        }
                                    })
                                )
                            })()}
                        </FormGroup>

                    </FormControl>
                    {
                        items.comment.map((comment, index) => {
                            return (
                                <TextField key={index} style={{ marginTop: 15 }} label="Comentario" defaultValue={comment} InputProps={{ readOnly: true }} variant="outlined" className="textInput" />
                            )
                        })
                    }
                </Container>
            )
        })
    )
}

function renderGroupedType(data) {
    console.log(data.answer.answer)
    return (
        data.answer.answer.map((item, index) => {
            console.log(item)
            return (
                <Container>
                    <TextField
                        key={index}
                        style={{ marginTop: 15 }}
                        label={item.question}
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        defaultValue={item.answer + (item.adornment == undefined ? "" : item.adornment)}
                        className="textInput"
                    />

                </Container>
            )
        })
    )
}