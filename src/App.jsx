import React, { useState, useReducer } from "react";
import Timer from "./components/Timer/Timer.jsx";
import ActionButtons from "./components/ActionButtons/ActionButtons.jsx";
import LapsTable from "./components/LapsTable/LapsTable.jsx";
import "./App.css";

// ------------------------------------- //

export default function IPhoneScreen() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [lapNumber, setLapNumber] = useState(1);
  const [lapRows, setLapRows] = useState([]);
  const [lapTimes, setLapTimes] = useState([]);

  return (
    <div>
      <Timer elapsedTime={elapsedTime} />
      <ActionButtons
        setElapsedTime={setElapsedTime}
        elapsedTime={elapsedTime}
        lapNumber={lapNumber}
        setLapNumber={setLapNumber}
        setLapTimes={setLapTimes}
        setLapRows={setLapRows}
      />
      <LapsTable
        elapsedTime={elapsedTime}
        lapNumber={lapNumber}
        lapRows={lapRows}
        setLapRows={setLapRows}
        lapTimes={lapTimes}
        setLapTimes={setLapTimes}
      />
    </div>
  );
}
