// formatTime
// runTimer
// resetStopwatch

import ActionButtons from "../ActionButtons/ActionButtons.jsx";
import "./MainTimer.css";

function DisplayTime() {
  return (
    <div>
      <h1>00:00.00</h1>
    </div>
  );
}

export default function MainTimer({
  isTimerRunning,
  handleRunTimer,
  handleIsTimerRunningState,
}) {
  return (
    <div className="main-timer-section">
      <DisplayTime />
      <ActionButtons
        isTimerRunning={isTimerRunning}
        handleRunTimer={handleRunTimer}
        handleIsTimerRunningState={handleIsTimerRunningState}
      />
    </div>
  );
}
