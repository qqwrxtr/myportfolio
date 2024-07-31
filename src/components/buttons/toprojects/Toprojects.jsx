//page projects
import "./toprojects.css";
import nexticon from "./../../../assets/img/next.png"
import { Link } from "react-router-dom";

const ToProjects = (href) => {
    return ( 
        <div id="button-3">
            <div id="circle">
            </div>
            <div>
                <Link to={href.src}>{href.txt} <img src={nexticon} alt="" target="_blank" rel="noreferrer" /> </Link>
            </div>
        </div>
        
     );
    
}
 
export default ToProjects;
