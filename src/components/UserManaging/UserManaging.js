import React, { Component } from 'react';
import UsersTable from './UsersTable.js'
import Header from '../header'
import Dropdown from '../home/dropdowns'
import { Button } from 'react-bootstrap';

class UserManaging extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cols: ['Email', 'Contraseña'],
            rows: [
                {
                    Email: 'guidorusso95@gmail.com',
                    Password: '12345678'
                },
                {
                    Email: 'ortizalej@gmail.com',
                    Password: '12345678'
                }
            ],
            userData: [],
            rowsToShow: [
                {
                    Email: 'guidorusso95@gmail.com',
                    Password: '12345678'
                },
                {
                    Email: 'ortizalej@gmail.com',
                    Password: '12345678'
                }
            ]
        }
    }

    selectedValueEmail;
    onChangeDropDownEmail(data) {
        this.selectedValueEmail = data;
        this.filterTable(this.selectedValueEmail)
    }

    filterTable(usuarioData) {
        this.state.rowsToShow = [];

        if (usuarioData == null) {
            this.state.rowsToShow = this.state.rows;
            this.HistoricTable.updateState(this.state.rowsToShow);
            return;
        }

        for (var i = 0; i < this.state.rows.length; i++) {
            if (usuarioData != null) {
                if (this.state.rows[i].Email == usuarioData) {
                    this.state.rowsToShow.push(
                        {
                            Email: this.state.rows[i].Email,
                            Password: this.state.rows[i].Password
                        }
                    )
                }
            } else {
                if (this.state.rows[i].Email === usuarioData) {
                    this.state.rowsToShow.push(
                        {
                            Email: this.state.rows[i].Email,
                            Password: this.state.rows[i].Password
                        }
                    )
                }
            }
        }
        this.HistoricTable.updateState(this.state.rowsToShow);
    }

    showModal(type, email, password) {
        document.getElementById("modifyPanel").style.display = "block"
        document.getElementById("type").textContent = type
        document.getElementById("email").value = email
        document.getElementById("password").value = password
    }

    validateUser() {
        document.getElementById("modifyPanel").style.display = "none"
    }

    render() {
        const { user } = this.props.location
        for (var i = 0; i < this.state.rows.length; i++) {
            this.state.userData.push(this.state.rows[i].Email)
        }
        return (
            <div>
                <div>
                    <Header login={false} user={user} />
                </div>
                <div className="row centerContent marginTopBottom20">
                    <div className="col-md-8 filter">
                        <div className="row centerContent">
                            <div className="col-md-8 bottomMargin5">
                                <Dropdown
                                    type="Email"
                                    data={this.state.userData}
                                    label="Buscar por Email"
                                    onChangeValue={this.onChangeDropDownEmail.bind(this)}
                                />
                            </div>
                            <div className="col-md-4 pull-right" style={{marginTop: 10}}>
                                <Button variant="primary" onClick={() => { this.showModal("Agregar", "", "") }}>Agregar Nuevo Usuario</Button>
                            </div>
                        </div>
                    </div>
                </div>                
                <div className="row centerContent">
                    <UsersTable
                        ref={(table) => { this.HistoricTable = table }}
                        cols={this.state.cols}
                        rows={this.state.rowsToShow}
                        user={user}
                        showModal={this.showModal}
                    />
                </div>
                <div id="modifyPanel" style={{ display: "none", marginTop: 18}}>
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
                                    type="submit"
                                    onClick={() => { this.validateUser(this) }}
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