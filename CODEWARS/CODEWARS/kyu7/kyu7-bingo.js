const bingo = (a) => [2,7,9,14,15].map(x => a.some(n => n == x)).every(o => o == true) ? 'WIN' : 'LOSE'
    // B = 2, I = 9,G = 7, N = 14, O = 15

console.log(bingo([ 9, 11, 4, 15, 14, 2, 7, 7, 11 ]));

//const bingo = ar => [2,7,9,14,15].every(e => ar.includes(e)) ? 'WIN' : 'LOSE';