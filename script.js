// deep clone

let obj = {
  name:"harsh",
  age:26,
  address:{
    city:"bhopal"
  },
}


let onj2 = JSON.parse(JSON.stringify(obj));