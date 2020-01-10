const fs = require('fs');


// readFile is async - that's why it has a callback function. Read the file and move on until it's working on it
fs.readFile('./hello.txt', (err, data) => {
  console.time('read');
  if (err) {
    console.log('error');
  }
  console.log('async', data.toString());;
  console.timeEnd('read');
})

// read the file and wait until done, assign to file and then move on
const file = fs.readFileSync('./hello.txt');
console.log('sync', file.toString());

// append to file
fs.appendFile('./hello.txt', ' This is added to the file', err => {
  if (err) {
    console.log(err)
  }
})

// create a file
fs.writeFile('bye.txt', 'sad to see you go', err => {
  if(err) {
    console.log(err)
  }
})

// delete file
fs.unlink('./bye.txt', err => {
  if(err) {
    console.log(err);
  }
})
