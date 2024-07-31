import React, { useState, useCallback } from "react";
import "./photooverflow.css";

const PhotoOverflow = ({ src, onClose }) => {
    const [loaded, setLoaded] = useState(false);

    const handleLoadedData = useCallback(() => {
        setLoaded(true);
    }, []);

    return (
        <div className="overflow">
            <div className="overflow-inner">
                <button className="close-button" onClick={onClose}>X</button>
                {!loaded && <div className="placeholder">Loading...</div>}
                <video
                    src={src}
                    className={`video-fluid scale ${loaded ? 'loaded' : ''}`}
                    autoPlay
                    preload="auto"
                    loop
                    muted
                    onLoadedData={handleLoadedData}
                />
            </div>
        </div>
    );
}

export default React.memo(PhotoOverflow);
