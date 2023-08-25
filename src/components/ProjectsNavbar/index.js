import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { AiFillClockCircle, AiFillHome } from "react-icons/ai";
import { TiWeatherDownpour } from "react-icons/ti";
import { robotHead } from "../../assets/images";
import PropTypes from "prop-types";
import "./projectsNavbar.css";

const ProjectsNavbar = ({ currentPage, handlePageChange }) => {
  const projects = [
    { id: "Main", name: "Main", icon: AiFillHome },
    { id: "Clock", name: "Clock", icon: AiFillClockCircle },
    { id: "Weather", name: "Weather", icon: TiWeatherDownpour },
    // Add more projects here
  ];

  return (
    <nav className="projects-navbar">
      <ul className="projects-list">
        {projects.map((project) => (
          <li
            key={project.id}
            className={currentPage === project.id ? "active" : ""}
          >
            <div onClick={() => handlePageChange(project.id)} className="icon-container">
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