import { useTranslation } from "react-i18next";
import ProjectsBlock from "../ProjectsBlock/Projectsblock";
import img1 from "./../../assets/img/neonsmile.png"
import "./Projects.css";


const Projects = () => {
    const { t } = useTranslation();
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <ProjectsBlock 
                        srcgit="https://github.com/qqwrxtr/NeonSmileEN" 
                        name="Neon Smile" 
                        desc={t("Desc_NeonSmile")} 
                        srcsite="https://neon-smile-en.vercel.app/"
                        img={img1}/>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;