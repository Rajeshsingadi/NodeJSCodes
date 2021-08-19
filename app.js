var logger = require('./logger')
logger("message Displayed using the variables")

console.log("This is a demonstraion on the path module")
const path = require('path')
var pathobj = path.parse(__filename)
console.log(pathobj)

console.log("Demonstration on os module")
const os = require('os')
var totalMemory = os.totalmem()
var freeMemory = os.freemem()

//console.log('Total Memory: ' + totalMemory)

//Template String
//ES6 / ES2015: ECMAScript 6

console.log(`Total Memory: ${totalMemory} `)

console.log(`Free Memory: ${freeMemory} `)


console.log('Demonstration on the file system')
const fs = require('fs')
const files = fs.readdirSync('./')
console.log(files)

console.log("Checking via function in file system")
fs.readdir('./', function (err, files) {
    if (err) console.log('Error', err)
    else console.log('Result', files)
})



console.log("Event Module")
const EventEmitter = require('events')
const emitter = new EventEmitter()

//Register a listener
emitter.on('MessageLogged', function () {
    console.log("listener called now!")
})

//Raise an event
emitter.emit('MessageLogged')
// console.log(emitter)

//Adding arguments to the events
//Register a listener
emitter.on('MessageLogged', function (arg) {
    console.log("listener called now!", arg)
})

//Raise an event
emitter.emit('MessageLogged', { id: 1, url: "http://hello.com" })


//demonstration of the Http module

// const http = require('http')

// const server = http.createServer()
// server.on('connnection', (socket) => {
//     console.log("New connection on the port 3000...")
// })
// server.listen(3000)
// console.log("Listening on the port 3000")

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World')
        res.end()
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3, 4]))
        res.end()
    }

})
server.listen(3000)
console.log("Listening on the port 3000")