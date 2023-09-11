import React from "react";
import { Col } from "react-bootstrap";
import { ResumeImg, ResumeDownload } from "../../assets/images";
import "./resume.css";

export default function Resume() {
  return (
    <>
      <div id="resume" className="resume-card">
        <div className="resume-top-content">
          <Col className="resume-download-card">
            <p>Click on the image to download my full resume!</p>
            <a href={ResumeDownload} download>
              <img
                src={ResumeImg}
                alt="My resume."
                className="resume-img"
              ></img>
            </a>
          </Col>
        </div>
      </div>
    </>
  );
}
