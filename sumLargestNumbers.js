// Create a function named sumLargestNumbers 
// that will receive an array of numbers and 
// return the sum of the two largest numbers 
// in that array.

function sumLargestNumbers(data) {
  data.sort(function (a, b) {
    return a - b;
  });
  var array = [];
  for (var i = data.length - 2; i <= data.length - 1; i++) {
    array.push(data[i]);
  } 
  return array[0] + array[1];
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]))