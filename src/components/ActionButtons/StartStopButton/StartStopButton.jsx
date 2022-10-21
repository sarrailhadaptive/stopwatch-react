import '../ActionButtons.css'
import { useEffect, useContext } from 'react'

export default function StartStopButton({
  isTimerRunning,
  setIsTimerRunning,
  elapsedTime,
  setElapsedTime,
  timestamp,
  setTimestamp,
}) {
  function runTimer(timestamp) {
    timestamp === 0
      ? setTimestamp(timestamp)
      : setTimestamp(timestamp - elapsedTime)
    setIsTimerRunning(!isTimerRunning)
  }

  useEffect(() => {
    if (isTimerRunning) {
      const timerId = setInterval(() => {
        setElapsedTime(Date.now() - timestamp)
      }, 10)
      return () => clearInterval(timerId)
    }
  }, [isTimerRunning])

  return (
    <button
      className={
        isTimerRunning ? 'buttons stop-button' : 'buttons start-button'
      }
      onClick={
        isTimerRunning
          ? () => setIsTimerRunning(false)
          : () => runTimer(Date.now())
      }
    >
      {isTimerRunning ? 'Stop' : 'Start'}
    </button>
  )
}
