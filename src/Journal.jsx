import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import white from "./Icons/white.svg";
//import black from "./Icons/black.svg";
import red from "./Icons/red.svg";
import yellow from "./Icons/yellow.svg";
import green from "./Icons/green.svg";
import blue from "./Icons/blue.svg";
import skyb from "./Icons/skyb.svg";
const Journal = () => {
    const [journal, setJournal] = useState(null);

    useEffect(() => {
       getDetails();
    }, []);

    const getDetails = () => {
        fetch('http://localhost:5000/Journal')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setJournal(data);
        });
    }

    const handleClick = (id) => {
        fetch('http://localhost:5000/Journal/' + id, {
            method: 'DELETE'
        }).then(() => {
            getDetails();
        });
    }

    document.querySelectorAll('img').forEach(image => {
        image.onclick = function () {
            let content_element = image.parentElement.parentElement.parentElement;
            content_element.style.background = image.dataset.color;
            content_element.style.boxShadow = "none";
            content_element.style.border = "none";
            content_element.firstElementChild.style.color = image.dataset.font;
        }
    })

    return ( 
        <div className="Journal">
           {journal &&  <div className="input_section">
                {journal.map(journ => (
                    <div className="input_area" id="content_area" key={journ.id}>
                        <Link to={`/note/${journ.id}`}>
                            <h3>{journ.title}</h3>
                            <p>{journ.body.slice(0, 190)} <span>...</span></p>
                        </Link>
                        <div className="hidden_flex">
                            <div className="hidden_img">
                                <img 
                                    data-color="#fff"
                                    data-font="#000" 
                                    src={white} 
                                    alt="white" 
                                />
                                {/* <img 
                                    className="change_font"
                                    data-color="#000"
                                    data-font="#fff" 
                                    src={black} 
                                    alt="black" 
                                /> */}
                                <img 
                                    data-color="#ff224a"
                                    data-font="#fff" 
                                    src={red} 
                                    alt="red" 
                                />
                                <img 
                                    data-color="#FED656"
                                    data-font="#000" 
                                    src={yellow} 
                                    alt="yellow" 
                                />
                                <img 
                                    data-color="#030249cc"
                                    data-font="#fff" 
                                    src={blue} 
                                    alt="yellow" 
                                />
                                <img 
                                    data-color="#6EFE56"
                                    data-font="#000" 
                                    src={green} 
                                    alt="yellow" 
                                />
                                <img 
                                    data-color="#24FFF2"
                                    data-font="#000" 
                                    src={skyb} 
                                    alt="yellow" 
                                />
                            </div>
                            <button onClick={() => handleClick(journ.id)}>delete</button>
                        </div>
                    </div>
                ))}
            </div>}
            <div className="add_journal">
                <Link to="create">+</Link>
            </div>
        </div>
    );
}

 
export default Journal;