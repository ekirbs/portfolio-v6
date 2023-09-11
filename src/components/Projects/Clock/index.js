import { useState, useEffect, useRef } from "react";
import "./clock.css";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedTime = date.toLocaleTimeString("en-US");
      setCurrentTime(formattedTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const secondHandRef = useRef(null);
  const minsHandRef = useRef(null);
  const hourHandRef = useRef(null);

  useEffect(() => {
    const secondHand = secondHandRef.current;
    const minsHand = minsHandRef.current;
    const hourHand = hourHandRef.current;

    function setDate() {
      const now = new Date();

      const seconds = now.getSeconds();
      const secondsDegrees = (seconds / 60) * 360 + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      const mins = now.getMinutes();
      const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
      minsHand.style.transform = `rotate(${minsDegrees}deg)`;

      const hour = now.getHours();
      const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    const intervalId = setInterval(setDate, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock-page">
      <h6>Time is Money</h6>
      <h1 className="clock-time">Current Time: {currentTime}</h1>
      <div id="clock" className="clock">
        <div className="clock-face">
          <div className="clock-circle"></div>
          <div className="number number1">1</div>
          <div className="number number2">2</div>
          <div className="number number3">3</div>
          <div className="number number4">4</div>
          <div className="number number5">5</div>
          <div className="number number6">6</div>
          <div className="number number7">7</div>
          <div className="number number8">8</div>
          <div className="number number9">9</div>
          <div className="number number10">10</div>
          <div className="number number11">11</div>
          <div className="number number12">12</div>
          <div className="hand hour-hand" ref={hourHandRef}></div>
          <div className="hand min-hand" ref={minsHandRef}></div>
          <div className="hand second-hand" ref={secondHandRef}></div>
        </div>
      </div>
    </div>
  );
}
