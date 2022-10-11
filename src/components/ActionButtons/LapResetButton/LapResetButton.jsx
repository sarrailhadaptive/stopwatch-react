import "../ActionButtons.css";

export default function LapResetButton({
  isTimerRunning,
  timestamp,
  lapNumber,
  setLapNumber,
  setIsTimerRunning,
  setTimestamp,
  setElapsedTime,
  setLapTimes,
  setLapRows,
}) {
  function resetStopwatch() {
    setLapNumber(1);
    setIsTimerRunning(false);
    setTimestamp(0);
    setElapsedTime(0);
    setLapTimes([]);
    setLapRows([]);
  }

  return (
    <button
      className={isTimerRunning ? "buttons lap-active" : "buttons reset-active"}
      onClick={() =>
        isTimerRunning ? setLapNumber(++lapNumber) : resetStopwatch()
      }
    >
      {isTimerRunning || timestamp === 0 ? "Lap" : "Reset"}
    </button>
  );
}
