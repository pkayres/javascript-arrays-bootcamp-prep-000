var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]; 

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,element){
 array.unshift(element)
 return array
}


function addElementToEndOfArray(array,element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array,index){ 
  array[2];
  return array
} 

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(array)
  return array
  
}

function removeElementFromBeginningOfArray(array){
  array.slice[1]
  return array
} 
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop[3]
  return array
}
function removeElementFromEndOfArray(array){
  array.slice[0]
  array.length[2]
  return array
}
