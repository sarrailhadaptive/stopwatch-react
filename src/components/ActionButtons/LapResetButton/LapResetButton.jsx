import { useEffect } from 'react'
import '../ActionButtons.css'

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
    setLapNumber(1)
    setIsTimerRunning(false)
    setTimestamp(0)
    setElapsedTime(0)
    setLapTimes([])
    setLapRows([])
  }

  function handleButtonStyles() {
    if (timestamp === 0) return 'buttons lap-reset-button'
    if (isTimerRunning) return 'buttons lap-active'
    if (!isTimerRunning) return 'buttons reset-active'
  }

  return (
    <button
      className={handleButtonStyles()}
      onClick={() =>
        isTimerRunning ? setLapNumber(++lapNumber) : resetStopwatch()
      }
    >
      {isTimerRunning || timestamp === 0 ? 'Lap' : 'Reset'}
    </button>
  )
}
