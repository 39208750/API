import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <div>
                <form>
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
                        <button type="submit" className="btn btn-primary width50">Submit</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}