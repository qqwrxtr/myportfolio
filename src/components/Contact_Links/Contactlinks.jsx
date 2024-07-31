import React, { useState, useEffect, useCallback } from "react";
import "./contactlinks.css";

const ContactLinks = ({ link, platicon, username, width }) => {
    const [minWidth, setMinWidth] = useState(window.innerWidth < 500 ? "180px" : "220px");

    const handleResize = useCallback(() => {
        setMinWidth(window.innerWidth < 500 ? "180px" : "220px");
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    return (
        <a href={link} target="_blank" rel="noreferrer">
            <div 
                className="btn-gradient width" 
                style={{  
                    minWidth,
                    maxWidth: link.width,
                    width: "100%",
                }}
            >
                <div className="title_platform">
                    <div className="img_platform">
                        <img src={platicon} alt={username} />
                    </div>
                    <div className="name_platform">
                        {username}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default React.memo(ContactLinks);
