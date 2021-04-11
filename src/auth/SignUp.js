import React, { useEffect, useState } from 'react';
import {  Link, Redirect, Switch } from 'react-router-dom';
import { Box, Container,TextField } from '@material-ui/core';
import '../style/Signup.css';
import '../style/style.css';
import axios from 'axios';

function SignUp(){
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const register = async (e) => {
        e.preventDefault();
        // console.log(e.target);
        let url = 'http://127.0.0.1:5000/api/user/register';
        await axios.post(url, {
            name, email, password
        })
        .then(res =>{ 
            <Redirect to="/" exact />  
            setError('')
        })
        .catch(err => 
            setError(err.message)
        );
    }

    useEffect(() => {
        let checkUser = localStorage.getItem('user');
        console.log(checkUser);
        if(checkUser){
            <Redirect to="/profile" />
        }
    },[]);


    return (
        <div className="SignUp" >
            <Container maxWidth="sm" >
                <h3 className="SignUp__label" >Register</h3>
                <p>{error}</p>
                <form onSubmit={register} >
                    <input type="text" name="name" id="name" value={name} onChange={updateName} className="Login__Input" placeholder="Username" autoComplete="off" />
                    <input type="email" name="email" id="email" value={email} onChange={updateEmail} className="Login__Input" placeholder="Email Address" autoComplete="off" />
                    <input type="password" name="password" id="password" value={password} onChange={updatePassword} className="Login__Input" placeholder="Password" autoComplete="off" />
                    <button className="btn btn-primary m-1" type="submit" >Register</button>
                </form>
                <Link to="/" >Login</Link>
            </Container >
        </div>
    )
}

export default SignUp;