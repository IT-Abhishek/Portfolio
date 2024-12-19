import React from "react";
import NavBar from "./NavBar";
import Experience from "./Experience";
import Projects from "./Projects";
import About from "./About";

const Home = () =>{
    return(<div className="fixed-nav">
        <NavBar />
        <div>
        <About />
        <Experience />
        <Projects />
        </div>
    </div>)
}

export default Home