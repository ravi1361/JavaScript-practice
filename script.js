// apply
// apply will take only 2 arguments 
function abcd(val1,val2,val3){
  console.log(this,val1,val2,val3);
}

var obj = {age:24}

abcd.apply(obj,[1,2,3])