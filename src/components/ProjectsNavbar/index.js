import React from "react";
import { AiOutlineClockCircle, AiOutlineHome, AiOutlineVideoCamera } from "react-icons/ai";
import { FaDrum } from "react-icons/fa";
import { GiSettingsKnobs, GiMusicSpell } from "react-icons/gi";
import { SiNetflix } from "react-icons/si";
import { TiWeatherDownpour } from "react-icons/ti";
import PropTypes from "prop-types";
import "./projectsNavbar.css";

const ProjectsNavbar = ({ currentPage, handlePageChange }) => {
  const projects = [
    { id: "Main", name: "Main", icon: AiOutlineHome, color: "ghostWhite" },
    { id: "Camera", name: "Camera", icon: AiOutlineVideoCamera, color: "highlight" },
    { id: "Clock", name: "Clock", icon: AiOutlineClockCircle, color: "seaBlue" },
    { id: "Drumkit", name: "Drumkit", icon: FaDrum, color: "mongo" },
    { id: "Netflix", name: "Netflix", icon: SiNetflix, color: "netflixRed" },
    { id: "Variables", name: "Variables", icon: GiSettingsKnobs, color: "base" },
    // { id: "Weather", name: "Weather", icon: TiWeatherDownpour, color: "github" },
  ];

  return (
    <nav className="projects-navbar">
      <ul className="projects-list">
        {projects.map((project) => (
          <li
            key={project.id}
            className={currentPage === project.id ? "active" : ""}
          >
            <div onClick={() => handlePageChange(project.id)}
              className="icon-container"
              style={
                project.color
                ? {color: `var(--${project.color})`}
                : {}
              }
            >
              {project.icon && <project.icon className="p-nav-icon" />}
              {project.name}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

ProjectsNavbar.propTypes = {
  currentPage: PropTypes.string.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default ProjectsNavbar;