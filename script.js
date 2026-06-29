// forEach loop

// forEach loop is for array

var a = [1,2,23,34,4,45];


// the copy of array comes here , not the original array
a.forEach(function(val){
  console.log(val+2); // it added in temporary copy , it won't reflect in real array
  
})