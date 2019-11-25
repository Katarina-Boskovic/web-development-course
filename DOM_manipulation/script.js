// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
//   console.log("clicked");
// })


var buttonEnter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var buttonDelete = document.getElementsByClassName("delete");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var button = document.createElement("button");
  button.innerHTML = "Delete";
  button.onclick = removeFromList;

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.innerHTML = li.innerHTML + " ";
  li.appendChild(button);
  ul.appendChild(li);
  input.value = "";
}

function addToListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addToListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}
// callback functions below: not using addListerAfterClick() - passing a reference to the function without running it
// don't want the addLisAfterClick function to run because we are just adding the event listener now to wait for click or keypress. 
// we want to let it know that we want this action to happen when a click happens
// so the function now automatically gets run (gets added the ()) every time the click happens
buttonEnter.addEventListener("click", addToListAfterClick);
input.addEventListener("keypress", addToListAfterKeypress);


for (var i = 0; i < buttonDelete.length; i++) {
  buttonDelete[i].addEventListener("click", removeFromList, false);
}

function removeFromList() {
  event.target.removeEventListener("click", removeFromList, false);
  event.target.parentNode.remove();
}
