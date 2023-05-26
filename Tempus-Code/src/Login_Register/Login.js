import React, { useState } from "react";
import './Login.css';
import { Link } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="form-container">
            <div className="logo-container">
                <img src="./images/TEMPUS_logo3.png" alt="Error" />
                <h1>TEMPUS</h1>
            </div>
            <h3 className="instruction">Login into your Tempus Account!</h3>
            <form className="login-form" onSubmit={handleSubmit}>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email Address" id="email" name="email" />
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
            <Link to="/chooseMode"><button className="submit" type="submit">Log In</button></Link>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign Up here.</Link></p>
        </div>
    )
}