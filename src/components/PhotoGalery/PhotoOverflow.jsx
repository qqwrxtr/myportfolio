import React, { useState } from "react";
import "./photooverflow.css";

const PhotoOverflow = ({ src, onClose }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="overflow">
            <div className="overflow-inner">
                <button className="close-button" onClick={onClose}>X</button>
                {!loaded && <div className="placeholder">Loading...</div>}
                <video
                    src={src}
                    className={`video-fluid scale ${loaded ? 'loaded' : ''}`}
                    autoPlay
                    loop
                    muted
                    onLoadedData={() => setLoaded(true)}
                />
            </div>
        </div>
    );
}

export default PhotoOverflow;
