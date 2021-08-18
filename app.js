var logger = require('./logger');
logger("message Displayed using the variables");

console.log("This is a demonstraion on the path module")
const path = require('path');
var pathobj = path.parse(__filename);
console.log(pathobj)