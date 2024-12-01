import React, { useEffect, useState } from "react";
import './Navbar.css';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Detect scrolling to apply sticky navbar
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Handle active link update
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>Ayush singh</h2>
      </div>
      <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Skill</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
      </div>
      <div className="social">
        <ul className="social-icon">
          <li><a href=""><FaGithub/></a></li>
          <li><a href=""><FaInstagram /></a></li>
          <li><a href=""><FaLinkedin /></a></li>
        </ul>
        <button className="connect-btn">Let's Connect</button>
      </div>
    </nav>
  );
}

export default Navbar;
