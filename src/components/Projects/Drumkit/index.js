import { useEffect, useRef, useState, useCallback } from "react";
import {
  boom,
  clap,
  hihat,
  kick,
  openhat,
  ride,
  snare,
  tink,
  tom,
} from "./sounds/percussion";
import {
  babyshark,
  countdown,
  gameover,
  monkeyshark,
  positive,
} from "./sounds/tunes";
import "./drumkit.css";

const SoundKey = ({ keyCode, label, soundSrc, playSound }) => {
  const handleMouseDown = (e) => playSound(e, keyCode);
  const handleMouseUp = (e) => playSound(e, keyCode);
  const handleMouseLeave = (e) => playSound(e, keyCode);
  const handleTouchStart = (e) => playSound(e, keyCode);

  return (
    <div
      data-key={keyCode}
      className="key"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <kbd>{label}</kbd>
      <span className="sound">
        {soundSrc.replace(/.*\//, "").replace(/\..*/, "")}
      </span>
    </div>
  );
};

export default function Drumkit() {
  const keysContainerRef = useRef(null);
  const [pressedKeys, setPressedKeys] = useState({});

  const playSound = useCallback(
    (e, keyCode) => {
      
      if (
        e.type === "keydown" ||
        e.type === "mousedown" ||
        e.type === "touchstart"
      ) {
        keyCode =
          e.type === "keydown" ? e.keyCode.toString() : e.target.dataset.key;
        if (pressedKeys[keyCode]) return;

        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        const key = document.querySelector(`div[data-key="${keyCode}"]`);
        if (!audio) return;

        setPressedKeys((prevState) => ({ ...prevState, [keyCode]: true }));
        key.classList.add("playing");
        audio.currentTime = 0;
        setTimeout(() => {
          audio.play();
        }, 2);
      } else if (
        e.type === "keyup" ||
        e.type === "mouseup" ||
        e.type === "mouseleave" ||
        e.type === "touchend"
      ) {
        keyCode =
          e.type === "keyup" ? e.keyCode.toString() : e.target.dataset.key;
        if (!pressedKeys[keyCode]) return;

        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        const key = document.querySelector(`div[data-key="${keyCode}"]`);
        if (!audio) return;

        setPressedKeys((prevState) => ({ ...prevState, [keyCode]: false }));
        key.classList.remove("playing");
        audio.pause();
        setTimeout(() => {
          audio.currentTime = 0;
        }, 2);
      }
    },
    [pressedKeys]
  );

  useEffect(() => {
    const keys = Array.from(document.querySelectorAll(".key"));

    function removeTransition(e) {
      if (e.propertyName !== "transform") return;
      e.target.classList.remove("playing");
    }

    keys.forEach((key) => {
      key.addEventListener("transitionend", removeTransition);
    });
    window.addEventListener("keydown", playSound);
    window.addEventListener("keyup", playSound);
    const keysContainer = keysContainerRef.current;
    keysContainer.addEventListener("mousedown", playSound);
    keysContainer.addEventListener("mouseup", playSound);
    keysContainer.addEventListener("mouseleave", playSound);
    keysContainer.addEventListener("touchstart", playSound);

    return () => {
      keys.forEach((key) => {
        key.removeEventListener("transitionend", removeTransition);
      });
      window.removeEventListener("keydown", playSound);
      window.removeEventListener("keyup", playSound);
      keysContainer.removeEventListener("mousedown", playSound);
      keysContainer.removeEventListener("mouseup", playSound);
      keysContainer.removeEventListener("mouseleave", playSound);
      keysContainer.removeEventListener("touchstart", playSound);
    };
  }, [pressedKeys]);

  const soundKeysData = [
    { keyCode: "65", label: "A", soundSrc: clap },
    { keyCode: "83", label: "S", soundSrc: hihat },
    { keyCode: "68", label: "D", soundSrc: kick },
    { keyCode: "70", label: "F", soundSrc: openhat },
    { keyCode: "71", label: "G", soundSrc: boom },
    { keyCode: "72", label: "H", soundSrc: ride },
    { keyCode: "74", label: "J", soundSrc: snare },
    { keyCode: "75", label: "K", soundSrc: tom },
    { keyCode: "76", label: "L", soundSrc: tink },
  ];

  const tuneKeysData = [
    { keyCode: "66", label: "B", soundSrc: babyshark },
    { keyCode: "77", label: "M", soundSrc: monkeyshark },
    { keyCode: "49", label: "1", soundSrc: countdown },
    { keyCode: "50", label: "2", soundSrc: gameover },
    { keyCode: "51", label: "3", soundSrc: positive },
  ];

  return (
    <div className="drumkit">
      <div className="keys" ref={keysContainerRef}>
        {soundKeysData.map((keyData) => (
          <SoundKey key={keyData.keyCode} {...keyData} playSound={playSound} />
        ))}
      </div>

      <div className="keys" ref={keysContainerRef}>
        {tuneKeysData.map((keyData) => (
          <SoundKey key={keyData.keyCode} {...keyData} playSound={playSound} />
        ))}
      </div>

      <audio data-key="65" src={clap}></audio>
      <audio data-key="83" src={hihat}></audio>
      <audio data-key="68" src={kick}></audio>
      <audio data-key="70" src={openhat}></audio>
      <audio data-key="71" src={boom}></audio>
      <audio data-key="72" src={ride}></audio>
      <audio data-key="74" src={snare}></audio>
      <audio data-key="75" src={tom}></audio>
      <audio data-key="76" src={tink}></audio>

      <audio data-key="66" src={babyshark}></audio>
      <audio data-key="77" src={monkeyshark}></audio>
      <audio data-key="49" src={countdown}></audio>
      <audio data-key="50" src={gameover}></audio>
      <audio data-key="51" src={positive}></audio>
    </div>
  );
}
