const validatePin = pin => (pin.match(/[^0-9]/gi) || (pin.length != 4) && (pin.length != 6) ? false : true );
console.log(validatePin("123456"));

//function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin)
// }

// function validatePIN (pin) {
//     var reg = new RegExp('^([0-9]{4}|[0-9]{6})$');
//     return reg.test(pin);
//   }

//const validatePIN = pin => !!pin.match(/^(\d{4}|\d{6})$/);
