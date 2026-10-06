let password = document.querySelector("#password");
let toggle = document.querySelector("#toggle");

toggle.addEventListener("click", function () {

  if (password.type === "password") {

    password.type = "text";
    toggle.textContent = "Hide";

  } else {

    password.type = "password";
    toggle.textContent = "Show";

  }

});