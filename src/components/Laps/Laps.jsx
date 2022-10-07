// lapsTable
// renderFirstLap
// insertLapRow
// addNewLap
// compareLaps

import "./Laps.css";
import transformTime from "../../utils/formatting-utils";
import { useEffect } from "react";

export default function LapsSection({ elapsedTime }) {
  return (
    <div className="lap-table-section">
      <LapsTable elapsedTime={elapsedTime} />
    </div>
  );
}

// LapsTable
function LapsTable({ elapsedTime }) {
  return (
    <table>
      <tbody>
        <tr>
          <td>Lap 1</td>
          <td>{transformTime(elapsedTime)}</td>
        </tr>
      </tbody>
    </table>
  );
}
