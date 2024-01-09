//1.	Print odd numbers in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let printOddNumbers = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};
// Call the anonymous function
printOddNumbers(numbers);


