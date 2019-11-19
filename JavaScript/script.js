function sayHello() {
  console.log("Hello");
}

sayHello();

var bye = function() {
  console.log("Bye");
}

bye();

function multiply(a, b) {
  return a * b;
}

var list = ["a", "b", "c"];
console.log(list[1]);
// list shift, pop, push, concat, sort


// object
var user = {
  name: "john",
  age: 34,
  hobby: "football",
  shout: function() {
    console.log("ahhh");
  }
};
// 

var database = [user];

var newsfeed = [
  {username: "User1", timeline: "1"},
  {username: "User2", timeline: "2"},
  {username: "User3", timeline: "3"},
]

// loops
var todo = [
  "clean room", 
  "exercise",
  "eat healthy"
];

for (var i=0; i< todo.length; i++) {
  console.log(todo[i]);
}
