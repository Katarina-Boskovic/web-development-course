// closures - child scope always has access to parent scope. 
// a function ran, the function executed, it won't execute again 
// but it will remember that there are references to those variables

const first = () => {
  const greet = 'Hi';
  const second = () => {
    alert(greet);
  }
  return second;
}

const newFunc = first();
newFunc();


// currying - change function to only accept 1 parameter at a time
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
// works like this:
// fun1(a) {
//   return fun2(b) {
//     return a * b;
//   }
// }
const result = curriedMultiply(3)(2);   // -> 6

const multiplyBy5 = curriedMultiply(5);
const result1 = multiplyBy5(10);    // -> 50


// compose - putting 2 functions together to form a 3rd function, where the output of 1 function 
// is the input of another
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;
compose(sum, sum)(5)


// avoiding side effects and functional purity (always return something)
// determinism:| if certain inputs go through a function the return value will always be the same
var a = 1;
function change() {
  a = 2;              // -> side effect
}
