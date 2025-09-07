
function bubbleSortRecursion(nums,ln = nums.length) {
    if (ln === 1) return nums;

    for (let i = 0; i < ln - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
      }
    }

    return bubbleSortRecursion(nums, ln - 1);
}

console.log(bubbleSortRecursion([64, 25, 12, 22, 11])); // [11, 12, 22, 25, 64]