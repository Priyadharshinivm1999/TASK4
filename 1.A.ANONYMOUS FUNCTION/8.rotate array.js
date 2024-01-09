// 7. Rotate an array by k times

const rotateArray = (arr, k) => {
    const rotationIndex = k % arr.length;

    return (function() {
        return arr.slice(rotationIndex).concat(arr.slice(0, rotationIndex));
    })();
};

const array = [1, 2, 3, 4, 5];
const k = 3;
const rotatedArray = rotateArray(array, k);
console.log(rotatedArray);