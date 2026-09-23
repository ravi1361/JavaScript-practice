let position = document.querySelector("#position");

window.addEventListener("mousemove", (event) => {
  position.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
});