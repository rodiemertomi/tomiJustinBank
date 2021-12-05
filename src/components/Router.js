import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/create-user" element={<CreateUser />} />
            <Route path="/admin/deposit" element={<Deposit />} />
            <Route path="/admin/withdraw" element={<Withdraw />} />
            <Route path="/user/:username" element={<Dashboard />} />
            <Route path="/user/:username/withdraw" element={<Withdraw />} />
            <Route path="/user/:username/deposit" element={<Deposit />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

export default Router;