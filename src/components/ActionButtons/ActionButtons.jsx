import "./ActionButtons.css";
import { useState } from "react";
import StartStopButton from "./StartStopButton/StartStopButton.jsx";
import LapResetButton from "./LapResetButton/LapResetButton.jsx";

export default function ActionButtons({
  setElapsedTime,
  elapsedTime,
  lapNumber,
  setLapNumber,
  setLapTimes,
  setLapRows,
}) {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timestamp, setTimestamp] = useState(0);
  return (
    <div className="buttons-wrapper">
      <LapResetButton
        isTimerRunning={isTimerRunning}
        timestamp={timestamp}
        lapNumber={lapNumber}
        setLapNumber={setLapNumber}
        elapsedTime={elapsedTime}
        setIsTimerRunning={setIsTimerRunning}
        setTimestamp={setTimestamp}
        setElapsedTime={setElapsedTime}
        setLapTimes={setLapTimes}
        setLapRows={setLapRows}
      />
      <StartStopButton
        isTimerRunning={isTimerRunning}
        setIsTimerRunning={setIsTimerRunning}
        elapsedTime={elapsedTime}
        setElapsedTime={setElapsedTime}
        timestamp={timestamp}
        setTimestamp={setTimestamp}
      />
    </div>
  );
}
