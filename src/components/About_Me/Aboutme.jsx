import React from "react";
import "./aboutme.css"
import { useTranslation } from 'react-i18next';
import Button from "../buttons/buttontogit/ButtonToProjects";
import ToProjects from "../buttons/toprojects/Toprojects";


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
                    <div className="row top_margin">
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
                                <Button src="https://github.com/qqwrxtr/StudiuIndivitual2" txt={t("About_third_step_button")}/>
                            </div>
                    </div>
                    <div className="row mt-5">
                        <div className="title_ocupation">
                        <div className="dot step4"></div>
                            <p>{t("About_fourth_step")}</p>    
                        </div>  
                        <div className="undertitle_ocupation">
                            <p>{t("About_fourth_step_desc")}</p>    
                        </div>
                        <div className="seemore">      
                            <Button src="https://github.com/qqwrxtr/Practica" txt={t("About_fourth_step_button")}/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="title_ocupation">
                        <div className="dot step5"></div>
                            <p>{t("About_fifth_step")}</p>    
                        </div>  
                        <div className="undertitle_ocupation">
                            <p>{t("About_fifth_step_desc")}</p>    
                        </div>
                        <div className="seemore">      
                            <ToProjects src="/projects" txt={t("About_fifth_step_button")}/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">  
                            <div className="title_ocupation">
                            <div className="dot step6"></div>
                                <p>{t("About_conclusion")}</p>
                            </div>
                            <div className="undertitle_ocupation">
                                <p>{t("About_conclusion_desc")}</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
     );
}
 
export default AboutMe;