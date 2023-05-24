var output = document.getElementById("output")
var clearAll = document.getElementById("clearAll")
var deleteLastNum = document.getElementById("deleteLastNum")
var equal = document.getElementById("equal")



function display(num){
  output.value += num
}


clearAll.onclick= function clear(){
  output.value = ""
}

deleteLastNum.onclick= function Delete(){
  output.value = output.value.slice(0,-1)
}

equal.onclick = function result(){
    output.value = eval(output.value)
}



// console.log(typeof typeof 1);
//   var x = Number ("ahhh")
//   console.log(x)

// console.log(0.1+0.3)
// console.log(0.1+0.3 == 0.3)


