
function quickSort(arr) {
    if (arr.length <= 1) return arr; // base case

    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    // another way: build result step by step
    let result = [];
    result.push(...quickSort(left));
    result.push(pivot);
    result.push(...quickSort(right));

    return result;
}

console.log(quickSort([64, 25, 12, 22, 11])); // [11, 12, 22, 25, 64]