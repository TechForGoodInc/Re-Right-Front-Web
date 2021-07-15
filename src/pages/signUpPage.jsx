import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpPage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <h1>Sign Up Page</h1>
                <Link to='/'>
                    <span className="badge badge-pill badge-info m-2">Back</span>
                </Link>
                <Link to='/login'>
                    <span className="badge badge-pill badge-info m-2">Login</span>
                </Link>
                <Link to='/forgotPassword'>
                    <span className="badge badge-pill badge-info m-2">Forgot Password</span>
                </Link>
            </React.Fragment>
        );
    }
}

export default SignUpPage;
