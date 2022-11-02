'use strict'
// const capitalizeWord = (word) => {
//     word[0].toUpperCase();
//     return arr.join('')
// }

const capitalizeWord = (word) => word[0].toUpperCase() + word.slice(1);

console.log(capitalizeWord('palabra'));