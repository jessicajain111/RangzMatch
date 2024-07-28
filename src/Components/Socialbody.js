import React from "react";
import './Socialbody.css';

function Socialbody() {
  return (
    <div className="socials-container">
      <div className="socials-input">
        <div className="input-group">
          <label className="input-label">Phone Number</label>
          <input className="input-field" type="text" placeholder="123-456-7890" />
        </div>
        <div className="input-group">
          <label className="input-label">Instagram</label>
          <input className="input-field" type="text" placeholder="@username" />
        </div>
        <div className="input-group">
          <label className="input-label">Snapchat</label>
          <input className="input-field" type="text" placeholder="@username" />
        </div>
      </div>
    </div>
  );
}

export default Socialbody;
