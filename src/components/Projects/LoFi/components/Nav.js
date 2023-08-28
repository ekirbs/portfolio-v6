import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
export default function Nav({ librarystatus, setLibrarystatus }) {
  return (
    <nav className="lofi-nav">
      <button
        className="lofi-nav-btn"
        onClick={() => {
          if (!librarystatus) {
            setLibrarystatus(true);
          } else if (librarystatus) {
            setLibrarystatus(false);
          }
        }}
      >
        <FontAwesomeIcon className="icon" icon={faMusic} />
        {librarystatus ? "Close Library" : "Open Library"}
      </button>
    </nav>
  );
}