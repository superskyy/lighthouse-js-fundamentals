const instructorWithLongestName = function(instructors) {
  // Put your solution here
  var longest = "";
  for (var i = 0; i < instructors.length; i++) {
  	if (longest.length < instructors[i].name.length) {
  	 	longest = instructors[i].name;
  	 	// var index = instructors.indexOf(instructors[i].name);
  	 	// return longest;
  	}
  }
  return longest;
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