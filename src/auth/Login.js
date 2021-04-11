import React from 'react';
import {  Link } from 'react-router-dom';
import { Box, Container,TextField } from '@material-ui/core';
import '../style/Login.css';
import '../style/style.css';

function Login(){
    return (
        <div className="Login" >
            <Container maxWidth="sm" >
                <h3 className="Login__label" >Login</h3>
                <form>
                    <input type="email" name="email" id="email" className="Login__Input" placeholder="Email Address" />
                    <input type="password" name="password" id="password" className="Login__Input" placeholder="Password" />
                    <button className="btn btn-primary m-1" type="submit" >Login</button>
                </form>
                <Link to="/register" >Register</Link>
            </Container >
        </div>
    )
}

export default Login;