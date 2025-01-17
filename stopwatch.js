let viewStopwatch = document.getElementById("display-stopwatch");
let isRuning = false;
let startTime = 0;
let timer;
let elapsedTime = 0;

function start() {
  if (!isRuning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRuning = true;
  }
}
function stop() {
  if (isRuning) {
    clearInterval(timer);
    isRuning = false;
  }
}

function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  viewStopwatch.textContent = `00:00:00:00`;
  isRuning = false;
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor((elapsedTime / 360000) % 60);
  let minutes = Math.floor((elapsedTime / 60000) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let miliseconds = Math.floor(elapsedTime % 100);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  miliseconds = String(miliseconds).padStart(2, "0");

  viewStopwatch.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;

  console.log(elapsedTime);
}
