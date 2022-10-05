// LapResetButton
// StartStopButton

import transformTime from "../../utils/formatting-utils.js";
import "./ActionButtons.css";

// const [isTimerRunning, setIsTimerRunning] = useState(false);

export default function ActionButtons() {
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

// const [timer, setTimer] = useState(0);
let startTime = 0;
let elapsedTime = 0;
let timerId = undefined;

function runTimer(timestamp) {
  if (startTime === 0) startTime = timestamp;
  elapsedTime = Math.floor(timestamp - startTime);
  transformTime(elapsedTime);
  timerId = requestAnimationFrame(runTimer);
}
