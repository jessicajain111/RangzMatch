import React, { useState, useRef, useEffect } from "react";
import './Profile.css';
import Header from "../../Components/Header";
import defaultpfp from '../../img/defaultpfp.png'
import editicon from '../../img/edit.svg'

function Profile() {
    const [avatarURL, setAvatarURL] = useState(() => {
        return localStorage.getItem('avatarURL') || defaultpfp;
    });
    const fileUploadRef = useRef();

    useEffect(() => {
        localStorage.setItem('avatarURL', avatarURL);
    }, [avatarURL]);

    const handleImageUpload = (event) => {
        event.preventDefault();
        fileUploadRef.current.click();
    }

    const uploadImageDisplay = async () => {
        try {
            const uploadedFile = fileUploadRef.current.files[0];
            if (!uploadedFile) {
                console.error("No file selected");
                return;
            }
    
            const localURL = URL.createObjectURL(uploadedFile);
            setAvatarURL(localURL);
        } catch (error) {
            console.error(error);
            setAvatarURL(defaultpfp);
        }
    }


    return (
        <>
            <Header />
            <div className="profile-container">
                <div className="profile-card">
                    <div className="profile-pic-container">
                        <img
                            src={avatarURL}
                            alt="Profile"
                            className="profile-pic"
                        />
                        <button onClick={handleImageUpload} className="edit-button">
                            <img src={editicon} alt="edit" className="edit-icon"/>
                        </button>
                        <input type="file" id="file" ref={fileUploadRef} onChange={uploadImageDisplay} hidden accept="image/*" />
                    </div>
                    <div className="profile-info">
                    <h2 className="profile-name">Jessica Jain</h2>
                    <p className="profile-role">Mentor</p>
                    <div className="semester-selector">
                        <label htmlFor="sem">Semester on Rangila:</label>
                        <select name="sem" className="sem">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                        </select>
                    </div>
                </div>
             </div>
        </div>
        </>
    )
}

export default Profile;