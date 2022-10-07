import "./ActionButtons.css";
import { useEffect } from "react";

export default function LapResetButton({ isTimerRunning, startTime }) {
  return (
    <button
      className={isTimerRunning ? "buttons lap-active" : "buttons reset-active"}
      onClick={undefined}
    >
      {isTimerRunning || startTime === 0 ? "Lap" : "Reset"}
    </button>
  );
}
