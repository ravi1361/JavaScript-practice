// call
// this will point to object here
function abcd(){
  console.log(this);
}

var obj = {age:24}

abcd.call(obj)