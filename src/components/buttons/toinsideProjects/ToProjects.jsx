import React from "react";
import { Link } from "react-router-dom";
import "./toprojects.css";
import { useTranslation } from 'react-i18next';

const ToProjectsButton = () => {
    const { t } = useTranslation();
    return ( 
        <div className="button">
            <Link to="/projects" className="btn btn-gradient text-center kudasai">{t("To_Projects")}</Link>
        </div>
     );
}
 
export default ToProjectsButton;
