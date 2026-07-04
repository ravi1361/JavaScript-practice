// bind

function abcd(){
   console.log(this);
   
}

var obj = {age:24};

var bindedfnc = abcd.bind(obj);

bindedfnc();