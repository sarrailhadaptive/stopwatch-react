// resetStopwatch

import transformTime from "../../utils/formatting-utils.js";
import { useEffect, useState } from "react";
import "./Timer.css";

function DisplayTime({ elapsedTime }) {
  return (
    <div>
      <h1>{transformTime(elapsedTime)}</h1>
    </div>
  );
}

export default function Timer({ elapsedTime }) {
  return (
    <div className="main-timer-section">
      <DisplayTime elapsedTime={elapsedTime} />
    </div>
  );
}
