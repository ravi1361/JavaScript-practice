// sync async

// sync code main stack mein aata hai
// async code side stack mein aata hai
// after abolishing all these event loop, side stack se cheejo ko main stack me laata hai

console.log("hey");
console.log("hey2");
setTimeout(function(){
  console.log("hey3");
},0)
console.log("hey4");


