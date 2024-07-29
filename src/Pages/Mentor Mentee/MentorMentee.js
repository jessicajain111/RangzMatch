import React, {useState} from "react";
import './MentorMentee.css';
import Header from "../../Components/Header";
import { useNavigate} from "react-router-dom";




function MentorMentee(){
    // eslint-disable-next-line 
    const[role, setRole] = useState('');
    const naviagte = useNavigate();



    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole);
        naviagte('/profile', {state: {role: selectedRole} })
    }
    

    return(
        <>
        <Header/>
        <h1>Become a Mentor/Mentee</h1>
        <div className="description">
            <div className="mentor">
                <h2>Mentor</h2>
                <p> Your responsibility as a mentor is to: </p>
                <ul>
                    <li>Spend time with your mentee</li>
                    <li>Answer any questions they might have for Rangila</li>
                    <li>Help them with their dances if needed</li>
                    <li>Become their big sister😝</li>
                </ul>
                <button className="Button" onClick={() => handleRoleSelection('Mentor')}>Mentor</button>
            </div>
            <div className="mentee">
                <h2>Mentee</h2>
                <p> Your responsibility as a mentee is to: </p>
                <ul>
                    <li>Grab the flow of Rangila</li>
                    <li>Ask any questions you might have about Rangila</li>
                    <li>Ask for help with dancess if needed be</li>
                    <li>Make a friend😝</li>
                </ul>
                <button className="Button" onClick={() => handleRoleSelection("Mentee")}>Mentee</button>
            </div>

        </div>
       
        </>
        
    )

}

export default MentorMentee;
