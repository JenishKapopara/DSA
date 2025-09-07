function missedElement(arr){
    let n = arr.length;
    let expectedSum = 0;
    let actualSum = 0;
    for (let i = 1; i <= n; i++) {
        expectedSum += i;
    }

    for (let i = 0; i < n; i++) {
        actualSum += arr[i];
    }

    let missig = expectedSum - actualSum;

    return missig;    
}

console.log(missedElement([0,1,2,4,5]));
