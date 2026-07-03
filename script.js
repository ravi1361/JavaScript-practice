// call
// we can send more than 2 arguments while calling function 
function abcd(val1,val2,val3){
  console.log(this,val1,val2,val3);
}

var obj = {age:24}

abcd.call(obj,1,2,3)