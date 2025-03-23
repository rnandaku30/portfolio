import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true); // Navbar is open by default

    // Toggle Navbar Visibility
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar-sidebar ${isOpen ? "open" : "closed"}`}>
            {/* Navbar Header */}
            <div className="navbar-header">
                <h4>Ramyashree Nandakumar</h4>
                <button className="navbar-toggle" onClick={toggleNavbar}>
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Profile Image */}
            <img src="/images/profile3.jpg" alt="Profile" className="profile-img" />

            {/* Sidebar Intro */}
            {isOpen && (
                <p className="navbar-sidebar-intro">
                    Hi, I'm Ramyashree Nandakumar, a passionate Software Engineer specializing in full-stack development and AI.
                    Welcome to my personal website!
                </p>
            )}

            {/* Social Links */}
            <div className={`navbar-social-icons ${isOpen ? "show" : "hide"}`}>
                <a href="https://linkedin.com/in/ramyashree-nandakumar" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/rnandaku30" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </div>

            <hr />

            {/* Navigation Links */}
            <div className={`navbar-links-container ${isOpen ? "show" : "hide"}`}>
                <ul className="navbar-nav-links">
                    <NavLink to="/"><i className="fas fa-user"></i> About Me</NavLink>
                    <NavLink to="/portfolio" ><i className="fas fa-briefcase"></i> Portfolio</NavLink>
                    <NavLink to="/resume" ><i className="fas fa-file-alt"></i> Resume</NavLink>
                    <NavLink to="/contact"><i className="fas fa-envelope"></i> Contact</NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
