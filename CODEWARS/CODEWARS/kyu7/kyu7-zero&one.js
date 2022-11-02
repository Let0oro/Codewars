const zeroAndOne = (s) => s.replace(/(10)|(01)/gi, '').length
console.log(zeroAndOne("10"));