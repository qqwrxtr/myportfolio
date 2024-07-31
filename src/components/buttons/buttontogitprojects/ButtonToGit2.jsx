//git projects

import "./buttn2.css";
import githubicon from "./../../../assets/img/cat_white.png"

const Button2 = (href) => {
    return ( 
        <div id="button-4">
            <div id="circle">
            </div>
            <div>
                <a href={href.src} target="_blank" rel="noreferrer">{href.txt} <img src={githubicon} alt="" /> </a>
            </div>
        </div>
        
     );
    
}
 
export default Button2;
