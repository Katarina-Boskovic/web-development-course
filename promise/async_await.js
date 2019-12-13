movePlayer(100, "left")
  .then(() => movePlayer(400, "left"))
  .then(() => movePlayer(10, "right"))
  .then(() => movePlayer(330, "left"));

// async function can use await: pause function until there's a response
async function playerStart() {
  const firstMove = await movePlayer(100, "left");
  const secondMove = await movePlayer(400, "left");
  await movePlayer(10, "right");
  await movePlayer(330, "left");
}

// use async function instead of
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(resp => resp.json())
//   .then(console.log)
async function fetchUsers() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log(data);
}

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(url => fetch(url).then(resp => resp.json()))
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch {
    console.log('error')
  }
};

const loopThroughUrls = url => {
  for (url of urls) {
    console.log(url);
  }
}

const getData2 = async function() {
  const arrayOfPromises = urls.map(url => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
}
