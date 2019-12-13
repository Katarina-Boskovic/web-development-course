const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2
}

// rest includes lion and monkey
const { tiger, ...rest } = animals;

function objectSpread(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const { tiger, lion, ...rest } = animals;
objectSpread(tiger, lion, rest);
