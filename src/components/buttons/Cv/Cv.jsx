import React from "react";
import "./cv.css";
import { useTranslation } from 'react-i18next';
import downloadCV from "./../../../assets/CV/CV.pdf";

const CV = () => {
    const { t } = useTranslation();
    return ( 
        <div className="button">
            <a href={downloadCV} download className="btn btn-gradient text-center">{t("CV")}</a>
        </div>
     );
}
 
export default CV;
