import "./ActionButtons.css";
import { useState, useEffect } from "react";

export default function LapResetButton({
  isTimerRunning,
  startTimer,
  lapNumber,
  setLapNumber,
  elapsedTime,
}) {
  function createNewLap(elapsedTime, lapNumber) {
    // We need to create an object that has an id and that saves the currentElapsedTime
  }
  useEffect(() => {});
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
