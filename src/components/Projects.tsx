import React from "react";
import "../styles/projectStyle.css"

const Projects = () =>{
    return(<div id="projects">
        <div className="project-section">
            <div className="project-list">
                <div className="project">
                    <p className="project-title">E-Commerce Platform</p>
                    <ul className="tech-list">
                        <li>React</li>
                        <li>.NET</li>
                        <li>SQL</li>
                    </ul>
                    <p className="project-description">
                    Developed e-commerce platform utilizing React for the front-end, .NET for the back-end, and SQL for data storage.<br></br>
                    Built and integrated RESTful APIs to enable seamless communication between the front-end and backend, ensuring secure and efficient data exchange.
                    </p>
                </div>

                <div className="project">
                    <p className="project-title">Dice Game</p>
                    <ul className="tech-list">
                        <li>React</li>
                    </ul>
                    <p className="project-description">
                    Developed an interactive single-page application (SPA) for a dynamic dice game using React and CSS.<br></br>
                    Utilized state management to efficiently handle game logic, dice roll outcomes, and score calculation
                    </p>
                </div>

                <div className="project">
                    <p className="project-title">Weather Dashboard</p>
                    <ul className="tech-list">
                        <li>React</li>
                    </ul>
                    <p className="project-description">
                    Created a weather dashboard that fetches real-time weather data from the OpenWeatherMap API
                    based on location input.<br></br>
                    Utilized React Hooks (useState, useEffect) to handle API calls and manage the app’s state, while
                    incorporating error handling and user-friendly messages for invalid input or when no data is found.
                    </p>
                </div>

            </div>
        </div>
    </div>)
}

export default Projects;