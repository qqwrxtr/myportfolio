import React from "react";
import { useTranslation } from "react-i18next";
import ContactLinks from "../Contact_Links/Contactlinks";

import telegramicon from "./../../assets/img/telegram.png";
import email from "./../../assets/img/email.png";
import instagram from "./../../assets/img/instagram.png";
import discord from "./../../assets/img/discord.png";
import githubicon from "./../../assets/img/cat_white.png";
import teodor_logo from "./../../assets/img/Teodor_Logo.png";

import "./contact.css";

const contactLinksData = [
    {
        link: "https://t.me/WhuZis",
        platicon: telegramicon,
        username: "@WhuZis",
    },
    {
        link: "https://www.instagram.com/qqwrxtr/",
        platicon: instagram,
        username: "@qqwrxtr",
    },
    {
        link: "https://discord.com/",
        platicon: discord,
        username: "noname3584",
    },
    {
        link: "https://github.com/qqwrxtr",
        platicon: githubicon,
        username: "qqwrxtr",
    },
    {
        link: "mailto:teodorghirba1@gmail.com",
        platicon: email,
        username: "teodorghirba1@gmail.com",
        width: "350px",
    },
];

const Contact = () => {
    const { t } = useTranslation();
    
    return ( 
        <div className="container d-flex flex-column justify-content-between height-big">
            <div className="row">
                <div className="col-12">
                    <h1>{t("Contact")}</h1>
                </div>
            </div>
            <div className="row d-flex flex-column align-items-center justify-content-center">
                <div className="col-12 d-flex flex-column align-items-center justify-content-center mb-5">
                    <img src={teodor_logo} alt="Teodor Logo" className="img-fluid"/>
                </div>
                <div className="col-12 finish_text text-center">
                    <p className="text-center">{t("Contact_text")}</p>
                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center row-gap-3 row-col-min">
                {contactLinksData.slice(0, 4).map(({ link, platicon, username }, index) => (
                    <div key={index} className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 d-flex justify-content-center align-items-center">
                        <ContactLinks 
                            link={link}
                            platicon={platicon}
                            username={username}
                            width="220px"
                        />
                    </div>
                ))}
            </div>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-6 col-md-12 col-lg-12 col-xl-4 col-xxl-4 d-flex justify-content-center align-items-center">
                    <ContactLinks 
                        link={contactLinksData[4].link}
                        platicon={contactLinksData[4].platicon}
                        username={contactLinksData[4].username}
                        width={contactLinksData[4].width}
                    />
                </div>
            </div>
        </div>
     );
}

export default React.memo(Contact);
