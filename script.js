// "this" keyword in eventlistener
// this keyword is equals to whatever written before addEventListener

var button = document.querySelector("button");
button.addEventListener("click", function(){
  console.log(this);
  this.style.color = "red" ;
})