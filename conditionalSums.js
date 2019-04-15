const conditionalSum = function(values, condition) {
	var total = 0;
	for (var i = 0; i < values.length; i++) {
		if (values[i] % 2 === 0 && condition === "even") {
			total = total + values[i];
		} else if (values[i] % 2 !== 0 && condition === "odd") {
			total = total + values[i];
		}
	}
	return total;
};
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));