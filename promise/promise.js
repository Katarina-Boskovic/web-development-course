const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff worked");
  } else {
    reject("Error, it broke");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Hi");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Hello");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Is it me you're looking for");
});

Promise.all([promise, promise2, promise3, promise4])
  .then(values => {
    console.log(values);
  })

promise
  .then(result => result + "!")
  .then(result2 => result2 + "?")
  .catch(() => console.log("error caught"))
  .then(result3 => {
    console.log(result3 + "!");
  });
