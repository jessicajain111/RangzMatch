import React, { useState } from 'react'

function Dancebody() {
    const [dance, setDance] = useState([]); 
    const [content, setContent] = useState("");
    
    function addDance() {
        if (content.trim() !== "" && !dance.includes(content)) {
            setDance(prevDance => [...prevDance, content]); 
            setContent("");
        }
    }

    function deleteDance(index) {
        const updatedDances = dance.filter((_, i) => i !== index);
        setDance(updatedDances);
    }
   
    return (
        <div className="body-dance">
            <div className='input-container'>
                <select
                    name="dance" 
                    className="dance"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}>
                    <option value="" disabled>Your Favorite Dances</option>
                    <option>Bollywood</option>
                    <option>Hip Hop</option>
                    <option>Bhangra</option>
                    <option>Kuthu</option>
                    <option>Classical</option>
                    <option>Contemporary</option>
                    <option>Jazz</option>
                </select>
                <button
                    className="add-button-d"
                    onClick={addDance}
                >
                    Add
                </button>    
            </div>
            <ul className='dance-list'>
                {dance.map((danceItem, index) => 
                <li key={index} className='dance-item'>
                    <span className="text-d">{danceItem}</span>
                    <span className="delete-button-d" onClick={() => deleteDance(index)}>x</span>
                </li>
                )}
            </ul>
        </div>
    )
}

export default Dancebody