//5.	Return all the palindromes in an array
let words = ["noon", "madam","apple", "radar", "banana", "civic"];

let findPalindromes = function(arr) {
  let palindromeArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].split('').reverse().join('')) {
      palindromeArray.push(arr[i]);
    }
  }
  return palindromeArray;
};

let palindromeArray = findPalindromes(words);
console.log(palindromeArray);
