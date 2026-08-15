// find

let arr = [
  {id:1, key:1},
  {id:2, key:2},
  {id:3, key:1}
];

let va = arr.find(function(val){
  return val.key === 1;
})