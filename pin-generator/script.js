
let pin = document.querySelector("#pin");
let generate = document.querySelector("#generate");
let copy = document.querySelector("#copy");
let message = document.querySelector("#message");

generate.addEventListener("click", function () {
  let number = Math.floor(Math.random() * 10000);

  pin.textContent = String(number).padStart(4, "0");
  message.textContent = "";
});

copy.addEventListener("click", async function () {
  if (pin.textContent === "----") {
    message.textContent = "Generate a PIN first!";
    return;
  }

  try {
    await navigator.clipboard.writeText(pin.textContent);
    message.textContent = "PIN copied!";
  } catch {
    message.textContent = "Copy unavailable in this browser.";
  }
});
