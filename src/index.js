import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/home/home"
import Validator from "./components/Validator/Validator"
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <BrowserRouter>
        < App />
    </BrowserRouter>,
    document.getElementById("root")
);

serviceWorker.unregister();