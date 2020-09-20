import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './header'

export default class Login extends Component {
    render() {
        return (

            <div>
                <Header login ={true}/>
                <form>
                    <div className="centerComponent">
                        <div>
                            <div className="auth-wrapper">
                                <div className="auth-inner">
                                    <div className="App">
                                        <h3>Sign In</h3>
                                    </div>
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" className="form-control inlineDisplay" placeholder="Enter email" />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control inlineDisplay" placeholder="Enter password" />
                                    </div>

                                    <div className="form-group text-right">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="App">
                                        <Link to="/Home">
                                            <button type="submit" className="btn btn-primary width50">Submit</button>
                                        </Link>
                                        <p className="forgot-password text-right">
                                            Forgot <a href="#">password?</a>
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