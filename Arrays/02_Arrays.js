let arr = [23, 12, 10, 34];
let target = 22;

function checkTarget () {
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i]+arr[j]==target) {
                return true;
            }
        }
    }
    return false;
}

// console.log(checkTarget());

let left = 0;
let right = 1;

// for(let i=0; i<arr.length; i++) {
//     if(arr[left]+arr[right]==target) {
//         console.log(arr[left], arr[right]);
//         break;
//     } else {
//         right++;
//     }
// }