function maxOnes(nums) {
    let count = 0;
    let max = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] == '1'){
            count++;
            if(max < count){
                max = count;
            }
        }else{
            count = 0;
        }
    }
    return max
}


console.log(maxOnes([1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0]));  