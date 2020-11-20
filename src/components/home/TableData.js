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


class TableData extends Component {
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
    redirect(row) {
        this.props.history.push({
            pathname: '/Form',
            state: { user: this.props.user, survey: row }
        })
    }
    render() {
        let variable;
        if (this.state.rows.length == 0) {
            variable = this.props.rows;
        } else {
            variable = this.state.rows
        }
        return (
            <TableContainer component={Paper} className="centerContent col-md-8 encuestas">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><b>{this.state.cols[0]}</b></TableCell>
                            <TableCell align="center"><b>{this.state.cols[1]}</b></TableCell>
                            <TableCell align="center"><b>{this.state.cols[2]}</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {variable.map((row) => (
                            <TableRow key={row.company + "-" + row.name}>
                                <TableCell align="center">{row.company}</TableCell>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">
                                    <Button variant="primary" onClick={() => { this.redirect(row) }}>Visualizar</Button>
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