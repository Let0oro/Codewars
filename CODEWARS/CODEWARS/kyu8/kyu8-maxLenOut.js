'use strict'
const solution = (a, b) => (a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`) ;
console.log(solution('45', '1'));