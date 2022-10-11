import "../ActionButtons.css";

export default function LapResetButton({
  isTimerRunning,
  startTimer,
  lapNumber,
  setLapNumber,
  setIsTimerRunning,
  setStartTimer,
  setElapsedTime,
  setLapTimes,
  setLapRows,
}) {
  function resetStopwatch() {
    setLapNumber(1);
    setIsTimerRunning(false);
    setStartTimer(0);
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
      {isTimerRunning || startTimer === 0 ? "Lap" : "Reset"}
    </button>
  );
}
