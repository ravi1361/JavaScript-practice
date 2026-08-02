// first class functions

function abcd(val){
  val();
}


abcd(function(){
  console.log("hey");
});