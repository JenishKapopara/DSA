//  ------------------ Only one element rotation -----------------

// function leftRotate(nums) {
//     let arr = []
//     for (let i = 0; i < nums.length; i++) {
//       if(i == nums.length-1){
//         arr[i] = nums[0];
//       }else{
//         arr[i] = nums[i+1];
//       }
//     }
//     return arr;
// }

// console.log(leftRotate([12,36,15,84,56,95,45,75]));


// -------------------- k number of rotation ------------------------


function leftRotate(nums,k) {
    k = k % nums.length;
    for (let step = 0; step < k; step++) {
        let first = nums[0];
        for(let i=1;i<nums.length;i++){
            nums[i-1] = nums[i]
        }
        nums[nums.length-1] = first;
    }
    return nums;
}

console.log(leftRotate([12,36,15,84,56,95,45,75],4));
