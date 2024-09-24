import { useState, useEffect } from "react";
import { profilePhoto } from "../../assets/images";
import "./about.css";

export default function About() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "Technical Expertise",
      content:
        "Hi there! I am a versatile Full Stack Developer with a passion for building efficient, scalable, and user-centric applications. With a strong foundation in technologies like Java, JavaScript, TypeScript, Spring, React, Angular, and cloud services like AWS, I thrive on tackling complex technical challenges. Whether working with SQL/NoSQL databases or experimenting with cutting-edge tools, I constantly seek ways to sharpen my skills and optimize development processes.",
    },
    {
      title: "Professional Journey",
      content:
        "Graduating from Rutgers’ Full Stack Web Development Program provided me with the technical foundation, but my journey extends beyond the classroom. I've had the privilege of working at Smoothstack, where I contributed to various real-world projects, enhancing my expertise in software development and Agile methodologies. My background also includes roles in education and coaching, allowing me to bring unique leadership, communication, and team collaboration skills to the table.",
    },
    {
      title: "Who I Am",
      content:
        "Beyond the code, I’m a problem-solver at heart. I approach challenges with creativity and persistence, always aiming to turn ideas into elegant solutions. My diverse experiences shape the way I work—whether it’s thinking outside the box or helping teams find common ground. I’m deeply passionate about continuous learning and open to exploring new technologies and ideas. Let’s connect and create something meaningful together!",
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
