import React from "react";
import "./photooverflow.css";

const PhotoOverflow = ({ src, onClose }) => {
    return (
        <div className="overflow">
            <div className="overflow-inner">
                <button className="close-button" onClick={onClose}>X</button>
                <video src={src} className="video-fluid scale" autoPlay loop muted />
            </div>
        </div>
    );
}

export default PhotoOverflow;
