const countPositivesSumNegatives = input =>{

    return ( input[0] == undefined || input === null ? [] : [input.filter(x => x > 0).length, input.filter(n => n < 0).reduce((p, n ) => p + n, 0)])
}
console.log(countPositivesSumNegatives([]));


// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }