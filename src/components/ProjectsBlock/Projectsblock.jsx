import React, { useState } from "react";
import Button2 from "../buttons/buttontogitprojects/ButtonToGit2";
import ButtonToSite from "../buttons/buttontosite/ButtonToSlte";
import { useTranslation } from "react-i18next";
import PhotoOverflow from "./../PhotoGalery/PhotoOverflow";
import "./projectsblock.css"

const ProjectsBlock = (props) => {
    const { t } = useTranslation();
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [currentImgSrc, setCurrentImgSrc] = useState("");

    const handleImgClick = (imgSrc) => {
        if (props.useVideo) {
            setCurrentImgSrc(imgSrc);
            setIsOverlayVisible(true);
        }
    };

    const handleCloseOverlay = () => {
        setIsOverlayVisible(false);
        setCurrentImgSrc("");
    };

    return (
        <div className="projectsblock">
            <div className="projects gradient">
                <div className="project">
                    <div className="row pt-3">
                        <div className="col-12 img-container" onClick={() => handleImgClick(props.useVideo ? props.video : props.img)}>
                            <img src={props.img} alt="" className={`img-fluid img-maladet ${props.useVideo ? 'jopa' : ''}`} />
                            <div className="preview-text">{t("Preview")}</div>
                        </div>
                    </div>
                    <div className="row text-start">
                        <div className="col-12 titlu_proiect">
                            <h3>{props.name}</h3>
                        </div>
                        <div className="col-12 description">
                            <p>{props.desc}</p>
                        </div>
                        <div className="col-12 text-center">
                            <div className="row no-padding">
                                <div className="col-6">
                                    <Button2 src={props.srcgit} txt="Git Hub" />
                                </div>
                                <div className="col-6 ceva">
                                    <ButtonToSite srcsite={props.srcsite} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOverlayVisible && props.useVideo && <PhotoOverflow src={currentImgSrc} onClose={handleCloseOverlay} />}
        </div>
    );
}

export default ProjectsBlock;
