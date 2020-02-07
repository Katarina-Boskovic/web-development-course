const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const app = express();
app.use(bodyParser.json());

const database = {
  users: [
    {
      id: '100',
      name: 'John',
      email: 'john@gmail.com',
      entries: 0,
      joined: new Date()
    },
    {
      id: '101',
      name: 'Sally',
      email: 'sally@gmail.com',
      entries: 0,
      joined: new Date()
    }
  ], 
  login: [
    {
      id: '210',
      hash: '',
      email: 'john@gmail.com'
    }
  ]
}

app.get('/', (req, res) => {
  res.send(database.users);
})

app.post('/signin', (req, res) => {
  // Load hash from your password DB.
  bcrypt.compare('oranges', '$2a$04$CcodfEhz/BuqxaUhcBtecOK6xkHfyuzdV.82y8Nuyx.pei/agaLwu', function(err, res) {
    console.log('first guess', res)
  });
  bcrypt.compare('veggies', '$2a$04$CcodfEhz/BuqxaUhcBtecOK6xkHfyuzdV.82y8Nuyx.pei/agaLwu', function(err, res) {
    console.log('second guess', res)
  });

  if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
    res.json('success');
  } else {
    res.status(400).json('error signing in');
  }
})

app.post('/register', (req, res) => {
  // const saltRounds = 10;
  // bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  //   // Store hash in your password DB.
  // });

  const {email, name, password } = req.body

  database.users.push({
    id: '102',
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date()
  });
  res.json(database.users[database.users.length - 1]);
})

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;

  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  })
  if (!found) {
    res.status(404).json('no such user');
  }
})

app.put('/image', (req, res) => {
  const { id } = req.body;
  let found = false;

  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      user.entries++;
      return res.json(user.entries);
    }
  })
  if (!found) {
    res.status(404).json('no such user');
  }
})

app.listen(3001, () => {
  console.log('app is running on port 3001');
})
