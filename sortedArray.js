function sortedArray(nums) {
    let count = 0
    let size = nums.length - 1;
    for (let i = 0; i < size; i++) {
      if(nums[i] <= nums[i+1]) count++
    }

    if(count == size){
        return true
    }else{
        return false
    }
}

console.log(sortedArray([1,2,3,4,5,6]));
