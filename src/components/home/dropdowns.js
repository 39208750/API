

import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import { Autocomplete } from "@material-ui/lab";
import {TextField} from '@material-ui/core/Textfield'
function Dropdown() {
    let listToShow = retrieveData('type');
    return (<Router>
        <Autocomplete
            id="combo-box-demo"
            options={['1','2']}
            getOptionLabel={['1','2']}
            style={{ width: 300 }}
            renderInput={<TextField label="Combo box" variant="outlined" />}
        />
    </Router>
    );
}

function retrieveData(type){
    let list = [];
    return list
}

export default Dropdown;