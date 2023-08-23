import React from "react";
import { profilePhoto } from "../../assets/images";
import "./about.css";

export default function About() {
  return (
    <>
      <div className="about-card">
        <div className="about-section alva-display">
          <p className="about-intro">
            Hi there! I'm a dedicated{" "}
            <span className="highlight caps">Software Developer</span>, proud
            graduate of the{" "}
            <span className="highlight">Rutgers University </span>
            Full Stack Flex Web Development Program. With a flair for crafting
            immersive experiences using technologies like{" "}
            <span className="highlight caps">React.js</span>,
            <span className="highlight caps"> MySQL</span>, I'm on a journey to turn
            ideas into elegant solutions.
          </p>
          <img src={profilePhoto} className="profile-photo" alt="Profile"></img>
          <p className="about-content">
            Beyond coding, my diverse background in{" "}
            <span className="highlight caps">education</span> and{" "}
            <span className="highlight">coaching</span> equips me with
            invaluable skills in <span className="highlight caps">teamwork</span>,{" "}
            <span className="highlight">management</span>, effective
            communication, conflict resolution, and innovative problem-solving.
          </p>
          <p className="about-cta">
            Let's connect and create something remarkable together.
          </p>
        </div>
      </div>
    </>
  );
}
