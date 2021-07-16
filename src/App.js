import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import HomePageLoggedOut from './pages/homePageLoggedOut';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signUpPage';
import ForgotPasswordPage from './pages/forgotPasswordPage';
import HomePageLoggedIn from './pages/homePageLoggedIn';

import ExamplePage from './pages/examplePage';
import NotFoundPage from './pages/notFoundPage';

// If user tries to navigate to any url not listed in "Route"s, the switch will "Redirect" the user
// to /404 and display the NotFoundPage
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

                    <Route exact path="/404" component={NotFoundPage}/>
                    <Redirect to="/404"/>
                </Switch>
            </Router>
        );
    }
}

export default App;
