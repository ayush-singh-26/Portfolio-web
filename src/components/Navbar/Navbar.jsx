import React, { useEffect, useState } from "react";
import './Navbar.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveLink(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-brand">
        <h2>Ayush Singh</h2>
      </div>
      <div className="navbar-collapse">
        <ul className="navbar-nav">
          <li><a href="#home" className={activeLink === 'home' ? 'active' : ''} onClick={() => handleLinkClick('home')}>Home</a></li>
          <li><a href="#skill" className={activeLink === 'skill' ? 'active' : ''} onClick={() => handleLinkClick('skill')}>Skill</a></li>
          <li><a href="#project" className={activeLink === 'project' ? 'active' : ''} onClick={() => handleLinkClick('project')}>Project</a></li>
          <li><a href="#contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => handleLinkClick('contact')}>Contact</a></li>
        </ul>
      </div>
      <div className="social">
        <ul className="social-icon">
          <li><a href="https://github.com/ayush-singh-26" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
          <li><a href="https://www.linkedin.com/in/ayush-singh-72673b2b3/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
        </ul>
        <button className="connect-btn">Let's Connect</button>
      </div>
    </nav>
  );
}

export default Navbar;
