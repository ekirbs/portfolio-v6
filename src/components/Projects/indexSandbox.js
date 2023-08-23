import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiGithub } from "react-icons/si";
import { GrDeploy } from "react-icons/gr";
import ArrowButton from "./arrow";
import projects from "./projectsArray";
import { Row, Col } from "react-bootstrap";
import "./projectSandbox.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <ArrowButton direction="prev" />,
      nextArrow: <ArrowButton direction="next" />,
    };

    return (
      <>
        <div id="projects" className="projects-card">
          <Slider {...settings} className="projects-slider">
            {projects.map(
              (
                { pic, title, description, technologies, deploy, github },
                index
              ) => (
                <div className="showcase-card">
                  <Row className="showcase-row">
                    <Col className="projects-info-container">
                      <h3 className="project-title">{title}</h3>
                      <img
                        className="project-img"
                        src={pic}
                        key={index}
                        alt={title}
                      />
                      <p className="project-description">{description}</p>
                      <div className="showcase-buttons">
                        <a href={deploy} target="_blank" rel="noreferrer">
                          <GrDeploy className="button-icon-left" />
                          <h4>Deployed App</h4>
                          <GrDeploy className="button-icon-right" />
                        </a>
                        <a href={github} target="_blank" rel="noreferrer">
                          <SiGithub className="button-icon-left" />
                          <h4>GitHub Repo</h4>
                          <SiGithub className="button-icon-right" />
                        </a>
                      </div>
                    </Col>
                    <Col>
                      <div className="tech-list-container">
                        <ul
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          className="showcase-list"
                        >
                          <h4 className="showcase-list-title">Technologies:</h4>
                          {technologies.map((tech, i) => (
                            <li key={i} className="showcase-list-item">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              )
            )}
          </Slider>
        </div>
      </>
    );
  }
}
