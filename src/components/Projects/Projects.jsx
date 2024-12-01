import React from "react";
import './Projects.css';
import weatheryze from '../../assets/img/Weatheryze.png';
import blogApp from '../../assets/img/BlogApp.png';
import landingWebsite from '../../assets/img/LandingWebsite.png';
import flashCardTool from '../../assets/img/flashCardTool.png';

function Projects() {
    return (
        <section className="project">
            <div className="row">
                <h1>Projects</h1>
                <p>Explore some of my recent work below, showcasing a variety of tools, applications, and websites that I’ve built.</p>
            </div>
            <div className="tabs">
                <div className="project-item">
                    <img src={blogApp} alt="Blog App" />
                    <h2>Blog App</h2>
                    <p>A platform for creating and sharing blog posts, equipped with a modern UI and dynamic content management.</p>
                </div>
                <div className="project-item">
                    <img src={landingWebsite} alt="Landing Website" />
                    <h2>Landing Website</h2>
                    <p>A responsive, high-performance landing page with smooth animations and a clean design tailored for marketing needs.</p>
                </div>
                <div className="project-item">
                    <img src={weatheryze} alt="Weatheryze" />
                    <h2>Weatheryze</h2>
                    <p>A weather tracking app providing real-time weather updates, forecasts, and location-specific insights.</p>
                </div>
                <div className="project-item">
                    <img src={flashCardTool} alt="Flash Card Tool" />
                    <h2>Flash Card Tool</h2>
                    <p>A flashcard tool for effective learning, featuring spaced repetition and customizable card sets.</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
