import React, { Component } from 'react';

export default function AnswerInput(data) {
    console.log(data)
    let disabled = data.user == 'Validator' ? 'none' : 'visible';

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
    console.log(data)
    return (
        <div>
            <form method="get" action={data.answer.path}>
                <button type="submit">Download!</button>
            </form>
        </div>
    )
}

function renderTextType(data, disabled) {
    return (
        data.answer.map((data, index) => {
            {
                return (
                    <div key={index} style={{ marginTop: 5 }}>
                        <label for="respuesta" className="labelForm">Respuesta</label>

                        <input type="text" value={data.label} name="lname" style={{ pointerEvents: disabled }} className="input" />
                        {
                            data.comment.map((comment, index) => {

                                return (
                                    <div key={index}>
                                        <label for="comentario" className="labelForm" >Comentario</label>

                                        <input type="text" value={comment} name="lname" className="input" />
                                    </div>
                                )
                            })
                        }
                    </div>


                )
            }
        })
    )
}

function renderCheckboxType(data) {
    return (
        data.answer.map((items, indexItems) => {
            return (
                items.options.map((item, indexItem) => {
                    return (
                        <div>
                            {(() => {
                                if (item.selected) {
                                    return (
                                        <div className="row">
                                            <div className="col-md-1">
                                                <label for={indexItem}>{item.label}</label>
                                            </div>

                                            <div className="col-md-1">
                                                <input type="checkbox" type="checkbox" checked disabled id={indexItem} />
                                            </div>

                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className="row">
                                            <div className="col-md-1">

                                                <label for={indexItem}>{item.label}</label>
                                            </div>

                                            <div className="col-md-1">
                                                <input type="checkbox" type="checkbox" disabled id={indexItem} />
                                            </div>
                                        </div>
                                    )
                                }
                            })()}
                        </div>
                    )
                })
            )
        })
    )
}



