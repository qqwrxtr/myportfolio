import React, { useTransition } from "react";
import "./aboutme.css"
import { useTranslation } from 'react-i18next';
import githubicon from "./../../assets/img/cat_white.png"

const githubProject = "https://github.com/qqwrxtr/ReteteDeHavcic";


const AboutMe = () => {
    const { t } = useTranslation();

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>{t("About_title")}</h1>
                </div>
            </div>
            <div className="row abt_me" style={{flexWrap:"nowrap"}}>
                <div className="col-1 d-flex align-items-center justify-content-end">
                    <div className="vr">
                    </div>
                </div>
                <div className="col-11">
                    <div className="row">
                        <div className="title_ocupation">
                        <div className="dot step1"></div>
                            <p>{t("About_first_step")}</p>    
                        </div>  
                        <div className="undertitle_ocupation">
                            <p>{t("About_first_step_desc")}</p>    
                        </div> 
                    </div>
                    <div className="row mtipa">
                        <div className="title_ocupation">
                        <div className="dot step2"></div>
                            <p>{t("About_second_step")}</p>    
                        </div>  
                        <div className="undertitle_ocupation">
                            <p>{t("About_second_step_desc")}</p>    
                        </div>
                    </div>
                    <div className="row mtipa2">
                        <div className="title_ocupation">
                        <div className="dot step3"></div>
                            <p>{t("About_third_step")}</p>    
                        </div>  
                        <div className="undertitle_ocupation">
                            <p>{t("About_third_step_desc")}</p>    
                        </div>
                        <div className="seemore">
                            <a href={githubProject} target="_blank" >
                                <div className="btn">
                                    <button id="button-3">
                                        
                                    </button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
     );
}
 
export default AboutMe;