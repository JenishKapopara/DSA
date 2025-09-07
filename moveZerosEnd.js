function moveZeroes(nums) {
    let j = 0;
    while(j != nums.length){
        for(let i=1;i<nums.length;i++){
            if(nums[i-1] == 0){
                let temp = nums[i];
                nums[i] = nums[i-1];
                nums[i-1] = temp;
            }
        }
        j++;
    }
    return nums
}

console.log(moveZeroes([0,2,3,0,5,1,]));    