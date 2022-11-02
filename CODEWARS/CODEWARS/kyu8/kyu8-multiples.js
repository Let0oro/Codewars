'use strict'

//const findMultiples = (integer, limit) => {
    // let ar = [integer];
    // for (let i = 2; ar[ar.length-1] < limit; i++){
    //     ar.push(integer*i);
    // }
    // if(ar[ar.length-1] != limit){
    //     ar.pop();
    // }
    // return ar;
//}

//function findMultiples(int,limit){
    // return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
//?    return Array(Math.floor(limit/int)).fill(1).map((p(currentvalue), i(indexnumber)) => int*(i+1));
    // 1.) Crea un array cuya longitud será el cociente entre número límite y el inicial (9/3 = 3, 
    // pero es que los múmtiplos son 3, 6, 9, exactamente tres números) Ese cociente se ('echará 
    // al suelo') truncará hacia abajo, ya que 10/3 = 3,3 y 11/3 = 3,6, nunca llega al 4 ni baja del
    // 3, por lo que se sigue cumpliendo la ley anterior.

    // 2.) Rellena esos huecos en el array que solo tiene longitud, no datos, y recorre el array 
    // dando al valor, el resultado de la multiplicación entre el número inicial dado y su índice más uno
//}

console.log(findMultiples(2, 7));  


function findMultiples(int, limit) {
    return Array.from({length: parseInt(limit/int)}, (_,i)=> (i+1)*int )
}


// const findMultiples=(n,l)=>Array.from({length:~~(l/n)},(a,i)=>i*n+n);
// ~~ -> parseInt???


//! FROM:
const range = (start, stop, step) => Array.from({length: ~~((stop-start)/step+1)}, (v,i) => start + (i*step)) 