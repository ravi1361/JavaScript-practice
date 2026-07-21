// early return pttern 

function rps(user,computer){
  if(user===computer) return "draw" ;

  if(user==="rock" && computer==="scissor");
  if(user==="scissor" && computer==="paper");
  if(user==="paper" && computer==="rock");
  return "computer" ;
}

console.log(rps("scissor","rock"));
