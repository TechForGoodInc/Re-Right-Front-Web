import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePageLoggedIn extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <h1>Home Page (Logged In)</h1>
                <Link to='/'>
                    <span className="badge badge-pill badge-info m-2">Log Out</span>
                </Link>
            </React.Fragment>
        );
    }
}

export default HomePageLoggedIn;
