// let, const

const player = "bob";
let experience = 100;
let wizardLevel = false;

if(experience > 90) {
  // will not chance it to true outside if statement, only within the if scope
  let wizardLevel = true;
}

const obj = {
  player: "bob",
  experience: 100,
  wizardLevel: false
}

// much easier to do this:
const{ player, experience } = obj;
let { wizardLevel } = obj;
// than this:
// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel


// declaring object propoerties dynamically
const name = "john snow";
const obj2 = {
  [name]: 'hello',
  ['ray' + 'smith']: 'hi'
}

const a = "simon";
const b = true;
const c = {};

obj3 = { a, b, c};

// same as: 
// const obj3 = {
//   a:a,
//   b:b,
//   c:c
// }

// template strings
const name = "sally";
const age = 34;
const pet = "horse";
const greeting = `Hello ${name} you seem to be ${age-10}, I like your ${pet}`;

function greet(name='', age=30, pet='cat') {
  return `Hello ${name} you seem to be ${age-10}, I like your ${pet}`
}
greet();
greet("john", 25, "cat");

// arrow functions
const add1 = (a, b) => a + b;
// if you have more than one line need to do
const add2 = (a, b) => {
  return a + b;
}
// both same as 
function add3(a, b) {
  return a+b;
} 
