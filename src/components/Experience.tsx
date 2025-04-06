import React from "react";
import "../styles/experienceStyle.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
  <article className="experience">
    <h3 className="experience-company">HCL TECH Canada</h3>
    <p className="experience-period">May 2022 - Dec 2024</p>
    <div className="experience-description">
      <ul>
        <li>
          Designed and developed customized Microsoft Dynamics CRM and Power Platform-based applications in a fast-paced agile environment. Transformed business requirements into technical solutions aligned with security and performance goals.
        </li>
        <li>
          Built an Azure Function App using .NET for secure file uploads to SharePoint, processing over 5,000 daily requests, and exposed the service via Azure API Management.
        </li>
        <li>
          Developed reusable React components for a legacy CRM, reducing code redundancy by 15% and improving maintainability.
        </li>
        <li>
          Created Canvas Apps and Power Automate flows, along with custom connectors and Power BI dashboards to enhance data visualization and automate processes.
        </li>
        <li>
          Implemented key components such as database entities, forms, views, plug-ins, Logic Apps, and workflows to integrate external systems.
        </li>
        <li>
          Collaborated with cross-functional teams and QA to ensure high-quality releases, reducing bugs by 25%.
        </li>
      </ul>
    </div>
  </article>

  <article className="experience">
    <h3 className="experience-company">Functional Analyst – D365 FO (Finance and Operations)</h3>
    <p className="experience-period">Feb 2025 - Present</p>
    <div className="experience-description">
      <ul>
        <li>
          Worked closely with stakeholders to gather, analyze, and document functional requirements, ensuring alignment with business goals.
        </li>
        <li>
          Facilitated smooth integration between D365 FO and third-party apps, enabling seamless data flow and automation.
        </li>
        <li>
          Provided support for user issues, investigated errors, and delivered ongoing solutions to enhance system performance and satisfaction.
        </li>
      </ul>
    </div>
  </article>
</section>

  );
};

export default Experience;
