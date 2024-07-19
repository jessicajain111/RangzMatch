import React from "react";
import './Login.css';
import Header from "../../Components/Header";

function Login() {
    //const initialValues = { email: "", password: ""};
    
    
    return (
        <>
            <Header />
            <h1>Welcome Back</h1>
            <div className="form-container">
                <input type="email" placeholder="Email" className="text" />
                <input type="password" placeholder="Password" className="text" />
                <div className="checkbox-container">
                    <input type="checkbox" id="remember-me" className="check" />
                    <label htmlFor="remember-me">Remember Me</label>
                </div>
            </div>
        </>
    );
}

export default Login;
