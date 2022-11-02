'use strict'

function positiveSum(arr) {
    return arr.map((x) => x < 0 ? 0 : x).reduce((a, b) => a + b, 0)
}

// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
// }

// function positiveSum(arr) {
//     return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
// }

console.log(positiveSum([]));