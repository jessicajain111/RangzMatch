import React from "react";
import './CreateAccount.css'
import Header from "../../Components/Header";


function CreateAccount(){

    return(
        <>
        <Header/>
        <div className="page">
            <h1>Create Account</h1>
            <input type="text" className="text">Full Name</input>
            <input type="text" className="text">Email</input>
            <input type="password" className="text">Password</input>
            <input type="password" className="text">Confrim Password</input>
            <button className="continue-button">Next</button>
        </div>
        </>
       

    )

}

export default CreateAccount;