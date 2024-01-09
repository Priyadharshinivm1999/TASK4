//3.Sum of all numbers in an array

let sumArr = (function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
    sum = sum+arr[i]; 
    } 
    return sum;
})([1,2,3,4,5,6,7,8,9,10]);
console.log(sumArr);

