
let moods = document.querySelectorAll(".mood");
let result = document.querySelector("#result");

moods.forEach(function (button) {
  button.addEventListener("click", function () {
    let mood = button.dataset.mood;

    result.textContent = "Your mood is: " + mood;
  });
});
