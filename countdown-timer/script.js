let minutesInput = document.querySelector("#minutes");
let start = document.querySelector("#start");
let reset = document.querySelector("#reset");
let timer = document.querySelector("#timer");

let interval;

start.addEventListener("click", function () {
  clearInterval(interval);

  let totalSeconds = Number(minutesInput.value) * 60;

  interval = setInterval(function () {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    timer.textContent =
      `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (totalSeconds <= 0) {
      clearInterval(interval);
      timer.textContent = "Time's up!";
    }

    totalSeconds--;
  }, 1000);
});

reset.addEventListener("click", function () {
  clearInterval(interval);
  timer.textContent = "00:00";
  minutesInput.value = "";
});