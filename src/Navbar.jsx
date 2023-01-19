import lightmode from "./Icons/lightmode.svg"
import darkmode from "./Icons/darkmode.svg"

const Navbar = ({handleClick, open}) => {
    return ( 
        <nav>
            <h1>NOTAL</h1>
            <div onClick={handleClick}>
                {open?
                    <img id="lightMode" src={lightmode} alt="lightmode" />:
                    <img id="darkMode" src={darkmode} alt="darkmode" />
                }
            </div>
        </nav>
     );
}
 
export default Navbar;