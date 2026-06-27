// how to copy reference values

var a = [1,2,3,4,5];
var b = [...a];   // spread operator

b.pop();



// b will have [1,2,3,4] 
// a will have [1,2,3,4,5] , because b copied the values 