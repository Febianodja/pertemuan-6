function firstNonConsecutive (arr) {
    let numArray = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i+1] !== arr[i]+1){
            numArray.push(arr[i+1]);
        }
    }
    if(numArray[0] !== undefined){
        return numArray[0];
    } else {
        return null;
    }
}

console.log(firstNonConsecutive([1,2,3,4,5,6,7,8]))
console.log(firstNonConsecutive([-9,-8,-7,-5,-4,-3,-1]))