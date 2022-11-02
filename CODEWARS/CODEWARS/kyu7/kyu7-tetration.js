'use strict'
// const tetration = (x,y) => {
//     return y == 0 ? 1 : Number((Array(y).fill(x).reduce((now, prev) => Math.pow(prev, now))))
//     //return y == 0 ? 1 : Number((Array(y).fill(x).reduce((now, prev) => prev ** now)))
// }

const tetration = (x, y) => !y ? 1 : x ** tetration(x, y-1);// si no hay y, se resuelve 1, si hay, 
//                                  se produce la elevación de 'x'^la propia función, siendo 'y' 
//                                  cada vez menos 1 hasta llegar a 0 
//                                  !Nueva forma de crear un bucle
console.log(tetration(4,0));

