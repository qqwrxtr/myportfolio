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
                <div className="d-flex justify-content-between" style={{width:"200px"}}>
                    <button className="close-button" onClick={onClose} aria-label="Close">
                        X
                    </button>
                    {!loaded && <div className="placeholder">Loading...</div>}
                </div>
                <video
                    src={src}
                    className={`video-fluid ${loaded ? 'loaded' : ''}`}
                    autoPlay
                    preload="auto"
                    loop
                    muted
                    onLoadedData={handleLoadedData}
                    controls={loaded}
                />
            </div>
        </div>
    );
}

export default React.memo(PhotoOverflow);
