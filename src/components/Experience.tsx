import React from "react";
import "../styles/experienceStyle.css"

const Experience = () => {
    return (
        <>
            <div className="experience-section">
                <div className="experience">
                    <p className="experience-company">HCL TECH Canada</p>
                    <p className="experince-period">May 2022 - Dec 2024</p>
                    <div className="experience-description">
                        <ul>
                            <li>
                                Rigorously designing and developing Microsoft Dynamics 365 applications in the fast-paced agile
                                environment. Transformed business requirements and research into solutions that met application
                                security and performance goals.
                            </li>
                            <li>
                                Developed reusable React components to optimize a legacy CRM, reducing code redundancy by 15%.
                            </li>
                            <li>
                                Developed Azure function app for uploading files securely to SharePoint, handled over 5,000 requests
                                daily. Using Azure API management, exposed this service to multiple systems.
                            </li>
                            <li>
                                Built backend components for MS Dynamics CRM, like plug-ins, power automate flows, custom
                                connectors to interact with external systems, and led the transition from certificate-based to tokenbased authentication, enhancing application security
                            </li>
                            <li>
                                Successfully integrated third-party applications with existing custom Model-Driven App to enhance
                                functionality, streamline workflows, and ensure seamless data exchange across platforms.
                            </li>
                            <li>
                                Collaborated with cross-functional teams and worked closely with QA teams to ensure high-quality
                                releases, reducing bugs by 25%.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;