import React, {useState, useRef} from "react";
import './Profile.css';
import Avatar from 'react-avatar-edit'
import Header from "../../Components/Header";
import defaultpfp from '../../img/defaultpfp.png'
import editicon from '../../img/edit.svg'

function Profile(){

    const [avatarURL, setAvatarURL] = useState(defaultpfp);

    const fileUploadRef = useRef();

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
    
            // Set the avatar URL immediately for instant feedback
            const localURL = URL.createObjectURL(uploadedFile);
            setAvatarURL(localURL);
    
            // If you want to upload to a server, uncomment and use this code
            // const formData = new FormData();
            // formData.append("file", uploadedFile);
    
            // const response = await fetch("https://api.escuelajs.co/api/v1/files/upload", {
            //     method: "POST",
            //     body: formData
            // });
    
            // if (response.ok) {
            //     const data = await response.json();
            //     setAvatarURL(data?.location);
            // } else {
            //     console.error("Upload failed:", response.statusText);
            //     setAvatarURL(defaultpfp);
            // }
    
        } catch (error) {
            console.error(error);
            setAvatarURL(defaultpfp);
        }
    }

    return (
    <>
    <Header/>
    {/* < h3 className="title"> Profile </h3> */}
    <div className="upper">
            <div className="profile-pic">
                <img
                    src = {avatarURL}
                    alt="Picture"
                    className="upload-photo"
                />
                <form id="form" encType="multipart/form-data">
                    <button type="submit" onClick={handleImageUpload} className="submit-button">
                        <img  src={editicon} alt="edit" className="object-cover"/>
                    </button>
                    <input type = "file" id = "file" ref={fileUploadRef} onChange={uploadImageDisplay} hidden accept="image/*" />
                </form>     
        </div>
        <p>Jessica Jain</p>
        <p>Mentor</p>
        <label for = "sem">Semesters on Rangila:</label>  
        <select name = "sem" className="sem">
            <option>1</option> 
            <option>2</option>   
            <option>3</option>   
            <option>4</option>
            <option>5</option>  
            <option>6</option>  
            <option>7</option>                     

        </select>
    </div>
    </>
    )
}

export default Profile;