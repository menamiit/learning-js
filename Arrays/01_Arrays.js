let arr = [1, 2, 3, 4, 5, 6]

// reverse
let len = arr.length-1;
for(let i=len; i>=0; i--){
    // console.log(arr[i]);
}

// function to print array
function printArr (arr) {
    arr.forEach(element => {
        console.log(element);
    });
}


let left = 0;
let right = len;

while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
}

printArr(arr);

