const instructorWithLongestName = function(instructors) {
  // Put your solution here
  var array = "";
  for (var i = 0; i > instructors.length; i++) {
  	if (instructors[i].length > array) {
  		array = instructors[i].length;
  		return array;
  	}
  }
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));