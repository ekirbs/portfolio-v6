import { useState, useEffect } from "react";
import "./workHeader.css";

export default function WorkHeader() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 500);
  }, []);

  return (
    <header id="work" className="work-header">
      <h1
        className="work-header-text"
        style={{ opacity: showText ? 1 : 0, transition: "opacity 7s" }}
      >
        My Work
      </h1>
    </header>
  );
}
