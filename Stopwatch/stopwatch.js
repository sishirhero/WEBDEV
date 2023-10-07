const timeDisplay = document.querySelector(".time");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");
const lapBtn = document.querySelector(".lap");
const clearBtn = document.querySelector(".clear");
const lapsList = document.querySelector(".laps");

let timerId;
let startTime = 0;
let elapsedTime = 0;
const laps = [];

function startTimer() {
    startTime = performance.now() - elapsedTime;
    timerId = setInterval(updateTime, 10);
    toggleButtons(true, false, false, false);
}
function updateTime() {
    elapsedTime = performance.now() - startTime;
    timeDisplay.textContent = formatTime(elapsedTime);
}
function pauseTimer() {
    clearInterval(timerId);
    toggleButtons(false, true, true, true);
}
function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    startTime = 0;
    elapsedTime = 0;
    timeDisplay.textContent = "00:00:00:00";
    laps.length = 0;
    lapsList.innerHTML = "";
    toggleButtons(false, true, true, true);
}
function recordLap(){
    if (timerId) {
      const lapTime = formatTime(elapsedTime);
      laps.push(lapTime);
      const lapItem = document.createElement("li");
      lapItem.textContent = lapTime;
      lapsList.appendChild(lapItem);
    }
}
function formatTime(time) {
    const ms = Math.floor(time % 1000 / 10).toString().padStart(2, "0");
    const s = Math.floor(time / 1000 % 60).toString().padStart(2, "0");
    const m = Math.floor(time / 60000 % 60).toString().padStart(2, "0");
    const h = Math.floor(time / 3600000 % 24).toString().padStart(2, "0");
    return `${h}:${m}:${s}:${ms}`;
}
function toggleButtons(start, pause, reset, lap) {
    startBtn.disabled = start;
    pauseBtn.disabled = pause;
    resetBtn.disabled = reset;
    lapBtn.disabled = lap;
}
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", recordLap);
clearBtn.addEventListener("click", resetTimer);



 
  