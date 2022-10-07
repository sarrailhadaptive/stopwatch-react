import { useEffect, useState } from "react";
import Timer from "./components/Timer/Timer.jsx";
import ActionButtons from "./components/ActionButtons/ActionButtons.jsx";
import Laps from "./components/Laps/Laps.jsx";
import "./App.css";

// ------------------------------------- //

export default function IPhoneScreen() {
  let [elapsedTime, setElapsedTime] = useState(0);

  return (
    <div>
      <Timer elapsedTime={elapsedTime} />
      <ActionButtons
        setElapsedTime={setElapsedTime}
        elapsedTime={elapsedTime}
      />
      <Laps elapsedTime={elapsedTime} />
    </div>
  );
}
