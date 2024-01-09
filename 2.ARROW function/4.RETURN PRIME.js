// 4. Return of all prime in an array using

const primeNum = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primes = primeNum.filter((primeNum) => {
    if (primeNum < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(primeNum); i++) {
        if (primeNum % i === 0) {
            return false;
        }
    }

    return true;
});

console.log(primes);