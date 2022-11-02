'use strict'

const solution =(l)=>{
    return Array.from({length:~~((l-1)/3)},(a,i)=>i*3+3).filter(x => x/5 != ~~(x/5)).concat(Array.from({length:~~((l-1)/5)},(a,i)=>i*5+5)).reduce((p,n) => p+n, 0)
}


// function solution(number){
//     let _3 = Array(Math.floor(number/3)).fill(1).map((v,i) => 3*(i+1));
//     let _5 = Array(Math.floor(number/5)).fill(1).map((v,i) => 5*(i+1));
//     let ar = _3.concat(_5);
//     return ar    //test(/[3]/gi)
//     return ar.map(v => ar.search(v) ? 0 : v)
// }

console.log(solution(10));



// let myarray = new Set([0,1,2,3,4,5,6,7,8,9,10, 10, 10,11]);
// return myarray

// function solution(number){

//     //filtrar lo de uno con lo de otro (adios a los sobrantes) y concatenarlo

//     let _3 = Array(Math.floor(number/3)).fill(1).map((v,i) => 3*(i+1));
//     let _5 = Array(Math.floor(number/5)).fill(1).map((v,i) => 5*(i+1));
//     let ar = _3.concat(_5);
//     return ar.sort((a,b) => a - b).map((x,i) => ar[i+1] == ar[i] ? 0 : x).filter(v => v > 0 && v < number)//.reduce((p, n) => p+n)  
// }

// const solution = number =>{
//     let _3 = Array(Math.floor((number-1)/3)).fill(1).map((v,i) => 3*(i+1));
//     let _5 = Array(Math.floor((number-1)/5)).fill(1).map((v,i) => 5*(i+1));
//     return _3.filter(x => x != _5.map(n => n)).concat(_5)
// }

// let x = 1; 


// const solution = number =>{

//     let sum5 = 0, sum3 = 0;
//     for(let i = 1; i < ((number)/5); i++){
//         sum5 += 5*i;
//     }
//     for(let i = 1; i < ((number)/3); i++){
//         sum3 += 3*i;
//     }
//     return sum5+sum3

// }
// console.log(solution(10)); // (10) -> sol: 23







// 5,10,15 (length = 3) (+ = 30)
// 3+2+1 = 6; 5*6 = 30
//5*3 + 5*2 + 5*1 + 5*0 = no tenemos que hacer el array anterior
// 5+ 5+5+ 5+5+5
// lenght = 1 (+ = 5) 5*1 + 5*0 / / / / 5*1
// lenght = 2 (+ = 15) 5*2 + 5*1  / / / / 5*3 [diferencia con lo anterior = 2]
// lenght = 3 (+ = 30)  5*3 + 5*3 / / / / 5*6 [3]
// length = 4 (+ = 50) 5*4 + 5*5 / / / / 5*10 [4]
// length = 5 (+ = 75) 5*5 + 5*10 / / / / 5*15 [5]
// length = 6 (+ = 105) 5*6 + 5*15/ / / / 5*21 [6]
// length = 7 (+ = 140) 5*7 + 5*21/ / / / 5*28 [7]




























// cada 3 multiplos de 5, surgen 5 múltiplos de 3
// Array()
//1-16 -> 3,6,9,12,'15' (5 numeros) + 5,10,15 (3 numeros) = 3,5,6,9,10,12
//1-15 -> x3 = 4num; x5 = 2num; x3+x5 = 6 num
//1-19 -> x3 = 6num; x5 = 3num; x3+x5 = 8num
//1-20 -> x3 = 6num; x5 = 3num; x3+x5 = 8num
//1-21 -> x3 = 6num; x5 = 4num; x3+x5 = 9num



    // return [...new Set
    //     ([3,5].map((q,e)=> 
    //     new Array(Math.floor((number-1)/q))
    //     .fill(1).map((v,i) => q*(i+1)%5 == 0 ? v : .))
    //     .reduce((p, n) => p+','+n)
    //     .split(',')
    //     .map(n => Number(n)))]
    //     .reduce((a,b) => a+b)
    // return Array(Math.floor(number/3 || number/5)).fill(1).map((v,i) => 3*(i+1)).reduce((p, n) => p+n)
    //return [1,1,1,1,1].map((v,i) => 3*(i+1)%5 != 0 ? v : 5*(Math.floor((i/5)+1)))

