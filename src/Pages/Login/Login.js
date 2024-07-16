import React from "react";
import './Login.css';
import Header from "../../Components/Header";


function Login(){

    return(
        <>
        <Header/>
         <h1>Welcome Back</h1>
        <input type="email" placeholder="Email" class = "text"></input>
        <input type="password" placeholder="Password" class="text"></input>
        <input type="checkbox" class="check">Remember Me</input>
        </>
    )
}

export default Login;
