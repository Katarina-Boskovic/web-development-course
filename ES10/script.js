const array = [1, [2, 3], [4, 5]];
array.flat();

array2 = [1, 2, [3, 4, [5]]];
array2.flat(2);

const entries = ['bob', 'sam', ,,,, , 'cindy'];
entries.flat()

// trim
const email = '    user@gmail.com';
const email2 = '_user2@gmail     ';
email.trimStart();
email2.trimEnd();

// fromEntries - converts array to object
const userProfiles = [['player1', 23], ['player2', 40], ['player3', 18]];
Object.fromEntries(userProfiles);

// try, catch
try {
  undefVariable + 'hi';
} catch (e) {
  console.log('error - ' + e);
}


// FOR OF loop - iterate over arrays, strings
// does Not work with objects
const basket = ['apples', 'oranges', 'grapes'];
for(item of basket) {
  console.log(item);
}

// FOR IN loop - enumerate over object properties
// works with iterables (arrays) - gives index values (can think of arrays as objects with prop 0, 1, 2...)
const detailedBadket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}
for(item in detailedBadket) {
  console.log(item)   // prints apples, oranges, grapes
}

for(item in basket) {
  console.log(item)   // prints 0, 1, 2 (properties/indices)
}
