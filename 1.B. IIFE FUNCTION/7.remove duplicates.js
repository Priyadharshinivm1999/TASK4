// 7. Remove duplicates from an array

let DuplicateRemoval = (function (arr) {
        let unique = [];
        for(i=0; i < arr.length; i++){
            if(unique.indexOf(arr[i]) === -1) { 
                unique.push(arr[i]); 
            } 
        }
        return unique;
    })([1,2,3,6,3,4,1,5,2,6,3]);
    console.log(DuplicateRemoval);
