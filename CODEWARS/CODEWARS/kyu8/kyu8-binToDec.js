'use strict'

//const binToDec = (bin) => (Array.from(bin).reverse()).map((v, i) => v != 0 ? v = Math.pow(2, i) : v = 0 ).reduce((a,b) => a+b)
const binToDec = bin => parseInt(bin,2); // la base 2 implica que el número tendrá una base "binaria"

console.log(binToDec("1001001"));