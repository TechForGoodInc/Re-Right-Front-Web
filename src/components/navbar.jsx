import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <h1>NavBar Stuff :)</h1>
                    Num Counters greater than 0: 
                    <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
                    <Link to='/'>
                        <span className="btn btn-info m-2">Home Page</span>
                    </Link>
                    <Link to='/login'>
                        <span className="btn btn-info m-2">Login</span>
                    </Link>
                </a>
            </nav>
         );
    }
}
 
export default NavBar;