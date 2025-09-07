function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j< arr.length-i;j++){
            if(arr[j+1] < arr[j]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}

let arr = [11,44,33,22,66,55];
console.log(bubbleSort(arr));
