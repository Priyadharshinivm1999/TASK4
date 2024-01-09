//5.	Return all the palindromes in an array

function Palindrome(str) {
    
    const filteredStr = str.toLowerCase().replace(/\s/g, '');
  
   
    return filteredStr === filteredStr.split('').reverse().join('');
  }
  
  const palindromesResult = (function (arr) {
    
    const palindromes = [];
  
    
    for (const str of arr) {
      if (Palindrome(str)) {
        palindromes.push(str);
      }
    }
  

    return palindromes;
  })(['noon','god','racecar', 'madam', 'level', 'hello']);
  
  console.log(palindromesResult);