import "./LapsTable.css";
import transformTime from "../../utils/formatting-utils";
import { useEffect } from "react";

export default function LapsSection({ elapsedTime, lapNumber, lapTimes }) {
  let fastestLap = Infinity;
  let slowestLap = 0;
  let newLapRow = "";

  function compareLapsSpeed(lapTime) {
    if (lapNumber >= 3) {
      if (lapTime < fastestLap) {
        fastestLap = lapTime;
        return "fastest-lap";
      }
      if (lapTime > slowestLap) {
        slowestLap = lapTime;
        return "slowest-lap";
      }
    }
  }

  function displayCurrentLapRow() {
    const firstLap = (
      <tr className="first-lap">
        <td>Lap {lapNumber}</td>
        <td>
          {transformTime(
            lapNumber < 2 ? elapsedTime : elapsedTime - lapTimes[lapNumber - 2]
          )}
        </td>
      </tr>
    );
    return <tbody>{firstLap}</tbody>;
  }

  function createNewLapRow() {
    if (lapNumber >= 2) {
      newLapRow = lapTimes
        .map((currTime, currIndex, array) => {
          const currentLapTime =
            currIndex === 0 ? currTime : currTime - array[currIndex - 1];
          return (
            <tr className={compareLapsSpeed(currentLapTime)}>
              <td>Lap {currIndex + 1}</td>
              <td>{transformTime(currentLapTime)}</td>
            </tr>
          );
        })
        .reverse();
      return <tbody>{newLapRow}</tbody>;
    }
  }

  useEffect(() => {
    console.log(newLapRow);
  }, [lapTimes]);

  return (
    <div className="lap-table-section">
      <table>
        {displayCurrentLapRow()}
        {createNewLapRow()}
      </table>
    </div>
  );
}
