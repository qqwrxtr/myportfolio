import React from "react";
import "./contactlinks.css"



const ContactLinks = (links) => {
    return (
        <a href={links.link}> 
            <div className="btn-gradient width" style={{ width: links.width }}>
                <div className="title_platform">
                    <div className="img_platform">
                        <img src={links.platicon} alt="" />
                    </div>
                    <div className="name_platform">
                        {links.username}
                    </div>
                </div>
            </div>
        </a>
     );
}
 
export default ContactLinks;