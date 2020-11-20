import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Header from './header'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
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
            url: "",
            rememberMe: false
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    componentDidMount() {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const email = rememberMe ? localStorage.getItem('email') : '';
        this.setState({ email, rememberMe });
    };
    handleChange(event) {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
    
        this.setState({ [input.name]: value });
    };
    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    };
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    };
    getUser() {
        let body = {
            "username": this.state.email,
            "password": this.state.password
        }
        console.log('BODY', body)
        axios.post('https://api-proyect.herokuapp.com/loginUser', body, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            }
        }
        ).then(response => {
            console.log('RESPONSE', response.data.data.role)
            this.props.history.push({
                pathname: '/Home',
                state: { user: response.data.data }
              })
              const { email, rememberMe } = this.state;
              if(rememberMe){
                localStorage.setItem('rememberMe', rememberMe);
                localStorage.setItem('email', rememberMe ? email : '');  
              }            
        }).catch(err => alert('Username y Password Invalido'))
    };
    
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
                                        <input
                                            type="email"
                                            className="form-control inlineDisplay"
                                            placeholder="Ingresar correo electrónico"
                                            value={this.state.email}                                            
                                            onChange={this.handleChange}
                                            name="email"
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
                                            <input type="checkbox" name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Recordarme</label>
                                        </div>
                                    </div>
                                    <div className="App">
                                        <Link to={{ pathname: this.state.url, user: this.state.user }}>
                                            <button
                                                onClick={() => { this.getUser() }}
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