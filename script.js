// object.entries

const course = {
  title: "Javascript",
  duration:"4 weeks"
} 

Object.entries(course).forEach(function(val){
  console.log(val[0] + ":" + val[1]);
  
})