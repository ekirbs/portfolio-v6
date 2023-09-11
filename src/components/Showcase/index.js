import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiGithub } from "react-icons/si";
import { GrDeploy } from "react-icons/gr";
import ArrowButton from "./arrow";
import Showcase from "./showcaseArray";
import "./showcase.css";

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
        <div id="showcase" className="showcase-card">
          <Slider {...settings} className="showcase-slider">
            {Showcase.map(
              (
                { pic, title, description, technologies, deploy, github },
                index
              ) => (
                <div className="showcase-inner-card">
                  <div className="showcase-row">
                    <div className="showcase-info-container">
                      <h3 className="showcase-title">{title}</h3>
                      <img
                        className="showcase-img"
                        src={pic}
                        key={index}
                        alt={title}
                      />
                      <p className="showcase-description">{description}</p>
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
                    </div>

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
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>
      </>
    );
  }
}
