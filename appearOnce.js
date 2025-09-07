function appearOnce(nums) {
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
        if (count === 1) {
            return nums[i];
        }
    }
}

console.log(appearOnce([1,2,4,2,3,1,4]));