// LapResetButton
// StartStopButton

import "./ActionButtons.css";
import { useState, useEffect } from "react";
import StartStopButton from "./StartStopButton";
import LapResetButton from "./LapResetButton";

export default function ActionButtons({ setElapsedTime, elapsedTime }) {
  let [isTimerRunning, setIsTimerRunning] = useState(false);
  let [startTime, setStartTime] = useState(0);
  return (
    <div className="buttons-wrapper">
      <LapResetButton isTimerRunning={isTimerRunning} startTime={startTime} />
      <StartStopButton
        isTimerRunning={isTimerRunning}
        setIsTimerRunning={setIsTimerRunning}
        elapsedTime={elapsedTime}
        setElapsedTime={setElapsedTime}
        startTime={startTime}
        setStartTime={setStartTime}
      />
    </div>
  );
}
