import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <h1>Login Page</h1>
                <Link to='/'>
                    <span className="badge badge-pill badge-info m-2">Back</span>
                </Link>
                <Link to='/forgotPassword'>
                    <span className="badge badge-pill badge-info m-2">Forgot Password</span>
                </Link>
                <Link to='/home'>
                    <span className="badge badge-pill badge-success m-2">Submit</span>
                </Link>
                <Link to='/signUp'>
                    <span className="badge badge-pill badge-info m-2">Sign Up</span>
                </Link>
            </React.Fragment>
        );
    }
}

export default LoginPage;
