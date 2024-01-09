// 5. Return median of two sorted arrays of the same size

const median = (function (arr1, arr2) {
    
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  
    
    const middleIndex = mergedArray.length / 2;
  
    
    if (mergedArray.length % 2 === 0) {
      return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
    }
  
    
    return mergedArray[middleIndex];
  })([1, 3, 5] ,[2, 4, 6]);

console.log(median);
