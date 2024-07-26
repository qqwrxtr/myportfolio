//web sites
import "./buttontosite.css";
import website from "./../../../assets/img/web.png"
const ButtonToSite = (href) => {
    return ( 
        <div id="button-4">
            <div id="circle">
            </div>
            <div>
                <a href={href.srcsite} target="_blank" rel="noreferrer"> Web Site <img src={website} alt="" /> </a>
            </div>
        </div>
        
     );
    
}
 
export default ButtonToSite;
