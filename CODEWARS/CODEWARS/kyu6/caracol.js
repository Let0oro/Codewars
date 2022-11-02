const caracol = pasos =>{
    let arr = Array(~~(pasos/5+1)).fill(0).map((_,i) => (i+1)*5+2 >= pasos ? i+1 : ((i+1)*5));
    return arr.filter((v,i) => arr[i] < arr[i-1])
}
console.log(caracol()); //6 días