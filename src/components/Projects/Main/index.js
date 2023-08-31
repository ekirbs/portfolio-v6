import React from "react";
import "./main.css";

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="main-section">
          <h3 className="main-head">Explore Mini Projects</h3>
          <p className="main-text">
            Welcome to my mini projects section! Here, you'll find a curated
            selection of small-scale projects that I've crafted. From
            interactive applications to creative experiments, there's something
            for everyone. Each project offers a unique experience and insight
            into different aspects of web development. Check them out!
          </p>
          <p className="main-text">
            (These projects were designed to be viewed on a full <span className="bold">desktop</span> monitor.  I will be reworking their design to be responsive and mobile-friendly in my spare time.)            
          </p>
        </div>
      </div>
    </>
  );
}
