import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class TableData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cols: props.cols,
            rows: props.rows
        }
    }
    updateState(rows) {
        this.setState(
            {
                rows: rows
            }
        )
    }
    render() {
        return (
            <TableContainer component={Paper} className="centerContent col-md-8">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><b>{this.state.cols[0]}</b></TableCell>
                            <TableCell align="center"><b>{this.state.cols[1]}</b></TableCell>
                            <TableCell align="center"><b>{this.state.cols[2]}</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell align="center">{row.val1}</TableCell>
                                <TableCell align="center">{row.val2}</TableCell>
                                <TableCell align="center">
                                    <Link to="/Form" params={{ encuesta: "Hola", empresa: "Hola" }}>
                                        <Button variant="primary">Visualizar</Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}


export default TableData;