// reference type - not primitive type (true, null, undefined, 1), created by programmers
var obj1 = { value: 10 };
var obj2 = obj1;    // references obj1
var obj3 = { value: 10 };

obj1 === obj2; // -> true
obj1 === obj3; // -> false
obj1.value = 15; // -> obj2.value will change to 15

// context - where we are within an object - "this"
function f1() {
  console.log(this);  // -> window
}
const obj4 = {
  f2: function() {
    console.log(this);    // -> obj4
  }
}

// instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");


// object keys vs values, entries
let obj = {
  username0: 'santa',
  username1: 'rudolph',
  username2: 'grinch'
}

Object.keys(obj).forEach((key, index) => {
  console.log(index, key, obj[key]);
})

Object.values(obj).forEach(value => {
  console.log(value);
})

Object.entries(obj).forEach(value => {
  // value is the array of [key, entry]
  console.log(value);
})

Object.entries(obj).map(value => {
  return value[1] + value[0].replace('username', '')
})
