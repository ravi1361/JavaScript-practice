// let,cost -- block scope hota hai

let a = 10 ;

{
  let a = 20 ;
  console.log("Inside:",a);
}
console.log("outside",a);
