import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Dropdown from './dropdowns';
function Searcher() {
    return (<Router>
        <div>
            <Dropdown type="Empresa"/>
        </div>
        <div>
            <Dropdown type="Encuesta"/>
        </div>
    </Router>
    );
}

export default Searcher;