import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './header'

export default class Login extends Component {
    render() {
        return (

            <div>
                <Header login={true} />
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
                                        <input type="email" className="form-control inlineDisplay" placeholder="Ingresar correo electrónico" />
                                    </div>

                                    <div className="form-group">
                                        <label>Contraseña</label>
                                        <input type="password" className="form-control inlineDisplay" placeholder="Ingresar contraseña" />
                                    </div>

                                    <div className="form-group text-right">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Recordarme</label>
                                        </div>
                                    </div>
                                    <div className="App">
                                        <Link to="/Home">
                                            <button type="submit" className="btn btn-primary width50">Ingresar</button>
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