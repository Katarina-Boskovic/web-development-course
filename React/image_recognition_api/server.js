const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const knex = require('knex')

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'user',
    password : '',
    database : 'image-recognition'
  }
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

const database = {
  users: [
    {
      id: '100',
      name: 'John',
      email: 'john@gmail.com',
      password: 'cookies',
      entries: 0,
      joined: new Date()
    },
    {
      id: '101',
      name: 'Sally',
      password: 'apples',
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
  db.select('email', 'hash').from('login').where('email', req.body.email)
    .then(data => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      if (isValid) {
        return db.select('*').from('users').where('email', req.body.email)
          .then(user => {
            res.json(user[0])
          })
          .catch(err => res.status(400).json('Unable to get user'))
      } else {
        res.status(400).json("Wrong email or password")
      }
    })
    .catch(err => res.status(400).json('Wrong credentials'));
})

app.post('/register', (req, res) => {
  const { email, name, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  db.transaction(trx => {
    trx.insert({
      hash: hash, 
      email: email
    })
    .into('login')
    .returning('email')
    .then(loginEmail => {
      return trx('users')
      .returning('*')
      .insert({
        name: name,
        email: loginEmail[0],
        joined: new Date()
      })
      .then(user => {
        res.json(user[0]);
      })
      .then(trx.commit)
      .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('unable to register'))
  })

    
})

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;

  db.select('*').from('users').where('id', id).then(user => {
    if(user.length) {
      res.json(user[0]);
    } else {
      res.status(400).json('User not found');
    }
  })
  .catch(err => res.status(400).json('Error getting user'))
})

app.put('/image', (req, res) => {
  const { id } = req.body;

  db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
      res.json(entries[0])
    })
    .catch(err => res.status(400).json("error getting entries"))
})

app.listen(3001, () => {
  console.log('app is running on port 3001');
})
