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
                Designed and developed customized Microsoft Dynamics CRM and
                Power Platform based applications in the fast-paced agile
                environment. Transformed business requirements and research into
                technical solutions that met application security and
                performance goals.
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
                Implemented a CI/CD pipeline using Azure DevOps, automating
                build and deployment processes, resulting in a 50% reduction in
                manual deployment efforts.
              </li>
              <li>
                Developed Canvas Apps and pages to address diverse business
                needs, along with Power Automate flows, custom connectors, and
                Power BI dashboards for enhanced data visualization and process
                automation.
              </li>
              <li>
                Implemented key components, including database entities, forms,
                views, plug-ins, Logic Apps, and workflows to integrate with
                external systems.
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
