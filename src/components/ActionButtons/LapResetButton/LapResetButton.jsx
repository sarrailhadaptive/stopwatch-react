import "../ActionButtons.css";
export default function LapResetButton({
  isTimerRunning,
  startTimer,
  lapNumber,
  setLapNumber,
}) {
  return (
    <button
      className={isTimerRunning ? "buttons lap-active" : "buttons reset-active"}
      onClick={() => setLapNumber(++lapNumber)}
    >
      {isTimerRunning || startTimer === 0 ? "Lap" : "Reset"}
    </button>
  );
}
