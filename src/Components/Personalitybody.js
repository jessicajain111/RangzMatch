import React, {useState} from "react";
import './Personalitybody.css'

function Personalitybody(){

    const[trait, setTrait] = useState([]); 
    const[content, setContent] = useState("");
    

    function addTrait(){
        if(content.trim() !== "" && !trait.includes(content)){
            setTrait(t => [...t, content]); 
            setContent("");
        }
       
    }

    function deleteTrait(index){
        const updatedTraits = trait.filter(( _, i) => i !== index);
        setTrait(updatedTraits)
    }

    return(
        <div className="body">
            <select 
                name="personality" 
                className="personality"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                >
                <option value="" disabled>Select Upto 5 traits</option>
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
                    onClick= {addTrait}>
                    Add
            </button>
            <div className="box"> 
                <ol>
                    {trait.map((trait, index) => 
                        <li key = {index}>
                            <span className="text">{trait}</span>
                            <p className="delete-button" onClick={() => deleteTrait(index)}>x</p>
                        </li>
                    )}

                </ol>
            </div>
            

        </div>
    )


}

export default Personalitybody;