import React, { useState } from "react";
import "../styles/NavBarStyle.css"
// import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (<header>
        <nav className="navbar">
            <div className="logo">
                <a href="#">Home</a>
            </div>
            <div className="menu">
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    {/* <li><Link to="/about">About</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/projects">Projects</Link></li> */}
                    {/* <li><Link to="/contact">Contact</Link></li> */}

                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav >
        {/* <Outlet /> */}
    </header >)
}

export default NavBar;