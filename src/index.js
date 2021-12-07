import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import Admin from './components/admin_controls/Admin';
import Dashboard from './components/user_controls/Dashboard';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/user/:username" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
