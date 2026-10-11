
let generate = document.querySelector("#generate");
let palette = document.querySelector("#palette");

function generateColor() {
  let number = Math.floor(Math.random() * 16777216);
  return "#" + number.toString(16).padStart(6, "0");
}

function showColors() {
  palette.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    let color = generateColor();

    let card = document.createElement("div");
    card.className = "color-card";

    let box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;

    let code = document.createElement("div");
    code.className = "color-code";
    code.textContent = color;

    let copy = document.createElement("button");
    copy.textContent = "Copy";

    copy.addEventListener("click", async function () {
      try {
        await navigator.clipboard.writeText(color);
        copy.textContent = "Copied!";
      } catch {
        copy.textContent = "Copy unavailable";
      }
    });

    card.append(box, code, copy);
    palette.appendChild(card);
  }
}

generate.addEventListener("click", showColors);

showColors();
