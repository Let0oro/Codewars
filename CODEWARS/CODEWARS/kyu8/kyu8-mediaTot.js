'use strict'
// const betterThanAverage = (classPoints, yourPoints) => {
//     let sum = 0;
//     // for (let i = 0; i < classPoints.length; i++){
//     //     suma_classPoints += classPoints[i];
//     // }
//     classPoints.map(x => sum += x);
//     return (sum / classPoints.length) > yourPoints ? false : true;
// }

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > (classPoints.reduce((a, b) => a + b) / classPoints.length);
}

console.log(betterThanAverage([3, 5, 10], 4));
/*
[0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
  return valorAnterior + valorActual;
});

/ Primera llamada
valorAnterior = 0, valorActual = 1, indice = 1

/ Segunda llamada
valorAnterior = 1, valorActual = 2, indice = 2

/ Tercera llamada
valorAnterior = 3, valorActual = 3, indice = 3

/ Cuarta llamada
valorAnterior = 6, valorActual = 4, indice = 4

/ el array sobre el que se llama a reduce siempre es el objeto [0,1,2,3,4]

/ Valor Devuelto: 10
*/

const frase = ((a, b, c) => a + b + c);

console.log(frase('hola ', 'muy ', 'buenas'));