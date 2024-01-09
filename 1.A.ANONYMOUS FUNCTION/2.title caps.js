//2. Convert all the strings to title caps in a string array
let stringArray = ["apple", "banana", "orange", "grape"];

let convertToTitleCase = function(arr) {
  return arr.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
};

let titleCaseArray = convertToTitleCase(stringArray);
console.log(titleCaseArray);

