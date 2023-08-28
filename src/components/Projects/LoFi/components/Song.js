import React from "react";
export default function Song({ currentMusic, isplaying }) {
  return (
    <div className="song-container">
      <div className="record">
        <img
          src={currentMusic.cover}
          className={isplaying ? "rotate-animation" : ""}
          alt=""
        />
      </div>
      <h1>{currentMusic.name}</h1>
      <h4>{currentMusic.artist}</h4>
    </div>
  );
}