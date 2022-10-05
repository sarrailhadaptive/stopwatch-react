import { useState } from "react";
import DisplayTime from "./features/DisplayTime";
import "./App.css";

// ------------------------------------- //

// Components to be used //
// IPhoneScreen
// MainTimer
// LeftButton
// RightButton
// LapsTable

// runTimer
// const [timer, setTimer] = useState(0);
let startTime = 0;
let elapsedTime = 0;
let timerId = undefined;

function runTimer(timestamp) {
  if (startTime === 0) startTime = timestamp;
  elapsedTime = Math.floor(timestamp - startTime);
  console.log(elapsedTime);
  timerId = requestAnimationFrame(runTimer);
}

// End runTimer

// Buttons
function DisplayButtons() {
  return (
    <div className="buttons-wrapper">
      <button className="buttons lap-reset-button">Lap</button>
      <button
        className="buttons start-stop-button"
        onClick={() => runTimer(performance.now())}
      >
        Start
      </button>
    </div>
  );
}
// IPhoneScreen Components //

function MainTimer() {
  return (
    <div className="main-timer-section">
      <DisplayTime />
      <DisplayButtons />
    </div>
  );
}

function LapsSection() {
  return (
    <div className="lap-table-section">
      <LapsTable />
    </div>
  );
}

// End of IPhoneScreen Components //

// MainTimer Components

// End of MainTimer Components

// LapsTable
function LapsTable() {
  return (
    <table>
      <tbody>
        <tr>
          <td>Lap 1</td>
          <td>00:00.00</td>
        </tr>
      </tbody>
    </table>
  );
}
// Display an empty table
// End of LapsTable

export default function IPhoneScreen() {
  return (
    <div>
      <MainTimer />
      <LapsSection />
    </div>
  );
}
