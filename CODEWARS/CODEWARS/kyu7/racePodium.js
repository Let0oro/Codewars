racePodium = ((blocks, num = ~~(blocks/3), arr = [num + 1, num + 2]) => {
    arr.push(blocks - arr.reduce((p,n) => p+n)) 
    return arr;
}); 

console.log(racePodium(10));