function insertionSort(arr,ln = arr.length){
    for(let i = 0; i < ln; i++){
        for(let j = i; j > 0;j--){
            if(arr[j-1] > arr[j]){
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
    }
    return insertionSort(arr,ln-1)
}
console.log(([11,44,33,22,66,55]));
