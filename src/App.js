import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePageLoggedOut from './pages/homePageLoggedOut';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signUpPage';
import ForgotPasswordPage from './pages/forgotPasswordPage';
import HomePageLoggedIn from './pages/homePageLoggedIn';

import ExamplePage from './pages/examplePage';


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePageLoggedOut} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/signUp" component={SignUpPage} />
                    <Route exact path="/forgotPassword" component={ForgotPasswordPage} />
                    <Route exact path="/home" component={HomePageLoggedIn}/>

                    <Route exact path="/example" component={ExamplePage}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
