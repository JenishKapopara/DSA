function largestElement(nums) {
    let max = 0;
    let secondMax = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= max){
            secondMax = max;
            max = nums[i];  
        }
        
    }
    return secondMax;
}

console.log(largestElement([12,36,15,84,56,95,45,75]));
