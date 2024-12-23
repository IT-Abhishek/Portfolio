import React from "react";
import "../styles/experienceStyle.css";

const Experience = () => {
  return (
    <div id="experience">
      <div className="experience-section">
        <div className="experience">
          <p className="experience-company">HCL TECH Canada</p>
          <p className="experince-period">May 2022 - Dec 2024</p>
          <div className="experience-description">
            <ul>
              <li>
                Designed and developed Microsoft Dynamics 365 applications in
                the fast-paced agile environment. Transformed business
                requirements and research into technical solutions that met
                application security and performance goals.
              </li>
              <li>
                Developed Azure Function App using .NET for secure file uploads
                to SharePoint, processing over 5,000 daily requests, and exposed
                this service to multiple systems via Azure API management.
              </li>
              <li>
                Developed reusable React components to optimize a legacy CRM,
                reducing code redundancy by 15%, improving maintainability and
                readability.
              </li>
              <li>
                Leveraged Azure Logic Apps to streamline workflows and integrate
                different systems with Dynamics CRM application, enhancing data
                exchange and functionality.
              </li>
              <li>
                Created Azure Web Jobs for automated background processing and
                used Application Insights for monitoring, diagnostics, and
                performance optimization.
              </li>
              <li>
                Implemented backend components for Dynamics CRM App, including
                plug-ins, Logic Apps, and custom connectors to integrate with
                external systems, while leading the transition from
                certificate-based to token-based authentication to enhance
                application security.
              </li>
              <li>
                Collaborated with cross-functional teams and worked closely with
                QA teams to ensure high-quality releases, reducing bugs by 25%.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
