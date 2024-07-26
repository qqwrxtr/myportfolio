import React from "react";
import { Link } from "react-router-dom";
import "./contactme.css";
import { useTranslation } from 'react-i18next';

const ContactMeButton = (prop) => {
    const { t } = useTranslation();
    return ( 
        <div className="button mt-5">
            <Link to="/contact" className="btn btn-gradient text-center">{t("Contact_Me")}</Link>
        </div>
     );
}
 
export default ContactMeButton;
