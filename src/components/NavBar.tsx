import React, { useState, useEffect, useRef } from "react";
import "../styles/NavBarStyle.css";
import "../styles/LinkedInButton.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Specify the correct element type for the refs
  const menuRef = useRef<HTMLDivElement | null>(null); 
  const hamburgerRef = useRef<HTMLDivElement | null>(null); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    // Close the menu if the click is outside of the menu or hamburger
    if (
      menuRef.current && !menuRef.current.contains(event.target as Node) &&
      hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="#">Home</a>
        </div>
        <div className="menu" ref={menuRef}>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abhishek-chauhan-dev"
                target="_blank"
                className="linkedin-btn"
              >
                <i className="fab fa-linkedin"></i> Connect with LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu} ref={hamburgerRef}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
