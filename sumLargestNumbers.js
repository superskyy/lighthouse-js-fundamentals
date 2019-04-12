// Create a function named sumLargestNumbers 
// that will receive an array of numbers and 
// return the sum of the two largest numbers 
// in that array.

let sumLargestNumbers = function(data) {
  var largest = [];
  return Math.max(...data)
  // for (var i = 0; i < data.length; i++) {
  // 	data[i]
  // }
};



console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));