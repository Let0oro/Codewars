'use strict'
// function disemvowel(str) {
//     return str.length == 0 ? "" : str.match(/[^aeiouAEIOU]/g).join('')
// }
console.log(disemvowel(""))

const disemvowel = str => str.replace(/[aeiou]/gi,'');