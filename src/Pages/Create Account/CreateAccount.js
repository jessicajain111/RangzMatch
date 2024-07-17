import React from "react";
import './CreateAccount.css'
import Header from "../../Components/Header";


function CreateAccount(){

    return(
        <>
        <Header/>
        <div className="page">
            <h1>Create Account</h1>
            {/* <label htmlFor="FullName" name="FullName">Full Name</label> */}
            <input id="FullName"type="text" className="text" name= "FullName" value="" />
            {/* <label htmlFor="password" name="password">password</label> */}
            <input id="password"type="password" className="text" name= "password" value="" />
            {/* <label htmlFor="confirmpassword" name="confirmpassword">Confirm Password</label> */}
            <input id="confirmpassword"type="password" className="text" name= "FullName" value="" />
            
            <button className="continue-button">Next</button>
        </div>
        </>
       

    )

}

export default CreateAccount;