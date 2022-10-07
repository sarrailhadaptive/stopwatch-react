import "./ActionButtons.css";
import { useState, useEffect } from "react";

export default function StartStopButton({
  isTimerRunning,
  setIsTimerRunning,
  elapsedTime,
  setElapsedTime,
  startTime,
  setStartTime,
}) {
  let [previousTime, setPreviousTime] = useState(0);
  let [timerId, setTimerId] = useState(0);

  function handleRunTimer(timestamp, startTime) {
    startTime === 0
      ? setStartTime((startTime = timestamp))
      : setStartTime((startTime = timestamp - elapsedTime));
    setIsTimerRunning((isTimerRunning = !isTimerRunning));
    setElapsedTime((elapsedTime = Math.floor(timestamp - startTime)));
  }

  useEffect(() => {
    if (isTimerRunning) {
      const runTimer = () => {
        setElapsedTime(elapsedTime++);
        setTimerId((timerId = setTimeout(runTimer, 10)));
      };
      setPreviousTime((previousTime = elapsedTime));
      console.log(`Previous Time: ${elapsedTime}`);
      runTimer();
    } else {
      clearTimeout(timerId);
    }
  }, [isTimerRunning]);
  return (
    <button
      className={
        isTimerRunning ? "buttons stop-button" : "buttons start-button"
      }
      onClick={
        isTimerRunning
          ? () => setIsTimerRunning((isTimerRunning = false))
          : () => handleRunTimer(Date.now(), startTime)
      }
    >
      {isTimerRunning ? "Stop" : "Start"}
    </button>
  );
}
