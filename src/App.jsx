import { useState } from "react";
import MainTimer from "./components/MainTimer/MainTimer.jsx";
import LapsSection from "./components/Laps/Laps.jsx";
import transformTime from "./utils/formatting-utils.js";
import "./App.css";

// ------------------------------------- //

export default function IPhoneScreen() {
  let [isTimerRunning, setIsTimerRunning] = useState(false);
  let [startTime, setStartTime] = useState(0);
  let [elapsedTime, setElapsedTime] = useState(0);
  let timerId = undefined;

  const handleIsTimerRunningState = () => {
    setIsTimerRunning(() => (isTimerRunning = !isTimerRunning));
  };

  const handleRunTimer = (timestamp) => {
    if (startTime === 0) startTime = timestamp;
    elapsedTime = Math.floor(timestamp - startTime);
    transformTime(elapsedTime);
    timerId = requestAnimationFrame(handleRunTimer);
  };
  return (
    <div>
      <MainTimer
        isTimerRunning={isTimerRunning}
        handleRunTimer={handleRunTimer}
        handleIsTimerRunningState={handleIsTimerRunningState}
      />
      <LapsSection />
    </div>
  );
}
