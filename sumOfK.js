function appearOnce(nums,k) {
    let maxlen = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if(sum === k) {
                maxlen = Math.max(maxlen,j-i+1);
            }
        }
    }
    return maxlen
}

console.log(appearOnce([10,5,2,7,1,9],15));