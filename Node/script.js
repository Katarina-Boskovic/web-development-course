const script2 = require('./script2.js');   // commonJS command for import largeNumber from './script2'
const fileSystem = require('fs');  // built in module: file system
const http = require('http');


const a = script2.largeNumber;
const b = 5;

setTimeout(() => {
  console.log(a + b);
}, 3000)

console.log(__dirname)

// RUN: node script.js
