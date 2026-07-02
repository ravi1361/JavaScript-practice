// "this" keyword

// "this" values in:
// 1) global ---- window
// 2) function -- window
// 3) method ---- object

// 1) global scope
// console.log(this) // gives window in console


// 2) function scope
//  function abcd(){
//    console.log(this);
// }
// abcd();              // gives window in console

// 3) method scope
var obj = {
  name: "harsh",
  baatKaro: function(){     // its a method
    console.log(this);
    
  }
}

obj.baatKaro();


//in any method , "this" keyword always refers to parent object