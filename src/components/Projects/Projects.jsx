import { useTranslation } from "react-i18next";
import ProjectsBlock from "../ProjectsBlock/Projectsblock";
import img1 from "./../../assets/img/neonsmile.png"
import img2 from "./../../assets/img/bombblast.png"
import img3 from "./../../assets/img/chesthunt.png"

import "./Projects.css";


const Projects = () => {
    const { t } = useTranslation();
    return ( 
        <div className="container">
            <h2>{t("Projects")}</h2>
            <div className="row">
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-12 center_blocks">
                    <ProjectsBlock 
                        srcgit="https://github.com/qqwrxtr/NeonSmileEN" 
                        name="Neon Smile" 
                        desc={t("Desc_NeonSmile")} 
                        srcsite="https://neon-smile-en.vercel.app/"
                        img={img1}/>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-12 center_blocks">
                    <ProjectsBlock 
                        srcgit="https://github.com/qqwrxtr/BombBlastEN" 
                        name="Bomb Blast" 
                        desc={t("Desc_BombBlast")} 
                        srcsite="https://bomb-blast-en.vercel.app/"
                        img={img2}/>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-12 center_blocks">
                    <ProjectsBlock 
                        srcgit="https://github.com/qqwrxtr/ChestHunt" 
                        name="Chest Hunt" 
                        desc={t("Desc_ChestHunt")} 
                        srcsite="https://chest-hunt.vercel.app/"
                        img={img3}/>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;