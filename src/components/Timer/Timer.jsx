// resetStopwatch

import transformTime from "../../utils/formatting-utils.js";
import { useEffect, useState } from "react";
import "./Timer.css";

export default function Timer({ elapsedTime }) {
  return (
    <div className="main-timer-section">
      <h1>{transformTime(elapsedTime)}</h1>
    </div>
  );
}
