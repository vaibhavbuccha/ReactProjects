import React from 'react';
import {  Link } from 'react-router-dom';
import { Box, Container,TextField } from '@material-ui/core';
import '../style/Signup.css';
import '../style/style.css';

function SignUp(){
    return (
        <div className="SignUp" >
            <Container maxWidth="sm" >
                <h3 className="SignUp__label" >Register</h3>
                <form>
                    <input type="text" name="name" id="name" className="Login__Input" placeholder="Username" autoComplete="off" />
                    <input type="email" name="email" id="email" className="Login__Input" placeholder="Email Address" autoComplete="off" />
                    <input type="password" name="password" id="password" className="Login__Input" placeholder="Password" autoComplete="off" />
                    <button className="btn btn-primary m-1" type="submit" >Register</button>
                </form>
                <Link to="/" >Login</Link>
            </Container >
        </div>
    )
}

export default SignUp;