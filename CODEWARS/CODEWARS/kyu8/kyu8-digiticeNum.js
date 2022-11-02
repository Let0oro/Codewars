'use strict'

function digitize(n){
    return Array.from(n.toString(), (x) => Number(x)).reverse()
//    return n.toString().split('').reverse().map((x) => Number(x))
}

console.log(digitize(23456));

// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
//   }