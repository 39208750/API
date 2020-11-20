import React, { Component } from "react";
import Header from './header'

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header login={true} {...this.props}/>
                </div>
                <form>
                    <div className="centerComponent">
                        <div>
                            <div className="auth-wrapper">
                                <div className="auth-inner">
                                    <div className="App">
                                        <h3>Sign Up</h3>
                                    </div>
                                    <div className="form-group">
                                        <label>First name</label>
                                        <input type="text" className="form-control inlineDisplay" placeholder="First name" />
                                    </div>

                                    <div className="form-group">
                                        <label>Last name</label>
                                        <input type="text" className="form-control inlineDisplay" placeholder="Last name" />
                                    </div>

                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" className="form-control inlineDisplay" placeholder="Enter email" />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control inlineDisplay" placeholder="Enter password" />
                                    </div>
                                    <div className="App">
                                        <button type="submit" className="btn btn-primary width50">Sign Up</button>
                                        <p className="forgot-password text-right">
                                            Already registered? <a href="#">sign in</a>
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