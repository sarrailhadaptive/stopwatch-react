import './LapsTable.css'
import transformTime from '../../utils/formatting-utils'
import { useEffect } from 'react'

export default function LapsSection({
  elapsedTime,
  lapNumber,
  lapRows,
  setLapRows,
  lapTimes,
  setLapTimes,
}) {
  function displayCurrentLapRow() {
    const firstLap = (
      <tr className="first-lap">
        <td>Lap {lapNumber}</td>
        <td>
          {transformTime(
            elapsedTime -
              lapTimes.reduce((prevLap, currLap) => prevLap + currLap, 0)
          )}
        </td>
      </tr>
    )
    return <tbody>{firstLap}</tbody>
  }

  function findSmallestLapTime() {
    const minTimeLap = Math.min(...lapTimes)
    return minTimeLap
  }

  function findHighestLapTime() {
    const maxTimeLap = Math.max(...lapTimes)
    return maxTimeLap
  }

  function displayFastestAndSlowestLap(time) {
    if (lapNumber > 2) {
      if (findHighestLapTime() === time) return 'slowest-lap'
      if (findSmallestLapTime() === time) return 'fastest-lap'
    }
  }

  const listLaps = lapRows
    .map(lap => {
      return (
        <tbody key={lap.id}>
          <tr className={displayFastestAndSlowestLap(lap.time)}>
            <td>Lap {lap.id}</td>
            <td>{transformTime(lap.time)}</td>
          </tr>
        </tbody>
      )
    })
    .reverse()

  function addNewLap() {
    const newLapTime = lapTimes.reduce(
      (prevLap, currLap) => prevLap - currLap,
      elapsedTime
    )
    setLapTimes([...lapTimes, newLapTime])
    setLapRows([
      ...lapRows,
      {
        id: lapNumber - 1,
        time: newLapTime,
      },
    ])
  }

  useEffect(() => {
    if (lapNumber > 1) {
      addNewLap()
    }
  }, [lapNumber])

  return (
    <div className="lap-table-section">
      <table>
        {displayCurrentLapRow()}
        {lapNumber >= 2 && listLaps}
      </table>
    </div>
  )
}
