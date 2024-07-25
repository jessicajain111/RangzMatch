import './Popup.css'
import React from "react";

function Popup({open, onClose, name, component}){
    

    if(!open) return null

    

    
    return(
       <div className="overlay" onClick={onClose}>
        <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
            <div className="content">
                <p onClick= {onClose} className="closeBtn">X</p>
                <h3 className='modalTitle'>{name}</h3>
                <div>{component}</div>
            </div>
        </div>
       </div>
    )
}

export default Popup;

/*EXPLANATION:


*/