'use strict'
const add = (a, b) => a + b;
const subt = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const mod = (a, b) => a % b;
const exponent = (a, b) => a ** b;


/**
 * 
 * / point-free & destructuring

const [{pow: exponent}, {add, subtract: subt, multiply, divide, modulo: mod}] = [Math, require('ramda')] 
 * 
 * 
 */