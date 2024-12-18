import React from "react";
import "../styles/aboutStyle.css";
import AzureFuncLogo from "../icons/azurefunctions-icon.svg";
import NetLogo from "../icons/icon-.net-framework.svg";
import AzureLogo from "../icons/icon-azure.svg";
import CsharpLogo from "../icons/icon-c.svg";
import JavaScriptLogo from "../icons/icon-javascript.svg";
import PowerAppsLogo from "../icons/icon-microsoft-power-apps.svg";
import PowerAutomateLogo from "../icons/icon-microsoft-power-automate.svg";
import ReactLogo from "../icons/icon-react.svg";
import TypeScriptLogo from "../icons/icon-typescript.svg";
import SQLLogo from "../icons/sql-database-generic-svgrepo-com.svg";

const About = () => {
    return (<>
        <div className="about-section">
            <div className="about-text">
                <h1 className="title">Software developer</h1>
                <p>
                    Microsoft Certified Power Platform Solution Architect Expert and Power Platform Developer Associate.
                </p>
                <p>
                    Results-driven software developer with experience in designing, developing, and deploying high-quality applications that address complex business and user needs. Skilled in C#, .NET, React, SQL, Microsoft Dynamics 365, and cloud-based solutions with Microsoft Azure to deliver innovative and scalable solutions.
                </p>
                <p>
                    Proficient in creating Azure function apps, building front-end components with React, and enhancing MS Dynamics 365 systems. Proven track record of enhancing application security, improving code efficiency, and collaborating with cross-functional teams to ensure high-quality project outcomes.
                </p>
                <div className="skills-container">
                    <h2 className="skills-title">Skills</h2>
                    <div className="skills">
                        <div className="skill-icon"><AzureFuncLogo /></div>
                        <div className="skill-icon"><NetLogo /></div>
                        <div className="skill-icon"><AzureLogo /></div>
                        <div className="skill-icon"><CsharpLogo /></div>
                        <div className="skill-icon"><JavaScriptLogo /></div>
                        <div className="skill-icon"><PowerAppsLogo /></div>
                        <div className="skill-icon"><PowerAutomateLogo /></div>
                        <div className="skill-icon"><ReactLogo /></div>
                        <div className="skill-icon"><TypeScriptLogo /></div>
                        <div className="skill-icon"><SQLLogo /></div>
                    </div>
                </div>
            </div>
            <div className="about-image">
                <img src="" alt="Profile" />
            </div>
        </div>
    </>)
}

export default About;