let time = document.querySelector("#time");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let seconds = 0;
let interval;

function updateTime() {
  seconds++;

  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = seconds % 60;

  time.textContent =
    `${String(hours).padStart(2, "0")}:` +
    `${String(minutes).padStart(2, "0")}:` +
    `${String(remainingSeconds).padStart(2, "0")}`;
}

start.addEventListener("click", function () {
  clearInterval(interval);
  interval = setInterval(updateTime, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(interval);
});

reset.addEventListener("click", function () {
  clearInterval(interval);
  seconds = 0;
  time.textContent = "00:00:00";
});