import React from "react";
import { useTranslation } from "react-i18next";
import ProjectsBlock from "../ProjectsBlock/Projectsblock";
import img1 from "./../../assets/img/neonsmile.png";
import img2 from "./../../assets/img/bombblast.png";
import img3 from "./../../assets/img/chesthunt.png";
import img4 from "./../../assets/img/ventilator.png";
import img5 from "./../../assets/img/helicopter.png";
import img6 from "./../../assets/img/pegasus.png";
import img7 from "./../../assets/img/tictactoe.png";
import img8 from "./../../assets/img/youtube.png";
import img9 from "./../../assets/img/joom.png";

import neonsmilemp4 from "./../../assets/video/neonsmile.mp4";
import bombblastmp4 from "./../../assets/video/bombblast.mp4";
import chesthuntmp4 from "./../../assets/video/chesthunt.mp4";
import ventilatormp4 from "./../../assets/video/ventilator.mp4";
import helicoptermp4 from "./../../assets/video/helicopter.mp4";
import pegasusmp4 from "./../../assets/video/pegasus.mp4";
import youtubemp4 from "./../../assets/video/youtubecopy.mp4";
import joommp4 from "./../../assets/video/joom.mp4";
import xomp4 from "./../../assets/video/xo.mp4";

import "./Projects.css";

const Projects = () => {
    const { t } = useTranslation();

    const projectDetails = [
        {
            srcgit: "https://github.com/qqwrxtr/NeonSmileEN",
            name: "Neon Smile",
            desc: t("Desc_NeonSmile"),
            srcsite: "https://neon-smile-en.vercel.app/",
            img: img1,
            video: neonsmilemp4,
            useVideo: true,
        },
        {
            srcgit: "https://github.com/qqwrxtr/BombBlastEN",
            name: "Bomb Blast",
            desc: t("Desc_BombBlast"),
            srcsite: "https://bomb-blast-en.vercel.app/",
            img: img2,
            video: bombblastmp4,
            useVideo: true,
        },
        {
            srcgit: "https://github.com/qqwrxtr/ChestHunt",
            name: "Chest Hunt",
            desc: t("Desc_ChestHunt"),
            srcsite: "https://chest-hunt.vercel.app/",
            img: img3,
            video: chesthuntmp4,
            useVideo: true,
        },
        {
            srcgit: "https://github.com/qqwrxtr/ventilator",
            name: t("Ventilator"),
            desc: t("Desc_Ventilator"),
            srcsite: "https://ventilator-nine.vercel.app/",
            img: img4,
            video: ventilatormp4,
            useVideo: true,
        },
        {
            srcgit: "https://github.com/qqwrxtr/helicopter_helicopter",
            name: t("Helicopter"),
            desc: t("Desc_Helicopter"),
            srcsite: "https://helicopter-helicopter.vercel.app/",
            img: img5,
            video: helicoptermp4,
            useVideo: true,
        },
        {
            srcgit: "https://github.com/qqwrxtr/Pegasus_Team",
            name: "Pegasus Team",
            desc: t("Desc_Pegasus"),
            srcsite: "https://pegasus-team.vercel.app/",
            img: img6,
            video: pegasusmp4,
            useVideo: true,
        },
        {
            srcgit: "https://github.com/qqwrxtr/X-O",
            name: t("XO"),
            desc: t("Desc_XO"),
            srcsite: "https://x-o-mocha-ten.vercel.app/",
            img: img7,
            video: xomp4,
            useVideo: true,
        },
        {
            srcgit: "https://github.com/qqwrxtr/StudiuIndivitual2",
            name: "Youtube Copy",
            desc: t("Desc_Youtube"),
            srcsite: "https://studiu-indivitual2.vercel.app/youtube.html",
            img: img8,
            video: youtubemp4,
            useVideo: true,
        },
        {
            srcgit: "https://github.com/qqwrxtr/JoomProject",
            name: "Joom Copy",
            desc: t("Desc_Joom"),
            srcsite: "https://joom-project.vercel.app/joom.html",
            img: img9,
            video: joommp4,
            useVideo: true,
        },
    ];
    return (
        <div className="container title_proiecte">
            <div className="row">
                <div className="col-12">
                    <h2>{t("Projects")}</h2>
                </div>
                <div className="col-12 center_mic">
                    <p>*{t("Projects_description")}</p>
                </div>
            </div>
            <div className="row row-gap d-flex justify-content-center mb-sm-3 mb-xxl-5 mb-3">
                {projectDetails.map((project, index) => (
                    <div key={index} className="col-xxl-4 col-xl-6 col-lg-6 col-12 center_blocks">
                        <ProjectsBlock {...project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
