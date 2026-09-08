let h1 = document.querySelector("h1");

function dblClick(){
  h1.style.color = "yellow";
}

h1.addEventListener("dblclick", dblClick);
h1.removeEventListener("dblclick",dblClick);