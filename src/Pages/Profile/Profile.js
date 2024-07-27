"use client";
import React, { useState, useRef, useEffect } from "react";
import './Profile.css';
import Header from "../../Components/Header";
import defaultpfp from '../../img/defaultpfp.png';
import editicon from '../../img/edit.svg';
import Resizer from 'react-image-file-resizer';
import { useLocation } from "react-router-dom";
import Popup from "../../Components/Popup";
import Aboutbody from "../../Components/Aboutbody";
import Personalitybody from "../../Components/Personalitybody";
import Dancebody from "../../Components/Dancebody";

function Profile() {
    const location = useLocation();
    const { state } = location;
    const role = state?.role || 'Mentor'; // Default to 'Mentor' if role is not defined

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

    // Modals
    const [openAbout, setOpenAbout] = useState(false);
    const [openPersonality, setOpenPersonality] = useState(false);
    const [openDance, setOpenDance] = useState(false);
    const [openSchedule, setOpenSchedule] = useState(false);
    const [openSocials, setOpenSocials] = useState(false);

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
                        <p className="profile-role">{role}</p>
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
                <div className="profile-questions">
                     <button className="about" onClick={() => setOpenAbout(true)}>
                        <h3>About</h3>
                        <Popup name="About Me" component={<Aboutbody />} open={openAbout} onClose={() => setOpenAbout(false)} />
                    </button>
                    <button className="personality" onClick={() => setOpenPersonality(true)}>
                        <h3>Personality</h3>
                        <Popup name="Personality" component={<Personalitybody />} open={openPersonality} onClose={() => setOpenPersonality(false)} />
                    </button>
                    <button className="dance" onClick={() => setOpenDance(true)}>
                        <h3>Dance</h3>
                        <Popup name="Dance" component={<Dancebody />} open={openDance} onClose={() => setOpenDance(false)} />
                    </button>
                    <button className="schedule" onClick={() => setOpenSchedule(true)}>
                        <h3>Schedule</h3>
                        <Popup open={openSchedule} onClose={() => setOpenSchedule(false)} name="Schedule" />
                    </button>
                    <button className="socials" onClick={() => setOpenSocials(true)}>
                        <h3>Socials</h3>
                        <Popup open={openSocials} onClose={() => setOpenSocials(false)} name="Socials" />
                    </button>

                </div>
            </div>
        </>
    )
}

export default Profile;