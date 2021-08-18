var logger = require('./logger');
logger("message Displayed using the variables");

console.log("This is a demonstraion on the path module");
const path = require('path');
var pathobj = path.parse(__filename);
console.log(pathobj);

console.log("Demonstration on os module")
const os = require('os')
var totalMemory = os.totalmem()
var freeMemory = os.freemem()

//console.log('Total Memory: ' + totalMemory)

//Template String
//ES6 / ES2015: ECMAScript 6

console.log(`Total Memory: ${totalMemory} `)

console.log(`Free Memory: ${freeMemory} `)
