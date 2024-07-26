//git projects

import "./buttn.css";
import githubicon from "./../../../assets/img/cat_white.png"



const Button = (href) => {
    return ( 
        <div id="button-3">
            <div id="circle">
            </div>
            <div>
                <a href={href.src} target="_blank" >{href.txt} <img src={githubicon} alt="" /> </a>
            </div>
        </div>
        
     );
    
}
 
export default Button;
