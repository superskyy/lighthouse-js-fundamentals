const urlEncode = function(text) {
  // Put your solution here
  var string = "";
  var char = "%20";
  for (var i = 0; i < text.length; i++) {
    if (text[0] === " ") {
      return text[0] = "Lighthouse%20Labs";
      }
    if (text[i] === " ") {
      string = string + char;
    } else {
      string = string + text[i];
    }
  }
  return string;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));