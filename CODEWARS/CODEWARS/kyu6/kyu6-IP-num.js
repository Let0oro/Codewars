// function ipToNum(ip) {
//     return parseInt((ip.split('.').map(x => Array(8).fill(x).map((v,i) => (parseInt(v/(2**(i))))).map((a, b) => a%2).reverse().join(''))).join(''), 2)
      
// }

// function numToIp(num) {
//     return Array(4).fill(1).map((z, i)=> Array(32).fill(num).map((v,i) => (parseInt(v/(2**(i))))).map((a, b) => a%2).reverse().join('')).map((y,z) => y.substr(z*8, 8)).map(x => parseInt(x, 2)).join('.')
// }
console.log(ipToNum('10.0.0.0'));
console.log(numToIp(167772160));
console.log(numToIp(ipToNum('10.0.0.0')));



function ipToNum(ip) {
    return ip.split('.').reduce(function (sum, x) { return sum << 8 | x }, 0) >>> 0;
}
  
function numToIp(num) {
    return [num >>> 24, num >> 16 & 255, num >> 8 & 255, num & 255].join('.'); 
}