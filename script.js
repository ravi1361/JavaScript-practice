// constructor function

// normal function jisme "this" ka istemaal ho and aap function ko call karte waqt "new" keyword ka use karre

// jabke aaple paas aisa koi bhi mauka ho ke aapko ek jaise properties waale bahutt saare elements banane hai us waqt aap constructor function use kar sakte ho


function circularButtonBanao(color){
  this.radius = 2 ;
  this.color = color ;
  this.icon =  false;
  this.pressable = true;
}


var redbtn = new circularButtonBanao("red");
var greenbtn = new circularButtonBanao("green");
