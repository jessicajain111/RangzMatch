import React, {useState, useEffect} from "react";
import './CreateAccount.css'
import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom"; //importing useNaviagte to redirect to desired component



function CreateAccount(){

   const initialValues = {name: "", email: "", password: "", confirmpassword: ""};
   const [formValues, setFormValues] = useState(initialValues);
   const [errors, setErrors] = useState({}); //initial is an empty object
   const [isSubmit, setIsSubmit] = useState(false);

   const navigate = useNavigate(); //initializing useNavigate

   function handleChange(e){
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]: value});
   } 

   function handleSubmit(e){
    e.preventDefault(); //prevents page from getting refreshed
    setErrors(validate(formValues)); 
    setIsSubmit(true);

   } 

   useEffect(() => {
    console.log(errors)
    if(Object.keys(errors).length === 0 && isSubmit ){
        console.log(formValues);
        navigate('/mentormentee');
    }
   }, [errors, formValues,isSubmit] )

   function validate(values){
    const error = {} //empty object for error
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.name){
        error.name = "Name is required!";
    }
    if(!values.email){
        error.email = "Email is required!";
    }else if (!regex.test(values.email)) {
        error.email = "This is not a valid email"
    }
    if(!values.password){
        error.password = "Password is required!";
    }else if (values.password.length < 6) {
        error.password = "Password must be at least 6 characters"
    }
    if(!values.confirmpassword){
        error.confirmpassword = "Confirming password is required!";
    }else if(values.password !== values.confirmpassword){
        error.confirmpassword = "Passwords do not match!";
    }
    return error;
    /*regex: regular expression(regex) is a sequence of characters that 
            define patterns in text. Used for validation 
    */

   }; 





   return (
    <>
        <Header />
        <div className="page">
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <input
                    id="name"
                    type="text"
                    className="text"
                    name="name"
                    placeholder="Name"
                    value={formValues.name}
                    onChange={handleChange}
                />
                <p>{errors.name}</p>
                <input
                    id="email"
                    type="text"
                    className="text"
                    name="email"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={handleChange}
                />
                <p>{errors.email}</p>
                <input
                    id="password"
                    type="password"
                    className="text"
                    name="password"
                    placeholder="Password"
                    value={formValues.password}
                    onChange={handleChange}
                />
                <p>{errors.password}</p>
                <input
                    id="confirmpassword"
                    type="password"
                    className="text"
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    value={formValues.confirmpassword}
                    onChange={handleChange}
                />
                <p>{errors.confirmpassword}</p>
                <div className="button-wrapper">
                    <button className="continue-button" type="submit">Next</button>
                </div>
            </form>
        </div>
    </>
    );
}

export default CreateAccount;