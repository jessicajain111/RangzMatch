import React from "react";
import './CreateAccount.css'
import Header from "../../Components/Header";
import {Link} from 'react-router-dom';


function CreateAccount(){

    return(
        <>
        <Header/>
        <div className="page">
            <h1>Create Account</h1>
            <input id="FullName"type="text" className="text" name= "FullName" placeholder="Full Name" />
            <input id="email" type="text" className="text" name= "email" placeholder="Email" />
            <input id="password"type="password" className="text" name= "password" placeholder="Password" />
            <input id="confirmpassword"type="password" className="text" name= "FullName" placeholder="Confirm Password" />
            
            <button className="continue-button" ><Link to ="/mentormentee">Next</Link></button>
        </div>
        </>
       

    )

}

export default CreateAccount;