import React,  {useState} from "react";
import './Aboutbody.css'

function Aboutbody(){

    const [content, setContent] = useState('');

    return( 
    <textarea
        className="textArea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start typing here..."
    />
)

}

export default Aboutbody;