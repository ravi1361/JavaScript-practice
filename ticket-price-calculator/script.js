
let age = document.querySelector("#age");
let calculate = document.querySelector("#calculate");
let result = document.querySelector("#result");

calculate.addEventListener("click", function () {
  let userAge = Number(age.value);

  if (age.value.trim() === "" || userAge <= 0) {
    result.textContent = "Please enter a valid age.";
  } else if (userAge < 12) {
    result.textContent = "Your ticket price is ₹100";
  } else if (userAge < 18) {
    result.textContent = "Your ticket price is ₹150";
  } else {
    result.textContent = "Your ticket price is ₹200";
  }
});
