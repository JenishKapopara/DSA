function lenearSearch(nums,target) {
    for(let i=0;i<nums.length;i++){
        if(nums[i] == target){
            return `Target is found at position ${i+1}`;
        }
    }
    return `Target is not found`
}

console.log(lenearSearch([5,6,3,4,9,7],6));    