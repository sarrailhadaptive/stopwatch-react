import "./LapsTable.css";
import transformTime from "../../utils/formatting-utils";
import { useEffect } from "react";

export default function LapsSection({ elapsedTime, lapNumber, lapTimes }) {
  let fastestLap = Infinity;
  let slowestLap = 0;

  function compareLapsSpeed(lapTime) {
    if (lapTime < fastestLap) {
      fastestLap = lapTime;
      return "fastest-lap";
    }
    if (lapTime > slowestLap) {
      slowestLap = lapTime;
      return "slowest-lap";
    }
  }

  function currentLapRow() {
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

  function createLapRows() {
    if (lapNumber >= 2) {
      const newLapRow = lapTimes
        .map((currTime, currIndex, array) => {
          return (
            <tr className={compareLapsSpeed(currTime - array[currIndex - 1])}>
              <td>Lap {currIndex + 1}</td>
              <td>
                {transformTime(
                  currIndex === 0 ? currTime : currTime - array[currIndex - 1]
                )}
              </td>
            </tr>
          );
        })
        .reverse();
      return <tbody>{newLapRow}</tbody>;
    }
  }

  useEffect(() => {
    console.log(fastestLap);
  }, [lapTimes]);

  return (
    <div className="lap-table-section">
      <table>
        {currentLapRow()}
        {createLapRows()}
      </table>
    </div>
  );
}
