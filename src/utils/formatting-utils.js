export default function transformTime(elapsedTime) {
  return `${addPadStart(Math.floor(elapsedTime / 6000))}:${addPadStart(
    Math.floor((elapsedTime / 100) % 60)
  )}.${addPadStart(elapsedTime % 100)}`;
}

function addPadStart(time) {
  return time.toString().padStart(2, "0");
}
