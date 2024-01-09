// 3. sum of all numbers in an array using

const num = [1, 2, 3, 4, 5];

const sum = num.reduce((a, b) => {
    return a + b;
});

console.log(sum);
