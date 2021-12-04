import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Admin from './Admin';
import CreateUser from './CreateUser';
import Dashboard from './Dashboard';
import Withdraw from './Withdraw';
import Deposit from './Deposit';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/create-user" component={CreateUser} />
            <Route exact path="/user/:username" component={Dashboard} />
            <Route exact path="/user/:username/withdraw" component={Withdraw} />
            <Route exact path="/user/:username/deposit" component={Deposit} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;