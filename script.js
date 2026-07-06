// callbacks

// callback hamesha ek function hota hai , 
// ye sirf tab chalta hai jab async code ka completion hojaata hai

var ans = new Promise((res,rej) => {
 if(false){
  return res();
 }else{
  return rej();
 }
})


ans
.then(function(){
  console.log("resolve hogaya tha");
})
.catch(function(){
  console.log("reject hua tha");
  
})
