import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";


const Note = () => {
    const {key} = useParams();
    const [note, setNote] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/Journal/' + key)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setNote(data);
        });
    }, [key]);


    return (
        <div className="Note">
            {note && <div id="content">
                <h3 contentEditable="true">{note.title}</h3>
                <p contentEditable="true">{note.body}</p>
                <button>Save</button>
            </div>}
        </div>
    );
}
 
export default Note;