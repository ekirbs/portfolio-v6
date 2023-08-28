import { useEffect, useRef } from "react";
import "./drumkit.css";

export default function Drumkit() {
  const keysContainerRef = useRef(null);

  useEffect(() => {
    const keys = Array.from(document.querySelectorAll(".key"));
    let keyState = {};

    function removeTransition(e) {
      if (e.propertyName !== "transform") return;
      e.target.classList.remove("playing");
    }

    function playSound(e) {
      let keyCode;
      if (e.type === "keydown" || e.type === "keyup") {
        keyCode = e.keyCode.toString();
      } else if (
        e.type === "mousedown" ||
        e.type === "mouseup" ||
        e.type === "mouseleave" ||
        e.type === "touchstart"
      ) {
        keyCode = e.target.dataset.key;
      } else {
        return;
      }

      const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
      const key = document.querySelector(`div[data-key="${keyCode}"]`);
      if (!audio) return;

      if (
        (e.type === "keydown" || e.type === "mousedown" || e.type === "touchstart") &&
        !keyState[keyCode]
      ) {
        keyState[keyCode] = true;
        key.classList.add("playing");
        audio.currentTime = 0;
        setTimeout(() => {
          audio.play();
        }, 2);
        // audio.play();
      } else if (
        e.type === "keyup" ||
        e.type === "mouseup" ||
        e.type === "mouseleave" ||
        e.type === "touchend"
      ) {
        delete keyState[keyCode];
        key.classList.remove("playing");
        audio.pause();
        setTimeout(() => {
          audio.currentTime = 0;
        }, 2);
      }
    }

    keys.forEach((key) => {
      key.addEventListener("transitionend", removeTransition);
      key.addEventListener("mouseup", playSound);
      key.addEventListener("mouseleave", playSound);
      key.addEventListener("mousedown", playSound);
    });

    window.addEventListener("keydown", playSound);
    window.addEventListener("keyup", playSound);

    const keysContainer = keysContainerRef.current;
    keysContainer.addEventListener("touchstart", playSound);

    return () => {
      keys.forEach((key) => {
        key.removeEventListener("transitionend", removeTransition);
        key.removeEventListener("mouseup", playSound);
        key.removeEventListener("mouseleave", playSound);
        key.removeEventListener("mousedown", playSound);
      });
      window.removeEventListener("keydown", playSound);
      window.removeEventListener("keyup", playSound);
      keysContainer.removeEventListener("touchstart", playSound);
    };
  }, []);

  return (
    <div className="drumkit">
      <div className="keys" ref={keysContainerRef}>
        <div data-key="65" className="key" id="clap">
          <kbd>A</kbd>
          <span className="sound">clap</span>
        </div>
        <div data-key="83" className="key" id="hihat">
          <kbd>S</kbd>
          <span className="sound">hihat</span>
        </div>
        <div data-key="68" className="key" id="kick">
          <kbd>D</kbd>
          <span className="sound">kick</span>
        </div>
        <div data-key="70" className="key" id="openhat">
          <kbd>F</kbd>
          <span className="sound">openhat</span>
        </div>
        <div data-key="71" className="key" id="boom">
          <kbd>G</kbd>
          <span className="sound">boom</span>
        </div>
        <div data-key="72" className="key" id="ride">
          <kbd>H</kbd>
          <span className="sound">ride</span>
        </div>
        <div data-key="74" className="key" id="snare">
          <kbd>J</kbd>
          <span className="sound">snare</span>
        </div>
        <div data-key="75" className="key" id="tom">
          <kbd>K</kbd>
          <span className="sound">tom</span>
        </div>
        <div data-key="76" className="key" id="tink">
          <kbd>L</kbd>
          <span className="sound">tink</span>
        </div>
      </div>

      <div className="keys" ref={keysContainerRef}>
        <div data-key="66" className="key tune" id="babyshark">
          <kbd>B</kbd>
          <span className="sound">babyshark</span>
        </div>
        <div data-key="77" className="key tune" id="monkeyshark">
          <kbd>M</kbd>
          <span className="sound">monkeyshark</span>
        </div>
        <div data-key="49" className="key tune" id="countdown">
          <kbd>1</kbd>
          <span className="sound">countdown</span>
        </div>
        <div data-key="50" className="key tune" id="gameover">
          <kbd>2</kbd>
          <span className="sound">gameover</span>
        </div>
        <div data-key="51" className="key tune" id="positive">
          <kbd>3</kbd>
          <span className="sound">positive</span>
        </div>
      </div>

      <audio data-key="65" src="/assets/sounds/percussion/clap.wav"></audio>
      <audio data-key="83" src="/assets/sounds/percussion/hihat.wav"></audio>
      <audio data-key="68" src="/assets/sounds/percussion/kick.wav"></audio>
      <audio data-key="70" src="/assets/sounds/percussion/openhat.wav"></audio>
      <audio data-key="71" src="/assets/sounds/percussion/boom.wav"></audio>
      <audio data-key="72" src="/assets/sounds/percussion/ride.wav"></audio>
      <audio data-key="74" src="/assets/sounds/percussion/snare.wav"></audio>
      <audio data-key="75" src="/assets/sounds/percussion/tom.wav"></audio>
      <audio data-key="76" src="/assets/sounds/percussion/tink.wav"></audio>

      <audio data-key="66" src="./assets/sounds/tunes/babyshark_acoustic.mp3"></audio>
      <audio data-key="77" src="./assets/sounds/tunes/monkeyshark.mp3"></audio>
      <audio data-key="49" src="./assets/sounds/tunes/happy_countdown.wav"></audio>
      <audio data-key="50" src="./assets/sounds/tunes/fun_gameover.wav"></audio>
      <audio data-key="51" src="./assets/sounds/tunes/positive_sound.wav"></audio>
    </div>
  );
}