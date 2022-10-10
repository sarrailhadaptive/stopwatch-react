import "../ActionButtons.css";
import { useState, useEffect } from "react";

export default function LapResetButton({
  isTimerRunning,
  startTimer,
  lapNumber,
  setLapNumber,
  elapsedTime,
  lapTimes,
  setLapTimes,
}) {
  useEffect(() => {
    if (lapNumber >= 2) setLapTimes([...lapTimes, elapsedTime]);
  }, [lapNumber]);

  return (
    <button
      className={isTimerRunning ? "buttons lap-active" : "buttons reset-active"}
      onClick={
        isTimerRunning
          ? () => setLapNumber(++lapNumber)
          : () => console.log("reset")
      }
    >
      {isTimerRunning || startTimer === 0 ? "Lap" : "Reset"}
    </button>
  );
}
