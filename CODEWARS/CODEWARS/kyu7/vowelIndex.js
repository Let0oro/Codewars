function vowelIndices(word){
    return  word.split('').map((v,i) => new Set('aeiouyAEIOUY').has(v) ? i+1 : '').filter(x => Number(x))
}

// function vowelIndices(word){
//     return [...word].map((v,i)=>~'aeiouyAEIOUY'.indexOf(v)&&++i).filter(Boolean);
// }

// const vowelIndices = word => [...word].reduce((pre, val, idx) => /[aeiouy]/i.test(val) ? [...pre, ++idx] : pre, []);

// const vowelIndices = (word) =>  [...word].reduce((ac, cur, i) => /[aeiouy]/i.test(cur) ? [...ac, i + 1] : ac, []);

// function vowelIndices(word,a=[]){
//     return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)),a)
// }
console.log(vowelIndices('mmaola')) 
