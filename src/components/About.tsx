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
import MSAssociateBadge from "../icons/microsoft-certified-associate-badge.svg";
import MSExpertBadge from "../icons/microsoft-certified-expert-badge.svg";
import Constants from "../constants.json";

const About = () => {
    return (<div id="about">
        <div className="about-section">
            <div className="about-text">
                <h1 className="title">Software developer</h1>
                <p>
                    Results-driven software developer with experience in designing, developing, and deploying high-quality applications that address complex business and user needs.
                </p>
                <div className="certs-container">
                    <div className="cert-icon" onClick={()=>{
                        window.open(Constants.DevAssociateBadgeUrl,"_blank");
                    }} title="Microsoft Certified: Power Platform Developer Associate">
                        <MSAssociateBadge />
                    </div>
                    <div className="cert-icon" onClick={()=>{
                        window.open(Constants.SAExpertBadgeUrl,"_blank");
                    }} title="Microsoft Certified: Power Platform Solution Architect Expert">
                        <MSExpertBadge />
                    </div>
                </div>
                <div className="skills-container">
                    <h4 className="skills-title">Skills</h4>
                    <div className="skills">
                        <div className="skill-icon" title=".NET"><NetLogo /></div>
                        <div className="skill-icon" title="C#"><CsharpLogo /></div>
                        <div className="skill-icon" title="Microsoft Azure"><AzureLogo /></div>
                        <div className="skill-icon" title="Azure Functions"><AzureFuncLogo /></div>
                        <div className="skill-icon" title="React"><ReactLogo /></div>
                        <div className="skill-icon" title="JavaScript"><JavaScriptLogo /></div>
                        <div className="skill-icon" title="TypeScript"><TypeScriptLogo /></div>
                        <div className="skill-icon" title="Power Apps"><PowerAppsLogo /></div>
                        <div className="skill-icon" title="Power Automate"><PowerAutomateLogo /></div>
                        <div className="skill-icon" title="SQL"><SQLLogo /></div>
                    </div>
                </div>
            </div>
            <div className="about-image">
                <img src="" alt="Profile" />
            </div>
        </div>
    </div>)
}

export default About;