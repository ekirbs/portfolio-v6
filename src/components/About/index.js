import { useState, useEffect } from "react";
import { profilePhoto } from "../../assets/images";
import "./about.css";

export default function About() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "Software Development",
      content:
        "Hi there! I'm a dedicated Software Developer and all-around good guy. With a flair for crafting immersive experiences using technologies like React.js and MySQL, I'm on a journey to turn ideas into elegant solutions.",
    },
    {
      title: "Skills & Experience",
      content:
        "I am a proud graduate of Rutgers Full Stack Flex Web Development Program. Beyond coding, my diverse background in education and coaching equipes me with invaluable skills in teamwork, communication, conflict resolution, and innovative problem-solving.",
    },
    {
      title: "Let's Connect",
      content: "I love software development and talking about all things coding. Let's connect and create something remarkable together.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSection((prevSection) => (prevSection + 1) % sections.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-card">
      <div className="about-photo-card-outter">
        <div className="about-photo-card-inner">
          <img src={profilePhoto} className="about-photo" alt="Profile"></img>
        </div>
      </div>
      <div className="about-info">
        <div className="about-section">
          {sections.map((section, index) => (
            <div
              className={`about-title ${
                activeSection === index ? "active" : ""
              }`}
              onMouseEnter={() => {
                setActiveSection(index);
              }}
              key={index}
            >
              {section.title}
            </div>
          ))}
        </div>
        <div className="about-content">
          {sections.map((section, index) => (
            <p
              key={index}
              className={`about-text ${
                activeSection === index ? "active" : ""
              }`}
            >
              {section.content}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
