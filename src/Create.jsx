//import { Link } from "react-router-dom";

import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const note = {title, body};

        fetch('http://localhost:5000/Journal', {
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(note)
        }).then(() => {
            window.location.replace('/');
        });
    }
    
    return ( 
        <div className="Create">
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Title" 
                maxLength="70" 
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
                <br />

                <textarea 
                cols="30" 
                rows="15" 
                placeholder="Take a note..."
                value={body}
                onChange={(e) => setBody(e.target.value)}>
                </textarea>

                <button>close</button>
            </form>
        </div>
    );
}
 
export default Create;