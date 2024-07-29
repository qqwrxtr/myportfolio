import React from "react";
import "./contactlinks.css"



const ContactLinks = (links) => {
    return ( 
        <div className="btn-gradient width" style={{ width: links.width }}>
            <a href={links.link}>
                <div className="title_platform">
                    <div className="img_platform">
                        <img src={links.platicon} alt="" />
                    </div>
                    <div className="name_platform">
                        {links.username}
                    </div>
                </div>
            </a>
        </div>
     );
}
 
export default ContactLinks;