//let ,const is braces scoped 

function abcd(){
  for(let i=0; i<12; i++){
    console.log(i);
  }
  console.log(i);
  
}

abcd();