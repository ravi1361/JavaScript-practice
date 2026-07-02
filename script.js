// iife -- immediately invoked function expression 


 //iife

var ans = (function(){
  var privateval = 12 ;
  return {
    getter: function(){
      console.log(privateval);
    },
    setter: function(){   // setter value maangta hai
      privateval = val ;   // jo bhi value bhejoge wo set ho jayega
    }
  }
}) ()


// output will be like this
// > ans.setter(24)
// <. undefined

// ans.getter()
// 24
