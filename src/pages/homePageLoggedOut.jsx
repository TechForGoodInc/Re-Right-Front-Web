import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class HomePageLoggedOut extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <h1>Home Page (Logged Out)</h1>
                <Link to='/login'>
                    <span className="badge badge-pill badge-info m-2">Login</span>
                </Link>
                <Link to='/forgotPassword'>
                    <span className="badge badge-pill badge-info m-2">Forgot Password</span>
                </Link>
                <Link to='/signUp'>
                    <span className="badge badge-pill badge-info m-2">Sign Up</span>
                </Link>

            </React.Fragment>
        );
    }
}

export default HomePageLoggedOut;
