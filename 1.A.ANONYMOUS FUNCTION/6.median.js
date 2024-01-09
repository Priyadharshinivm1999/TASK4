// 5. Return median of two sorted arrays of the same size

const findMedian = (arr1, arr2) => {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const midIndex = Math.floor(mergedArray.length / 2);

    if (mergedArray.length % 2 === 0) {
        return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
    } else {
        return mergedArray[midIndex];
    }
};

const arr1 = [1, 7, 5];
const arr2 = [2, 4, 6];

const median = findMedian(arr1, arr2);
console.log(median);