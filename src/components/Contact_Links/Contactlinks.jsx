import React, { useState, useEffect } from "react";
import "./contactlinks.css";

const ContactLinks = (links) => {
    const [minWidth, setMinWidth] = useState(window.innerWidth < 500 ? "180px" : "220px");

    useEffect(() => {
        const handleResize = () => {
            setMinWidth(window.innerWidth < 500 ? "180px" : "220px");
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <a href={links.link}> 
            <div 
                className="btn-gradient width" 
                style={{  
                    minWidth: minWidth,
                    maxWidth: links.width,
                    width: "100%",
                }}
            >
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
