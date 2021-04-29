import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Admin from './layouts/Admin';
import SignIn from './layouts/SignIn';
import SignInContainer from './container/SignInContainer';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path = '/admin'>
                    <Admin/>
                </Route>
                <Route path = '/login'>
                    <SignInContainer/>
                </Route>
            </Switch>
        </Router>
    )
}                                                                   