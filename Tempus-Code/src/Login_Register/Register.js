import React, { useState } from "react";
import './Login.css';
import { Link } from "react-router-dom";

export const Register = (props) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
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
            <h3 className="instruction">Sign Up for Tempus Account!</h3>
            <form className="register-form" onSubmit={handleSubmit}>
                <input value={fname} onChange={(e) => setFname(e.target.value)}type="fname" placeholder="First Name" id="fname" name="fname" />
                <input value={lname} onChange={(e) => setLname(e.target.value)}type="lname" placeholder="Last Name" id="lname" name="lname" />
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email Address" id="email" name="email" />
                <input value={phone} onChange={(e) => setEmail(e.target.value)}type="phone" placeholder="Phone Number" id="phone" name="phone" />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password (Minimum of 8 characters)" id="password" name="password" />
                <p><input type="checkbox" /> I agree with the terms and policy</p>
                <Link to="/chooseMode"><button className="submit" type="submit">SIGN UP</button></Link>
            </form>
            <p>Already have an account? <Link to="/login">Log In here.</Link></p>
        </div>
    )
}