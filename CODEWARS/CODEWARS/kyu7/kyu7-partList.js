'use strict'

function partlist(arr) {
  let A = new Array
  for(let N = 1; N < arr.length; N++){
  A.push([arr.filter((x, i) => i < N).join(' '), arr.filter((x, i) => i >= N).join(' ') ]);
  }
  return A
}
console.log(partlist(["I", "wish", "I", "hadn't", "come"]));

// function partlist(arr) {
//   return arr.map((v, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1)
// }