import { useEffect, useState } from "react";
import Timer from "./components/Timer/Timer.jsx";
import ActionButtons from "./components/ActionButtons/ActionButtons.jsx";
import Laps from "./components/Laps/Laps.jsx";
import "./App.css";

// ------------------------------------- //

export default function IPhoneScreen() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [lapNumber, setLapNumber] = useState(1);
  const [lapTimes, setLapTimes] = useState([]);

  const insertNewLaps = (lapNumber) => {
    if (lapNumber >= 2) {
      const listLaps = [...lapTimes].map((lapTime, index) => (
        <tr>
          <td>{`Lap ${index}`}</td>
          <td>{transformTime(lapTime)}</td>
        </tr>
      ));
      return <tbody>{listLaps}</tbody>;
    }
  };

  return (
    <div>
      <Timer elapsedTime={elapsedTime} />
      <ActionButtons
        setElapsedTime={setElapsedTime}
        elapsedTime={elapsedTime}
        lapNumber={lapNumber}
        setLapNumber={setLapNumber}
      />
      <Laps elapsedTime={elapsedTime} lapNumber={lapNumber} />
    </div>
  );
}
