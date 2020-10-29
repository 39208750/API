import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Route, Link } from "react-router-dom";


class UsersTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cols: props.cols,
            rows: props.rows,
            user: props.user
        }
    }
    updateState(rows) {
        this.setState(
            {
                rows: rows
            }
        )
    }

    buttonActions(type, email, password) {
        this.props.showModal(type, email, password)
    }

    render() {
        return (
            <TableContainer component={Paper} className="centerContent col-md-8">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><b>{this.state.cols[0]}</b></TableCell>
                            <TableCell align="center"><b>{this.state.cols[1]}</b></TableCell>
                            <TableCell align="right"><b>{this.state.cols[2]}</b></TableCell>
                            <TableCell align="right"><b>{this.state.cols[2]}</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map((row) => (
                            <TableRow key={row.Email}>
                                <TableCell align="center">{row.Email}</TableCell>
                                <TableCell align="center">{row.Password}</TableCell>
                                <TableCell align="right">
                                    <Button variant="primary" onClick={() => { this.buttonActions("Modificar", row.Email, row.Password) }}>Modificar</Button>
                                </TableCell>
                                <TableCell align="left">
                                    <Button variant="danger" onClick={() => { this.buttonActions("Eliminar", row.Email, row.Password) }}>Eliminar</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default UsersTable;