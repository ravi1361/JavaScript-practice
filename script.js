// let,cost -- block scope hota hai
// var function scoped hota hai

if(true){
  var a = 1 ;
  let b = 2 ;
}
console.log(a);
console.log(b); // cannot access the ,let , outside the block

