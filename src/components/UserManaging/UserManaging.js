import React, { Component } from 'react';
import UsersTable from './UsersTable.js'
import Header from '../header'
import Dropdown from '../home/dropdowns'
import { Button } from 'react-bootstrap';
import axios from 'axios';

class UserManaging extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cols: ['Email', 'Rol'],
            rows: [],
            rowsToShow: [],
            actualUser: {}
        }
    }

    selectedValueEmail;
    onChangeDropDownEmail(data) {
        this.selectedValueEmail = data;
        this.filterTable(this.selectedValueEmail)
    }

    getUsers() {

        axios.get('https://api-proyect.herokuapp.com/getUsers', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            }
        }
        ).then(response => {
            console.log('RESPONSE', response.data.data)
            this.setState({
                rows: response.data.data,
                rowsToShow: response.data.data
            })
        }).catch(err => alert('Username y Password Invalido'))
    }

    filterTable(usuarioData) {
        this.state.rowsToShow = [];

        if (usuarioData == null) {
            this.state.rowsToShow = this.state.rows;
            this.HistoricTable.updateState(this.state.rowsToShow);
            return;
        } else {
            let filterUsers = this.state.rows.filter(item => item.username == usuarioData);
            this.state.rowsToShow = filterUsers
        }


        this.HistoricTable.updateState(this.state.rowsToShow);
    }

    showModal(type, user) {
        document.getElementById("modifyPanel").style.display = "block"
        document.getElementById("type").textContent = type
        document.getElementById("email").value = user.username != null ? user.username : null
        document.getElementById("password").value = user.password != null ? user.password : null
        if(type === "Eliminar") {
            document.getElementById("password").disabled = true
            document.getElementById("email").disabled = true

        } else if(type === "Modificar") {
            document.getElementById("password").disabled = false
            document.getElementById("email").disabled = true

        } else if(type === "Agregar") {
            document.getElementById("password").disabled = false
            document.getElementById("email").disabled = false

        }
    }

    actionUser(type) {
        console.log(type)
        if (type == 'Agregar') {
            this.createUser()
        } else if (type == 'Modificar') {
            this.editUser()
        } else if (type == 'Eliminar') {

        }
        document.getElementById("modifyPanel").style.display = "none"
    }

    createUser() {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value
        let body = {
            "username": email,
            "password": password,
            "role": "Admin"
        }


        axios.post('https://api-proyect.herokuapp.com/createUser', body, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            }
        }
        ).then(response => {
            console.log('RESPONSE', response)
            let totalRows = this.state.rows.push(response.data.data)

            this.setState({
                rows: totalRows
            })

        }).catch(err => alert('Username y Password Invalido'))
    }

    editUser() {
        let email = document.getElementById("email").value;
        let user = this.state.rows.filter(item => item.username == email)[0]; 
        console.log(user)       
        let password = document.getElementById("password").value
        user.password = password
        axios.post('https://api-proyect.herokuapp.com/updateUser', user, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            }
        }
        ).then(response => {
            console.log('RESPONSE', response.data.data)

        }).catch(err => alert('Username y Password Invalido'))
    }

    deleteUser() {

        axios.get('https://api-proyect.herokuapp.com/getUsers', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            }
        }
        ).then(response => {
            console.log('RESPONSE', response.data.data)
            this.setState({
                rows: response.data.data,
                rowsToShow: response.data.data
            })
        }).catch(err => alert('Username y Password Invalido'))
    }

    render() {
        if (this.state.rows.length == 0) {
            this.getUsers()
        }
        return (
            <div>
                <div>
                    <Header login={false} user={null} />
                </div>
                <div className="row centerContent marginTopBottom20">
                    <div className="col-md-8 filter">
                        <div className="row centerContent">
                            <div className="col-md-8 bottomMargin5">
                                <Dropdown
                                    type="Email"
                                    data={this.state.rows}
                                    label="Buscar por Email"
                                    onChangeValue={this.onChangeDropDownEmail.bind(this)}
                                />
                            </div>
                            <div className="col-md-4 pull-right" style={{ marginTop: 10 }}>
                                <Button variant="primary" onClick={() => { this.showModal("Agregar", {}) }}>Agregar Nuevo Usuario</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row centerContent">
                    <UsersTable
                        ref={(table) => { this.HistoricTable = table }}
                        cols={this.state.cols}
                        rows={this.state.rowsToShow}
                        user={this.state.rows}
                        showModal={this.showModal}
                        {...this.state}
                    />
                </div>

                <div id="modifyPanel" style={{ display: "none", marginTop: 18 }}>
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="form-control inlineDisplay"
                                    placeholder="Ingresar correo electrónico"
                                    value={this.state.email}
                                    
                                // onChange={this.handleEmailChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Contraseña</label>
                                <input
                                    id="password"
                                    type="password"
                                    className="form-control inlineDisplay"
                                    placeholder="Ingresar contraseña"
                                    value={this.state.password}
                                // onChange={this.handlePasswordChange}
                                />
                            </div>
                            <div className="App">
                                <button
                                    id="type"
                                    onClick={() => { this.actionUser(document.getElementById("type").textContent) }}
                                    className="btn btn-primary width50">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserManaging;