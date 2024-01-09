//4. RETURN ALL THE PRIME NUMBERS IN AN ARRAY
function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const primeNumbers = (function (arr) {
    const primeNumbers = [];
    for (const num of arr) {
      if (isPrime(num)) {
        primeNumbers.push(num);
      }
    }
    return primeNumbers;
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(primeNumbers);
  