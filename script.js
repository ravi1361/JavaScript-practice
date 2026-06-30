  

 function abcd(a){
  a();
 }

 // abcd functions ko call kiya, aur inke andar as a arguments functions ko bhej diya 
 abcd(function(){console.log("hello");})