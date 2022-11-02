'use strict'

var humanYearsCatYearsDogYears = function(hY) {
    return  hY == 1 ? [hY, 15, 15] : hY == 2 ?  [hY, 24, 24] : [hY, 24 + (4*(hY-2)) , 24 + (5*(hY-2))]
}

// const humanYearsCatYearsDogYears = humanYears => [
//     humanYears,
//     ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
//     ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
// ];


console.log(humanYearsCatYearsDogYears(2));
