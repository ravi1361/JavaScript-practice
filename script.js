// constructor function

// normal function jisme "this" ka istemaal ho and aap function ko call karte waqt "new" keyword ka use karre

// jabke aaple paas aisa koi bhi mauka ho ke aapko ek jaise properties waale bahutt saare elements banane hai us waqt aap constructor function use kar sakte ho


function saanchaOfBiscuit(){
  this.width = 12 ;
  this.height = 22 ;
  this.color =  "brown" ;
  this.taste = "sugary";
}


var bis1 = new saanchaOfBiscuit();
var bis2 = new saanchaOfBiscuit();
var bis3 = new saanchaOfBiscuit();