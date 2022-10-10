import "../ActionButtons.css";
import { useState, useEffect } from "react";

export default function StartStopButton({
  isTimerRunning,
  setIsTimerRunning,
  elapsedTime,
  setElapsedTime,
  startTimer,
  setStartTimer,
}) {
  function handleRunTimer(startTimer) {
    startTimer === 0
      ? setStartTimer(startTimer)
      : setStartTimer(startTimer - elapsedTime);
    setIsTimerRunning(!isTimerRunning);
  }

  useEffect(() => {
    if (isTimerRunning) {
      const timerId = setInterval(() => {
        const currentTime = Date.now();
        setElapsedTime(currentTime - startTimer);
      }, 10);
      return () => clearInterval(timerId);
    }
  }, [isTimerRunning]);

  return (
    <button
      className={
        isTimerRunning ? "buttons stop-button" : "buttons start-button"
      }
      onClick={
        isTimerRunning
          ? () => setIsTimerRunning(false)
          : () => handleRunTimer(Date.now())
      }
    >
      {isTimerRunning ? "Stop" : "Start"}
    </button>
  );
}
