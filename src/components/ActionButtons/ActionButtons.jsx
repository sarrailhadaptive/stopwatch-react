// LapResetButton
// StartStopButton

import "./ActionButtons.css";

export default function ActionButtons({
  isTimerRunning,
  handleRunTimer,
  handleIsTimerRunningState,
}) {
  return (
    <div className="buttons-wrapper">
      <button className="buttons lap-reset-button">Lap</button>
      <button
        className={
          isTimerRunning ? "buttons stop-button" : "buttons start-button"
        }
        onClick={() => {
          return handleRunTimer(performance.now()), handleIsTimerRunningState();
        }}
      >
        {isTimerRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
}
