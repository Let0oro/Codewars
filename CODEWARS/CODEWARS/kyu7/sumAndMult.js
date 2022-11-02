// const sumAndMultiply = (sum, multiply) =>{ 

//     let x = (sum - Math.sqrt(sum*sum - 4*multiply))/2;
//     let y = (sum + Math.sqrt(sum*sum - 4*multiply))/2;
//     return /^([0-9]{1}|[0-9]{2}|[0-9]{3})$/.test(x+'' && y+'') ? [ x , y ] : null

// }

const sumAndMultiply = (sum, multiply, x=0, y=sum-x) => x*y==multiply ? [x,y] : y<x ? null : sumAndMultiply(sum, multiply, x+1)

// const sumAndMultiply = (sum, multiply) =>
//   (val =>  sum % 2 === val % 2 ? [sum - val >> 1, sum + val >> 1] : null)
//   ((sum ** 2 - 4 * multiply) ** .5);

console.log(sumAndMultiply(13, 12));
