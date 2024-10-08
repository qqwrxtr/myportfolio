import React from "react";
import "./home.css";
import { useTranslation } from 'react-i18next';
import ContactMeButton from "../buttons/contactme/ContactMe";
import CV from "../buttons/Cv/Cv.jsx";
import me from "../../assets/img/123321-removebg.png";
import ToProjectsButton from "../buttons/toinsideProjects/ToProjects.jsx";

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="container home d-flex flex-column align-items-center justify-content-center">
            <div className="row d-flex align-items-center justify-content-between w-100 top_mobile">
                <div className="col-12 col-lg-6 kek">
                    <div className="title">
                        <p className="title">
                            {t("Home_title")}
                        </p>
                    </div>
                    <div className="under_title">
                        <p>
                            {t("Home_undertitle")}
                        </p>
                    </div>
                    <div className="flex da">
                        <div className="contact_me">
                            <ContactMeButton />
                        </div>
                        <div className="cv">
                            <CV />
                        </div>
                    </div>
                    <div className="flex sus">
                        <ToProjectsButton />
                    </div>
                </div>
                <div className="col-12 col-lg-6 photo">
                    <img 
                        src={me} 
                        alt={t("Home_Image_Alt")}
                        className="img-fluid" 
                        loading="lazy" 
                        width="550"
                        height="auto"
                    />
                </div>
            </div>
        </div>
    );
}

export default React.memo(Home);
