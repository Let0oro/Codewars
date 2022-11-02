'use strict'
// si uno de los valores no es letra = -1
// si los dos caracteres son letras, pero uno es mayúscula y otro minúscula = 0
// si los dos caracteres son letras y los dos son mayúsculas = 1

// ! const sameCase = (a,b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1

// ! const sameCase = (a, b) => /[^a-z]/i.test(a + b) ? -1 : a === a.toLowerCase() ^ b === b.toUpperCase();






// const sameCase = (a, b) => ('a' > a && 'a' > b) ? 'son símbolos' :  ;
// console.log(sameCase("A", "0"));


// const sameCase = (a, b) => {

//     var m = a, 
//     n = b, 
//     letra = [m, n], 
//     sol = [];

//     for (let x = 0; x <= 1; x++) {

//     if(letra[0] === ':' || letra[1] === ':'){
//         letra[x] = -1;

//     }else if ('a' <= letra[x] && letra[x] <= 'z') { // letra minúscula
//         letra[x] = 0;

//     } else if ('A' <= letra[x] && letra[x] <= 'Z') { // letra mayúscula
//             letra[x] = 1;

//     } else { // caracter
//             letra[x] = -1;
        
//     };
//     sol.push(letra[x]);

//     };
//     if (sol[0] == sol[1] && sol[0] >= 0){ //mismo caso
//         return 1
//     }else if (sol[0] != sol[1] && sol[0] >= 0 && sol[1] >=0){ // letra distinto caso
//         return 0
//     }else{ // caracter
//         return -1
//     }
// }

// console.log(sameCase('v', '0'));



























//console.log(minus.some(x => x == ('b')) == true && minus.some(x => x == ('A')) == true ? 1 : 0); //(mayus.some(x => x == ('a' && 'b')) == true ? 1 : 0));
// console.log();
// const sameCase = (a, b) => ((a, b) == 'A' ? (a === b ? 1 : 0) : -1);
// console.log(Object.is('a', 'A'));
// let abcd = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// let minus = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// let mayus = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// abc.some(x => x == (a && b)) == true || ABC.some(x => x == (a && b)) == true ? 1 : 0
//const sameCase = (a, b) => (abc.some(s => s == (a)) || abc.some(s => s == (b)) == true ? (a === b ? 1 : 0) : -1);
// console.log(sameCase("b", "B"));
// console.log(abc.some(s => s == ('a' && '0')) && ? 1 : -1); //('a', 'a') == abc ? 1 : 0);




























// ! Calculo de los caracteres especiales con respecto a las letras
// let char = ['!', '', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '=', '?', '@', '[', '"', ']', '^', '_', '`', '{', '|', '}', '~']
// let May_A = [];
// let Men_A = [];
// let May_Z = [];
// let Men_Z = [];
// char.map(s => s > 'a' ? May_A.push(s) : Men_A.push(s) );
// char.map(z => z > 'A' ? May_Z.push(z) : Men_Z.push(z));
// char.map(z => z > 'a' ? May_A.push(z) : Men_A.push(z));
// console.log('Los mayores que z son'+May_A);
// console.log('Los menores que z son'+Men_A);
// console.log('Los mayores que Z son'+May_Z);
// console.log('Los menores que Z son'+Men_Z);
// console.log(May_A == May_Z ? true : false);
// console.log(Men_A == Men_Z ? true : false);
// console.log(('Z' > 'A' ? true : false));
// ? las letras minus son mayor que los números y que los símbolos
// ?las letras minus son mayores que las letras mayúsculas
// ?las letras mayúsculas son menores que los símbolos pero mayores que los números
// ?Z es mayor que A, igual que en minusculas
// ?Los caracteres entre minus y mayus = [,],^,_,`
// ?Los caracteres mayores que minus = {,|,},~
// ?Los caracteres menores que mayus = !,,#,$,%,&,',(,),*,+, , ,-,.,/,:,;,=,?,@,"
