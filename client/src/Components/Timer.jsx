import React, { useState, useEffect } from "react";

const Timer = () => {
  // Set State as a time object
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  // Deconstruct the time to use to display
  let { seconds, minutes, hours } = time;
  // time variables to display and will include zeros infront incase its less than 10
  const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const hourTime = hours < 10 ? `0${hours}` : `${hours}`;
  // Active state to know when the timer is on or off
  const [isActive, setIsActive] = useState(false);
  // Toggle function that sets the active state to its opposite
  const toggle = () => {
    setIsActive(!isActive);
  };
  // Reset function to set time back to all zeros
  const reset = () => {
    setTime({
      seconds: 0,
      minutes: 0,
      hours: 0,
    });
  };

  // Main Logic that makes the timer work
  useEffect(() => {
    // Interval for know
    let interval = null;
    // Variables to update the time that refrences the variables and not the direct value
    // They are needed so we dont lose state on rerenders
    let updateSeconds = seconds;
    let updateMinutes = minutes;
    let updateHours = hours;

    // If Active is true so the timer is on
    if (isActive) {
      // Start the interval
      interval = setInterval(() => {
        // If the seconds equal 60 increment the minutes and set seconds to 0
        if (seconds === 60) {
          updateMinutes++;
          updateSeconds = 0;
        }
        // If the minutes is 60 increment the hours and set minutes to 0
        if (minutes === 60) {
          updateHours++;
          updateMinutes = 0;
        }
        // In all cases we increment the seconds
        updateSeconds++;

        // we also set time to the updated values
        setTime({
          seconds: updateSeconds,
          minutes: updateMinutes,
          hours: updateHours,
        });
        // Set interval also takes another arguemnet which is how often we want the function to run, its in milliseconds so 1000 = 1 second
      }, 1000);
    } else {
      // If its not active clear the interval so it stops running every second
      clearInterval(interval);
    }
    // The useEffect hook returns a cleanup function so we can also clear the interval here too
    return () => clearInterval(interval);
    // Dependecy array need to watch over the isActive state and all the time too
  }, [isActive, seconds, hours, minutes]);

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
