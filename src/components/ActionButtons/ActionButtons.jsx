import "./ActionButtons.css";
import { useState } from "react";
import StartStopButton from "./StartStopButton/StartStopButton.jsx";
import LapResetButton from "./LapResetButton/LapResetButton.jsx";

export default function ActionButtons({
  setElapsedTime,
  elapsedTime,
  lapNumber,
  setLapNumber,
}) {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [startTimer, setStartTimer] = useState(0);
  return (
    <div className="buttons-wrapper">
      <LapResetButton
        isTimerRunning={isTimerRunning}
        startTimer={startTimer}
        lapNumber={lapNumber}
        setLapNumber={setLapNumber}
        elapsedTime={elapsedTime}
      />
      <StartStopButton
        isTimerRunning={isTimerRunning}
        setIsTimerRunning={setIsTimerRunning}
        elapsedTime={elapsedTime}
        setElapsedTime={setElapsedTime}
        startTimer={startTimer}
        setStartTimer={setStartTimer}
      />
    </div>
  );
}
