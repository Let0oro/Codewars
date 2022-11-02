// console.log(String.fromCharCode(97));
// console.log('a'.charCodeAt());

const high = (x) => {
    let letters = ' abcdefghijklmnopqrstuvwxyz'.split('');
    let values = x.split(' ').map( w => Array.from( w ).map( l => letters.findIndex( q => q == l ) ).reduce(( p, n ) => p + n ) );
    let comparation = Math.max(...values);
    return x.split(' ')[(values.findIndex(a => a == comparation))]

};
console.log(high('man i need a taxi up to ubud'))
    



/**
 * 
//? function high(x){
//?   const score = s => s.split('').reduce((m,i) => m + i.charCodeAt(0)-96,0);
//?   return x.split(' ').reduce((s,n)=> score(s) < score(n) ? n : s);
//? }
 * 
 * 
//? function high(x) {
//?  return x.split` `.sort((a,b)=>(s=_=>[..._].reduce((x,y)=>x+y.charCodeAt(0)-96,0))(b)-s(a))[0];
//? }
//?



//? const high=x=>x.split(" ").map(w=>[w,w.split("").reduce((a,b)=>a+b.charCodeAt(0)-96,0)]).reduce((a,b)=>b[1]>a[1] ? b : a,["",0])[0];
//?
 * 
 * 
 * 
 * 
 */








    //     let arr = x.split(' ').map(v => Array.from(v).map(y => y.charCodeAt()).reduce(( p, n ) => p + n));
    //     let comparation = Math.max(...arr);
    //     return x.split(' ')[(arr.findIndex(a => a == comparation))]
//! Error: no es lo mismo sumar 96+96 que 1+1 (aa) si lo comparamos con 97 o 2 (b)
