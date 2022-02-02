import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    counter: 0,
  });
  const { seconds, minutes, hours } = time;

  const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const hourTime = hours < 10 ? `0${hours}` : `${hours}`;

  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <p>Timer</p>
      <p>{secondTime}</p>
      <p>{minuteTime}</p>
      <p>{hourTime}</p>
      <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
      <button>Reset</button>
    </div>
  );
};

export default Timer;
