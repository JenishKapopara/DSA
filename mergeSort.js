function mergeSort(arr) {
  if (arr.length <= 1) return arr;   // base case

  let mid = Math.floor(arr.length / 2);

  // split into two arrays manually
  let left = [];
  let right = [];
  for (let i = 0; i < mid; i++) left.push(arr[i]);
  for (let i = mid; i < arr.length; i++) right.push(arr[i]);

  // recursive sort
  left = mergeSort(left);
  right = mergeSort(right);

  // merge step
  let result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }

  // add remaining elements
  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);

  return result;
}

// Example
console.log(mergeSort([64, 25, 12, 22, 11])); // [11, 12, 22, 25, 64]
