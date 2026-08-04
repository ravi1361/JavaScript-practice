// Higher order functions

function abcd(){
  return function(){
    console.log("hey");
  }
}

abcd()();