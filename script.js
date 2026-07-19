// early return pttern 

function getVal(val){
  if(val<100) return 'A' ;
  else if(val<75) return 'B';
  else if(val<50) return 'C' ;
  else return 'D' ;
}

console.log(getVal(12));
