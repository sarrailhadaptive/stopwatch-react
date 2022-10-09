// lapsTable
// renderFirstLap
// insertLapRow
// addNewLap
// compareLaps

import "./Laps.css";
import transformTime from "../../utils/formatting-utils";
import { useState, useEffect } from "react";

export default function LapsSection({ elapsedTime, lapNumber }) {
  return (
    <div className="lap-table-section">
      <table>
        <tbody>
          <tr className="first-lap">
            <td>Lap {lapNumber}</td>
            <td>{transformTime(elapsedTime)}</td>
          </tr>
        </tbody>
        {/* {insertNewLaps(elapsedTime)} */}
      </table>
    </div>
  );
}
