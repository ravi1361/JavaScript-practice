
let dob = document.querySelector("#dob");
let calculate = document.querySelector("#calculate");
let result = document.querySelector("#result");

dob.max = new Date().toLocaleDateString("en-CA");

calculate.addEventListener("click", function () {
  if (dob.value === "") {
    result.textContent = "Please select your date of birth.";
    return;
  }

  let birthDate = new Date(dob.value + "T00:00:00");
  let today = new Date();

  if (birthDate > today) {
    result.textContent = "Date of birth cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    let previousMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    );
    days += previousMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.textContent =
    `Your age is ${years} years, ${months} months, and ${days} days.`;
});
