import React, { useState, useRef, useEffect } from "react";
import './Profile.css';
import Header from "../../Components/Header";
import defaultpfp from '../../img/defaultpfp.png';
import editicon from '../../img/edit.svg';
import Resizer from 'react-image-file-resizer';
import insta from '../../img/instagram.jpeg'

function Profile(props) {
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
            resizeFile(uploadedFile);
        } catch (error) {
            console.error(error);
            setAvatarURL(defaultpfp);
        }
    }

    const resizeFile = (file) => {
        Resizer.imageFileResizer(
            file,
            400, // max width
            400, // max height
            'JPEG', // output format
            100, // quality (100% quality)
            0, // rotation
            (uri) => {
                setAvatarURL(uri);
            },
            'base64' // output type
        );
    };


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
        <div className="profile-upper">
            <button className="about">
                <h3>About Me</h3>

            </button>
            <button className="personality">
                <h3>Personality</h3>

            </button>
        </div>
        <div className="profile-lower">
            <button className="dance">
                <h3>Dance</h3>

            </button>

            <button className="schedule">
                <h3>Schedule</h3>
            </button>

        </div>

        <button className="socials">
            <h3>Socials</h3>
            

        </button>
        </>
    )
}

export default Profile;