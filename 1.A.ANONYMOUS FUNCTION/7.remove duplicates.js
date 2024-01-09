// 7. Remove duplicates from an array

const arr = [41, 12, 3, 4, 2, 12, 3, 5, 6, 21, 4, 5];

const uniqueArr = arr.filter(function(value, index) {
    return arr.indexOf(value) === index;
});

console.log(uniqueArr);
