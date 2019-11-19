var database = [
  { username: "Katarina", password: "1234" },
  { username: "Bob", password: "111" }
];

var newsfeed = [
  { username: "Bob", timeline: "post1" },
  { username: "Anna", timeline: "post2" }
];

var usernamePrompt = prompt("What's your username?");
var passwordPropt = prompt("What's your password?");


function validUser(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (database[i].username == username && database[i].password === password) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (validUser(username, password)){
    console.log(newsfeed);
  }
  else {
    alert("wrong username or password");
  }
}

signIn(usernamePrompt, passwordPropt);
