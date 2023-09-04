import React from "react";
import "./main.css";

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="main-section">
          {/* <h3 className="main-head">Explore Mini Projects</h3> */}
          <p className="main-text">
            Welcome to my projects section! Here, you'll find a curated
            selection of small-scale projects that I've crafted. From
            interactive applications to creative experiments, there's something
            for everyone. Each project offers a unique experience and insight
            into different aspects of web development. Use the navbar to check them out!
          </p>
          {/* <p className="main-text-temp">
            (These projects were designed to be viewed on a <span className="bold">desktop</span> monitor.  I am reworking their design to be responsive and mobile-friendly in my spare time.)            
          </p> */}
        </div>
      </div>
    </>
  );
}
