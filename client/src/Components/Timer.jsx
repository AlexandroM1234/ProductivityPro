import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    counter: 0,
  });
  const { seconds, minutes, hours, counter } = time;

  const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const hourTime = hours < 10 ? `0${hours}` : `${hours}`;

  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setTime({
      seconds: 0,
      minutes: 0,
      hours: 0,
      counter: 0,
    });
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        const secondsCount = counter % 60;
        const minuteCount = Math.floor(counter / 60);
        const hoursCount = Math.floor(counter / 3600);

        setTime((prevTime) => ({
          seconds: secondsCount,
          minutes: minuteCount,
          hours: hoursCount,
          counter: prevTime.counter + 1,
        }));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time, counter]);

  return (
    <div>
      <p>Timer</p>
      <p>{secondTime}</p>
      <p>{minuteTime}</p>
      <p>{hourTime}</p>
      <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
