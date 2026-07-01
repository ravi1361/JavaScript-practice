// how to delete object properties

var a = {
  name: "harsh",
  age: 24
}

delete a.age ; // age property will be deleted from above object
delete a.name ; // name property will be deleted from above object

// output will be an empty object ---> {}