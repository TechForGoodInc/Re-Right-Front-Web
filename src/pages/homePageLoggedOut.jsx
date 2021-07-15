import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class HomePageLoggedOut extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <h1>Home Page (Logged Out)</h1>
                <Link to='/login'>
                    <span className="btn btn-primary btn-sm m-2">Login</span>
                </Link>
                <Link to='/forgotPassword'>
                    <span className="btn btn-secondary btn-sm m-2">Forgot Password</span>
                </Link>
                <Link to='/signUp'>
                    <span className="btn btn-info m-2">Sign Up</span>
                </Link>
                <Link to='/example'>
                    <span className="btn btn-warning btn-lg m-2">EXAMPLE STUFFS</span>
                </Link>

            </React.Fragment>
        );
    }
}

export default HomePageLoggedOut;
