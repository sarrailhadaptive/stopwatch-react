import "./LapsTable.css";
import transformTime from "../../utils/formatting-utils";
import { useState, useEffect } from "react";

export default function LapsSection({
  elapsedTime,
  lapNumber,
  lapRows,
  setlapRows,
}) {
  const [lapTimes, setLapTimes] = useState([]);

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
    );
    return <tbody>{firstLap}</tbody>;
  }

  function isFastestLap() {
    const minTimeLap = Math.min(...lapTimes);
    return minTimeLap;
  }

  function isSlowestLap() {
    const maxTimeLap = Math.max(...lapTimes);
    return maxTimeLap;
  }

  function displayFastestOrSlowest(time) {
    if (isSlowestLap() === time) return "slowest-lap";
    if (isFastestLap() === time) return "fastest-lap";
  }

  const listLaps = lapRows
    .map((lap) => {
      return (
        <tr
          key={lap.id}
          className={lapNumber > 2 && displayFastestOrSlowest(lap.time)}
        >
          <td>Lap {lap.id}</td>
          <td>{transformTime(lap.time)}</td>
        </tr>
      );
    })
    .reverse();

  function addNewLap() {
    const newLapTime = lapTimes.reduce(
      (prevLap, currLap) => prevLap - currLap,
      elapsedTime
    );
    setLapTimes([...lapTimes, newLapTime]);
    setlapRows([
      ...lapRows,
      {
        id: lapNumber - 1,
        time: newLapTime,
      },
    ]);
  }

  useEffect(() => {
    if (lapNumber > 1) {
      addNewLap();
    }
  }, [lapNumber]);

  return (
    <div className="lap-table-section">
      <table>
        {displayCurrentLapRow()}
        {lapNumber >= 2 && <tbody>{listLaps}</tbody>}
      </table>
    </div>
  );
}
