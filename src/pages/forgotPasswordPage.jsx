import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ForgotPasswordPage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <h1>Forgot Password Page</h1>
                <Link to='/'>
                    <span className="badge badge-pill badge-info m-2">Cancel</span>
                </Link>
                <Link to='/login'>
                    <span className="badge badge-pill badge-info m-2">Login</span>
                </Link>
                <Link to='/signUp'>
                    <span className="badge badge-pill badge-info m-2">Sign Up</span>
                </Link>
            </React.Fragment>
        );
    }
}

export default ForgotPasswordPage;
