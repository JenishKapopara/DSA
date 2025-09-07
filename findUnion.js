function lenearSearch(nums1,nums2) {
    let i = 0, j = 0;
    let result = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
                result.push(nums1[i]);
            }
            i++;
        } else if (nums1[i] > nums2[j]) {
            if (result.length === 0 || result[result.length - 1] !== nums2[j]) {
                result.push(nums2[j]);
            }
            j++;
        } else { // equal
            if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
                result.push(nums1[i]);
            }
            i++;
            j++;
        }
    }

    // add leftovers
    while (i < nums1.length) {
        if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
            result.push(nums1[i]);
        }
        i++;
    }
    while (j < nums2.length) {
        if (result.length === 0 || result[result.length - 1] !== nums2[j]) {
            result.push(nums2[j]);
        }
        j++;
    }

    return result;
}

console.log(lenearSearch([1,2,4,5],[4,6,7]));    