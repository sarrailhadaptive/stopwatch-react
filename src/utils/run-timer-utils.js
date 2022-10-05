// let startTime = 0;
// let elapsedTime = 0;
let timerId = undefined;

import transformTime from "./formatting-utils";
import { useState } from "react";

export default function runTimer(timestamp) {
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  if (startTime === 0) startTime = timestamp;
  elapsedTime = Math.floor(timestamp - startTime);
  transformTime(elapsedTime);
  timerId = requestAnimationFrame(runTimer);
}
