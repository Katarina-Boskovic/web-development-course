const fs = require('fs');

// find floor
function findFloor() {
  fs.readFile('./santa.txt', (err, data) => {
    console.time('time1');
    const directions = data.toString();
    const directionsArray = directions.split('');
    const answer = directionsArray.reduce((acc, currentValue) => {
      if(currentValue === '(') {
        return acc += 1;
      } else if (currentValue === ')') {
        return acc -= 1;
      }
    }, 0);
    console.timeEnd('time1');
    console.log('floor', answer);
  })
}

findFloor();

// steps to basement
function stepsToBasement() {
  fs.readFile('./santa.txt', (err, data) => {
    console.time('time2');
    const directions = data.toString();
    const directionsArray = directions.split('');
    let accumulator = 0;
    let count = 0;
    const answer = directionsArray.some((currentItem) => {
      if(currentItem === '(') {
        accumulator += 1;
      } else if (currentItem === ')') {
        accumulator -= 1;
      }
      count++;
      return accumulator < 0;
    })
  });
  console.timeEnd('time2');
  console.log('basement entered at step', count);
}

stepsToBasement();
