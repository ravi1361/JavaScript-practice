
let km = document.querySelector("#km");
let convert = document.querySelector("#convert");
let meters = document.querySelector("#meters");
let centimeters = document.querySelector("#centimeters");

convert.addEventListener("click", function () {
  if (km.value.trim() === "" || Number(km.value) < 0) {
    meters.textContent = "Please enter a valid distance.";
    centimeters.textContent = "";
    return;
  }

  let distance = Number(km.value);

  meters.textContent = "Meters: " + distance * 1000;
  centimeters.textContent = "Centimeters: " + distance * 100000;
});
