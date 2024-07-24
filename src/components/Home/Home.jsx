import React from "react";
import "./home.css"
import { useTranslation } from 'react-i18next';


const Home = () => {
    const { t } = useTranslation();
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>{t("Home_title")}</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Home;