import React, { useState } from "react";
import './Personalitybody.css';

function Personalitybody() {
    const [trait, setTrait] = useState([]);
    const [content, setContent] = useState("");

    function addTrait() {
        if (content.trim() !== "" && !trait.includes(content) && trait.length < 5) {
            setTrait(t => [...t, content]);
            setContent(""); // Clear the content after adding the trait
        }
    }

    function deleteTrait(index) {
        const updatedTraits = trait.filter((_, i) => i !== index);
        setTrait(updatedTraits);
    }

    return (
        <div className="body-personality">
            <div className='input-container'>
                <select
                    name="personality-body"
                    className="personality-body"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                >
                    <option value="" disabled>Select Up to 5 traits</option>
                    <option>Introvert</option>
                    <option>Extrovert</option>
                    <option>Talkative</option>
                    <option>Quiet</option>
                    <option>Active</option>
                    <option>Stay in</option>
                    <option>Bubbly</option>
                </select>
                <button
                    className="add-button"
                    onClick={addTrait}
                >
                    Add
                </button>
            </div>
            <ul className="personality-list">
                {trait.map((traitItem, index) =>
                    <li key={index} className="personality-item">
                        <span className="text">{traitItem}</span>
                        <span className="delete-button" onClick={() => deleteTrait(index)}>x</span>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Personalitybody;
