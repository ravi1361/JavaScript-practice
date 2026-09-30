let password = document.querySelector("#password");
let generate = document.querySelector("#generate");

let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

generate.addEventListener("click", function () {
  let result = "";

  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);

    result += characters[randomIndex];
  }

  password.value = result;
});