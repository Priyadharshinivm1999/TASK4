// 7. Rotate an array by k times

function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  
const rotatedArray = (function rotateArray(arr, k) {
    
    if (k < 0 || k >= arr.length) {
      return arr;
    }
  
    
    reverse(arr, 0, arr.length - 1);
  
    
    reverse(arr, 0, k - 1);
  
    
    reverse(arr, k, arr.length - 1);
  
    return arr;
  })([1, 2, 3, 4, 5],2);
console.log(rotatedArray);