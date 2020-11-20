import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            data: props.data,
            label: props.label
        }
    }
    onChangeValue(data) {
        this.props.onChangeValue(data)
    }
    render() {
        console.log(this.props.data)
        return (
            <Autocomplete
                options={this.props.data}
                id="debug"
                onChange={(event, value) => this.onChangeValue(value)}
                renderInput={(params) => <TextField {...params} label={this.state.label} />}
            />
        );
    }
}


export default Dropdown;