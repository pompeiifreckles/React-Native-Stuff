const fs = require('fs')

// Blocking, synchronous way
const textIn = fs.readFileSync('myFile', 'utf-8')
console.log(textIn)
const textOut = `Date Today is : ${Date.now()}`
fs.writeFileSync('File Written')

// Non-Blocking, asynchronous code
fs.readFile('myFile', 'utf-8', (err, data) => { console.log(data) })
console.log('Will read file!')
