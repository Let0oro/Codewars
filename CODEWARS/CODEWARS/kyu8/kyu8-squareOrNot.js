'use strict'
// const squareOrSquareRoot = (array) => {
//     let sol = new Array();
//     array.forEach(x => {
//         let raiz = (Math.sqrt(x));
//         if((raiz - parseInt(raiz)) == 0){
//           sol.push(raiz);
//         }else{
//           sol.push(Math.pow(x, 2));
//         };
//     });
//     return sol;
// }

let array = [4, 3, 9, 7, 2, 1];
squareOrSquareRoot(array);

const squareOrSquareRoot = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));
// .map es literalmente igual que .forEach
// 5%1 == 0 // 5%1 != 0
//todo/ se puede hacer un if con: ?(si se da) :(si no se da).