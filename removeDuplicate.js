function removeDuplicate(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i+1;
}

let nums = [0,1,1,2,2,3,4,4,5]
let k = removeDuplicate(nums)
console.log("deplicate element = ",(nums.length - k));
console.log(nums.slice(0,k));

