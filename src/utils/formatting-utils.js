export default function transformTime(elapsedTime) {
  console.log(
    `${Math.floor(elapsedTime / 60000)}:${Math.floor(
      (elapsedTime / 1000) % 60
    )}.${Math.floor((elapsedTime / 10) % 100)}`
  );
}
