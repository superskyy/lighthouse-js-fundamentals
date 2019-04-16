let numberOfVowels = function(data) {
  // Put your solution here
  var letters = ("");
  for (var i = 0; i < data.length; i++) {
  	if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
         letters++;
  	}
  }
  return letters;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));