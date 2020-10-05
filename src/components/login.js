import React, { Component } from "react";
import { BrowserRouter as Router, Link} from "react-router-dom";
import Header from './header'
import { useHistory } from 'react-router-dom';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                nombre: "",
                apellido: "",
                role: ""
            },
            email: "",
            password: "",
            url:"",
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    };
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    };

    validateUser() {
        let returnVal = false;
        if (this.state.email === "Validador") {
            let user = {
                nombre: "Validador Nombre",
                apellido: "Validador Apellido",
                rol: "Validator"
            };
            this.setState({ user: user });
            returnVal = true;
        } else if (this.state.email === "Analista") {
            let user = {
                nombre: "Analista Nombre",
                apellido: "Analista Apellido",
                rol: "Filler"
            };
            this.setState({ user: user });
            returnVal = true;
        }
        if(returnVal){
            this.setState({ url: "/Home" });
        }
    }

    render() {
        return (
            <div>
                <Header login={true}/>
                <form>
                    <div className="centerComponent">
                        <div>
                            <div className="auth-wrapper">
                                <div className="auth-inner">
                                    <div className="App">
                                        <h3>Iniciar Sesión</h3>
                                    </div>
                                    <div className="form-group">
                                        <label>Correo Electrónico</label>
                                        <input
                                            type="email"
                                            className="form-control inlineDisplay"
                                            placeholder="Ingresar correo electrónico"
                                            value={this.state.email}
                                            onChange={this.handleEmailChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Contraseña</label>
                                        <input
                                            type="password"
                                            className="form-control inlineDisplay"
                                            placeholder="Ingresar contraseña"
                                            value={this.state.password}
                                            onChange={this.handlePasswordChange}
                                        />
                                    </div>
                                    <div className="form-group text-right">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Recordarme</label>
                                        </div>
                                    </div>
                                    <div className="App">
                                        <Link to={{pathname:this.state.url, user:this.state.user}}>
                                            <button
                                                type="submit"
                                                onClick={() => { this.validateUser(this) }}                                                
                                                className="btn btn-primary width50">
                                                Ingresar
                                            </button>
                                        </Link>
                                        <p className="forgot-password text-right">
                                            <a href="#">Solicitar cuenta nueva</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }    
}