'use strict'

/*
En este Kata tienes que escribir una función que determine el número de cargadores que cada 
soldado debe tener en su bolsa.

Recibirás el arma y el número de calles que tienen que cruzar. Considerando que en cada 
calle el oficial dispara 3 veces. A continuación se muestra la relación de armas:

PT92 - 17 bullets
M4A1 - 30 bullets
M16A2 - 30 bullets
PSG1 - 5 bullets

Ejemplo: 
["PT92", 6] => 2 (6 calles de 3 balas cada una) 
["M4A1", 6] => 1
*/

// const magNumber = (info, str) => {
//     let armas = ['PT92', 'M4A1', 'M16A2', 'PSG1'];
//     let i = (armas.findIndex((x) => x == info));
//     let balas = [17, 30, 30, 5];
//     return (balas[i] < (3*str) ? (((str*3)/balas[i])) % 1 != 0 ? parseInt(((str*3)/balas[i]+1)) : ((str*3)/balas[i]) : 1)
// }

const magNumber = (info) =>{
    let arr = {'PT92': 17, 'M4A1':30 , 'M16A2' : 30 , 'PSG1': 5 };
    return Math.ceil(3*info[1]/arr[info[0]])
}

console.log(magNumber(['PT92', 6]));
// console.log(magNumber('PT92', 791));
// console.log(magNumber('M4A1', 71));
// console.log(magNumber('PT92', 222));
// console.log(magNumber('M16A2', 31));
// console.log(magNumber('M4A1', 81));
// console.log(magNumber('PSG1', 21));
// console.log(magNumber('PT92', 7));
// console.log(magNumber('M4A1', 777));
// console.log(magNumber('PT92', 71));
// console.log(magNumber('M16A2', 91));